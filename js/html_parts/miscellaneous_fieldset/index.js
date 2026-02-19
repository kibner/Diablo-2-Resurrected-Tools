import {GetCheckboxComponent} from "../../helpers/checkboxComponent";
import {Enum} from "../../helpers/enum";

const _CHECKBOX_NAMES = Enum({
  HAS_AURA: 'has-aura',
  EXCLUDE_LADDER_ONLY: 'exclude-ladder-only'
})

const _appendFieldsets = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);

  targetElement.appendChild(_getHasAuraComponent(template, fieldsetName));
  targetElement.appendChild(_getExcludeLadderOnly(template, fieldsetName));
}

const _getHasAuraComponent = function (template, fieldsetName) {
  return GetCheckboxComponent(template, fieldsetName, 'has-aura', 'Aura');
}

const _getExcludeLadderOnly = function (template, fieldsetName,) {
  return GetCheckboxComponent(template, fieldsetName, 'exclude-ladder-only', 'Exclude Ladder Only');
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  ids.push(`${fieldsetName}-${_CHECKBOX_NAMES.HAS_AURA}`);
  ids.push(`${fieldsetName}-${_CHECKBOX_NAMES.EXCLUDE_LADDER_ONLY}`);

  return ids;
}

export {_appendFieldsets as AppendFieldsets, _getCheckboxIds as GetCheckboxIds};
