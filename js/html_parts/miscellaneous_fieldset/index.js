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

export {_appendFieldsets as AppendFieldsets, _CHECKBOX_NAMES as CheckboxNames};
