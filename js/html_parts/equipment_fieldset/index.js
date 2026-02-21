import {Equipment} from "../../data/equipment_data";
import {GetCheckboxComponent, GetCheckedCheckboxes} from "../../components/checkboxComponent";
import {GetFieldsetComponent, SelectorCssClasses} from "../../components/fieldsetComponent";

const _FIELDSET_NAME = 'equipment';

const _appendFieldset = function (targetElement) {
  const fieldset = GetFieldsetComponent(
    _FIELDSET_NAME,
    'Equipment'
  );

  const checkboxContainer = fieldset.querySelector(`.${SelectorCssClasses.COLLAPSIBLE_CONTENT}`);
  _appendCheckboxes(checkboxContainer, _FIELDSET_NAME);

  targetElement.appendChild(fieldset);
}

const _appendCheckboxes = function (targetElement, fieldsetName) {
  for (let i = 0; i < Equipment.length; i++) {
    targetElement.appendChild(GetCheckboxComponent(
      fieldsetName,
      _generateCheckboxId(fieldsetName, Equipment[i].id),
      Equipment[i].id,
      Equipment[i].name)
    );
  }
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  for (let i = 0; i < Equipment.length; i++) {
    ids.push(_generateCheckboxId(fieldsetName, Equipment[i].id));
  }

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
  _getSelectedValues as GetSelectedValues
}
