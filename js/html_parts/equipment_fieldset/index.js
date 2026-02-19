import {Equipment} from "../../data/equipment_data";

const _appendEquipmentFieldsets = function (targetElement, equipmentFieldsetName) {
  const template = document.querySelector('#equipment-fieldset-template');

  for (let i = 0; i < Equipment.length; i++) {
    const clone = document.importNode(template.content, true);
    const label = clone.querySelector(`label`);
    const checkbox = clone.querySelector(`input[type="checkbox"]`);

    checkbox.setAttribute('id', `${equipmentFieldsetName}-${Equipment[i].id}`);
    checkbox.setAttribute('name', equipmentFieldsetName);
    checkbox.setAttribute('value', Equipment[i].id);

    label.setAttribute('for', checkbox.getAttribute('id'));
    label.append(Equipment[i].name);

    targetElement.appendChild(label);
  }
}

export default {
  appendEquipmentFieldsets: _appendEquipmentFieldsets,
}
