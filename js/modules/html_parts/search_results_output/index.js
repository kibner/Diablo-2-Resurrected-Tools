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
      const tableStartHtml = '<table><thead><tr><th class="text-align-left">Runeword</th><th class="text-align-left">Stats</th></tr></thead><tbody>';
      const tableEndHtml = '</tbody></table>'
      const resultsHtml = _getSearchResultsRowHtml(searchResults);

      html += `${tableStartHtml}${resultsHtml}${tableEndHtml}`;
    }

    return html;
  }

  const _getSearchResultsRowHtml = function (searchResults) {
    return searchResults.reduce((previousValue, currentValue) => {
      const name = _getNameHtml(currentValue);
      const description = _getRunewordDescription(currentValue);
      const stats = _getStatsHtml(currentValue);

      return `${previousValue}<tr>` +
        `<td>${name}${description}</td>` +
        `<td>${stats}</td>` +
        '</tr>';
    }, '');
  }

  const _getNameHtml = function (value) {
    return `<strong>${value.name}</strong>`;
  }

  const _getRunewordDescription = function (value) {
    const runes = _getRunesHtml(value);
    const equipment = _getEquipmentHtml(value);
    const character_level = _getCharacterLevelHtml(value);

    return `<dl>${runes}${equipment}${character_level}</dl>`;
  }

  const _getRunesHtml = function (value) {
    const runes = value.runes.reduce((previousRunes, currentRune) => {
      const rune = rune_data.find(value => value.id === currentRune);

      if (rune) {
        return `${previousRunes}<li>${rune.name}</li>`;
      } else {
        return previousRunes;
      }
    }, '');

    return `<dt>Runes</dt><dd><ol>${runes}</ol></dd>`;
  }

  const _getEquipmentHtml = function (value) {
    const equipment = value.equipment.reduce((previousEquipment, currentEquipment) => {
      const equipment = equipment_data.find(value => value.id === currentEquipment);

      if (equipment) {
        return `${previousEquipment}<li>${equipment.name}</li>`;
      } else {
        return previousEquipment;
      }
    }, '');

    return `<dt>Equipment</dt><dd><ul>${equipment}</ul></dd>`;
  }

  const _getCharacterLevelHtml = function (value) {
    return `<dt>Required level</dt><dd>${value.character_level}</dd>`;
  }

  const _getStatsHtml = function (value) {
    const statItems = value.stats.reduce((previousStats, currentStat) => `${previousStats}<li>${currentStat}</li>`, '');

    return `<ul>${statItems}</ul>`;
  }

  const _getForAttributeValue = function (socketFieldsetName, equipmentFieldsetName) {
    return `${_getForAttributeValueForSockets(socketFieldsetName)} ${_getForAttributeValueForEquipment(equipmentFieldsetName)}`;
  }

  const _getForAttributeValueForSockets = function (socketFieldsetName) {
    const minSocketCount = 2;
    const maxSocketCount = 6;

    let forAttributeValue = []

    for (let i = minSocketCount; i <= maxSocketCount; i++) {
      forAttributeValue.push(`${socketFieldsetName}-${i}`);
    }

    return forAttributeValue.join(' ');
  }

  const _getForAttributeValueForEquipment = function (equipmentFieldsetName) {
    let forAttributeValue = [];

    for (let i = 0; i < equipment_data.length; i++) {
      forAttributeValue.push(`${equipmentFieldsetName}-${equipment_data[i].id}`);
    }

    return forAttributeValue.join(' ');
  }

  return {
    getInnerHtml: _getInnerHtml,
    getForAttributeValue: _getForAttributeValue
  }
}));
