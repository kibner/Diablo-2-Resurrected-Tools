import {Runes} from "../../data/rune_data";
import {Equipment} from "../../data/equipment_data";

const _replaceSearchResults = function (
  searchResults,
  targetElement,
  tableTemplateId,
  rowTemplateId,
  listPropertyTemplateId,
  listPropertyItemTemplateId,
  singlePropertyTemplateId,
  statItemTemplateId
) {
  if (searchResults && searchResults.length > 0) {
    const tableTemplate = document.querySelector(`#${tableTemplateId}`);
    const rowTemplate = document.querySelector(`#${rowTemplateId}`);
    const listPropertyTemplate = document.querySelector(`#${listPropertyTemplateId}`);
    const listPropertyItemTemplate = document.querySelector(`#${listPropertyItemTemplateId}`);
    const singlePropertyTemplate = document.querySelector(`#${singlePropertyTemplateId}`);
    const statItemTemplate = document.querySelector(`#${statItemTemplateId}`);

    const tableClone = document.importNode(tableTemplate.content, true);

    searchResults.forEach((searchResult) => {
      const rowClone = document.importNode(rowTemplate.content, true);

      const name = rowClone.querySelector(`tr:first-of-type > td:first-of-type > strong:first-of-type`);
      name.append(searchResult.name);

      const description = rowClone.querySelector(`tr:first-of-type > td:first-of-type > dl:first-of-type`);

      const runeListClone = document.importNode(listPropertyTemplate.content, true);
      const runesTitle = runeListClone.querySelector(`dt:first-of-type`);
      runesTitle.append('Runes');

      const runesList = runeListClone.querySelector(`dd:first-of-type > ol:first-of-type`);

      searchResult.runes.forEach((runeId) => {
        const runeItemClone = document.importNode(listPropertyItemTemplate.content, true);
        const runeItem = runeItemClone.querySelector(`li:first-of-type`);
        runeItem.append(Runes.find(value => value.id === runeId).name)
        runesList.append(runeItemClone);
      });

      description.append(runeListClone);

      const equipmentListClone = document.importNode(listPropertyTemplate.content, true);
      const equipmentTitle = equipmentListClone.querySelector(`dt:first-of-type`);
      equipmentTitle.append('Equipment');

      const equipmentList = equipmentListClone.querySelector(`dd:first-of-type > ol:first-of-type`);

      searchResult.equipment.forEach((equipmentId) => {
        const equipmentItemClone = document.importNode(listPropertyItemTemplate.content, true);
        const equipmentItem = equipmentItemClone.querySelector(`li:first-of-type`);
        equipmentItem.append(Equipment.find(value => value.id === equipmentId).name)
        equipmentList.append(equipmentItemClone);
      });

      description.append(equipmentListClone);

      const requiredLevelClone = document.importNode(singlePropertyTemplate.content, true);
      const requiredLevelTitle = requiredLevelClone.querySelector(`dt:first-of-type`);
      requiredLevelTitle.append('Required level');

      const requiredLevel = requiredLevelClone.querySelector(`dd:first-of-type`);
      requiredLevel.append(searchResult.character_level);

      description.append(requiredLevelClone);

      const miscellaneousClone = document.importNode(listPropertyTemplate.content, true);
      const miscellaneousList = miscellaneousClone.querySelector(`dd:first-of-type > ol:first-of-type`);

      if (typeof (searchResult.has_aura) === 'boolean' && searchResult.has_aura === true) {
        const miscellaneousItemClone = document.importNode(listPropertyItemTemplate.content, true);
        const miscellaneousItem = miscellaneousItemClone.querySelector(`li:first-of-type`);
        miscellaneousItem.append('Aura')
        miscellaneousList.append(miscellaneousItemClone);
      }

      if (typeof (searchResult.is_ladder_only) === 'boolean' && searchResult.is_ladder_only === true) {
        const miscellaneousItemClone = document.importNode(listPropertyItemTemplate.content, true);
        const miscellaneousItem = miscellaneousItemClone.querySelector(`li:first-of-type`);
        miscellaneousItem.append('Ladder')
        miscellaneousList.append(miscellaneousItemClone);
      }

      if (miscellaneousList.children.length > 0) {
        const miscellaneousTitle = miscellaneousClone.querySelector(`dt:first-of-type`);
        miscellaneousTitle.append('Miscellaneous');
        description.append(miscellaneousClone);
      }

      const statList = rowClone.querySelector(`tr:first-of-type > td:nth-of-type(2) > ul:first-of-type`);

      searchResult.stats.forEach((stat) => {
        const statItemClone = document.importNode(statItemTemplate.content, true);
        const statItem = statItemClone.querySelector(`li:first-of-type`);
        statItem.append(stat)
        statList.append(statItemClone);
      });

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

const _getStatsHtml = function (value) {
  const statItems = value.stats.reduce((previousStats, currentStat) => `${previousStats}<li>${currentStat}</li>`, '');

  return `<ul class="padding-left-0 list-style-position-inside">${statItems}</ul>`;
}

export {_replaceSearchResults as ReplaceSearchResults}
