import {GetCheckboxComponent, GetCheckedCheckboxes} from "../../components/checkboxComponent";
import {Enum} from "../../helpers/enum";
import {GetFieldsetComponent, SelectorCssClasses} from "../../components/fieldsetComponent";

const _CHECKBOX_NAMES = Enum({
  HAS_AURA: 'has-aura',
  EXCLUDE_LADDER_ONLY: 'exclude-ladder-only'
});

const _FIELDSET_NAME = 'miscellaneous';

const _appendFieldset = function (targetElement) {
  const fieldset = GetFieldsetComponent(
    _FIELDSET_NAME,
    'Miscellaneous'
  );

  const checkboxContainer = fieldset.querySelector(`.${SelectorCssClasses.COLLAPSIBLE_CONTENT}`);
  _appendCheckboxes(checkboxContainer, _FIELDSET_NAME);

  targetElement.appendChild(fieldset);
}

const _appendCheckboxes = function (targetElement, fieldsetName) {
  targetElement.appendChild(GetCheckboxComponent(
    fieldsetName,
    _generateCheckboxId(fieldsetName, _CHECKBOX_NAMES.HAS_AURA),
    _CHECKBOX_NAMES.HAS_AURA,
    'Aura'));

  targetElement.appendChild(GetCheckboxComponent(
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

const _getSelectedValues = function (fieldsetsParentElement) {
  return GetCheckedCheckboxes(fieldsetsParentElement, _FIELDSET_NAME);
}

export {
  _appendFieldset as AppendFieldset,
  _getCheckboxIds as GetCheckboxIds,
  _CHECKBOX_NAMES as CheckboxNames,
  _getSelectedValues as GetSelectedValues
};
