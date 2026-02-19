import {GetCheckboxComponent} from "../../helpers/checkboxComponent";
import {Enum} from "../../helpers/enum";

const _CHECKBOX_NAMES = Enum({
  HAS_AURA: 'has-aura',
  EXCLUDE_LADDER_ONLY: 'exclude-ladder-only'
})

const _appendFieldsets = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);

  targetElement.appendChild(GetCheckboxComponent(
    template,
    fieldsetName,
    _generateCheckboxId(fieldsetName, _CHECKBOX_NAMES.HAS_AURA),
    _CHECKBOX_NAMES.HAS_AURA,
    'Aura'));

  targetElement.appendChild(GetCheckboxComponent(
    template,
    fieldsetName,
    _generateCheckboxId(fieldsetName, _CHECKBOX_NAMES.EXCLUDE_LADDER_ONLY),
    _CHECKBOX_NAMES.EXCLUDE_LADDER_ONLY,
    'Exclude Ladder Only'));
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  ids.push(_generateCheckboxId(fieldsetName, _CHECKBOX_NAMES.HAS_AURA));
  ids.push(_generateCheckboxId(fieldsetName, _CHECKBOX_NAMES.EXCLUDE_LADDER_ONLY));

  return ids;
}

const _generateCheckboxId = function (fieldsetName, id) {
  return `${fieldsetName}-${id}`;
}

export {_appendFieldsets as AppendFieldsets, _getCheckboxIds as GetCheckboxIds};
