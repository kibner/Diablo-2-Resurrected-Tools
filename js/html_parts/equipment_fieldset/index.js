import {Equipment} from "../../data/equipment_data";
import {GetCheckboxComponent, GetCheckedCheckboxes} from "../../helpers/checkboxComponent";

const _appendCheckboxes = function (targetElement, templateId, fieldsetName) {
  const template = document.querySelector(`#${templateId}`);

  for (let i = 0; i < Equipment.length; i++) {
    targetElement.appendChild(GetCheckboxComponent(
      template,
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

const _getSelectedValues = function (targetElement, fieldsetName) {
  return GetCheckedCheckboxes(targetElement, fieldsetName);
}

export {
  _appendCheckboxes as AppendCheckboxes,
  _getCheckboxIds as GetCheckboxIds,
  _getSelectedValues as GetSelectedValues
}
