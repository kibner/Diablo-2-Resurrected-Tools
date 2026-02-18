const _getInnerHtml = function (socketFieldsetName) {
  const minSocketCount = 2;
  const maxSocketCount = 6;

  let html = '';

  for (let i = minSocketCount; i <= maxSocketCount; i++) {
    const inputHtml = `<input type="checkbox" id="${socketFieldsetName}-${i}" name="${socketFieldsetName}" value="${i}"/>`;
    const labelHtml = `<label for="${socketFieldsetName}-${i}">${inputHtml}${i}</label>`;
    html += `${labelHtml}`;
  }

  return html;
}

export default {
  getInnerHtml: _getInnerHtml
};
