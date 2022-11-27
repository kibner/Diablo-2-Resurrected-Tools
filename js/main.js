import tabs_automatic from "tabs_automatic";
import runeword_form from "runeword_form";

(function () {
  // readystatechange as event listener to insert or modify the DOM before DOMContentLoaded
  document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
      _initializeApp();
    }
  });

  function _initializeApp() {
    tabs_automatic.initialize('prototype-tablist');
    runeword_form.initialize('runeword-form');
  }
})();
