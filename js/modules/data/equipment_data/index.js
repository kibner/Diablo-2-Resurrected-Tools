import {Enum} from '/js/helpers/enum'

const _EQUIPMENT_TYPE_IDS = Enum({
  MELEE_WEAPON: 'melee-weapon',
  MISSILE_WEAPON: 'missile-weapon',
  SHIELD: 'shield',
  HELMET: 'helmet',
  BODY_ARMOR: 'body-armor'
});

const _EQUIPMENT_IDS = Enum({
  AMAZON_BOW: 'amazon-bow',
  AMAZON_SPEAR: 'amazon-spear',
  ASSASSIN_KATAR: 'assassin-katar',
  AXE: 'axe',
  BARBARIAN_HELMET: 'barbarian-helmet',
  BODY_ARMOR: 'body-armor',
  BOW: 'bow',
  CIRCLET: 'circlet',
  CLUB: 'club',
  CROSSBOW: 'crossbow',
  DAGGER: 'dagger',
  DRUID_PELT: 'druid-pelt',
  HAMMER_1H: 'hammer-1h',
  HAMMER_2H: 'hammer-2h',
  HELMET: 'helmet',
  MACE: 'mace',
  NECROMANCER_SHRUNKEN_HEAD: 'necromancer-shrunken-head',
  PALADIN_SHIELD: 'paladin-shield',
  POLEARM: 'polearm',
  SCEPTER: 'scepter',
  SHIELD: 'shield',
  SORCERESS_ORB: 'sorceress-orb',
  SPEAR: 'spear',
  STAFF: 'staff',
  SWORD: 'sword',
  WAND: 'wand',
});

const _EQUIPMENT_TYPES = {
  MELEE_WEAPON: {id: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON, name: 'Melee Weapon'},
  MISSILE_WEAPON: {id: _EQUIPMENT_TYPE_IDS.MISSILE_WEAPON, name: 'Missile Weapon'},
  SHIELD: {id: _EQUIPMENT_TYPE_IDS.SHIELD, name: 'Shield'},
  HELMET: {id: _EQUIPMENT_TYPE_IDS.HELMET, name: 'Helmet'},
  BODY_ARMOR: {id: _EQUIPMENT_TYPE_IDS.BODY_ARMOR, name: 'Body Armor'}
}

const _equipment = [
  {
    id: _EQUIPMENT_IDS.AMAZON_BOW,
    name: 'Amazon Bow',
    max_sockets: 5,
    type: _EQUIPMENT_TYPE_IDS.MISSILE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.AMAZON_SPEAR,
    name: 'Amazon Spear',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.ASSASSIN_KATAR,
    name: 'Assassin Katar',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.AXE,
    name: 'Axe',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.BARBARIAN_HELMET,
    name: 'Barbarian Helmet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.HELMET
  },
  {
    id: _EQUIPMENT_IDS.BODY_ARMOR,
    name: 'Body Armor',
    max_sockets: 4,
    type: _EQUIPMENT_TYPE_IDS.BODY_ARMOR
  },
  {
    id: _EQUIPMENT_IDS.BOW,
    name: 'Bow',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MISSILE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.CIRCLET,
    name: 'Circlet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.HELMET
  },
  {
    id: _EQUIPMENT_IDS.CLUB,
    name: 'Club',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.CROSSBOW,
    name: 'Crossbow',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MISSILE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.DAGGER,
    name: 'Dagger',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.DRUID_PELT,
    name: 'Druid Pelt',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.HELMET
  },
  {
    id: _EQUIPMENT_IDS.HAMMER_1H,
    name: 'Hammer (1H)',
    max_sockets: 4,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.HAMMER_2H,
    name: 'Hammer (2H)',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.HELMET,
    name: 'Helmet',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.HELMET
  },
  {
    id: _EQUIPMENT_IDS.MACE,
    name: 'Mace',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.NECROMANCER_SHRUNKEN_HEAD,
    name: 'Necromancer Shrunken Head',
    max_sockets: 2,
    type: _EQUIPMENT_TYPE_IDS.SHIELD
  },
  {
    id: _EQUIPMENT_IDS.PALADIN_SHIELD,
    name: 'Paladin Shield',
    max_sockets: 4,
    type: _EQUIPMENT_TYPE_IDS.SHIELD
  },
  {
    id: _EQUIPMENT_IDS.POLEARM,
    name: 'Polearm',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.SCEPTER,
    name: 'Scepter',
    max_sockets: 5,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.SHIELD,
    name: 'Shield',
    max_sockets: 4,
    type: _EQUIPMENT_TYPE_IDS.SHIELD
  },
  {
    id: _EQUIPMENT_IDS.SORCERESS_ORB,
    name: 'Sorceress Orb',
    max_sockets: 3,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.SPEAR,
    name: 'Spear',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.STAFF,
    name: 'Staff',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.SWORD,
    name: 'Sword',
    max_sockets: 6,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  },
  {
    id: _EQUIPMENT_IDS.WAND,
    name: 'Wand',
    max_sockets: 2,
    type: _EQUIPMENT_TYPE_IDS.MELEE_WEAPON
  }
];

const _get_equipment_ids_by_type_ids = function (types) {
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
  _EQUIPMENT_IDS as Equipment_IDs,
  _EQUIPMENT_TYPES as Equipment_Types,
  _EQUIPMENT_TYPE_IDS as Equipment_Type_IDs,
  _get_equipment_ids_by_type_ids as Get_Equipment_IDs_By_Type_IDs
};
