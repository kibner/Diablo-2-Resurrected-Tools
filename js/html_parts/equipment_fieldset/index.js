import {Equipment} from "../../data/equipment_data";
import {GetCheckboxComponent} from "../../helpers/checkboxComponent";

const _appendFieldsets = function (targetElement, fieldsetName) {
  const template = document.querySelector('#fieldset-template');

  for (let i = 0; i < Equipment.length; i++) {
    targetElement.appendChild(GetCheckboxComponent(template, fieldsetName, Equipment[i].id, Equipment[i].name));
  }
}

export default {
  appendFieldsets: _appendFieldsets,
}
