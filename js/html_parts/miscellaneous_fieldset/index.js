import {GetCheckboxComponent} from "../../helpers/checkboxComponent";

const _appendFieldsets = function (targetElement, fieldsetName) {
  const template = document.querySelector('#fieldset-template');

  targetElement.appendChild(_getHasAuraComponent(template, fieldsetName));
  targetElement.appendChild(_getExcludeLadderOnly(template, fieldsetName));
}

const _getHasAuraComponent = function (template, fieldsetName) {
  return GetCheckboxComponent(template, fieldsetName, 'has-aura', 'Aura');
}

const _getExcludeLadderOnly = function (template, fieldsetName,) {
  return GetCheckboxComponent(template, fieldsetName, 'exclude-ladder-only', 'Exclude Ladder Only');
}

export default {
  appendFieldsets: _appendFieldsets
};
