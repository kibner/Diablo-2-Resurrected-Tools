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
    _socketFieldset = _runewordForm.querySelector('fieldset[name=sockets]');
    _equipmentFieldset = _runewordForm.querySelector('fieldset[name=equipment]');
  }

  function _initializeFormInputs() {
    _initializeSocketFieldSet();
    _initializeEquipmentFieldSet();
  }

  function _initializeSocketFieldSet() {
    _socketFieldset.querySelector('.collapsible-content').innerHTML = socket_fieldset.getInnerHtml('sockets');
  }

  function _initializeEquipmentFieldSet() {
    _equipmentFieldset.querySelector('.collapsible-content').innerHTML = equipment_fieldset.getInnerHtml('equipment');
  }

  function _initializeFormOutput() {
    const socketFieldsetName = _socketFieldset.getAttribute('name');
    const equipmentFieldsetName = _equipmentFieldset.getAttribute('name');
    const formOutputForAttribute = search_results_output.getForAttributeValue(socketFieldsetName, equipmentFieldsetName);

    _runewordFormOutput.setAttribute('for', formOutputForAttribute);
  }

  function _initializeListeners() {
    _runewordForm.addEventListener('input', _handleFormInputChange);
  }

  function _handleFormInputChange(event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }

    if (event.target.classList.contains('toggle-collapsible')) {
      _toggleCollapsibleContent(event);
    } else {
      _executeSearch();
    }
  }

  function _toggleCollapsibleContent(event) {
    const collapsibleContent = event.target.parentNode.querySelector('.collapsible-content');

    if (event.target.checked) {
      collapsibleContent.classList.remove('sr-only');
    } else {
      collapsibleContent.classList.add('sr-only');
    }
  }

  function _getSocketParameters() {
    return Array.from(_runewordForm.querySelectorAll('input[name="sockets"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(parseInt(currentValue.value)), []);
  }

  function _getEquipmentParameters() {
    return Array.from(_runewordForm.querySelectorAll('input[name="equipment"]:checked'))
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

  function _executeSearch() {
    const searchParameters = _getSearchParameters();
    const searchResults = search_service.searchRunewords(searchParameters);
    _displaySearchResults(searchResults);
  }

  function _displaySearchResults(searchResults) {
    return _runewordFormOutput.innerHTML = search_results_output.getInnerHtml(searchResults);
  }
}));
