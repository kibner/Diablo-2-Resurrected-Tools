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
    root.equipment_data = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // Just return a value to define the module export.
  return [
    {
      id: 'amazon-bow',
      name: 'Amazon Bow',
      max_sockets: 5
    },
    {
      id: 'amazon-spear',
      name: 'Amazon Spear',
      max_sockets: 6
    },
    {
      id: 'assassin-katar',
      name: 'Assassin Katar',
      max_sockets: 3
    },
    {
      id: 'axe',
      name: 'Axe',
      max_sockets: 6
    },
    {
      id: 'barbarian-helmet',
      name: 'Barbarian Helmet',
      max_sockets: 3
    },
    {
      id: 'body-armor',
      name: 'Body Armor',
      max_sockets: 4
    },
    {
      id: 'bow',
      name: 'Bow',
      max_sockets: 6
    },
    {
      id: 'circlet',
      name: 'Circlet',
      max_sockets: 3
    },
    {
      id: 'club',
      name: 'Club',
      max_sockets: 3
    },
    {
      id: 'crossbow',
      name: 'Crossbow',
      max_sockets: 6
    },
    {
      id: 'dagger',
      name: 'Dagger',
      max_sockets: 3
    },
    {
      id: 'druid-pelt',
      name: 'Druid Pelt',
      max_sockets: 3
    },
    {
      id: 'hammer-1',
      name: 'Hammer (1H)',
      max_sockets: 4
    },
    {
      id: 'hammer-2',
      name: 'Hammer (2H)',
      max_sockets: 4
    },
    {
      id: 'helmet',
      name: 'Helmet',
      max_sockets: 3
    },
    {
      id: 'mace',
      name: 'Mace',
      max_sockets: 6
    },
    {
      id: 'necromancer-shrunken-head',
      name: 'Necromancer Shrunken Head',
      max_sockets: 2
    },
    {
      id: 'paladin-shield',
      name: 'Paladin Shield',
      max_sockets: 4
    },
    {
      id: 'polearm',
      name: 'Polearm',
      max_sockets: 6
    },
    {
      id: 'scepter',
      name: 'Scepter',
      max_sockets: 5
    },
    {
      id: 'shield',
      name: 'Shield',
      max_sockets: 4
    },
    {
      id: 'sorceress-orb',
      name: 'Sorceress Orb',
      max_sockets: 3
    },
    {
      id: 'spear',
      name: 'Spear',
      max_sockets: 6
    },
    {
      id: 'staff',
      name: 'Staff',
      max_sockets: 6
    },
    {
      id: 'sword',
      name: 'Sword',
      max_sockets: 6
    },
    {
      id: 'wand',
      name: 'Wand',
      max_sockets: 2
    }
  ];
}));
