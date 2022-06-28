const _getInnerHtml = function (miscellaneousFieldsetName) {
  const hasAuraName = 'has-aura';

  return `
  <label for="${miscellaneousFieldsetName}-${hasAuraName}">
      <input type="checkbox" id="${miscellaneousFieldsetName}-${hasAuraName}" name="${miscellaneousFieldsetName}" value="${hasAuraName}"/>
      Aura
  </label>
  `;
}

export default {
  getInnerHtml: _getInnerHtml
};
