import {Runes} from "../../data/rune_data";
import {Equipment} from "../../data/equipment_data";

const _replaceSearchResults = function (
  searchResults,
  targetElement,
  tableTemplateId,
  rowTemplateId,
  listPropertyTemplateId,
  listPropertyItemTemplateId,
  singlePropertyTemplateId
) {
  if (searchResults && searchResults.length > 0) {
    const tableTemplate = document.querySelector(`#${tableTemplateId}`);
    const rowTemplate = document.querySelector(`#${rowTemplateId}`);
    const listPropertyTemplate = document.querySelector(`#${listPropertyTemplateId}`);
    const listPropertyItemTemplate = document.querySelector(`#${listPropertyItemTemplateId}`);
    const singlePropertyTemplate = document.querySelector(`#${singlePropertyTemplateId}`);

    const tableClone = document.importNode(tableTemplate.content, true);

    searchResults.forEach((searchResult) => {
      const rowClone = document.importNode(rowTemplate.content, true);
      const runeListClone = document.importNode(listPropertyTemplate.content, true);

      const name = rowClone.querySelector(`tr:first-of-type > td:first-of-type > strong:first-of-type`);
      const description = rowClone.querySelector(`tr:first-of-type > td:first-of-type > dl:first-of-type`);
      const runesTitle = runeListClone.querySelector(`dt:first-of-type`);
      const runesList = runeListClone.querySelector(`dd:first-of-type > ol:first-of-type`);

      name.append(searchResult.name);

      description.append(runeListClone);
      runesTitle.append('Runes');

      searchResult.runes.forEach((runeId) => {
        const runeItemClone = document.importNode(listPropertyItemTemplate.content, true);
        const runeItem = runeItemClone.querySelector(`li:first-of-type`);
        runeItem.append(Runes.find(value => value.id === runeId).name)
        runesList.append(runeItemClone);
      })

      tableClone.append(rowClone)
    });

    targetElement.replaceChildren(tableClone);
  } else {
    targetElement.replaceChildren();
  }
}

const _getInnerHtml = function (searchResults) {
  let html = '';

  if (searchResults && searchResults.length > 0) {
    const tableStartHtml = '<table class="table-first-column-max-width-50-pct"><thead><tr><th class="text-align-left">Runeword</th><th class="text-align-left">Stats</th></tr></thead><tbody>';
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
  return `<strong class="font-size-larger font-weight-normal">${value.name}</strong>`;
}

const _getRunewordDescription = function (value) {
  const runes = _getRunesHtml(value);
  const equipment = _getEquipmentHtml(value);
  const character_level = _getCharacterLevelHtml(value);
  const miscellaneous = _getMiscellaneousHtml(value);

  return `<dl>${runes}${equipment}${character_level}${miscellaneous}</dl>`;
}

const _getRunesHtml = function (value) {
  const runes = value.runes.reduce((previousRunes, currentRune) => {
    const rune = Runes.find(value => value.id === currentRune);

    if (rune) {
      return `${previousRunes}<li>${rune.name}</li>`;
    } else {
      return previousRunes;
    }
  }, '');

  return `<dt>Runes</dt><dd><ol class="list-inline">${runes}</ol></dd>`;
}

const _getEquipmentHtml = function (value) {
  const equipment = value.equipment.reduce((previousEquipment, currentEquipment) => {
    const equipment = Equipment.find(value => value.id === currentEquipment);

    if (equipment && equipment.max_sockets >= value.runes.length) {
      return `${previousEquipment}<li>${equipment.name}</li>`;
    } else {
      return previousEquipment;
    }
  }, '');

  return `<dt>Equipment</dt><dd><ul class="list-inline">${equipment}</ul></dd>`;
}

const _getCharacterLevelHtml = function (value) {
  return `<dt>Required level</dt><dd>${value.character_level}</dd>`;
}

const _getMiscellaneousHtml = function (value) {
  let miscellaneous = '';

  if (typeof (value.has_aura) === 'boolean' && value.has_aura === true) {
    miscellaneous = `${miscellaneous}<li>Aura</li>`;
  }

  if (typeof (value.is_ladder_only) === 'boolean' && value.is_ladder_only === true) {
    miscellaneous = `${miscellaneous}<li>Ladder</li>`;
  }

  if (miscellaneous.length > 0) {
    miscellaneous = `<dt>Miscellaneous</dt><dd><ul class="list-inline">${miscellaneous}</ul></dd>`;
  }

  return miscellaneous;
}

const _getStatsHtml = function (value) {
  const statItems = value.stats.reduce((previousStats, currentStat) => `${previousStats}<li>${currentStat}</li>`, '');

  return `<ul class="padding-left-0 list-style-position-inside">${statItems}</ul>`;
}

export {_replaceSearchResults as ReplaceSearchResults}
