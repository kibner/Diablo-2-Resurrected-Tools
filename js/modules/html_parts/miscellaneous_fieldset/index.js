const _getInnerHtml = function (miscellaneousFieldsetName) {
  return `${_getHasAuraComponent(miscellaneousFieldsetName)}${_getExcludeLadderOnly(miscellaneousFieldsetName)}`;
}

const _getHasAuraComponent = function (miscellaneousFieldsetName) {
  return _getCheckboxComponent(miscellaneousFieldsetName, 'has-aura', 'Aura');
}

const _getExcludeLadderOnly = function (miscellaneousFieldsetName) {
  return _getCheckboxComponent(miscellaneousFieldsetName, 'exclude-ladder-only', 'Exclude Ladder Only');
}

const _getCheckboxComponent = function (miscellaneousFieldsetName, checkboxName, checkboxLabel) {
  return `<label for="${miscellaneousFieldsetName}-${checkboxName}"><input type="checkbox" id="${miscellaneousFieldsetName}-${checkboxName}" name="${miscellaneousFieldsetName}" value="${checkboxName}"/>${checkboxLabel}</label>`;
}

export default {
  getInnerHtml: _getInnerHtml
};
