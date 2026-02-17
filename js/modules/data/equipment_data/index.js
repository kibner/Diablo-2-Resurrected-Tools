const _EQUIPMENT_TYPES = {
  MELEE_WEAPON: {id: 'melee-weapon', name: 'Melee Weapon'},
  MISSILE_WEAPON: {id: 'missile-weapon', name: 'Missile Weapon'},
  SHIELD: {id: 'shield', name: 'Shield'},
  HELMET: {id: 'helmet', name: 'Helmet'},
  BODY_ARMOR: {id: 'body-armor', name: 'Body Armor'}
}

const _equipment = [
  {
    id: 'amazon-bow',
    name: 'Amazon Bow',
    max_sockets: 5,
    type: _EQUIPMENT_TYPES.MISSILE_WEAPON
  },
  {
    id: 'amazon-spear',
    name: 'Amazon Spear',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'assassin-katar',
    name: 'Assassin Katar',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'axe',
    name: 'Axe',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'barbarian-helmet',
    name: 'Barbarian Helmet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.HELMET
  },
  {
    id: 'body-armor',
    name: 'Body Armor',
    max_sockets: 4,
    type: _EQUIPMENT_TYPES.BODY_ARMOR
  },
  {
    id: 'bow',
    name: 'Bow',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MISSILE_WEAPON
  },
  {
    id: 'circlet',
    name: 'Circlet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.HELMET
  },
  {
    id: 'club',
    name: 'Club',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MISSILE_WEAPON
  },
  {
    id: 'dagger',
    name: 'Dagger',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'druid-pelt',
    name: 'Druid Pelt',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.HELMET
  },
  {
    id: 'hammer-1h',
    name: 'Hammer (1H)',
    max_sockets: 4,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'hammer-2h',
    name: 'Hammer (2H)',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'helmet',
    name: 'Helmet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.HELMET
  },
  {
    id: 'mace',
    name: 'Mace',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'necromancer-shrunken-head',
    name: 'Necromancer Shrunken Head',
    max_sockets: 2,
    type: _EQUIPMENT_TYPES.SHIELD
  },
  {
    id: 'paladin-shield',
    name: 'Paladin Shield',
    max_sockets: 4,
    type: _EQUIPMENT_TYPES.SHIELD
  },
  {
    id: 'polearm',
    name: 'Polearm',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'scepter',
    name: 'Scepter',
    max_sockets: 5,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'shield',
    name: 'Shield',
    max_sockets: 4,
    type: _EQUIPMENT_TYPES.SHIELD
  },
  {
    id: 'sorceress-orb',
    name: 'Sorceress Orb',
    max_sockets: 3,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'spear',
    name: 'Spear',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'staff',
    name: 'Staff',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'sword',
    name: 'Sword',
    max_sockets: 6,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  },
  {
    id: 'wand',
    name: 'Wand',
    max_sockets: 2,
    type: _EQUIPMENT_TYPES.MELEE_WEAPON
  }
];

const _get_equipment_ids_by_types = function (types) {
  const _equipment_ids = [];

  _equipment.reduce(
    (previousValue, currentValue) => {
      if (types && types.includes(currentValue.type)) {
        _equipment_ids.push(currentValue.id);
      }
    },
    _equipment_ids
  )

  return _equipment_ids;
}

export {
  _equipment as Equipment,
  _EQUIPMENT_TYPES as Equipment_Types,
  _get_equipment_ids_by_types as Get_Equipment_IDs_By_Types
};
