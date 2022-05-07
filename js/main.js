(function () {
  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
      _initLoader();
    } else if (event.target.readyState === 'complete') {
      _initApp();
    }
  });

  function _initLoader() {
    document.getElementById('runeword-form').addEventListener('input', _handleFormInputChange);
  }

  function _initApp() {
  }

  function _handleFormInputChange(event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }

    const sockets = Array.from(document.querySelectorAll('#runeword-form input[name="sockets"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);

    const equipment = Array.from(document.querySelectorAll('#runeword-form input[name="equipment"]:checked'))
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue.value), []);

    const searchParams = {
      sockets: sockets,
      equipment: equipment
    };

    const searchResults = _search(searchParams);
    const resultElement = document.querySelector('#runeword-form output[name=runeword-result]');
    resultElement.innerHTML = searchResults;
  }

  function _search(searchParams) {
    console.log(searchParams);
    return '<div style="color: red">successful search</div>';
  }
}());
