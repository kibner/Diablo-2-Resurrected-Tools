import {Runes} from "../../data/rune_data";
import {Equipment} from "../../data/equipment_data";
import {CheckboxNames} from "../miscellaneous_fieldset";

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

const _getForAttributeValue = function (socketFieldsetName, equipmentFieldsetName, miscellaneousFieldsetName) {
  return `${_getForAttributeValueForSockets(socketFieldsetName)} ${_getForAttributeValueForEquipment(equipmentFieldsetName)} ${_getForAttributeValueForMiscellaneous(miscellaneousFieldsetName)}`;
}

const _getForAttributeValueForSockets = function (fieldsetName) {
  const minSocketCount = 2;
  const maxSocketCount = 6;

  let forAttributeValue = []

  for (let i = minSocketCount; i <= maxSocketCount; i++) {
    forAttributeValue.push(`${fieldsetName}-${i}`);
  }

  return forAttributeValue.join(' ');
}

const _getForAttributeValueForEquipment = function (fieldsetName) {
  let forAttributeValue = [];

  for (let i = 0; i < Equipment.length; i++) {
    forAttributeValue.push(`${fieldsetName}-${Equipment[i].id}`);
  }

  return forAttributeValue.join(' ');
}

const _getForAttributeValueForMiscellaneous = function (fieldsetName) {
  let forAttributeValue = [];

  forAttributeValue.push(`${fieldsetName}-${CheckboxNames.HAS_AURA}`);
  forAttributeValue.push(`${fieldsetName}-${CheckboxNames.EXCLUDE_LADDER_ONLY}`);

  return forAttributeValue.join(' ');
}

export {_getInnerHtml as GetInnerHtml, _getForAttributeValue as GetForAttributeValue}
