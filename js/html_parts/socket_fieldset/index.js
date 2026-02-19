import {GetCheckboxComponent} from "../../helpers/checkboxComponent";

const _appendFieldsets = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);
  const minSocketCount = 2;
  const maxSocketCount = 6;

  for (let i = minSocketCount; i <= maxSocketCount; i++) {
    targetElement.appendChild(GetCheckboxComponent(template, fieldsetName, i, i));
  }
}

export {
  _appendFieldsets as AppendFieldsets,
}
