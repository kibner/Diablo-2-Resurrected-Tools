(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      '../../data/runeword_data',
      '../../data/equipment_data'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require(
      '../../data/runeword_data',
      '../../data/equipment_data'
    ));
  } else {
    // Browser globals (root is window)
    root.search_service = factory(root.runeword_data);
  }
}(typeof self !== 'undefined' ? self : this, function (
  runeword_data,
  equipment_data
) {
  // Just return a value to define the module export.
  const _hasMatchingSocket = function (searchParamSockets, runeword) {
    return searchParamSockets.sockets.length === 0 || searchParamSockets.sockets.includes(runeword.runes.length);
  };

  const _hasMatchingEquipment = function (searchParamEquipment, runeword) {
    return searchParamEquipment.equipment.length === 0 || searchParamEquipment.equipment.some(equipment => runeword.equipment.includes(equipment));
  };

  const _searchRunewords = function (searchParams) {
    return runeword_data.reduce((previousValue, currentValue) => {
      if (_hasMatchingSocket(searchParams.sockets, currentValue)
        && _hasMatchingEquipment(searchParams.equipment, currentValue)) {
        return previousValue.concat(currentValue);
      }

      return previousValue;
    }, []);
  };

  return {
    searchRunewords: _searchRunewords
  }
}));
