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
    root.runewords = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // Just return a value to define the module export.
  return [
    {
      id: 'steel',
      name: 'Steel',
      runes: ['tir', 'el'],
      equipment: ['axe', 'mace', 'sword'],
      character_level: 13,
      stats: ['+25% Increased Attack Speed', '+20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '+2 to Mana after each Kill', '+1 to Light Radius']
    }, {
      id: 'beast',
      name: 'Beast',
      runes: ['ber', 'tir', 'um', 'mal', 'lum'],
      equipment: ['axe', 'hammer', 'scepter'],
      character_level: 63,
      stats: ['Level 9 Fanaticism Aura When Equipped', '+40% Increased Attack Speed', '+240-270% Enhanced Damage', '20% Chance of Crushing Blow', '25% Chance of Open Wounds', '+3 to Werebear', '+3 to Lycanthropy', 'Prevent Monster Heal', '+25-40 to Strength', '+10 to Energy', '+2 to Mana after each Kill', 'Level 13 Summon Grizzly (5/5 Charges)']
    }
  ];
}));
