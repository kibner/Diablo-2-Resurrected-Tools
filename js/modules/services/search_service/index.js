import {Equipment} from "equipment_data";
import runeword_data from "runewords_data";

const _hasMatchingSocket = function (searchParamSockets, runeword) {
  return searchParamSockets.length === 0 || searchParamSockets.includes(runeword.runes.length);
};

const _hasMatchingEquipment = function (searchParamEquipment, runeword) {
  return searchParamEquipment.length === 0
    || searchParamEquipment.some(equipmentId => {
      const doesIncludeEquipment = runeword.equipment.includes(equipmentId);

      if (doesIncludeEquipment === false) {
        return false;
      }

      const equipment = Equipment.find(value => value.id === equipmentId);

      return equipment && equipment.max_sockets >= runeword.runes.length;
    });
};

const _hasMatchingMiscellaneous = function (searchParamMiscellaneous, runeword) {
  return searchParamMiscellaneous.length === 0
    || searchParamMiscellaneous.every(miscellaneousValue => {
      return _hasAura(miscellaneousValue, runeword) || _excludeLadderOnly(miscellaneousValue, runeword);
    });
}

const _hasAura = function (miscellaneousValue, runeword) {
  return miscellaneousValue === 'has-aura' && runeword.has_aura === true;
}

const _excludeLadderOnly = function (miscellaneousValue, runeword) {
  return miscellaneousValue === 'exclude-ladder-only' && runeword.is_ladder_only === false;
}

const _searchRunewords = function (searchParams) {
  return runeword_data.reduce((previousValue, currentValue) => {
    if (
      _hasMatchingSocket(searchParams.sockets, currentValue)
      && _hasMatchingEquipment(searchParams.equipment, currentValue)
      && _hasMatchingMiscellaneous(searchParams.miscellaneous, currentValue)
    ) {
      return previousValue.concat(currentValue);
    }

    return previousValue;
  }, []);
};

export default {
  searchRunewords: _searchRunewords
};
