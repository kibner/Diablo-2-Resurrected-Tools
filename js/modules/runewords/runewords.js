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
    }, {
      id: 'black',
      name: 'Black',
      runes: ['thul', 'io', 'nef'],
      equipment: ['club', 'hammer', 'mace'],
      character_level: 35,
      stats: ['+15% Increased Attack Speed', '+120% Enhanced Damage', '+200 to Attack Rating', 'Adds 3-14 Cold Damage', '40% Chance of Crushing Blow', 'Knockback', '+10 to Vitality', 'Magic Damage Reduced by 2', 'Level 4 Corpse Explosion (12/12 Charges)']
    }, {
      id: 'brand',
      name: 'Brand',
      runes: ['jah', 'lo', 'mal', 'gul'],
      equipment: ['amazon-bow', 'bow', 'crossbow'],
      character_level: 65,
      stats: ['35% Chance to cast Level 14 Amplify Damage when struck', '100% Chance to cast Level 18 Bone Spear on striking', 'Fires Explosive Arrows or Bolts', '+260-340% Enhanced Damage', 'Ignore Target\'s Defense', '20% Bonus to Attack Rating', '+280-330% Damage to Demons', '20% Deadly Strike', 'Prevent Monster Heal', 'Knockback']
    }, {
      id: 'breath-of-the-dying',
      name: 'Breath of the Dying',
      runes: ['vex', 'hel', 'el', 'eld', 'zod', 'eth'],
      equipment: ['amazon-bow', 'amazon-spear', 'assassin-katar', 'axe', 'bow', 'club', 'crossbow', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 69,
      stats: ['50% Chance to cast Level 20 Poison Nova when you Kill an Enemy', 'Indestructible', '+60% Increased Attack Speed', '+350-400% Enhanced Damage', '-25% Target Defense', '+50 to Attack Rating', '+200% Damage to Undead', '+50 to Attack Rating against Undead', '7% Mana stolen per hit', '12-15% Life stolen per hit', 'Prevent Monster Heal', '+30 to All Attributes', '+1 to Light Radius', 'Requirements -20%']
    }, {
      id: 'call-to-arms',
      name: 'Call to Arms',
      runes: ['amn', 'ral', 'mal', 'ist', 'ohm'],
      equipment: ['amazon-bow', 'amazon-spear', 'assassin-katar', 'axe', 'bow', 'club', 'crossbow', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 57,
      stats: ['+1 to All Skills', '+40% Increased Attack Speed', '+250-290% Enhanced Damage', 'Adds 5-30 Fire Damage', '7% Life stolen per hit', '2-6 to Battle Command', '1-6 to Battle Orders', '1-4 to Battle Cry', 'Prevent Monster Heal', 'Replenish Life +12', '30% Better Chance of Getting Magic Items']
    }, {
      id: 'chaos',
      name: 'Chaos',
      runes: ['fal', 'ohm', 'um'],
      equipment: ['assasin-katar'],
      character_level: 57,
      stats: ['9% Chance to cast Level 11 Frozen Orb on striking', '11% Chance to cast Level 9 Charged Bolt on striking', '+35% Increased Attack Speed', '+290-340% Enhanced Damage', 'Adds 216-471 Magic Damage', '25% Chance of Open Wounds', '+1 to Whirlwind', '+10 to Strength', '+15 Life after each Demon Kill']
    }, {
      id: 'crescent-moon',
      name: 'Crescent Moon',
      runes: ['shael', 'um', 'tir'],
      equipment: ['axe', 'polearm', 'sword'],
      character_level: 47,
      stats: ['10% Chance to cast Level 17 Chain Lightning on striking', '7% Chance to cast Level 13 Static Field on striking', '+20% Increased Attack Speed', '+180-220% Enhanced Damage', 'Ignore Target\'s Defense', '-35% to Enemy Lightning Resistance', '25% Chance of Open Wounds', '+9-11 Magic Absorb', '+2 to Mana after each Kill', 'Level 18 Summon Spirit Wolf (30/30 Charges)']
    }, {
      id: 'death',
      name: 'Death',
      runes: ['hel', 'el', 'vex', 'ort', 'gul'],
      equipment: ['axe', 'sword'],
      character_level: 55,
      stats: ['100% Chance to cast Level 44 Chain Lightning when you Die', '25% Chance to cast Level 18 Glacial Spike on attack', 'Indestructible', '+300-385% Enhanced Damage', '20% Bonus to Attack Rating', '+50 to Attack Rating', 'Adds 1-50 Lightning Damage', '7% Mana stolen per hit', '50% Chance of Crushing Blow', '0.5% Deadly Strike (Based on Character Level)', '+1 to Light Radius', 'Level 22 Blood Golem (15/15 Charges)']
    }, {
      id: 'destruction',
      name: 'Destruction',
      runes: ['vex', 'lo', 'ber', 'jah', 'ko'],
      equipment: ['polearm', 'sword'],
      character_level: 65,
      stats: ['23% Chance to cast Level 12 Volcano on striking', '5% Chance to cast Level 23 Molten Boulder on striking', '100% Chance to cast Level 45 Meteor when you Die', '15% Chance to cast Level 22 Nova on attack', '+350% Enhanced Damage', 'Ignore Target\'s Defense', 'Adds 100-180 Magic Damage', '7% Mana stolen per hit', '20% Chance of Crushing Blow', '20% Deadly Strike', 'Prevent Monster Heal', '+10 to Dexterity']
    }, {
      id: 'doom',
      name: 'Doom',
      runes: ['hel', 'ohm', 'um', 'lo', 'cham'],
      equipment: ['axe', 'hammer', 'polearm'],
      character_level: 67,
      stats: ['5% Chance to cast Level 18 Volcano on striking', 'Level 12 Holy Freeze Aura When Equipped', '+2 to All Skills', '+45% Increased Attack Speed', '+330-370% Enhanced Damage', '-40-60% to Enemy Cold Resistance', '20% Deadly Strike', '25% Chance of Open Wounds', 'Prevent Monster Heal', 'Freezes target +3', 'Requirements -20%']
    }, {
      id: 'edge',
      name: 'Edge',
      runes: ['tir', 'tal', 'amn'],
      equipment: ['amazon-bow', 'bow', 'crossbow'],
      character_level: 25,
      stats: ['Level 15 Thorns Aura When Equipped', '+35% Increased Attack Speed', '+320-380% Damage to Demons', '+280% Damage to Undead', '+75 Poison Damage over 5 seconds', '7% Life stolen per hit', 'Prevent Monster Heal', '5-10 to all Attributes', '+2 to Mana after each Kill', 'Reduces all Vendor Prices 15%']
    }, {
      id: 'eternity',
      name: 'Eternity',
      runes: ['amn', 'ber', 'ist', 'sol', 'sur'],
      equipment: ['amazon-spear', 'assassin-katar', 'axe', 'club', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 63,
      stats: ['Indestructible', '+260-310% Enhanced Damage', '+9 to Minimum Damage', '7% Life stolen per hit', '20% Chance of Crushing Blow', 'Hit Blinds Target', 'Slows Target by 33%', 'Replenish Life +16', 'Regenerate Mana 16%', 'Cannot Be Frozen', '30% Better Chance of Getting Magic Items', 'Level 8 Revive (88/88 Charges)']
    }, {
      id: 'faith',
      name: 'Faith',
      runes: ['ohm', 'jah', 'lem', 'eld'],
      equipment: ['amazon-bow', 'bow', 'crossbow'],
      character_level: 65,
      stats: ['Level 12-15 Fanaticism Aura When Equipped', '+1-2 to All Skills', '+330% Enhanced Damage', 'Ignore Target\'s Defense', '300% Bonus to Attack Rating', '+75% Damage to Undead', '+50 to Attack Rating against Undead', '+120 Fire Damage', 'All Resistances +15', '10% Reanimate as: Returned', '75% Extra Gold from Monsters']
    }, {
      id: 'famine',
      name: 'Famine',
      runes: ['fal', 'ohm', 'ort', 'jah'],
      equipment: ['axe', 'hammer'],
      character_level: 65,
      stats: ['+30% Increased Attack Speed', '+320-370% Enhanced Damage', 'Ignore Target\'s Defense', 'Adds 180-200 Magic Damage', 'Adds 50-200 Fire Damage', 'Adds 51-250 Lightning Damage', 'Adds 50-200 Cold Damage', '12% Life stolen per hit', 'Prevent Monster Heal', '+10 to Strength']
    }, {
      id: 'fortitude',
      name: 'Fortitude',
      runes: ['el', 'sol', 'dol', 'lo'],
      equipment: ['amazon-bow', 'amazon-spear', 'assassin-katar', 'axe', 'bow', 'club', 'crossbow', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 59,
      stats: ['20% Chance to cast Level 15 Chilling Armor when struck', '+25% Faster Cast Rate', '+300% Enhanced Damage', '+9 to Minimum Damage', '+50 to Attack Rating', '20% Deadly Strike', 'Hit Causes Monster to Flee 25%', '+200% Enhanced Defense', '+1-1.5 to Life (Based on Character Level)', 'All Resistances +25-30', '12% Damage Taken Goes To Mana', '+1 to Light Radius']
    }, {
      id: 'fury',
      name: 'Fury',
      runes: ['jah', 'gul', 'eth'],
      equipment: ['amazon-spear', 'assassin-katar', 'axe', 'club', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 65,
      stats: ['+40% Increased Attack Speed', '+209% Enhanced Damage', 'Ignore Target\'s Defense', '-25% Target Defense', '20% Bonus to Attack Rating', '6% Life stolen per hit', '33% Deadly Strike', '66% Chance of Open Wounds', '+5 to Frenzy (Barbarian Only)', 'Prevent Monster Heal']
    }, {
      id: 'grief',
      name: 'Grief',
      runes: ['eth', 'tir', 'lo', 'mal', 'ral'],
      equipment: ['axe', 'sword'],
      character_level: 59,
      stats: ['35% Chance to cast Level 15 Venom on striking', '+30-40% Increased Attack Speed', 'Damage +340-400', 'Ignore Target\'s Defense', '-25% Target Defense', '+1.875% Damage to Demons (Based on Character Level)', 'Adds 5-30 Fire Damage', '-20-25% to Enemy Poison Resistance', '20% Deadly Strike', 'Prevent Monster Heal', '+2 to Mana after each Kill', '+10-15 Life after each Kill']
    }, {
      id: 'hand-of-justice',
      name: 'Hand of Justice',
      runes: ['sur', 'cham', 'amn', 'lo'],
      equipment: ['amazon-bow', 'amazon-spear', 'assassin-katar', 'axe', 'bow', 'club', 'crossbow', 'dagger', 'hammer', 'mace', 'polearm', 'scepter', 'sorceress-orb', 'spear', 'staff', 'sword', 'wand'],
      character_level: 67,
      stats: ['100% Chance to cast Level 36  Blaze when you Level-Up', '100% Chance to cast Level 48  Meteor when you Die', 'Level 16 Holy Fire Aura When Equipped', '33% Increased Attack Speed', '+280-330% Enhanced Damage', 'Ignore Target\'s Defense', '-20% to Enemy Fire Resistance', '7% Life stolen per hit', '20% Deadly Strike', 'Hit Blinds Target', 'Freezes Target +3']
    }
  ];
}));
