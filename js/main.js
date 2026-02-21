import {focusable} from "tabbable";
import {
  AppendOutput as AppendSearchResultsOutput,
  ReplaceSearchResults
} from "./html_parts/search_results_output";

import {
  AppendFieldset as AppendSocketFieldset,
  GetSelectedValues as GetSelectedSockets
} from "./html_parts/socket_fieldset";

import {
  AppendFieldset as AppendEquipmentFieldset,
  GetSelectedValues as GetSelectedEquipment
} from "./html_parts/equipment_fieldset";

import {
  AppendFieldset as AppendMiscellaneousFieldset,
  GetSelectedValues as GetSelectedMiscellaneous
} from "./html_parts/miscellaneous_fieldset";

import {SearchRunewords} from "./services/search_service";

(function () {
  const _SCREEN_READER_ONLY_CLASS_NAME = 'sr-only';
  const _TOGGLE_COLLAPSIBLE_CLASS_NAME = 'toggle-collapsible';
  const _COLLAPSIBLE_CONTENT_CLASS_NAME = 'collapsible-content'

  let _isInitialLoadComplete = false;
  let _runewordForm;

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
    _runewordForm = document.getElementById('runeword-form');
    _isInitialLoadComplete = true;
  }

  function _initializeApp() {
    _initializeFormInputs();
    _initializeFormOutput();
    _initializeListeners();

    _executeSearch();
  }

  function _initializeFormInputs() {
    AppendSocketFieldset(_runewordForm);
    AppendEquipmentFieldset(_runewordForm);
    AppendMiscellaneousFieldset(_runewordForm);
  }

  function _initializeFormOutput() {
    AppendSearchResultsOutput(_runewordForm);
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

    ReplaceSearchResults(searchResults);
  }

  function _getSearchParameters() {
    const sockets = GetSelectedSockets(_runewordForm);
    const equipment = GetSelectedEquipment(_runewordForm);
    const miscellaneous = GetSelectedMiscellaneous(_runewordForm);

    return {
      sockets: sockets,
      equipment: equipment,
      miscellaneous: miscellaneous
    };
  }
})();
