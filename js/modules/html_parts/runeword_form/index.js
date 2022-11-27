import socket_fieldset from "./socket_fieldset";
import equipment_fieldset from "./equipment_fieldset";
import miscellaneous_fieldset from "./miscellaneous_fieldset";
import search_service from "search_service";
import search_results_output from "./search_results_output";
import {focusable} from "tabbable";

const _SOCKET_FIELDSET_NAME = 'sockets';
const _EQUIPMENT_FIELDSET_NAME = 'equipment';
const _MISCELLANEOUS_FIELDSET_NAME = 'miscellaneous';
const _SCREEN_READER_ONLY_CLASS_NAME = 'sr-only';
const _TOGGLE_COLLAPSIBLE_CLASS_NAME = 'toggle-collapsible';
const _COLLAPSIBLE_CONTENT_CLASS_NAME = 'collapsible-content'

let _runewordForm;
let _runewordFormOutput;
let _socketFieldset;
let _equipmentFieldset;
let _miscellaneousFieldset;

const _initialize = function (runewordFormId) {
  _initializeGlobals(runewordFormId);
  _initializeFormInputs();
  _initializeFormOutput();
  _initializeListeners();

  _executeSearch();
}

const _initializeGlobals = function (runewordFormId) {
  _runewordForm = document.getElementById(runewordFormId);
  _runewordFormOutput = _runewordForm.querySelector('output[name=runeword-result]');
  _socketFieldset = _runewordForm.querySelector(`fieldset[name=${_SOCKET_FIELDSET_NAME}]`);
  _equipmentFieldset = _runewordForm.querySelector(`fieldset[name=${_EQUIPMENT_FIELDSET_NAME}]`);
  _miscellaneousFieldset = _runewordForm.querySelector(`fieldset[name=${_MISCELLANEOUS_FIELDSET_NAME}]`);
}

const _initializeFormInputs = function () {
  _initializeSocketFieldSet();
  _initializeEquipmentFieldSet();
  _initializeMiscellaneousFieldSet();
}

const _initializeSocketFieldSet = function () {
  _socketFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`).innerHTML = socket_fieldset.getInnerHtml(_SOCKET_FIELDSET_NAME);
}

const _initializeEquipmentFieldSet = function () {
  _equipmentFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`).innerHTML = equipment_fieldset.getInnerHtml(_EQUIPMENT_FIELDSET_NAME);
}

const _initializeMiscellaneousFieldSet = function () {
  _miscellaneousFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`).innerHTML = miscellaneous_fieldset.getInnerHtml(_MISCELLANEOUS_FIELDSET_NAME);
}

const _initializeFormOutput = function () {
  const formOutputForAttribute = search_results_output.getForAttributeValue(_SOCKET_FIELDSET_NAME, _EQUIPMENT_FIELDSET_NAME);

  _runewordFormOutput.setAttribute('for', formOutputForAttribute);
}

const _initializeListeners = function () {
  _runewordForm.addEventListener('input', _handleFormInputChange);
}

const _handleFormInputChange = function (event) {
  if (event.target.tagName !== 'INPUT') {
    return;
  }

  if (event.target.classList.contains(_TOGGLE_COLLAPSIBLE_CLASS_NAME)) {
    _toggleCollapsibleContent(event.target);
  } else {
    _executeSearch();
  }
}

const _toggleCollapsibleContent = function (input) {
  const collapsibleContent = _getCollapsibleContent(input);

  if (collapsibleContent.classList.contains(_SCREEN_READER_ONLY_CLASS_NAME)) {
    collapsibleContent.classList.remove(_SCREEN_READER_ONLY_CLASS_NAME);
    _setTabindexAttributeForAllFocusableNodes(collapsibleContent, 0);
  } else {
    _setTabindexAttributeForAllFocusableNodes(collapsibleContent, -1);
    collapsibleContent.classList.add(_SCREEN_READER_ONLY_CLASS_NAME);
  }
}

const _getCollapsibleContent = function (input) {
  const rootFieldset = _getRootFieldset(input);
  return rootFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`);
}

const _getRootFieldset = function (input) {
  return input.closest('fieldset');
}

const _setTabindexAttributeForAllFocusableNodes = function (rootNode, tabindexValue) {
  const focusableContent = focusable(rootNode);

  focusableContent.forEach((tabbableElement) => {
    tabbableElement.setAttribute('tabindex', tabindexValue);
  });
}

const _executeSearch = function () {
  const searchParameters = _getSearchParameters();
  const searchResults = search_service.searchRunewords(searchParameters);
  _displaySearchResults(searchResults);
}

const _getSearchParameters = function () {
  const sockets = _getSocketParameters();
  const equipment = _getEquipmentParameters();
  const miscellaneous = _getMiscellaneousParameters();

  return {
    sockets: sockets,
    equipment: equipment,
    miscellaneous: miscellaneous
  };
}

const _getSocketParameters = function () {
  return Array.from(_runewordForm.querySelectorAll(`input[name=${_SOCKET_FIELDSET_NAME}]:checked`))
    .reduce((previousValue, currentValue) => previousValue.concat(parseInt(currentValue.value)), []);
}

const _getEquipmentParameters = function () {
  return Array.from(_runewordForm.querySelectorAll(`input[name=${_EQUIPMENT_FIELDSET_NAME}]:checked`))
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);
}

const _getMiscellaneousParameters = function () {
  return Array.from(_runewordForm.querySelectorAll(`input[name=${_MISCELLANEOUS_FIELDSET_NAME}]:checked`))
    .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);
}

const _displaySearchResults = function (searchResults) {
  return _runewordFormOutput.innerHTML = search_results_output.getInnerHtml(searchResults);
}

export default {
  initialize: _initialize
};
