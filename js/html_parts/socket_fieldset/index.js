import {GetCheckboxComponent, GetCheckedCheckboxes} from "../../components/checkboxComponent";
import {GetFieldsetComponent, SelectorCssClasses} from "../../components/fieldsetComponent";

const _MIN_SOCKET_COUNT = 2;
const _MAX_SOCKET_COUNT = 6;
const _FIELDSET_NAME = 'sockets'

const _appendFieldset = function (targetElement) {
  const fieldset = GetFieldsetComponent(
    _FIELDSET_NAME,
    'Sockets'
  );

  const checkboxContainer = fieldset.querySelector(`.${SelectorCssClasses.COLLAPSIBLE_CONTENT}`);
  _appendCheckboxes(checkboxContainer, _FIELDSET_NAME);

  targetElement.appendChild(fieldset);
}

const _appendCheckboxes = function (targetElement, fieldsetName) {
  for (let i = _MIN_SOCKET_COUNT; i <= _MAX_SOCKET_COUNT; i++) {
    targetElement.appendChild(GetCheckboxComponent(
      fieldsetName,
      _generateCheckboxId(fieldsetName, i),
      i,
      i)
    );
  }
}

const _generateCheckboxId = function (fieldsetName, id) {
  return `${fieldsetName}-${id}`;
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  for (let i = _MIN_SOCKET_COUNT; i <= _MAX_SOCKET_COUNT; i++) {
    ids.push(_generateCheckboxId(fieldsetName, i));
  }

  return ids;
}

const _getSelectedValues = function (fieldsetsParentElement) {
  return GetCheckedCheckboxes(fieldsetsParentElement, _FIELDSET_NAME);
}

export {
  _appendFieldset as AppendFieldset,
  _getCheckboxIds as GetCheckboxIds,
  _getSelectedValues as GetSelectedValues
}
