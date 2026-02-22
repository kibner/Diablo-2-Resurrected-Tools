import { Runes } from '../../data/rune_data';
import { Equipment } from '../../data/equipment_data';
import { GetCheckboxIds as GetSocketCheckboxIds } from '../socket_fieldset';
import { GetCheckboxIds as GetEquipmentCheckboxIds } from '../equipment_fieldset';
import { GetCheckboxIds as GetMiscellaneousCheckboxIds } from '../miscellaneous_fieldset';

const OUTPUT_NAME = 'runeword-result';

const _appendOutput = function (targetElement, fieldsetsParentElement) {
  const template = document.querySelector(`#search-results-output-template`);
  const clone = document.importNode(template.content, true);
  const output = clone.querySelector(`output`);
  output.setAttribute('name', OUTPUT_NAME);

  const outputForAttribute = GetSocketCheckboxIds(fieldsetsParentElement)
    .concat(GetEquipmentCheckboxIds(fieldsetsParentElement))
    .concat(GetMiscellaneousCheckboxIds(fieldsetsParentElement));

  output.setAttribute('for', outputForAttribute.join(' '));

  targetElement.appendChild(clone);
};

const _replaceSearchResults = function (searchResults) {
  const output = document.querySelector(`output[name="${OUTPUT_NAME}"]`);

  if (searchResults && searchResults.length > 0) {
    const tableTemplate = document.querySelector(
      `#search-results-table-template`,
    );

    const rowTemplate = document.querySelector(`#search-results-row-template`);

    const listPropertyTemplate = document.querySelector(
      `#runeword-list-property-template`,
    );

    const listPropertyItemTemplate = document.querySelector(
      `#runeword-list-property-item-template`,
    );

    const singlePropertyTemplate = document.querySelector(
      `#runeword-single-property-template`,
    );

    const statItemTemplate = document.querySelector(
      `#runeword-stat-item-template`,
    );

    const tableClone = document.importNode(tableTemplate.content, true);
    const tableBody = tableClone.querySelector(`tbody`);

    searchResults.forEach((searchResult) => {
      const rowClone = document.importNode(rowTemplate.content, true);

      _appendName(rowClone, searchResult);

      const description = rowClone.querySelector(`td:first-of-type dl`);

      _appendRunes(
        listPropertyTemplate,
        searchResult,
        listPropertyItemTemplate,
        description,
      );

      _appendEquipment(
        listPropertyTemplate,
        searchResult,
        listPropertyItemTemplate,
        description,
      );

      _appendRequiredLevel(singlePropertyTemplate, searchResult, description);

      _appendMiscellaneous(
        listPropertyTemplate,
        searchResult,
        listPropertyItemTemplate,
        description,
      );

      _appendStats(rowClone, searchResult, statItemTemplate);

      tableBody.append(rowClone);
    });

    output.replaceChildren(tableClone);
  } else {
    output.replaceChildren();
  }
};

const _appendName = function (rowClone, searchResult) {
  const name = rowClone.querySelector(`.runeword-name`);
  name.append(searchResult.name);
};

const _appendRunes = function (
  listPropertyTemplate,
  searchResult,
  listPropertyItemTemplate,
  description,
) {
  const runeListClone = document.importNode(listPropertyTemplate.content, true);
  const runesTitle = runeListClone.querySelector(`dt`);
  runesTitle.append('Runes');

  const runesList = runeListClone.querySelector(`ol`);

  searchResult.runes.forEach((runeId) => {
    const runeItemClone = document.importNode(
      listPropertyItemTemplate.content,
      true,
    );

    const runeItem = runeItemClone.querySelector(`li`);
    runeItem.append(Runes.find((value) => value.id === runeId).name);
    runesList.append(runeItemClone);
  });

  description.append(runeListClone);
};

const _appendEquipment = function (
  listPropertyTemplate,
  searchResult,
  listPropertyItemTemplate,
  description,
) {
  const equipmentListClone = document.importNode(
    listPropertyTemplate.content,
    true,
  );

  const equipmentTitle = equipmentListClone.querySelector(`dt`);
  equipmentTitle.append('Equipment');

  const equipmentList = equipmentListClone.querySelector(`ol`);

  searchResult.equipment.forEach((equipmentId) => {
    const equipmentItemClone = document.importNode(
      listPropertyItemTemplate.content,
      true,
    );

    const equipmentItem = equipmentItemClone.querySelector(`li`);

    equipmentItem.append(
      Equipment.find((value) => value.id === equipmentId).name,
    );

    equipmentList.append(equipmentItemClone);
  });

  description.append(equipmentListClone);
};

const _appendRequiredLevel = function (
  singlePropertyTemplate,
  searchResult,
  description,
) {
  const requiredLevelClone = document.importNode(
    singlePropertyTemplate.content,
    true,
  );

  const requiredLevelTitle = requiredLevelClone.querySelector(`dt`);
  requiredLevelTitle.append('Required level');

  const requiredLevel = requiredLevelClone.querySelector(`dd`);
  requiredLevel.append(searchResult.character_level);

  description.append(requiredLevelClone);
};

const _appendMiscellaneous = function (
  listPropertyTemplate,
  searchResult,
  listPropertyItemTemplate,
  description,
) {
  const miscellaneousClone = document.importNode(
    listPropertyTemplate.content,
    true,
  );

  const miscellaneousList = miscellaneousClone.querySelector(`ol`);

  if (
    typeof searchResult.has_aura === 'boolean' &&
    searchResult.has_aura === true
  ) {
    const miscellaneousItemClone = document.importNode(
      listPropertyItemTemplate.content,
      true,
    );

    const miscellaneousItem = miscellaneousItemClone.querySelector(`li`);
    miscellaneousItem.append('Aura');
    miscellaneousList.append(miscellaneousItemClone);
  }

  if (
    typeof searchResult.is_ladder_only === 'boolean' &&
    searchResult.is_ladder_only === true
  ) {
    const miscellaneousItemClone = document.importNode(
      listPropertyItemTemplate.content,
      true,
    );

    const miscellaneousItem = miscellaneousItemClone.querySelector(`li`);
    miscellaneousItem.append('Ladder');
    miscellaneousList.append(miscellaneousItemClone);
  }

  if (miscellaneousList.children.length > 0) {
    const miscellaneousTitle = miscellaneousClone.querySelector(`dt`);
    miscellaneousTitle.append('Miscellaneous');
    description.append(miscellaneousClone);
  }
};

const _appendStats = function (rowClone, searchResult, statItemTemplate) {
  const statList = rowClone.querySelector(`td:nth-of-type(2) ul`);

  searchResult.stats.forEach((stat) => {
    const statItemClone = document.importNode(statItemTemplate.content, true);
    const statItem = statItemClone.querySelector(`li`);
    statItem.append(stat);
    statList.append(statItemClone);
  });
};

export {
  _appendOutput as AppendOutput,
  _replaceSearchResults as ReplaceSearchResults,
};
