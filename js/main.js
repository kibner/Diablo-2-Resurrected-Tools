import {
  AppendOutput as AppendSearchResultsOutput,
  ReplaceSearchResults,
} from './html_parts/search_results_output';

import {
  AppendFieldset as AppendSocketFieldset,
  GetSelectedValues as GetSelectedSockets,
} from './html_parts/socket_fieldset';

import {
  AppendFieldset as AppendEquipmentFieldset,
  GetSelectedValues as GetSelectedEquipment,
} from './html_parts/equipment_fieldset';

import {
  AppendFieldset as AppendMiscellaneousFieldset,
  GetSelectedValues as GetSelectedMiscellaneous,
} from './html_parts/miscellaneous_fieldset';

import { SearchRunewords } from './services/search_service';

import {
  SelectorCssClasses,
  ToggleCollapsibleContent,
} from './components/fieldsetComponent';

(function () {
  const _initializeApp = function () {
    _initializeFormInputs();
    _initializeFormOutput();
    _initializeListeners();

    _executeSearch();
  };

  const _initializeFormInputs = function () {
    const searchElement = _runewordForm.getElementsByTagName('search')[0];
    AppendSocketFieldset(searchElement);
    AppendEquipmentFieldset(searchElement);
    AppendMiscellaneousFieldset(searchElement);
  };

  const _initializeFormOutput = function () {
    AppendSearchResultsOutput(_runewordForm);
  };

  const _initializeListeners = function () {
    _runewordForm.addEventListener('input', _handleFormInputChange);
  };

  const _handleFormInputChange = function (event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }

    if (
      event.target.classList.contains(
        SelectorCssClasses.TOGGLE_COLLAPSIBLE_CLASS_NAME,
      )
    ) {
      ToggleCollapsibleContent(event.target);
    } else {
      _executeSearch();
    }
  };

  const _executeSearch = function () {
    const searchParameters = _getSearchParameters();
    const searchResults = SearchRunewords(searchParameters);

    ReplaceSearchResults(searchResults);
  };

  const _getSearchParameters = function () {
    const sockets = GetSelectedSockets(_runewordForm);
    const equipment = GetSelectedEquipment(_runewordForm);
    const miscellaneous = GetSelectedMiscellaneous(_runewordForm);

    return {
      sockets: sockets,
      equipment: equipment,
      miscellaneous: miscellaneous,
    };
  };

  const _runewordForm = document.getElementById('runeword-form');
  _initializeApp();
})();
