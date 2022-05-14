(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['modules/data/rune_data', 'modules/data/equipment_data', 'modules/services/search_service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('./modules/data/rune_data/rune_data'), require('./modules/data/equipment_data/equipment_data'), require('./modules/services/search_service/search_service'));
  } else {
    // Browser globals (root is window)
    root.diablo_2_resurrected_tools = factory(root.rune_data, root.equipment_data, root.search_service);
  }
}(typeof self !== 'undefined' ? self : this, function (rune_data, equipment_data, search_service) {
  // Just return a value to define the module export.
  let isInitialLoadComplete = false;
  let _runewordForm;
  let _runewordFormOutput;
  let _socketFieldset;
  let _equipmentFieldset

  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      _initLoader();
    } else if (event.target.readyState === 'complete') {
      // loading with new version of Parcel seems to only trigger the 'complete' ready state, so I added a check to
      // make sure that initialization still went through
      if (isInitialLoadComplete === false) {
        _initLoader();
      }

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

    isInitialLoadComplete = true;
  }

  function _initApp() {
    const searchParams = {
      sockets: [],
      equipment: []
    };

    const searchResults = search_service.searchRunewords(searchParams);
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

    const searchResults = search_service.searchRunewords(searchParams);
    _runewordFormOutput.innerHTML = _getSearchResultsHtml(searchResults);
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

    for (let i = 0; i < equipment_data.length; i++) {
      const inputHtml = `<input type="checkbox" id="${equipmentFieldsetName}-${equipment_data[i].id}" name="${equipmentFieldsetName}" value="${equipment_data[i].id}"/>`;
      const labelHtml = `<label for="${equipmentFieldsetName}-${equipment_data[i].id}">${equipment_data[i].name}</label>`;
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
          const rune = rune_data.find(value => value.id === currentRune);

          if (rune) {
            const separator = currentIndex < array.length - 1 ? `<span>, </span>` : '';

            return previousRunes.concat(`<span>${rune.name}</span>`, separator);
          } else {
            return previousRunes;
          }
        }, '')}</div>`;

        const equipment = `<div>${currentValue.equipment.reduce((previousEquipment, currentEquipment, currentIndex, array) => {
          const equipment = equipment_data.find(value => value.id === currentEquipment);

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
