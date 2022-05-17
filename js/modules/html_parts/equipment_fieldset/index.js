(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../data/equipment_data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('../../data/equipment_data'));
  } else {
    // Browser globals (root is window)
    root.equipment_fieldset = factory(root.equipment_data);
  }
}(typeof self !== 'undefined' ? self : this, function (equipment_data) {
  // Just return a value to define the module export.
  const _getInnerHtml = function (equipmentFieldsetName) {
    let html = '';

    for (let i = 0; i < equipment_data.length; i++) {
      const inputHtml = `<input type="checkbox" id="${equipmentFieldsetName}-${equipment_data[i].id}" name="${equipmentFieldsetName}" value="${equipment_data[i].id}"/>`;
      const labelHtml = `<label for="${equipmentFieldsetName}-${equipment_data[i].id}">${inputHtml}${equipment_data[i].name}</label>`;
      html = `${html}${labelHtml}`;
    }

    return html;
  }

  return {
    getInnerHtml: _getInnerHtml
  }
}));
