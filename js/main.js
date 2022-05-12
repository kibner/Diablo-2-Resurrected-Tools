(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['runes', 'equipment', 'runewords'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('runes'), require('equipment'), require('runewords'));
  } else {
    // Browser globals (root is window)
    root.diablo_2_resurrected_tools = factory(root.runes, root.equipment, root.runewords);
  }
}(typeof self !== 'undefined' ? self : this, function (Runes, Equipment, Runewords) {
  // Just return a value to define the module export.
  let _runewordForm;
  let _runewordFormOutput;
  let _socketFieldset;
  let _equipmentFieldset

  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      _initLoader();
    } else if (event.target.readyState === 'complete') {
      _initApp();
    }
  });

  function _initLoader() {
    _runewordForm = document.getElementById('runeword-form');
    _runewordFormOutput = _runewordForm.querySelector('output[name=runeword-result]');
    _socketFieldset = _runewordForm.querySelector('fieldset[name=sockets]');
    _equipmentFieldset = _runewordForm.querySelector('fieldset[name=equipment]');

    const socketFieldsetHtml = _getSocketFieldsetHtml();
    _socketFieldset.insertAdjacentHTML('beforeend', socketFieldsetHtml);

    const equipmentFielsetHtml = _getEquipmentFieldsetHtml();
    _equipmentFieldset.insertAdjacentHTML('beforeend', equipmentFielsetHtml);

    _runewordForm.addEventListener('input', _handleFormInputChange);
  }

  function _initApp() {
    const searchParams = {
      sockets: [],
      equipment: []
    };

    const searchResults = _search(searchParams);
    _runewordFormOutput.innerHTML = _getSearchResultsHtml(searchResults);
  }

  function _handleFormInputChange(event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }

    const sockets = Array.from(_runewordForm.querySelectorAll('input[name="sockets"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(parseInt(currentValue.value)), []);

    const equipment = Array.from(_runewordForm.querySelectorAll('input[name="equipment"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);

    const searchParams = {
      sockets: sockets,
      equipment: equipment
    };

    const searchResults = _search(searchParams);
    _runewordFormOutput.innerHTML = _getSearchResultsHtml(searchResults);
  }

  function _search(searchParams) {
    return Runewords.reduce((previousValue, currentValue) => {
      if ((searchParams.sockets.length === 0 || searchParams.sockets.includes(currentValue.runes.length))
        && (searchParams.equipment.length === 0 || searchParams.equipment.some(equipment => currentValue.equipment.includes(equipment)))) {
        return previousValue.concat(currentValue);
      }

      return previousValue;
    }, []);
  }

  function _getSocketFieldsetHtml() {
    const minSocketCount = 2;
    const maxSocketCount = 6;
    const socketFieldsetName = 'sockets';

    let html = '';

    for (let i = minSocketCount; i <= maxSocketCount; i++) {
      const inputHtml = `<input type="checkbox" id="${socketFieldsetName}-${i}" name="${socketFieldsetName}" value="${i}"/>`;
      const labelHtml = `<label for="${socketFieldsetName}-${i}">${i}</label>`;
      html = `${html}${inputHtml}${labelHtml}`;
    }

    return html;
  }

  function _getEquipmentFieldsetHtml() {
    const equipmentFieldsetName = 'equipment';

    let html = '';

    for (let i = 0; i < Equipment.length; i++) {
      const inputHtml = `<input type="checkbox" id="${equipmentFieldsetName}-${Equipment[i].id}" name="${equipmentFieldsetName}" value="${Equipment[i].id}"/>`;
      const labelHtml = `<label for="${equipmentFieldsetName}-${Equipment[i].id}">${Equipment[i].name}</label>`;
      html = `${html}${inputHtml}${labelHtml}`;
    }

    return html;
  }

  function _getSearchResultsHtml(searchResults) {
    let html = '';

    if (searchResults && searchResults.length > 0) {
      const tableStartHtml = '<table><thead><tr><th>Runeword</th><th>Stats</th></tr></thead><tbody>';
      const tableEndHtml = '</tbody></table>'

      const resultsHtml = searchResults.reduce((previousValue, currentValue) => {
        const name = `<div>${currentValue.name}</div>`;

        const runes = `<div>${currentValue.runes.reduce((previousRunes, currentRune, currentIndex, array) => {
          const rune = Runes.find(value => value.id === currentRune);

          if (rune) {
            const separator = currentIndex < array.length - 1 ? `<span>, </span>` : '';

            return previousRunes.concat(`<span>${rune.name}</span>`, separator);
          } else {
            return previousRunes;
          }
        }, '')}</div>`;

        const equipment = `<div>${currentValue.equipment.reduce((previousEquipment, currentEquipment, currentIndex, array) => {
          const equipment = Equipment.find(value => value.id === currentEquipment);

          if (equipment) {
            const separator = currentIndex < array.length - 1 ? `<span>, </span>` : '';

            return previousEquipment.concat(`<span>${equipment.name}</span>`, separator);
          } else {
            return previousEquipment;
          }
        }, '')}</div>`;

        const character_level = `<div><span>Required level: </span><span>${currentValue.character_level}</span></div>`;
        const stats = currentValue.stats.reduce((previousStats, currentStat) => previousStats.concat(`<div>${currentStat}</div>`), '');

        return previousValue.concat('<tr>',
          `<td>${String.prototype.concat(name, runes, equipment, character_level)}</td>`,
          `<td>${stats}</td>`,
          '</tr>');
      }, '');

      html = html.concat(tableStartHtml, resultsHtml, tableEndHtml);
    }

    return html;
  }
}));
