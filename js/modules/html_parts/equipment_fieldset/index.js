import equipment_data from "equipment_data";

const _getInnerHtml = function (equipmentFieldsetName) {
  let html = '';

  for (let i = 0; i < equipment_data.length; i++) {
    const inputHtml = `<input type="checkbox" id="${equipmentFieldsetName}-${equipment_data[i].id}" name="${equipmentFieldsetName}" value="${equipment_data[i].id}"/>`;
    const labelHtml = `<label for="${equipmentFieldsetName}-${equipment_data[i].id}">${inputHtml}${equipment_data[i].name}</label>`;
    html += `${labelHtml}`;
  }

  return html;
}

export default {
  getInnerHtml: _getInnerHtml
}
