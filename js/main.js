import {focusable} from "tabbable";
import {ReplaceSearchResults} from "./html_parts/search_results_output";

import {
  AppendCheckboxes as AppendSocketCheckboxes,
  GetCheckboxIds as GetSocketCheckboxIds,
  GetSelectedValues as GetSelectedSockets
} from "./html_parts/socket_fieldset";

import {
  AppendCheckboxes as AppendEquipmentCheckboxes,
  GetCheckboxIds as GetEquipmentCheckboxIds,
  GetSelectedValues as GetSelectedEquipment
} from "./html_parts/equipment_fieldset";

import {
  AppendCheckboxes as AppendMiscellaneousCheckboxes,
  GetCheckboxIds as GetMiscellaneousCheckboxIds,
  GetSelectedValues as GetSelectedMiscellaneous
} from "./html_parts/miscellaneous_fieldset";

import {SearchRunewords} from "./services/search_service";

(function () {
  const _SOCKET_FIELDSET_NAME = 'sockets';
  const _EQUIPMENT_FIELDSET_NAME = 'equipment';
  const _MISCELLANEOUS_FIELDSET_NAME = 'miscellaneous';
  const _SCREEN_READER_ONLY_CLASS_NAME = 'sr-only';
  const _TOGGLE_COLLAPSIBLE_CLASS_NAME = 'toggle-collapsible';
  const _COLLAPSIBLE_CONTENT_CLASS_NAME = 'collapsible-content'
  const _CHECKBOX_TEMPLATE_ID = 'checkbox-template';

  let _isInitialLoadComplete = false;
  let _runewordForm;
  let _runewordFormOutput;
  let _socketFieldset;
  let _equipmentFieldset;
  let _miscellaneousFieldset;

  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      _initializeLoader();
    } else if (event.target.readyState === 'complete') {
      // loading with new version of Parcel seems to only trigger the 'complete' ready state, so I added a check to
      // make sure that initialization still went through
      if (_isInitialLoadComplete === false) {
        _initializeLoader();
      }

      _initializeApp();
    }
  });

  function _initializeLoader() {
    _isInitialLoadComplete = false;
    _initializeGlobals();
    _isInitialLoadComplete = true;
  }

  function _initializeApp() {
    _initializeFormInputs();
    _initializeFormOutput();
    _initializeListeners();

    _executeSearch();
  }

  function _initializeGlobals() {
    _runewordForm = document.getElementById('runeword-form');
    _runewordFormOutput = _runewordForm.querySelector('output[name=runeword-result]');
    _socketFieldset = _runewordForm.querySelector(`fieldset[name=${_SOCKET_FIELDSET_NAME}]`);
    _equipmentFieldset = _runewordForm.querySelector(`fieldset[name=${_EQUIPMENT_FIELDSET_NAME}]`);
    _miscellaneousFieldset = _runewordForm.querySelector(`fieldset[name=${_MISCELLANEOUS_FIELDSET_NAME}]`);
  }

  function _initializeFormInputs() {
    _initializeSocketFieldSet();
    _initializeEquipmentFieldSet();
    _initializeMiscellaneousFieldSet();
  }

  function _initializeSocketFieldSet() {
    AppendSocketCheckboxes(
      _socketFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`),
      _CHECKBOX_TEMPLATE_ID,
      _SOCKET_FIELDSET_NAME
    );
  }

  function _initializeEquipmentFieldSet() {
    AppendEquipmentCheckboxes(
      _equipmentFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`),
      _CHECKBOX_TEMPLATE_ID,
      _EQUIPMENT_FIELDSET_NAME
    );
  }

  function _initializeMiscellaneousFieldSet() {
    AppendMiscellaneousCheckboxes(
      _miscellaneousFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`),
      _CHECKBOX_TEMPLATE_ID,
      _MISCELLANEOUS_FIELDSET_NAME);
  }

  function _initializeFormOutput() {
    const formOutputForAttribute = GetSocketCheckboxIds(_SOCKET_FIELDSET_NAME)
      .concat(GetEquipmentCheckboxIds(_EQUIPMENT_FIELDSET_NAME))
      .concat(GetMiscellaneousCheckboxIds(_MISCELLANEOUS_FIELDSET_NAME));

    _runewordFormOutput.setAttribute('for', formOutputForAttribute.join(' '));
  }

  function _initializeListeners() {
    _runewordForm.addEventListener('input', _handleFormInputChange);
  }

  function _handleFormInputChange(event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }

    if (event.target.classList.contains(_TOGGLE_COLLAPSIBLE_CLASS_NAME)) {
      _toggleCollapsibleContent(event.target);
    } else {
      _executeSearch();
    }
  }

  function _toggleCollapsibleContent(input) {
    const collapsibleContent = _getCollapsibleContent(input);

    if (collapsibleContent.classList.contains(_SCREEN_READER_ONLY_CLASS_NAME)) {
      collapsibleContent.classList.remove(_SCREEN_READER_ONLY_CLASS_NAME);
      _setTabindexAttributeForAllFocusableNodes(collapsibleContent, 0);
    } else {
      _setTabindexAttributeForAllFocusableNodes(collapsibleContent, -1);
      collapsibleContent.classList.add(_SCREEN_READER_ONLY_CLASS_NAME);
    }
  }

  function _getCollapsibleContent(input) {
    const rootFieldset = _getRootFieldset(input);
    return rootFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`);
  }

  function _getRootFieldset(input) {
    return input.closest('fieldset');
  }

  function _setTabindexAttributeForAllFocusableNodes(rootNode, tabindexValue) {
    const focusableContent = focusable(rootNode);

    focusableContent.forEach((tabbableElement) => {
      tabbableElement.setAttribute('tabindex', tabindexValue);
    });
  }

  function _executeSearch() {
    const searchParameters = _getSearchParameters();
    const searchResults = SearchRunewords(searchParameters);

    ReplaceSearchResults(
      searchResults,
      _runewordFormOutput,
      'search-results-table-template',
      'search-results-row-template',
      'runeword-list-property-template',
      'runeword-list-property-item-template',
      'runeword-single-property-template',
      'runeword-stat-item-template'
    );
  }

  function _getSearchParameters() {
    const sockets = GetSelectedSockets(_runewordForm, _SOCKET_FIELDSET_NAME);
    const equipment = GetSelectedEquipment(_runewordForm, _EQUIPMENT_FIELDSET_NAME);
    const miscellaneous = GetSelectedMiscellaneous(_runewordForm, _MISCELLANEOUS_FIELDSET_NAME);

    return {
      sockets: sockets,
      equipment: equipment,
      miscellaneous: miscellaneous
    };
  }
})();
