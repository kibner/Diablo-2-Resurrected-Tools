import {GetCheckboxComponent} from "../../helpers/checkboxComponent";

const MIN_SOCKET_COUNT = 2;
const MAX_SOCKET_COUNT = 6;

const _appendFieldsets = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);

  for (let i = MIN_SOCKET_COUNT; i <= MAX_SOCKET_COUNT; i++) {
    targetElement.appendChild(GetCheckboxComponent(template, fieldsetName, i, i));
  }
}

const _getCheckboxIds = function (fieldsetName) {
  let ids = []

  for (let i = MIN_SOCKET_COUNT; i <= MAX_SOCKET_COUNT; i++) {
    ids.push(`${fieldsetName}-${i}`);
  }

  return ids;
}

export {_appendFieldsets as AppendFieldsets, _getCheckboxIds as GetCheckboxIds}
