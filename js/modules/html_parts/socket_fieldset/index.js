(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.socket_fieldset = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // Just return a value to define the module export.
  const _getInnerHtml = function (socketFieldsetName) {
    const minSocketCount = 2;
    const maxSocketCount = 6;

    let html = '';

    for (let i = minSocketCount; i <= maxSocketCount; i++) {
      const inputHtml = `<input type="checkbox" id="${socketFieldsetName}-${i}" name="${socketFieldsetName}" value="${i}"/>`;
      const labelHtml = `<label for="${socketFieldsetName}-${i}">${inputHtml}${i}</label>`;
      html = `${html}${labelHtml}`;
    }

    return html;
  }

  return {
    getInnerHtml: _getInnerHtml
  }
}));
