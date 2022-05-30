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
  let isInitialLoadComplete = false;
  let _runewordForm;
  let _runewordFormOutput;
  let _socketFieldset;
  let _equipmentFieldset

  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      _initLoader();
    } else if (event.target.readyState === 'complete') {
      // loading with new version of Parcel seems to only trigger the 'complete' ready state, so I added a check to
      // make sure that initialization still went through
      if (isInitialLoadComplete === false) {
        _initLoader();
      }

      _initApp();
    }
  });

  function _initLoader() {
    _runewordForm = document.getElementById('runeword-form');
    _runewordFormOutput = _runewordForm.querySelector('output[name=runeword-result]');
    _socketFieldset = _runewordForm.querySelector('fieldset[name=sockets]');
    _equipmentFieldset = _runewordForm.querySelector('fieldset[name=equipment]');

    const socketFieldsetHtml = socket_fieldset.getInnerHtml('sockets');
    _socketFieldset.insertAdjacentHTML('beforeend', socketFieldsetHtml);

    const equipmentFielsetHtml = equipment_fieldset.getInnerHtml('equipment');
    _equipmentFieldset.insertAdjacentHTML('beforeend', equipmentFielsetHtml);

    _runewordForm.addEventListener('input', _handleFormInputChange);

    isInitialLoadComplete = true;
  }

  function _initApp() {
    const socketFieldsetName = _socketFieldset.getAttribute('name');
    const equipmentFieldsetName = _equipmentFieldset.getAttribute('name');
    _runewordFormOutput.setAttribute('for', search_results_output.getForAttributeValue(socketFieldsetName, equipmentFieldsetName));

    const searchParams = {
      sockets: [],
      equipment: []
    };

    const searchResults = search_service.searchRunewords(searchParams);
    _runewordFormOutput.innerHTML = search_results_output.getInnerHtml(searchResults);
  }

  function _handleFormInputChange(event) {
    if (event.target.tagName !== 'INPUT' || event.target.classList.contains('toggle')) {
      return;
    }

    const sockets = Array.from(_runewordForm.querySelectorAll('input[name="sockets"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(parseInt(currentValue.value)), []);

    const equipment = Array.from(_runewordForm.querySelectorAll('input[name="equipment"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);

    const searchParams = {
      sockets: sockets,
      equipment: equipment
    };

    const searchResults = search_service.searchRunewords(searchParams);
    _runewordFormOutput.innerHTML = search_results_output.getInnerHtml(searchResults);
  }
}));
