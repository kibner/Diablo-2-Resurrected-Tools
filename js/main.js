(function () {
  let _runewordForm;
  let _runewordFormOutput;

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
    return runewords.runewords.reduce((previousValue, currentValue) => {
      if ((searchParams.sockets.length === 0 || searchParams.sockets.includes(currentValue.runes.length))
        && (searchParams.equipment.length === 0 || searchParams.equipment.some(equipment => currentValue.equipment.includes(equipment)))) {
        return previousValue.concat(currentValue);
      }

      return previousValue;
    }, []);
  }

  function _getSearchResultsHtml(searchResults) {
    let html = ''

    if (searchResults && searchResults.length > 0) {
      const tableStartHtml = '<table><thead><tr><th>Runeword</th><th>Stats</th></tr></thead><tbody>';
      const tableEndHtml = '</tbody></table>'

      const resultsHtml = searchResults.reduce((previousValue, currentValue) => {
        const name = `<div>${currentValue.name}</div>`;
        const runes = `<div>${currentValue.runes.toString()}</div>`;
        const equipment = `<div>${currentValue.equipment.toString()}</div>`;
        const character_level = `<div><span>CLevel: </span><span>${currentValue.character_level}</span></div>`;
        const stats = currentValue.stats.reduce((previousStat, currentStat) => previousStat.concat(`<div>${currentStat}</div>`), '');

        const rowStartHtml = '<tr>';
        const rowEndHtml = '</tr>';

        return previousValue.concat(rowStartHtml,
          `<td>${String.prototype.concat(name, runes, equipment, character_level)}</td>`,
          `<td>${stats}</td>`,
          rowEndHtml);
      }, '');

      html = html.concat(tableStartHtml, resultsHtml, tableEndHtml);
    }

    return html;
  }
}());
