import {Equipment} from 'equipment_data';
import {Runewords} from 'runewords_data';

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
  return Runewords.reduce((previousValue, currentValue) => {
    if (
      _hasMatchingSocket(searchParams.sockets, currentValue)
      && _hasMatchingEquipment(searchParams.equipment, currentValue)
      && _hasMatchingMiscellaneous(searchParams.miscellaneous, currentValue)
    ) {
      return previousValue.concat(currentValue);
    }

    return previousValue;
  }, [])
    .sort((a, b) => {
      const _NAME_COMPARE = a.name.localeCompare(b.name);

      if (_NAME_COMPARE === 0) {
        return a.id.localeCompare(b.id);
      } else {
        return _NAME_COMPARE;
      }
    });
};

export default {
  searchRunewords: _searchRunewords
};
