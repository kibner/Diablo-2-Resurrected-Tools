(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['modules/data/runeword_data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('../../data/runeword_data'));
  } else {
    // Browser globals (root is window)
    root.search_service = factory(root.runeword_data);
  }
}(typeof self !== 'undefined' ? self : this, function (runeword_data) {
  // Just return a value to define the module export.
  const _searchRunewords = function (searchParams) {
    return runeword_data.reduce((previousValue, currentValue) => {
      if ((searchParams.sockets.length === 0 || searchParams.sockets.includes(currentValue.runes.length))
        && (searchParams.equipment.length === 0 || searchParams.equipment.some(equipment => currentValue.equipment.includes(equipment)))) {
        return previousValue.concat(currentValue);
      }

      return previousValue;
    }, []);
  }

  return {
    searchRunewords: _searchRunewords
  }
}));
