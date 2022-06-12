(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      './modules/services/search_service',
      './modules/html_parts/socket_fieldset',
      './modules/html_parts/equipment_fieldset',
      './modules/html_parts/search_results_output'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(
      require('./modules/services/search_service'),
      require('./modules/html_parts/socket_fieldset'),
      require('./modules/html_parts/equipment_fieldset'),
      require('./modules/html_parts/search_results_output')
    );
  } else {
    // Browser globals (root is window)
    root.diablo_2_resurrected_tools = factory(
      root.search_service,
      root.socket_fieldset,
      root.equipment_fieldset,
      root.search_results_output
    );
  }
}(typeof self !== 'undefined' ? self : this, function (
  search_service,
  socket_fieldset,
  equipment_fieldset,
  search_results_output
) {
  // Just return a value to define the module export.
  const _SOCKET_FIELDSET_NAME = 'sockets';
  const _EQUIPMENT_FIELDSET_NAME = 'equipment';
  const _SCREEN_READER_ONLY_CLASS_NAME = 'sr-only';
  const _TOGGLE_COLLAPSIBLE_CLASS_NAME = 'toggle-collapsible';
  const _COLLAPSIBLE_CONTENT_CLASS_NAME = 'collapsible-content'

  let _isInitialLoadComplete = false;
  let _runewordForm;
  let _runewordFormOutput;
  let _socketFieldset;
  let _equipmentFieldset

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
  }

  function _initializeFormInputs() {
    _initializeSocketFieldSet();
    _initializeEquipmentFieldSet();
  }

  function _initializeSocketFieldSet() {
    _socketFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`).innerHTML = socket_fieldset.getInnerHtml(_SOCKET_FIELDSET_NAME);
  }

  function _initializeEquipmentFieldSet() {
    _equipmentFieldset.querySelector(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`).innerHTML = equipment_fieldset.getInnerHtml(_EQUIPMENT_FIELDSET_NAME);
  }

  function _initializeFormOutput() {
    const formOutputForAttribute = search_results_output.getForAttributeValue(_SOCKET_FIELDSET_NAME, _EQUIPMENT_FIELDSET_NAME);

    _runewordFormOutput.setAttribute('for', formOutputForAttribute);
  }

  function _initializeListeners() {
    _runewordForm.addEventListener('input', _handleFormInputChange);
    _runewordForm.addEventListener('focusin', _handleFormFocus);
    // _runewordForm.addEventListener('onblur', _handleFormFocus);
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
    } else {
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

  function _executeSearch() {
    const searchParameters = _getSearchParameters();
    const searchResults = search_service.searchRunewords(searchParameters);
    _displaySearchResults(searchResults);
  }

  function _getSocketParameters() {
    return Array.from(_runewordForm.querySelectorAll(`input[name=${_SOCKET_FIELDSET_NAME}]:checked`))
      .reduce((previousValue, currentValue) => previousValue.concat(parseInt(currentValue.value)), []);
  }

  function _getEquipmentParameters() {
    return Array.from(_runewordForm.querySelectorAll(`input[name=${_EQUIPMENT_FIELDSET_NAME}]:checked`))
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);
  }

  function _getSearchParameters() {
    const sockets = _getSocketParameters();
    const equipment = _getEquipmentParameters();

    return {
      sockets: sockets,
      equipment: equipment
    };
  }

  function _displaySearchResults(searchResults) {
    return _runewordFormOutput.innerHTML = search_results_output.getInnerHtml(searchResults);
  }

  function _handleFormFocus(event) {
    // limit to just inputs within the content area of fieldsets
    if (
      event.target.tagName !== 'INPUT'
      || !event.target.closest(`.${_COLLAPSIBLE_CONTENT_CLASS_NAME}`)
    ) {
      return;
    }

    // get focusout element's fieldset toggle control
    const focusoutToggleNode = event.relatedTarget.closest(`fieldset`).querySelector(`.${_TOGGLE_COLLAPSIBLE_CLASS_NAME}`);

    // do nothing if fieldset is expanded
    if (typeof focusoutToggleNode.checked === 'boolean' && focusoutToggleNode.checked) {
      return;
    }

    const fieldsetToggleNodeList = _runewordForm.querySelectorAll(`.${_TOGGLE_COLLAPSIBLE_CLASS_NAME}`);
    const fieldsetToggleNodeArray = Array.from(fieldsetToggleNodeList);
    const focusoutToggleNodeIndex = fieldsetToggleNodeArray.indexOf(focusoutToggleNode);

    // determine which way focus is changing
    const isFocusGoingForward = event.relatedTarget.compareDocumentPosition(event.target) & Node.DOCUMENT_POSITION_FOLLOWING;

    // todo: follow steps below
    // 1) get list of all active and visible focusable elements
    // 2) get index of focusOutToggleNode in list from step 1
    // 3.a) if going forward and there is no next toggle node in toggle node list, then go to next element in global node list
    // 3.b) if going backward and there is no previous toggle node in toggle node list, then go to previous element in global node list
    // 3.c) find some way to handle going beyond the global node list (just call blur(), maybe?)
  }

  function _showCollapsibleFieldset(input) {
    _checkCollapsibleCheckbox(input)
    _showCollapsibleContent(input);
  }

  function _checkCollapsibleCheckbox(input) {
    const collapsibleCheckbox = _getCollapsibleCheckbox(input)
    collapsibleCheckbox.checked = true;
  }

  function _getCollapsibleCheckbox(input) {
    const rootFieldset = _getRootFieldset(input);
    return rootFieldset.querySelector(`.${_TOGGLE_COLLAPSIBLE_CLASS_NAME}`);
  }

  function _showCollapsibleContent(input) {
    const collapsibleContent = _getCollapsibleContent(input);

    if (collapsibleContent.classList.contains(_SCREEN_READER_ONLY_CLASS_NAME)) {
      collapsibleContent.classList.remove(_SCREEN_READER_ONLY_CLASS_NAME);
    }
  }
}));
