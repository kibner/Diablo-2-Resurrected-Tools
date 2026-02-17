import {Equipment} from "equipment_data";

const _getInnerHtml = function (equipmentFieldsetName) {
  let html = '';

  for (let i = 0; i < Equipment.length; i++) {
    const inputHtml = `<input type="checkbox" id="${equipmentFieldsetName}-${Equipment[i].id}" name="${equipmentFieldsetName}" value="${Equipment[i].id}"/>`;
    const labelHtml = `<label for="${equipmentFieldsetName}-${Equipment[i].id}">${inputHtml}${Equipment[i].name}</label>`;
    html += `${labelHtml}`;
  }

  return html;
}

export default {
  getInnerHtml: _getInnerHtml
}
