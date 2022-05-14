(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      '../../data/rune_data',
      '../../data/equipment_data'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(
      require('../../data/rune_data'),
      require('../../data/equipment_data')
    );
  } else {
    // Browser globals (root is window)
    root.search_results_output = factory(
      root.rune_data,
      root.equipment_data
    );
  }
}(typeof self !== 'undefined' ? self : this, function (
  rune_data,
  equipment_data
) {
  // Just return a value to define the module export.
  const _getInnerHtml = function (searchResults) {
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

  return {
    getInnerHtml: _getInnerHtml
  }
}));
