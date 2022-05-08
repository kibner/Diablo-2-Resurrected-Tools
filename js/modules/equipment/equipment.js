(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.equipment = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // Just return a value to define the module export.
  return [
    {
      id: 'amazon-bow',
      name: 'Amazon Bow'
    },
    {
      id: 'amazon-spear',
      name: 'Amazon Spear'
    },
    {
      id: 'assassin-katar',
      name: 'Assassin Katar'
    },
    {
      id: 'axe',
      name: 'Axe'
    },
    {
      id: 'barbarian-helmet',
      name: 'Barbarian Helmet'
    },
    {
      id: 'body-armor',
      name: 'Body Armor'
    },
    {
      id: 'bow',
      name: 'Bow'
    },
    {
      id: 'circlet',
      name: 'Circlet'
    },
    {
      id: 'club',
      name: 'Club'
    },
    {
      id: 'crossbow',
      name: 'Crossbow'
    },
    {
      id: 'dagger',
      name: 'Dagger'
    },
    {
      id: 'druid-pelt',
      name: 'Druid Pelt'
    },
    {
      id: 'hammer',
      name: 'Hammer'
    },
    {
      id: 'helmet',
      name: 'Helmet'
    },
    {
      id: 'mace',
      name: 'Mace'
    },
    {
      id: 'necromancer-shrunken-head',
      name: 'Necromancer Shrunken Head'
    },
    {
      id: 'paladin-shield',
      name: 'Paladin Shield'
    },
    {
      id: 'polearm',
      name: 'Polearm'
    },
    {
      id: 'scepter',
      name: 'Scepter'
    },
    {
      id: 'shield',
      name: 'Shield'
    },
    {
      id: 'sorceress-orb',
      name: 'Sorceress Orb'
    },
    {
      id: 'spear',
      name: 'Spear'
    },
    {
      id: 'staff',
      name: 'Staff'
    },
    {
      id: 'sword',
      name: 'Sword'
    },
    {
      id: 'wand',
      name: 'Wand'
    }
  ];
}));
