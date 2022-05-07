(function () {
  let _runewordForm;
  const _runewords = _getAllRunewords();

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
    _runewordForm.addEventListener('input', _handleFormInputChange);
  }

  function _initApp() {
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
    const searchResultsHtml = _getSearchResultsHtml(searchResults);

    const resultElement = _runewordForm.querySelector('output[name=runeword-result]');
    resultElement.innerHTML = searchResultsHtml;
  }

  function _search(searchParams) {
    return _runewords.runewords.reduce((previousValue, currentValue) => {
      if (searchParams.sockets.includes(currentValue.runes.length)) {
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
        const character_level = `<div>${currentValue.character_level}</div>`;
        const stats = currentValue.stats.reduce((previousStat, currentStat) => previousStat.concat(`<div>${currentStat}</div>`), '');

        const rowStartHtml = '<tr>';
        const rowEndHtml = '</tr>';

        return previousValue.concat(rowStartHtml,
          `<td>${String.prototype.concat(name, runes, character_level)}</td>`,
          `<td>${stats}</td>`,
          rowEndHtml);
      }, '');

      html = html.concat(tableStartHtml, resultsHtml, tableEndHtml);
    }

    return html;
  }

  function _getAllRunewords() {
    return {
      runewords: [
        {
          name: 'Steel',
          runes: ['Tir', 'El'],
          equipment: ['sword', 'axe', 'mace'],
          character_level: 13,
          stats: ['+25% Increased Attack Speed', '+20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '+2 to Mana after each Kill', '+1 to Light Radius']
        }
      ]
    };
  }
}());
