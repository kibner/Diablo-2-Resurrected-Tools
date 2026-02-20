import {GetCheckboxComponent, GetCheckedCheckboxes} from "../../helpers/checkboxComponent";

const MIN_SOCKET_COUNT = 2;
const MAX_SOCKET_COUNT = 6;

const _appendCheckboxes = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);

  for (let i = MIN_SOCKET_COUNT; i <= MAX_SOCKET_COUNT; i++) {
    targetElement.appendChild(GetCheckboxComponent(
      template,
      fieldsetName,
      _generateCheckboxId(fieldsetName, i),
      i,
      i)
    );
  }
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  for (let i = MIN_SOCKET_COUNT; i <= MAX_SOCKET_COUNT; i++) {
    ids.push(_generateCheckboxId(fieldsetName, i));
  }

  return ids;
}

const _generateCheckboxId = function (fieldsetName, id) {
  return `${fieldsetName}-${id}`;
}

const _getSelectedValues = function (targetElement, fieldsetName) {
  return GetCheckedCheckboxes(targetElement, fieldsetName);
}

export {
  _appendCheckboxes as AppendCheckboxes,
  _getCheckboxIds as GetCheckboxIds,
  _getSelectedValues as GetSelectedValues
}
