import {Enum} from '/js/helpers/enum'

const _RUNE_IDS = Enum({
  EL: 'el',
  ELD: 'eld',
  TIR: 'tir',
  NEF: 'nef',
  ETH: 'eth',
  ITH: 'ith',
  TAL: 'tal',
  RAL: 'ral',
  ORT: 'ort',
  THUL: 'thul',
  AMN: 'amn',
  SOL: 'sol',
  SHAEL: 'shael',
  DOL: 'dol',
  HEL: 'hel',
  IO: 'io',
  LUM: 'lum',
  KO: 'ko',
  FAL: 'fal',
  LEM: 'lem',
  PUL: 'pul',
  UM: 'um',
  MAL: 'mal',
  IST: 'ist',
  GUL: 'gul',
  VEX: 'vex',
  OHM: 'ohm',
  LO: 'lo',
  SUR: 'sur',
  BER: 'ber',
  JAH: 'jah',
  CHAM: 'cham',
  ZOD: 'zod'
})

const _rune_data = [
  {
    id: _RUNE_IDS.EL,
    name: 'El',
    weapon_stats: ['+50 Attack Rating', '+1 Light Radius'],
    helmet_stats: ['+15 Defense', '+1 Light Radius'],
    armor_stats: ['+15 Defense', '+1 Light Radius'],
    shield_stats: ['+15 Defense', '+1 Light Radius']
  },
  {
    id: _RUNE_IDS.ELD,
    name: 'Eld',
    weapon_stats: ['+75% Damage to Undead', '+50 to Attack Rating against Undead'],
    helmet_stats: ['15% Slower Stamina Drain'],
    armor_stats: ['15% Slower Stamina Drain'],
    shield_stats: ['7% Increased Chance of Blocking']
  },
  {
    id: _RUNE_IDS.TIR,
    name: 'Tir',
    weapon_stats: ['+2 Mana after each Kill'],
    helmet_stats: ['+2 Mana after each Kill'],
    armor_stats: ['+2 Mana after each Kill'],
    shield_stats: ['+2 Mana after each Kill']
  },
  {
    id: _RUNE_IDS.NEF,
    name: 'Nef',
    weapon_stats: ['Knockback'],
    helmet_stats: ['+30 Defense vs. Missile'],
    armor_stats: ['+30 Defense vs. Missile'],
    shield_stats: ['+30 Defense vs. Missile']
  },
  {
    id: _RUNE_IDS.ETH,
    name: 'Eth',
    weapon_stats: ['-25% Target Defense'],
    helmet_stats: ['Regenerate Mana 15%'],
    armor_stats: ['Regenerate Mana 15%'],
    shield_stats: ['Regenerate Mana 15%']
  },
  {
    id: _RUNE_IDS.ITH,
    name: 'Ith',
    weapon_stats: ['+9 to Maximum Damage'],
    helmet_stats: ['15% Damage Taken Goes To Mana'],
    armor_stats: ['15% Damage Taken Goes To Mana'],
    shield_stats: ['15% Damage Taken Goes To Mana']
  },
  {
    id: _RUNE_IDS.TAL,
    name: 'Tal',
    weapon_stats: ['+75 Poison Damage over 5 seconds'],
    helmet_stats: ['Poison Resist +30%'],
    armor_stats: ['Poison Resist +30%'],
    shield_stats: ['Poison Resist +35%']
  },
  {
    id: _RUNE_IDS.RAL,
    name: 'Ral',
    weapon_stats: ['Adds 5-30 Fire Damage'],
    helmet_stats: ['Fire Resist +30%'],
    armor_stats: ['Fire Resist +30%'],
    shield_stats: ['Fire Resist +35%']
  },
  {
    id: _RUNE_IDS.ORT,
    name: 'Ort',
    weapon_stats: ['Adds 1-50 Lightning Damage'],
    helmet_stats: ['Lightning Resist +30%'],
    armor_stats: ['Lightning Resist +30%'],
    shield_stats: ['Lightning Resist +35%']
  },
  {
    id: _RUNE_IDS.THUL,
    name: 'Thul',
    weapon_stats: ['Adds 3-14 Cold Damage'],
    helmet_stats: ['Cold Resist +30%'],
    armor_stats: ['Cold Resist +30%'],
    shield_stats: ['Cold Resist +35%']
  },
  {
    id: _RUNE_IDS.AMN,
    name: 'Amn',
    weapon_stats: ['7% Life stolen per hit'],
    helmet_stats: ['Attacker Takes Damage of 14'],
    armor_stats: ['Attacker Takes Damage of 14'],
    shield_stats: ['Attacker Takes Damage of 14']
  },
  {
    id: _RUNE_IDS.SOL,
    name: 'Sol',
    weapon_stats: ['+9 to Minimum Damage'],
    helmet_stats: ['Damage Reduced by 7'],
    armor_stats: ['Damage Reduced by 7'],
    shield_stats: ['Damage Reduced by 7']
  },
  {
    id: _RUNE_IDS.SHAEL,
    name: 'Shael',
    weapon_stats: ['+20% Increased Attack Speed'],
    helmet_stats: ['+20% Faster Hit Recovery'],
    armor_stats: ['+20% Faster Hit Recovery'],
    shield_stats: ['+20% Faster Block Rate']
  },
  {
    id: _RUNE_IDS.DOL,
    name: 'Dol',
    weapon_stats: ['Hit Causes Monster to Flee 25%'],
    helmet_stats: ['Replenish Life +7'],
    armor_stats: ['Replenish Life +7'],
    shield_stats: ['Replenish Life +7']
  },
  {
    id: _RUNE_IDS.HEL,
    name: 'Hel',
    weapon_stats: ['Requirements -20%'],
    helmet_stats: ['Requirements -15%'],
    armor_stats: ['Requirements -15%'],
    shield_stats: ['Requirements -15%']
  },
  {
    id: _RUNE_IDS.IO,
    name: 'Io',
    weapon_stats: ['+10 to Vitality'],
    helmet_stats: ['+10 to Vitality'],
    armor_stats: ['+10 to Vitality'],
    shield_stats: ['+10 to Vitality']
  },
  {
    id: _RUNE_IDS.LUM,
    name: 'Lum',
    weapon_stats: ['+10 to Energy'],
    helmet_stats: ['+10 to Energy'],
    armor_stats: ['+10 to Energy'],
    shield_stats: ['+10 to Energy']
  },
  {
    id: _RUNE_IDS.KO,
    name: 'Ko',
    weapon_stats: ['+10 to Dexterity'],
    helmet_stats: ['+10 to Dexterity'],
    armor_stats: ['+10 to Dexterity'],
    shield_stats: ['+10 to Dexterity']
  },
  {
    id: _RUNE_IDS.FAL,
    name: 'Fal',
    weapon_stats: ['+10 to Strength'],
    helmet_stats: ['+10 to Strength'],
    armor_stats: ['+10 to Strength'],
    shield_stats: ['+10 to Strength']
  },
  {
    id: _RUNE_IDS.LEM,
    name: 'Lem',
    weapon_stats: ['75% Extra Gold from Monsters'],
    helmet_stats: ['50% Extra Gold from Monsters'],
    armor_stats: ['50% Extra Gold from Monsters'],
    shield_stats: ['50% Extra Gold from Monsters']
  },
  {
    id: _RUNE_IDS.PUL,
    name: 'Pul',
    weapon_stats: ['+75% Damage to Demons', '+100 Attack Rating against Demons'],
    helmet_stats: ['+30% Enhanced Defense'],
    armor_stats: ['+30% Enhanced Defense'],
    shield_stats: ['+30% Enhanced Defense']
  },
  {
    id: _RUNE_IDS.UM,
    name: 'Um',
    weapon_stats: ['25% Chance of Open Wounds'],
    helmet_stats: ['All Resistances +15'],
    armor_stats: ['All Resistances +15'],
    shield_stats: ['All Resistances +22']
  },
  {
    id: _RUNE_IDS.MAL,
    name: 'Mal',
    weapon_stats: ['Prevent Monster Heal'],
    helmet_stats: ['Magic Damage Reduced by 7'],
    armor_stats: ['Magic Damage Reduced by 7'],
    shield_stats: ['Magic Damage Reduced by 7']
  },
  {
    id: _RUNE_IDS.IST,
    name: 'Ist',
    weapon_stats: ['30% Better Chance of Getting Magic Items'],
    helmet_stats: ['25% Better Chance of Getting Magic Items'],
    armor_stats: ['25% Better Chance of Getting Magic Items'],
    shield_stats: ['25% Better Chance of Getting Magic Items']
  },
  {
    id: _RUNE_IDS.GUL,
    name: 'Gul',
    weapon_stats: ['20% Bonus to Attack Rating'],
    helmet_stats: ['+5% to Maximum Poison Resist'],
    armor_stats: ['+5% to Maximum Poison Resist'],
    shield_stats: ['+5% to Maximum Poison Resist']
  },
  {
    id: _RUNE_IDS.VEX,
    name: 'Vex',
    weapon_stats: ['7% Mana stolen per hit'],
    helmet_stats: ['+5% to Maximum Fire Resist'],
    armor_stats: ['+5% to Maximum Fire Resist'],
    shield_stats: ['+5% to Maximum Fire Resist']
  },
  {
    id: _RUNE_IDS.OHM,
    name: 'Ohm',
    weapon_stats: ['+50% Enhanced Damage'],
    helmet_stats: ['+5% to Maximum Cold Resist'],
    armor_stats: ['+5% to Maximum Cold Resist'],
    shield_stats: ['+5% to Maximum Cold Resist']
  },
  {
    id: _RUNE_IDS.LO,
    name: 'Lo',
    weapon_stats: ['20% Deadly Strike'],
    helmet_stats: ['+5% to Maximum Lightning Resist'],
    armor_stats: ['+5% to Maximum Lightning Resist'],
    shield_stats: ['+5% to Maximum Lightning Resist']
  },
  {
    id: _RUNE_IDS.SUR,
    name: 'Sur',
    weapon_stats: ['Hit Blinds Target'],
    helmet_stats: ['Increase Maximum Mana 5%'],
    armor_stats: ['Increase Maximum Mana 5%'],
    shield_stats: ['+50 to Mana']
  },
  {
    id: _RUNE_IDS.BER,
    name: 'Ber',
    weapon_stats: ['20% Chance of Crushing Blow'],
    helmet_stats: ['Damage Reduced by 8%'],
    armor_stats: ['Damage Reduced by 8%'],
    shield_stats: ['Damage Reduced by 8%']
  },
  {
    id: _RUNE_IDS.JAH,
    name: 'Jah',
    weapon_stats: ['Ignores Target\'s Defense'],
    helmet_stats: ['Increased Maximum Life 5%'],
    armor_stats: ['Increased Maximum Life 5%'],
    shield_stats: ['+50 to Life']
  },
  {
    id: _RUNE_IDS.CHAM,
    name: 'Cham',
    weapon_stats: ['Freezes target +3'],
    helmet_stats: ['Cannot Be Frozen'],
    armor_stats: ['Cannot Be Frozen'],
    shield_stats: ['Cannot Be Frozen']
  },
  {
    id: _RUNE_IDS.ZOD,
    name: 'Zod',
    weapon_stats: ['Indestructible'],
    helmet_stats: ['Indestructible'],
    armor_stats: ['Indestructible'],
    shield_stats: ['Indestructible']
  }
];

export {_rune_data as Runes, _RUNE_IDS as Rune_IDs};
