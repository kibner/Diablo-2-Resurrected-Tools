import {Equipment_IDs, Equipment_Type_IDs, Get_Equipment_IDs_By_Type_IDs} from "../equipment_data";
import {Rune_IDs} from "../rune_data";

const _WEAPON_PREFIX = 'weapon';
const _SHIELD_PREFIX = 'shield';
const _HELMET_PREFIX = 'helmet';
const _BODY_ARMOR_PREFIX = 'body-armor';

const _ALL_WEAPONS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.MELEE_WEAPON, Equipment_Type_IDs.MISSILE_WEAPON]);
const _ALL_MELEE_WEAPONS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.MELEE_WEAPON]);
const _ALL_MISSILE_WEAPONS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.MISSILE_WEAPON]);
const _ALL_SHIELDS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.SHIELD]);
const _ALL_HELMETS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.HELMET]);
const _ALL_BODY_ARMORS = Get_Equipment_IDs_By_Type_IDs([Equipment_Type_IDs.BODY_ARMOR]);

const _runeword_data = [
  {
    id: `${_WEAPON_PREFIX}-beast`,
    name: 'Beast',
    runes: [Rune_IDs.BER, Rune_IDs.TIR, Rune_IDs.UM, Rune_IDs.MAL, Rune_IDs.LUM],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H, Equipment_IDs.SCEPTER],
    character_level: 63,
    stats: ['Level 9 Fanaticism Aura When Equipped', '+40% Increased Attack Speed', '+240-270% Enhanced Damage', '20% Chance of Crushing Blow', '25% Chance of Open Wounds', '+3 to Werebear', '+3 to Lycanthropy', 'Prevent Monster Heal', '+25-40 to Strength', '+10 to Energy', '+2 to Mana after each Kill', 'Level 13 Summon Grizzly (5/5 Charges)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-black`,
    name: 'Black',
    runes: [Rune_IDs.THUL, Rune_IDs.IO, Rune_IDs.NEF],
    equipment: [Equipment_IDs.CLUB, Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H, Equipment_IDs.MACE],
    character_level: 35,
    stats: ['+15% Increased Attack Speed', '+120% Enhanced Damage', '+200 to Attack Rating', 'Adds 3-14 Cold Damage', '40% Chance of Crushing Blow', 'Knockback', '+10 to Vitality', 'Magic Damage Reduced by 2', 'Level 4 Corpse Explosion (12/12 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-brand`,
    name: 'Brand',
    runes: [Rune_IDs.JAH, Rune_IDs.LO, Rune_IDs.MAL, Rune_IDs.GUL],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 65,
    stats: ['35% Chance to cast Level 14 Amplify Damage when struck', '100% Chance to cast Level 18 Bone Spear on striking', 'Fires Explosive Arrows or Bolts', '+260-340% Enhanced Damage', 'Ignore Target\'s Defense', '20% Bonus to Attack Rating', '+280-330% Damage to Demons', '20% Deadly Strike', 'Prevent Monster Heal', 'Knockback'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-breath-of-the-dying`,
    name: 'Breath of the Dying',
    runes: [Rune_IDs.VEX, Rune_IDs.HEL, Rune_IDs.EL, Rune_IDs.ELD, Rune_IDs.ZOD, Rune_IDs.ETH],
    equipment: _ALL_WEAPONS,
    character_level: 69,
    stats: ['50% Chance to cast Level 20 Poison Nova when you Kill an Enemy', 'Indestructible', '+60% Increased Attack Speed', '+350-400% Enhanced Damage', '-25% Target Defense', '+50 to Attack Rating', '+200% Damage to Undead', '+50 to Attack Rating against Undead', '7% Mana stolen per hit', '12-15% Life stolen per hit', 'Prevent Monster Heal', '+30 to All Attributes', '+1 to Light Radius', 'Requirements -20%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-call-to-arms`,
    name: 'Call to Arms',
    runes: [Rune_IDs.AMN, Rune_IDs.RAL, Rune_IDs.MAL, Rune_IDs.IST, Rune_IDs.OHM],
    equipment: _ALL_WEAPONS,
    character_level: 57,
    stats: ['+1 to All Skills', '+40% Increased Attack Speed', '+250-290% Enhanced Damage', 'Adds 5-30 Fire Damage', '7% Life stolen per hit', '2-6 to Battle Command', '1-6 to Battle Orders', '1-4 to Battle Cry', 'Prevent Monster Heal', 'Replenish Life +12', '30% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-chaos`,
    name: 'Chaos',
    runes: [Rune_IDs.FAL, Rune_IDs.OHM, Rune_IDs.UM],
    equipment: [Equipment_IDs.ASSASSIN_KATAR],
    character_level: 57,
    stats: ['9% Chance to cast Level 11 Frozen Orb on striking', '11% Chance to cast Level 9 Charged Bolt on striking', '+35% Increased Attack Speed', '+290-340% Enhanced Damage', 'Adds 216-471 Magic Damage', '25% Chance of Open Wounds', '+1 to Whirlwind', '+10 to Strength', '+15 Life after each Demon Kill'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-crescent-moon`,
    name: 'Crescent Moon',
    runes: [Rune_IDs.SHAEL, Rune_IDs.UM, Rune_IDs.TIR],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.POLEARM, Equipment_IDs.SWORD],
    character_level: 47,
    stats: ['10% Chance to cast Level 17 Chain Lightning on striking', '7% Chance to cast Level 13 Static Field on striking', '+20% Increased Attack Speed', '+180-220% Enhanced Damage', 'Ignore Target\'s Defense', '-35% to Enemy Lightning Resistance', '25% Chance of Open Wounds', '+9-11 Magic Absorb', '+2 to Mana after each Kill', 'Level 18 Summon Spirit Wolf (30/30 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-death`,
    name: 'Death',
    runes: [Rune_IDs.HEL, Rune_IDs.EL, Rune_IDs.VEX, Rune_IDs.ORT, Rune_IDs.GUL],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.SWORD],
    character_level: 55,
    stats: ['100% Chance to cast Level 44 Chain Lightning when you Die', '25% Chance to cast Level 18 Glacial Spike on attack', 'Indestructible', '+300-385% Enhanced Damage', '20% Bonus to Attack Rating', '+50 to Attack Rating', 'Adds 1-50 Lightning Damage', '7% Mana stolen per hit', '50% Chance of Crushing Blow', '0.5% Deadly Strike (Based on Character Level)', '+1 to Light Radius', 'Level 22 Blood Golem (15/15 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-destruction`,
    name: 'Destruction',
    runes: [Rune_IDs.VEX, Rune_IDs.LO, Rune_IDs.BER, Rune_IDs.JAH, Rune_IDs.KO],
    equipment: [Equipment_IDs.POLEARM, Equipment_IDs.SWORD],
    character_level: 65,
    stats: ['23% Chance to cast Level 12 Volcano on striking', '5% Chance to cast Level 23 Molten Boulder on striking', '100% Chance to cast Level 45 Meteor when you Die', '15% Chance to cast Level 22 Nova on attack', '+350% Enhanced Damage', 'Ignore Target\'s Defense', 'Adds 100-180 Magic Damage', '7% Mana stolen per hit', '20% Chance of Crushing Blow', '20% Deadly Strike', 'Prevent Monster Heal', '+10 to Dexterity'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-doom`,
    name: 'Doom',
    runes: [Rune_IDs.HEL, Rune_IDs.OHM, Rune_IDs.UM, Rune_IDs.LO, Rune_IDs.CHAM],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H, Equipment_IDs.POLEARM],
    character_level: 67,
    stats: ['5% Chance to cast Level 18 Volcano on striking', 'Level 12 Holy Freeze Aura When Equipped', '+2 to All Skills', '+45% Increased Attack Speed', '+330-370% Enhanced Damage', '-40-60% to Enemy Cold Resistance', '20% Deadly Strike', '25% Chance of Open Wounds', 'Prevent Monster Heal', 'Freezes target +3', 'Requirements -20%'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-edge`,
    name: 'Edge',
    runes: [Rune_IDs.TIR, Rune_IDs.TAL, Rune_IDs.AMN],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 25,
    stats: ['Level 15 Thorns Aura When Equipped', '+35% Increased Attack Speed', '+320-380% Damage to Demons', '+280% Damage to Undead', '+75 Poison Damage over 5 seconds', '7% Life stolen per hit', 'Prevent Monster Heal', '5-10 to all Attributes', '+2 to Mana after each Kill', 'Reduces all Vendor Prices 15%'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-eternity`,
    name: 'Eternity',
    runes: [Rune_IDs.AMN, Rune_IDs.BER, Rune_IDs.IST, Rune_IDs.SOL, Rune_IDs.SUR],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 63,
    stats: ['Indestructible', '+260-310% Enhanced Damage', '+9 to Minimum Damage', '7% Life stolen per hit', '20% Chance of Crushing Blow', 'Hit Blinds Target', 'Slows Target by 33%', 'Replenish Life +16', 'Regenerate Mana 16%', 'Cannot Be Frozen', '30% Better Chance of Getting Magic Items', 'Level 8 Revive (88/88 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-faith`,
    name: 'Faith',
    runes: [Rune_IDs.OHM, Rune_IDs.JAH, Rune_IDs.LEM, Rune_IDs.ELD],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 65,
    stats: ['Level 12-15 Fanaticism Aura When Equipped', '+1-2 to All Skills', '+330% Enhanced Damage', 'Ignore Target\'s Defense', '300% Bonus to Attack Rating', '+75% Damage to Undead', '+50 to Attack Rating against Undead', '+120 Fire Damage', 'All Resistances +15', '10% Reanimate as: Returned', '75% Extra Gold from Monsters'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-famine`,
    name: 'Famine',
    runes: [Rune_IDs.FAL, Rune_IDs.OHM, Rune_IDs.ORT, Rune_IDs.JAH],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H],
    character_level: 65,
    stats: ['+30% Increased Attack Speed', '+320-370% Enhanced Damage', 'Ignore Target\'s Defense', 'Adds 180-200 Magic Damage', 'Adds 50-200 Fire Damage', 'Adds 51-250 Lightning Damage', 'Adds 50-200 Cold Damage', '12% Life stolen per hit', 'Prevent Monster Heal', '+10 to Strength'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-fortitude`,
    name: 'Fortitude',
    runes: [Rune_IDs.EL, Rune_IDs.SOL, Rune_IDs.DOL, Rune_IDs.LO],
    equipment: _ALL_WEAPONS,
    character_level: 59,
    stats: ['20% Chance to cast Level 15 Chilling Armor when struck', '+25% Faster Cast Rate', '+300% Enhanced Damage', '+9 to Minimum Damage', '+50 to Attack Rating', '20% Deadly Strike', 'Hit Causes Monster to Flee 25%', '+200% Enhanced Defense', '+1-1.5 to Life (Based on Character Level)', 'All Resistances +25-30', '12% Damage Taken Goes To Mana', '+1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-fury`,
    name: 'Fury',
    runes: [Rune_IDs.JAH, Rune_IDs.GUL, Rune_IDs.ETH],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 65,
    stats: ['+40% Increased Attack Speed', '+209% Enhanced Damage', 'Ignore Target\'s Defense', '-25% Target Defense', '20% Bonus to Attack Rating', '6% Life stolen per hit', '33% Deadly Strike', '66% Chance of Open Wounds', '+5 to Frenzy (Barbarian Only)', 'Prevent Monster Heal'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-grief`,
    name: 'Grief',
    runes: [Rune_IDs.ETH, Rune_IDs.TIR, Rune_IDs.LO, Rune_IDs.MAL, Rune_IDs.RAL],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.SWORD],
    character_level: 59,
    stats: ['35% Chance to cast Level 15 Venom on striking', '+30-40% Increased Attack Speed', 'Damage +340-400', 'Ignore Target\'s Defense', '-25% Target Defense', '+1.875% Damage to Demons (Based on Character Level)', 'Adds 5-30 Fire Damage', '-20-25% to Enemy Poison Resistance', '20% Deadly Strike', 'Prevent Monster Heal', '+2 to Mana after each Kill', '+10-15 Life after each Kill'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-hand-of-justice`,
    name: 'Hand of Justice',
    runes: [Rune_IDs.SUR, Rune_IDs.CHAM, Rune_IDs.AMN, Rune_IDs.LO],
    equipment: _ALL_WEAPONS,
    character_level: 67,
    stats: ['100% Chance to cast Level 36  Blaze when you Level-Up', '100% Chance to cast Level 48  Meteor when you Die', 'Level 16 Holy Fire Aura When Equipped', '33% Increased Attack Speed', '+280-330% Enhanced Damage', 'Ignore Target\'s Defense', '-20% to Enemy Fire Resistance', '7% Life stolen per hit', '20% Deadly Strike', 'Hit Blinds Target', 'Freezes Target +3'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-harmony`,
    name: 'Harmony',
    runes: [Rune_IDs.TIR, Rune_IDs.ITH, Rune_IDs.SOL, Rune_IDs.KO],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 39,
    stats: ['Level 10 Vigor Aura When Equipped', '+200-275% Enhanced Damage', '+9 to Minimum Damage', '+9 to Maximum Damage', 'Adds 55-160 Fire Damage', 'Adds 55-160 Lightning Damage', 'Adds 55-160 Cold Damage', '+2-6 to Valkyrie', '+10 to Dexterity', 'Regenerate Mana 20%', '+2 to Mana after each Kill', '+2 to Light Radius', 'Level 20 Revive (25/25 Charges)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-heart-of-the-oak`,
    name: 'Heart of the Oak',
    runes: [Rune_IDs.KO, Rune_IDs.VEX, Rune_IDs.PUL, Rune_IDs.THUL],
    equipment: [Equipment_IDs.MACE, Equipment_IDs.STAFF],
    character_level: 55,
    stats: ['+3 to All Skills', '+40% Faster Cast Rate', '+75% Damage to Demons', '+100 to Attack Rating against Demons', 'Adds 3-14 Cold Damage', '7% Mana stolen per hit', '+10 to Dexterity', 'Replenish Life +20', 'Increase Maximum Mana 15%', 'All Resistances +30-40', 'Level 4 Oak Sage (25/25 Charges)', 'Level 14 Raven (60/60 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-holy-thunder`,
    name: 'Holy Thunder',
    runes: [Rune_IDs.ETH, Rune_IDs.RAL, Rune_IDs.ORT, Rune_IDs.TAL],
    equipment: [Equipment_IDs.SCEPTER],
    character_level: 23,
    stats: ['+60% Enhanced Damage', '+10 to Maximum Damage', '-25% Target Defense', 'Adds 5-30 Fire Damage', 'Adds 21-110 Lightning Damage', '+75 Poison Damage over 5 seconds', '+3 to Holy Shock (Paladin Only)', '+5% to Maximum Lightning Resist', 'Lightning Resist +60%', 'Level 7 Chain Lightning (60/60 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-honor`,
    name: 'Honor',
    runes: [Rune_IDs.AMN, Rune_IDs.EL, Rune_IDs.ITH, Rune_IDs.TIR, Rune_IDs.SOL],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 27,
    stats: ['+1 to All Skills', '+160% Enhanced Damage', '+9 to Minimum Damage', '+9 to Maximum Damage', '+250 to Attack Rating', '7% Life stolen per hit', '25% Deadly Strike', '+10 to Strength', 'Replenish Life +10', '+2 to Mana after each Kill', '+1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-ice`,
    name: 'Ice',
    runes: [Rune_IDs.AMN, Rune_IDs.SHAEL, Rune_IDs.JAH, Rune_IDs.LO],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 65,
    stats: ['100% Chance to cast Level 40 Blizzard when you Level-Up', '25% Chance to cast Level 22 Frost Nova on striking', 'Level 18 Holy Freeze Aura When Equipped', '20% Increased Attack Speed', '+140-210% Enhanced Damage', 'Ignore Target\'s Defense', '+25-30% to Cold Skill Damage', '-20% to Enemy Cold Resistance', '7% Life stolen per hit', '20% Deadly Strike', '3.125% Extra gold from Monsters (Based on Character Level)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-infinity`,
    name: 'Infinity',
    runes: [Rune_IDs.BER, Rune_IDs.MAL, Rune_IDs.BER, Rune_IDs.IST],
    equipment: [Equipment_IDs.AMAZON_SPEAR, Equipment_IDs.POLEARM, Equipment_IDs.SPEAR],
    character_level: 63,
    stats: ['50% Chance to cast Level 20 Chain Lightning when you Kill an Enemy', 'Level 12  Conviction Aura When Equipped', '+35% Faster Run/Walk', '+255-325% Enhanced Damage', '-45-55% to Enemy Lightning Resistance', '40% Chance of Crushing Blow', 'Prevent Monster Heal', '0.5 to Vitality (Based on Character Level)', '30% Better Chance of Getting Magic Items', 'Level 21 Cyclone Armor (30/30 Charges)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-insight`,
    name: 'Insight',
    runes: [Rune_IDs.RAL, Rune_IDs.TIR, Rune_IDs.TAL, Rune_IDs.SOL],
    equipment: [Equipment_IDs.AMAZON_BOW, Equipment_IDs.BOW, Equipment_IDs.CROSSBOW, Equipment_IDs.POLEARM, Equipment_IDs.STAFF],
    character_level: 27,
    stats: ['Level 12-17 Meditation Aura When Equipped', '+35% Faster Cast Rate', '+200-260% Enhanced Damage', '+9 to Minimum Damage', '180-250% Bonus to Attack Rating', 'Adds 5-30 Fire Damage', '+75 Poison Damage over 5 seconds', '+1-6 to Critical Strike', '+5 to All Attributes', '+2 to Mana after each Kill', '23% Better Chance of Getting Magic Items'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-kings-grace`,
    name: 'King\'s Grace',
    runes: [Rune_IDs.AMN, Rune_IDs.RAL, Rune_IDs.THUL],
    equipment: [Equipment_IDs.SCEPTER, Equipment_IDs.SWORD],
    character_level: 25,
    stats: ['+100% Enhanced Damage', '+150 to Attack Rating', '+100% Damage to Demons', '+100 to Attack Rating against Demons', '+50% Damage to Undead', '+100 to Attack Rating against Undead', 'Adds 5-30 Fire damage', 'Adds 3-14 Cold Damage', '7% Life stolen per hit'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-kingslayer`,
    name: 'Kingslayer',
    runes: [Rune_IDs.MAL, Rune_IDs.UM, Rune_IDs.GUL, Rune_IDs.FAL],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.SWORD],
    character_level: 53,
    stats: ['+30% Increased Attack speed', '+230-270% Enhanced Damage', '-25% Target Defense', '20% Bonus to Attack Rating', '33% Chance of Crushing Blow', '50% Chance of Open Wounds', '+1 to Vengeance', 'Prevent Monster Heal', '+10 to Strength', '40% Extra Gold from Monsters'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-last-wish`,
    name: 'Last Wish',
    runes: [Rune_IDs.JAH, Rune_IDs.MAL, Rune_IDs.JAH, Rune_IDs.SUR, Rune_IDs.JAH, Rune_IDs.BER],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H, Equipment_IDs.SWORD],
    character_level: 65,
    stats: ['6% Chance to cast Level 11 Fade when struck', '10% Chance to cast Level 18 Life Tap on striking', '20% Chance to cast Level 20 Charged Bolt on attack', 'Level 17 Might Aura When Equipped', '+330-375% Enhanced Damage', 'Ignores Target\'s Defense', '60-70% Chance of Crushing Blow', 'Prevent Monster Heal', 'Hit Blinds Target', '0.5% Better Chance of Getting Magic Items (Based on Character Level)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-lawbringer`,
    name: 'Lawbringer',
    runes: [Rune_IDs.AMN, Rune_IDs.LEM, Rune_IDs.KO],
    equipment: [Equipment_IDs.HAMMER_1H, Equipment_IDs.HAMMER_2H, Equipment_IDs.SCEPTER, Equipment_IDs.SWORD],
    character_level: 43,
    stats: ['20% Chance to cast Level 15 Decrepify on striking', 'Level 16-18 Sanctuary Aura When Equipped', '-50% Target Defense', 'Adds 150-210 Fire Damage', 'Adds 130-180 Cold Damage', '7% Life stolen per hit', 'Slain Monsters Rest in Peace', '+200-250 Defense vs. Missile', '+10 to Dexterity', '75% Extra Gold from Monsters'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-leaf`,
    name: 'Leaf',
    runes: [Rune_IDs.TIR, Rune_IDs.RAL],
    equipment: [Equipment_IDs.STAFF],
    character_level: 19,
    stats: ['+3 to Fire Skills', 'Adds 5-30 Fire Damage', '+3 to Inferno (Sorceress Only)', '+3 to Warmth (Sorceress Only)', '+3 to Fire Bolt (Sorceress Only)', '+2 Defense (Based on Character Level)', 'Cold Resist +33%', '+2 to Mana after each Kill'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-malice`,
    name: 'Malice',
    runes: [Rune_IDs.ITH, Rune_IDs.EL, Rune_IDs.ETH],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 15,
    stats: ['+33% Enhanced Damage', '+9 to Maximum Damage', '-25% Target Defense', '+50 to Attack Rating', '100% Chance of Open Wounds', 'Prevent Monster Heal', '-100 to Monster Defense Per Hit', 'Replenish Life -5'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-melody`,
    name: 'Melody',
    runes: [Rune_IDs.SHAEL, Rune_IDs.KO, Rune_IDs.NEF],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 39,
    stats: ['+3 to Bow and Crossbow Skills (Amazon Only)', '+20% Increased Attack Speed', '+50% Enhanced Damage', '+300% Damage to Undead', '+3 to Slow Missiles (Amazon Only)', '+3 to Dodge (Amazon Only)', '+3 to Critical Strike (Amazon Only)', 'Knockback', '+10 to Dexterity'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-memory`,
    name: 'Memory',
    runes: [Rune_IDs.LUM, Rune_IDs.IO, Rune_IDs.SOL, Rune_IDs.ETH],
    equipment: [Equipment_IDs.STAFF],
    character_level: 37,
    stats: ['+3 to Sorceress Skill Levels', '+33% Faster Cast Rate', '+9 to Minimum Damage', '-25% Target Defense', '+3 to Energy Shield (Sorceress Only)', '+2 to Static Field (Sorceress Only)', '+50% Enhanced Defense', '+10 to Vitality', '+10 to Energy', 'Increase Maximum Mana 20%', 'Magic Damage Reduced by 7'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-mist`,
    name: 'Mist',
    runes: [Rune_IDs.CHAM, Rune_IDs.SHAEL, Rune_IDs.GUL, Rune_IDs.THUL, Rune_IDs.ITH],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 67,
    stats: ['Level 8-12 Concentration Aura When Equipped', '+3 To All Skills', '20% Increased Attack Speed', '+100% Piercing Attack', '+325-375% Enhanced Damage', '+9 To Maximum Damage', '20% Bonus to Attack Rating', 'Adds 3-14 Cold Damage', 'Freeze Target +3', '+24 Vitality', 'All Resistances +40'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-oath`,
    name: 'Oath',
    runes: [Rune_IDs.SHAEL, Rune_IDs.PUL, Rune_IDs.MAL, Rune_IDs.LUM],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.MACE, Equipment_IDs.SWORD],
    character_level: 59,
    stats: ['30% Chance to cast Level 20 Bone Spirit on striking', 'Indestructible', '+50% Increased Attack Speed', '+210-340% Enhanced Damage', '+75% Damage to Demons', '+100 to Attack Rating against Demons', 'Prevent Monster Heal', '+10 to Energy', '+10-15 Magic Absorb', 'Level 16 Heart of Wolverine (20/20 Charges)', 'Level 17 Iron Golem (14/14 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-obedience`,
    name: 'Obedience',
    runes: [Rune_IDs.HEL, Rune_IDs.KO, Rune_IDs.THUL, Rune_IDs.ETH, Rune_IDs.FAL],
    equipment: [Equipment_IDs.AMAZON_SPEAR, Equipment_IDs.POLEARM, Equipment_IDs.SPEAR],
    character_level: 41,
    stats: ['30% Chance to cast Level 21 Enchant when you Kill an Enemy', '+40% Faster Hit Recovery', '+370% Enhanced Damage', '-25% Target Defense', 'Adds 3-14 Cold Damage', '-25% to Enemy Fire Resistance', '40% Chance of Crushing Blow', '+200-300 Defense', '+10 to Strength', '+10 to Dexterity', 'All Resistances +20-30', 'Requirements -20%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-obsession`,
    name: 'Obsession',
    runes: [Rune_IDs.ZOD, Rune_IDs.IST, Rune_IDs.LEM, Rune_IDs.LUM, Rune_IDs.IO, Rune_IDs.NEF],
    equipment: [Equipment_IDs.STAFF],
    character_level: 69,
    stats: ['Indestructible', '24% Chance to cast level 10 Weaken when struck', '+4 To All Skills', '+65% Faster Cast Rate', '+60% Faster Hit Recovery', 'Knockback', '+10 to Vitality', '+10 to Energy', 'Increase Maximum Life 15-25%', 'Regenerate Mana 15-30%', 'All Resistances +60-70', '75% Extra Gold from Monsters', '30% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-passion`,
    name: 'Passion',
    runes: [Rune_IDs.DOL, Rune_IDs.ORT, Rune_IDs.ELD, Rune_IDs.LEM],
    equipment: _ALL_WEAPONS,
    character_level: 43,
    stats: ['+25% Increased Attack speed', '+160-210% Enhanced Damage', '50-80% Bonus to Attack Rating', '+75% Damage to Undead', '+50 to Attack Rating against Undead', 'Adds 1-50 Lightning Damage', '+1 to Berserk', '+1 to Zeal', 'Hit Blinds Target +10', 'Hit Causes Monster to Flee 25%', '75% Extra Gold from Monsters', 'Level 3 Heart of Wolverine (12/12 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-pattern`,
    name: 'Pattern',
    runes: [Rune_IDs.TAL, Rune_IDs.ORT, Rune_IDs.THUL],
    equipment: [Equipment_IDs.ASSASSIN_KATAR],
    character_level: 23,
    stats: ['+30% Faster Block Rate', '+40-80% Enhanced Damage', '10% Bonus to Attack Rating', 'Adds 17-32 Fire Damage', 'Adds 1-50 Lightning Damage', 'Adds 3-14 Cold Damage', '+75 Poison Damage over 5 Seconds', '+6 to Strength', '+6 to Dexterity', 'All Resistances +15'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-phoenix`,
    name: 'Phoenix',
    runes: [Rune_IDs.VEX, Rune_IDs.VEX, Rune_IDs.LO, Rune_IDs.JAH],
    equipment: _ALL_WEAPONS,
    character_level: 47,
    stats: ['100% Chance to cast Level 40 Blaze when you Level-Up', '40% Chance to cast Level 22 Firestorm on striking', 'Level 10-15 Redemption Aura When Equipped', '+350-400% Enhanced Damage', 'Ignore Target\'s Defense', '14% Mana stolen per hit', '-28% to Enemy Fire Resistance', '20% Deadly Strike', '+350-400 Defense vs. Missile', '+15-21 Fire Absorb'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-plague`,
    name: 'Plague',
    runes: [Rune_IDs.CHAM, Rune_IDs.SHAEL, Rune_IDs.UM],
    equipment: [Equipment_IDs.ASSASSIN_KATAR, Equipment_IDs.DAGGER, Equipment_IDs.SWORD],
    character_level: 67,
    stats: ['25% Chance to Cast Level 15 Poison Nova on striking', '20% Chance to Cast Level 12 Lower Resist when struck', 'Level 13-17 Cleansing Aura when equipped', '+1-2 to All Skills', '+20% Increased Attack Speed', '+220-320% Enhanced Damage', '-23% to Enemy Poison Resistance', '+0.3% Deadly Strike (Based on Character Level)', '25% Chance of Open Wounds', 'Freezes Target +3'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-pride`,
    name: 'Pride',
    runes: [Rune_IDs.CHAM, Rune_IDs.SUR, Rune_IDs.IO, Rune_IDs.LO],
    equipment: [Equipment_IDs.AMAZON_SPEAR, Equipment_IDs.POLEARM, Equipment_IDs.SPEAR],
    character_level: 67,
    stats: ['25% Chance to cast Level 17 Fire Wall when struck', 'Level 16-20 Concentration Aura When Equipped', '260-300% Bonus to Attack Rating', '+1% Damage to Demons (Based on Character Level)', 'Adds 50-280 Lightning Damage', '20% Deadly Strike', 'Hit Blinds Target', 'Freezes Target +3', '+10 to Vitality', 'Replenish Life +8', '1.875% Extra Gold from Monsters (Based on Character Level)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-rift`,
    name: 'Rift',
    runes: [Rune_IDs.HEL, Rune_IDs.KO, Rune_IDs.LEM, Rune_IDs.GUL],
    equipment: [Equipment_IDs.POLEARM, Equipment_IDs.SCEPTER],
    character_level: 43,
    stats: ['20% Chance to cast Level 16 Tornado on striking', '16% Chance to cast Level 21 Frozen Orb on attack', '20% Bonus to Attack Rating', 'Adds 160-250 Magic Damage', 'Adds 60-180 Fire Damage', '+5-10 to Strength', '+15-20 to Dexterity', '+5-10 to Vitality', '+5-10 to Energy', '38% Damage Taken Goes To Mana', '75% Extra Gold from Monsters', 'Level 15 Iron Maiden (40/40 Charges)', 'Requirements -20%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-silence`,
    name: 'Silence',
    runes: [Rune_IDs.DOL, Rune_IDs.ELD, Rune_IDs.HEL, Rune_IDs.IST, Rune_IDs.TIR, Rune_IDs.VEX],
    equipment: _ALL_WEAPONS,
    character_level: 55,
    stats: ['+2 to All Skills', '+20% Increased Attack Speed', '+20% Faster Hit Recovery', '+200% Enhanced Damage', '+75% Damage to Undead', '+50 to Attack Rating against Undead', '11% Mana stolen per hit', 'Hit Blinds Target +33', 'Hit Causes Monster to Flee 25%', 'All Resistances +75', '+2 to Mana after each Kill', '30% Better Chance of Getting Magic Items', 'Requirements -20%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-spirit`,
    name: 'Spirit',
    runes: [Rune_IDs.TAL, Rune_IDs.THUL, Rune_IDs.ORT, Rune_IDs.AMN],
    equipment: [Equipment_IDs.SWORD],
    character_level: 25,
    stats: ['+2 to All Skills', '+25-35% Faster Cast Rate', '+55% Faster Hit Recovery', 'Adds 1-50 Lightning Damage', 'Adds 3-14 Cold Damage', '+75 Poison Damage over 5 seconds', '7% Life stolen per hit', '+250 Defense vs. Missile', '+22 to Vitality', '+89-112 to Mana', '+3-8 Magic Absorb'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-steel`,
    name: 'Steel',
    runes: [Rune_IDs.TIR, Rune_IDs.EL],
    equipment: [Equipment_IDs.AXE, Equipment_IDs.MACE, Equipment_IDs.SWORD],
    character_level: 13,
    stats: ['+25% Increased Attack Speed', '+20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '+2 to Mana after each Kill', '+1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-strength`,
    name: 'Strength',
    runes: [Rune_IDs.AMN, Rune_IDs.TIR],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 25,
    stats: ['+35% Enhanced Damage', '7% Life stolen per hit', '25% Chance of Crushing Blow', '+20 to Strength', '+10 to Vitality', '+2 to Mana after each Kill'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-unbending-will`,
    name: 'Unbending Will',
    runes: [Rune_IDs.FAL, Rune_IDs.IO, Rune_IDs.ITH, Rune_IDs.ELD, Rune_IDs.EL, Rune_IDs.HEL],
    equipment: [Equipment_IDs.SWORD],
    character_level: 41,
    stats: ['18% Chance to cast Level 18 Taunt on striking', '+3 To Combat Skills (Barbarian Only)', '+20-30% Increased Attack Speed (varies)', '+300-350% Enhanced Damage', '+9 To Maximum Damage', '+50 To Attack Rating', '+75% Damage to Undead', '+50 Attack Rating Against Undead', '8-10% Life Stolen Per Hit (varies)', 'Prevent Monster Heal', '+10 To Strength', '+10 To Vitality', 'Damage Reduced By 8', '+1 Light Radius', 'Requirements -20%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-venom`,
    name: 'Venom',
    runes: [Rune_IDs.TAL, Rune_IDs.DOL, Rune_IDs.MAL],
    equipment: _ALL_WEAPONS,
    character_level: 49,
    stats: ['Ignore Target\'s Defense', '+273 Poison Damage over 6 seconds', '7% Mana stolen per hit', 'Prevent Monster Heal', 'Hit Causes Monster to Flee 25%', 'Level 13 Poison Nova (11/11 Charges)', 'Level 15 Poison Explosion (27/27 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-voice-of-reason`,
    name: 'Voice of Reason',
    runes: [Rune_IDs.LEM, Rune_IDs.KO, Rune_IDs.EL, Rune_IDs.ELD],
    equipment: [Equipment_IDs.MACE, Equipment_IDs.SWORD],
    character_level: 43,
    stats: ['15% Chance to cast Level 13 Frozen Orb on striking', '18% Chance to cast Level 20 Ice Blast on striking', '+50 to Attack Rating', '+220-350% Damage to Demons', '+355-375% Damage to Undead', '+50 to Attack Rating against Undead', 'Adds 100-220 Cold Damage', '-24% to Enemy Cold Resistance', '+10 to Dexterity', 'Cannot Be Frozen', '75% Extra Gold from Monsters', '+1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-white`,
    name: 'White',
    runes: [Rune_IDs.DOL, Rune_IDs.IO],
    equipment: [Equipment_IDs.WAND],
    character_level: 47,
    stats: ['+3 to Poison and Bone Skills (Necromancer Only)', '+20% Faster Cast Rate', '+2 to Bone Spear (Necromancer Only)', '+4 to Skeleton Mastery (Necromancer Only)', '+3 to Bone Armor (Necromancer Only)', 'Hit Causes Monster to Flee 25%', '+10 to Vitality', '+13 to Mana', 'Magic Damage Reduced by 4'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-wind`,
    name: 'Wind',
    runes: [Rune_IDs.SUR, Rune_IDs.EL],
    equipment: _ALL_MELEE_WEAPONS,
    character_level: 61,
    stats: ['10% Chance to cast Level 9 Tornado on striking', '+20% Faster Run/Walk', '+40% Increased Attack Speed', '+15% Faster Hit Recovery', '+120-160% Enhanced Damage', '-50% Target Defense', '+50 to Attack Rating', 'Hit Blinds Target', '+1 to Light Radius', 'Level 13 Twister (127/127 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-wrath`,
    name: 'Wrath',
    runes: [Rune_IDs.PUL, Rune_IDs.LUM, Rune_IDs.BER, Rune_IDs.MAL],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 63,
    stats: ['30% Chance to cast Level 1 Decrepify on striking', '5% Chance to cast Level 10 Life Tap on striking', '+375% Damage to Demons', '+100 to Attack Rating against Demons', '+250-300% Damage to Undead', 'Adds 85-120 Magic Damage', 'Adds 41-240 Lightning Damage', '20% Chance of Crushing Blow', 'Prevent Monster Heal', '+10 to Energy', 'Cannot Be Frozen'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-zephyr`,
    name: 'Zephyr',
    runes: [Rune_IDs.ORT, Rune_IDs.ETH],
    equipment: _ALL_MISSILE_WEAPONS,
    character_level: 21,
    stats: ['7% Chance to cast Level 1 Twister when struck', '+25% Faster Run/Walk', '+25% Increased Attack Speed', '+33% Enhanced Damage', '-25% Target Defense', '+66 to Attack Rating', 'Adds 1-50 Lightning Damage', '+25 Defense'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-mania`,
    name: 'Mania',
    runes: [Rune_IDs.SHAEL, Rune_IDs.KO, Rune_IDs.ELD],
    equipment: _ALL_WEAPONS,
    character_level: 39,
    stats: ['5% Chance to cast level 1 Burst of Speed on striking', 'Level 1 Fanaticism Aura', '+30% Increased Attack Speed', '+180-200% Enhanced Damage', '+75% Damage to Undead', '+50 to Attack Rating against Undead', '+10 to Dexterity'],
    has_aura: true,
    is_ladder_only: true
  },
  {
    id: `${_WEAPON_PREFIX}-mosaic`,
    name: 'Mosaic (DISABLED IN LADDER)',
    runes: [Rune_IDs.MAL, Rune_IDs.GUL, Rune_IDs.AMN],
    equipment: [Equipment_IDs.ASSASSIN_KATAR],
    character_level: 53,
    stats: ['DISABLED IN LADDER', '+50% chance for finishing moves to not consume charges', 'When a finisher is executed this way, it now refreshes the expiration timer of the stack', '+2 to Martial Arts (Assassin only)', '+20% Increased Attack Speed', '+200-250% Enhanced Damage', '+20% Bonus to Attack Rating', '7% Life Steal', '+8-15% to Cold Skill Damage', '+8-15% to Lightning Skill Damage', '+8-15% to Fire Skill Damage', 'Prevent Monster Heal'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_SHIELD_PREFIX}-ancients-pledge`,
    name: 'Ancients Pledge',
    runes: [Rune_IDs.RAL, Rune_IDs.ORT, Rune_IDs.TAL],
    equipment: _ALL_SHIELDS,
    character_level: 21,
    stats: ['+50% Enhanced Defense', 'Cold Resist + 43%', 'Lightning Resist + 48%', 'Fire Resist + 48%', 'Poison Resist + 48%', '10% Damage Taken Goes To Mana'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-dragon`,
    name: 'Dragon',
    runes: [Rune_IDs.SUR, Rune_IDs.LO, Rune_IDs.SOL],
    equipment: _ALL_SHIELDS,
    character_level: 61,
    stats: ['20% Chance to cast Level 18 Venom when struck', '12% Chance to cast Level 15 Hydra on striking', 'Level 14 Holy Fire Aura When Equipped', '+360 Defense', '+230 Defense vs. Missile', '+0.375 to Strength (Based on Character Level)', '3-5 to all Attributes', '+50 to Mana', '+5% to Maximum Lightning Resist', 'Damage Reduced by 7'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-dream`,
    name: 'Dream',
    runes: [Rune_IDs.IO, Rune_IDs.JAH, Rune_IDs.PUL],
    equipment: _ALL_SHIELDS,
    character_level: 65,
    stats: ['10% Chance to cast Level 15 Confuse when struck', 'Level 15 Holy Shock Aura When Equipped', '+20-30% Faster Hit Recovery', '+30% Enhanced Defense', '+150-220 Defense', '+10 to Vitality', '+50 to Life', '+0.625 to Mana (Based on Character Level)', 'All Resistances +5-20', '12-25% Better Chance of Getting Magic Items'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-exile`,
    name: 'Exile',
    runes: [Rune_IDs.VEX, Rune_IDs.OHM, Rune_IDs.IST, Rune_IDs.DOL],
    equipment: [Equipment_IDs.PALADIN_SHIELD],
    character_level: 57,
    stats: ['15% Chance to cast Level 5 Life Tap on striking', 'Level 13-16  Defiance Aura When Equipped', '+2 to Offensive Auras (Paladin Only)', '+30% Faster Block Rate', 'Freezes Target', '220-260% Enhanced Defense', 'Replenish Life +7', '+5% to Maximum Cold Resist', '+5% to Maximum Fire Resist', '25% Better Chance of Getting Magic Items', 'Repairs 1 Durability in 4 seconds'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-phoenix`,
    name: 'Phoenix',
    runes: [Rune_IDs.VEX, Rune_IDs.VEX, Rune_IDs.LO, Rune_IDs.JAH],
    equipment: _ALL_SHIELDS,
    character_level: 65,
    stats: ['100% Chance to cast Level 40 Blaze when you Level-Up', '40% Chance to cast Level 22 Firestorm on striking', 'Level 10-15  Redemption Aura When Equipped', '+350-400% Enhanced Damage', '+50 to Life', '-28% to Enemy Fire Resistance', '+5% to maximum Lightning Resist', '+10% to maximum Fire Resist', '+350-400 Defense vs. Missile', '15-21 Fire Absorb'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-rhyme`,
    name: 'Rhyme',
    runes: [Rune_IDs.SHAEL, Rune_IDs.ETH],
    equipment: _ALL_SHIELDS,
    character_level: 29,
    stats: ['+40% Faster Block Rate', '20% Increased Chance of Blocking', 'Regenerate Mana 15%', 'All Resistances +25', 'Cannot Be Frozen', '50% Extra Gold from Monsters', '25% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-sanctuary`,
    name: 'Sanctuary',
    runes: [Rune_IDs.KO, Rune_IDs.KO, Rune_IDs.MAL],
    equipment: _ALL_SHIELDS,
    character_level: 49,
    stats: ['+20% Faster Hit Recovery', '+20% Faster Block Rate', '20% Increased Chance of Blocking', '+130-160% Enhanced Damage', '+250 Defense vs. Missile', '+20 to Dexterity', 'All Resistances +50-70', 'Magic Damage Reduced by 7', 'Level 12 Slow Missiles (60/60 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-spirit`,
    name: 'Spirit',
    runes: [Rune_IDs.TAL, Rune_IDs.THUL, Rune_IDs.ORT, Rune_IDs.AMN],
    equipment: _ALL_SHIELDS,
    character_level: 25,
    stats: ['+2 to All Skills', '+25-35% Faster Cast Rate', '+55% Faster Hit Recovery', '+250 Defense vs. Missile', '+22 to Vitality', '+89-112 to Mana', 'Cold Resist +35%', 'Lightning Resist +35%', 'Poison Resist +35%', '+3-8 Magic Absorb', 'Attacker Takes Damage of 14'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-splendor`,
    name: 'Splendor',
    runes: [Rune_IDs.ETH, Rune_IDs.LUM],
    equipment: _ALL_SHIELDS,
    character_level: 37,
    stats: ['+1 to All Skills', '+10% Faster Cast Rate', '+20% Faster Block Rate', '+60-100% Enhanced Defense', '+10 to Energy', 'Regenerate Mana 15%', '50% Extra Gold from Monsters', '20% Better Chance of Getting Magic Items', '+3 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-dream`,
    name: 'Dream',
    runes: [Rune_IDs.IO, Rune_IDs.JAH, Rune_IDs.PUL],
    equipment: _ALL_HELMETS,
    character_level: 65,
    stats: ['10% Chance to cast Level 15 Confuse when struck', 'Level 15 Holy Shock Aura When Equipped', '+20-30% Faster Hit Recovery', '+30% Enhanced Defense', '+150-220 Defense', '+10 to Vitality', 'Increase Maximum Life 5%', '+0.625 to Mana (Based on Character Level)', 'All Resistances +5-20', '12-25% Better Chance of Getting Magic Items'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-delirium`,
    name: 'Delirium',
    runes: [Rune_IDs.LEM, Rune_IDs.IST, Rune_IDs.IO],
    equipment: _ALL_HELMETS,
    character_level: 51,
    stats: ['1% Chance to cast Level 50 Delirium when struck', '6% Chance to cast Level 14 Mind Blast when struck', '14% Chance to cast Level 13 Terror when struck', '11% Chance to cast Level 18 Confuse on striking', '+2 to All Skills', '+261 Defense', '+10 to Vitality', '50% Extra Gold from Monsters', '25% Better Chance of Getting Magic Items', 'Level 17 Attract (60/60 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-flickering-flame`,
    name: 'Flickering Flame',
    runes: [Rune_IDs.NEF, Rune_IDs.PUL, Rune_IDs.VEX],
    equipment: _ALL_HELMETS,
    character_level: 55,
    stats: ['Level 4-8 Resist Fire Aura When Equipped', '+3 To Fire Skills', '-10-15% to Enemy Fire Resistance', '+30% Enhanced Defense', '+30 Defense Vs. Missile', '+50-75 to Mana', 'Half Freeze Duration', '+5% to Maximum Fire Resist', 'Poison Length Reduced by 50%'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-lore`,
    name: 'Lore',
    runes: [Rune_IDs.ORT, Rune_IDs.SOL],
    equipment: _ALL_HELMETS,
    character_level: 27,
    stats: ['+1 to All Skills', '+10 to Energy', 'Lightning Resist +30%', 'Damage Reduced by 7', '+2 to Mana after each Kill', '+2 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-nadir`,
    name: 'Nadir',
    runes: [Rune_IDs.NEF, Rune_IDs.TIR],
    equipment: _ALL_HELMETS,
    character_level: 13,
    stats: ['+50% Enhanced Defense', '+10 Defense', '+30 Defense vs. Missile', '+5 Strength', '+2 to Mana after each Kill', '-33% Extra Gold from Monsters', '-3 to Light Radius', 'Level 13 Cloak of Shadows (9/9 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-radiance`,
    name: 'Radiance',
    runes: [Rune_IDs.NEF, Rune_IDs.SOL, Rune_IDs.ITH],
    equipment: _ALL_HELMETS,
    character_level: 27,
    stats: ['+75% Enhanced Defense', '+30 Defense vs. Missile', '+10 to Vitality', '+10 to Energy', '+33 to Mana', 'Damage Reduced by 7', 'Magic Damage Reduced by 3', '15% Damage Taken Goes To Mana', '+5 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-wisdom`,
    name: 'Wisdom',
    runes: [Rune_IDs.PUL, Rune_IDs.ITH, Rune_IDs.ELD],
    equipment: _ALL_HELMETS,
    character_level: 45,
    stats: ['+33% Piercing Attack', '+15-25% Bonus to Attack Rating', '4-8% Mana Stolen Per Hit', '+30% Enhanced Defense', '+10 Energy', '15% Slower Stamina Drain', 'Cannot Be Frozen', '+5 Mana After Each Kill', '15% Damage Taken Goes to Mana'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-bulwark`,
    name: 'Bulwark',
    runes: [Rune_IDs.SHAEL, Rune_IDs.IO, Rune_IDs.SOL],
    equipment: _ALL_HELMETS,
    character_level: 35,
    stats: ['+20% Faster Hit Recovery', '+4-6% Life stolen per hit', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Replenish Life +30', 'Damage Reduced by 7', 'Physical Damage Received Reduced by 10-15%'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_HELMET_PREFIX}-cure`,
    name: 'Cure',
    runes: [Rune_IDs.SHAEL, Rune_IDs.IO, Rune_IDs.TAL],
    equipment: _ALL_HELMETS,
    character_level: 35,
    stats: ['Level 1 Cleansing Aura when Equipped', '+20% Faster Hit Recovery', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Poison Resist +40-60%', 'Poison Length Reduced by 50%'],
    has_aura: true,
    is_ladder_only: true
  },
  {
    id: `${_HELMET_PREFIX}-ground`,
    name: 'Ground',
    runes: [Rune_IDs.SHAEL, Rune_IDs.IO, Rune_IDs.ORT],
    equipment: _ALL_HELMETS,
    character_level: 35,
    stats: ['+20% Faster Hit Recovery', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Lightning Resist +40-60%', 'Lightning Absorb +10-15%'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_HELMET_PREFIX}-hearth`,
    name: 'Hearth',
    runes: [Rune_IDs.SHAEL, Rune_IDs.IO, Rune_IDs.THUL],
    equipment: _ALL_HELMETS,
    character_level: 35,
    stats: ['+20% Faster Hit Recovery', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Cold Resist +40-60%', 'Cold Absorb +10-15%', 'Cannot be Frozen'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_HELMET_PREFIX}-temper`,
    name: 'Temper',
    runes: [Rune_IDs.SHAEL, Rune_IDs.IO, Rune_IDs.RAL],
    equipment: _ALL_HELMETS,
    character_level: 35,
    stats: ['+20% Faster Hit Recovery', '+75-100% Enhanced Defense', '+10 to Vitality', 'Increase Maximum Life 5%', 'Fire Resist +40-60%', 'Fire Absorb +10-15%'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_HELMET_PREFIX}-metamorphosis`,
    name: 'Metamorphosis',
    runes: [Rune_IDs.IO, Rune_IDs.CHAM, Rune_IDs.FAL],
    equipment: _ALL_HELMETS,
    character_level: 67,
    stats: ['Werewolf strikes grant Mark for 180 seconds', 'Mark of the Wolf: +30% Bonus to Attack Rating', 'Mark of the Wolf: Increase Maximum Life 40%', 'Werebear strikes grant Mark for 180 seconds', 'Mark of the Bear: +25% Attack Speed', 'Mark of the Bear: Physical Damage Received Reduced by 20%', '+5 to Shape Shifting Skills (Druid only)', '+25% Chance of Crushing Blow', '+50-80% Enhanced Defense', '+10 to Strength', '+10 to Vitality', 'All Resistances +10', 'Cannot be Frozen'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-bone`,
    name: 'Bone',
    runes: [Rune_IDs.SOL, Rune_IDs.UM, Rune_IDs.UM],
    equipment: _ALL_BODY_ARMORS,
    character_level: 47,
    stats: ['15% Chance to cast Level 10 Bone Armor when struck', '15% Chance to cast Level 10 Bone Spear on striking', '+2 to Necromancer Skill Levels', '+100-150 to Mana', 'All Resistances +30', 'Damage Reduced by 7'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-bramble`,
    name: 'Bramble',
    runes: [Rune_IDs.RAL, Rune_IDs.OHM, Rune_IDs.SUR, Rune_IDs.ETH],
    equipment: _ALL_BODY_ARMORS,
    character_level: 61,
    stats: ['Level 15-21 Thorns Aura When Equipped', '+50% Faster Hit Recovery', '+25-50% to Poison Skill Damage', '+300 Defense', 'Increase Maximum Mana 5%', 'Regenerate Mana 15%', '5% to Maximum Cold Resist', 'Fire Resist +30%', 'Poison Resist +100%', '+13 Life after each Kill', 'Level 13 Spirit of Barbs (33/33 Charges)'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-chains-of-honor`,
    name: 'Chains of Honor',
    runes: [Rune_IDs.DOL, Rune_IDs.UM, Rune_IDs.BER, Rune_IDs.IST],
    equipment: _ALL_BODY_ARMORS,
    character_level: 63,
    stats: ['+2 to All Skills', '+200% Damage to Demons', '+100% Damage to Undead', '8% Life stolen per hit', '70% Enhanced Defense', '+20 to Strength', 'Replenish Life +7', 'All Resistances +65', 'Damage Reduced by 8%', '25% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-dragon`,
    name: 'Dragon',
    runes: [Rune_IDs.SUR, Rune_IDs.LO, Rune_IDs.SOL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 61,
    stats: ['20% Chance to cast Level 18 Venom when struck', '12% Chance to cast Level 15 Hydra on striking', 'Level 14 Holy Fire Aura When Equipped', '+360 Defense', '+230 Defense vs. Missile', '+0.375 to Strength (Based on Character Level)', '3-5 to all Attributes', 'Increase Maximum Mana 5%', '+5% to Maximum Lightning Resist', 'Damage Reduced by 7'],
    has_aura: true,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-duress`,
    name: 'Duress',
    runes: [Rune_IDs.SHAEL, Rune_IDs.UM, Rune_IDs.THUL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 47,
    stats: ['+40% Faster Hit Recovery', '+10-20% Enhanced Damage', 'Adds 37-133 Cold Damage', '15% Chance of Crushing Blow', '33% Chance of Open Wounds', '+150-200% Enhanced Defense', '-20% Slower Stamina Drain', 'Cold Resist +45%', 'Lightning Resist +15%', 'Fire Resist +15%', 'Poison Resist +15%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-enigma`,
    name: 'Enigma',
    runes: [Rune_IDs.JAH, Rune_IDs.ITH, Rune_IDs.BER],
    equipment: _ALL_BODY_ARMORS,
    character_level: 65,
    stats: ['+2 to All Skills', '+45% Faster Run/Walk', '+1 to Teleport', '750-775 Defense', '+0.75 to Strength (Based on Character Level)', 'Increase Maximum Life 5%', 'Damage Reduced by 8%', '+14 Life after each Kill', '15% Damage Taken Goes To Mana', '1% Better Chance of Getting Magic Items (Based on Character Level)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-enlightenment`,
    name: 'Enlightenment',
    runes: [Rune_IDs.PUL, Rune_IDs.RAL, Rune_IDs.SOL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 45,
    stats: ['5% Chance to cast Level 15 Blaze when struck', '5% Chance to cast Level 15 Fire Ball on striking', '+2 to Sorceress Skill Levels', '+1 to Warmth', '+30% Enhanced Defense', 'Fire Resist +30%', 'Damage Reduced by 7'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-fortitude`,
    name: 'Fortitude',
    runes: [Rune_IDs.EL, Rune_IDs.SOL, Rune_IDs.DOL, Rune_IDs.LO],
    equipment: _ALL_BODY_ARMORS,
    character_level: 47,
    stats: ['20% Chance to cast Level 15 Chilling Armor when struck', '+25% Faster Cast Rate', '+300% Enhanced Damage', '+200% Enhanced Defense', '+15 Defense', '+1-1.5 to Life (Based on Character Level)', 'Replenish Life +7', '+5% to Maximum Lightning Resist', 'All Resistances +25-30', 'Damage Reduced by 7', '12% Damage Taken Goes To Mana', '+1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-gloom`,
    name: 'Gloom',
    runes: [Rune_IDs.FAL, Rune_IDs.UM, Rune_IDs.PUL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 47,
    stats: ['15% Chance to cast Level 3 Dim Vision when struck', '+10% Faster Hit Recovery', '+200-260% Enhanced Defense', '+10 to Strength', 'All Resistances +45', 'Half Freeze Duration', '5% Damage Taken Goes To Mana', '-3 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-lionheart`,
    name: 'Lionheart',
    runes: [Rune_IDs.HEL, Rune_IDs.LUM, Rune_IDs.FAL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 41,
    stats: ['+20% Enhanced Damage', '+25 to Strength', '+15 to Dexterity', '+20 to Vitality', '+10 to Energy', '+50 to Life', 'All Resistances +30', 'Requirements -15%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-myth`,
    name: 'Myth',
    runes: [Rune_IDs.HEL, Rune_IDs.AMN, Rune_IDs.NEF],
    equipment: _ALL_BODY_ARMORS,
    character_level: 41,
    stats: ['3% Chance to cast Level 1 Howl when struck', '10% Chance to cast Level 1 Taunt on striking', '+2 to Barbarian Skill Levels', '+30 Defense vs. Missile', 'Replenish Life +10', 'Attacker Takes Damage of 14', 'Requirements -15%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-peace`,
    name: 'Peace',
    runes: [Rune_IDs.SHAEL, Rune_IDs.THUL, Rune_IDs.AMN],
    equipment: _ALL_BODY_ARMORS,
    character_level: 29,
    stats: ['4% Chance to cast Level 5 Slow Missiles when struck', '2% Chance to cast Level 15 Valkyrie on striking', '+2 to Amazon Skill Levels', '+20% Faster Hit Recovery', '+2 to Critical Strike', 'Cold Resist +30%', 'Attacker Takes Damage of 14'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-principle`,
    name: 'Principle',
    runes: [Rune_IDs.RAL, Rune_IDs.GUL, Rune_IDs.ELD],
    equipment: _ALL_BODY_ARMORS,
    character_level: 55,
    stats: ['100% Chance to cast Level 5 Holy Bolt on striking', '+2 to Paladin Skill Levels', '+50% Damage to Undead', '+100-150 to Life', '15% Slower Stamina Drain', '+5% Maximum Poison Resist', 'Fire Resist +30%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-prudence`,
    name: 'Prudence',
    runes: [Rune_IDs.MAL, Rune_IDs.TIR],
    equipment: _ALL_BODY_ARMORS,
    character_level: 49,
    stats: ['+25% Faster Hit Recovery', '+140-170% Enhanced Defense', 'All Resistances +25-35', 'Damage Reduced by 3', 'Magic Damage Reduced by 17', '+2 to Mana after each Kill', '+1 to Light Radius', 'Repairs Durability in 4 seconds'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-rain`,
    name: 'Rain',
    runes: [Rune_IDs.ORT, Rune_IDs.MAL, Rune_IDs.ITH],
    equipment: _ALL_BODY_ARMORS,
    character_level: 49,
    stats: ['5% Chance to cast Level 15 Cyclone Armor when struck', '5% Chance to cast Level 15 Twister on striking', '+2 to Druid Skill Levels', '+100-150 to Mana', 'Lightning Resist +30%', 'Magic Damage Reduced by 7', '15% Damage Taken Goes To Mana'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-smoke`,
    name: 'Smoke',
    runes: [Rune_IDs.NEF, Rune_IDs.LUM],
    equipment: _ALL_BODY_ARMORS,
    character_level: 37,
    stats: ['+20% Faster Hit Recovery', '+75% Enhanced Defense', '+280 Defense vs. Missile', '+10 to Energy', 'All Resistances +50', '-1 to Light Radius'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-stealth`,
    name: 'Stealth',
    runes: [Rune_IDs.TAL, Rune_IDs.ETH],
    equipment: _ALL_BODY_ARMORS,
    character_level: 17,
    stats: ['+25% Faster Run/Walk', '+25% Faster Cast Rate', '+25% Faster Hit Recovery', '+6 to Dexterity', 'Regenerate Mana 15%', '+15 Maximum Stamina', 'Poison Resist +30%', 'Magic Damage Reduced by 3'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-stone`,
    name: 'Stone',
    runes: [Rune_IDs.SHAEL, Rune_IDs.UM, Rune_IDs.PUL, Rune_IDs.LUM],
    equipment: _ALL_BODY_ARMORS,
    character_level: 47,
    stats: ['+60% Faster Hit Recovery', '+250-290% Enhanced Defense', '+300 Defense vs. Missile', '+16 to Strength', '+16 to Vitality', '+10 to Energy', 'All Resistances +15', 'Level 16 Molten Boulder (80/80 Charges)', 'Level 16 Clay Golem (16/16 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-treachery`,
    name: 'Treachery',
    runes: [Rune_IDs.SHAEL, Rune_IDs.THUL, Rune_IDs.LEM],
    equipment: _ALL_BODY_ARMORS,
    character_level: 43,
    stats: ['5% Chance to cast Level 15 Fade when struck', '25% Chance to cast Level 15  Venom on striking', '+2 to Assassin Skill Levels', '+45% Increased Attack Speed', '+20% Faster Hit Recovery', 'Cold Resist +30%', '50% Extra Gold from Monsters'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-wealth`,
    name: 'Wealth',
    runes: [Rune_IDs.LEM, Rune_IDs.KO, Rune_IDs.TIR],
    equipment: _ALL_BODY_ARMORS,
    character_level: 43,
    stats: ['+10 to Dexterity', '+2 to Mana after each Kill', '300% Extra Gold from Monsters', '100% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-hysteria`,
    name: 'Hysteria',
    runes: [Rune_IDs.SHAEL, Rune_IDs.KO, Rune_IDs.ELD],
    equipment: _ALL_BODY_ARMORS,
    character_level: 39,
    stats: ['+65% Faster Run/Walk', '+40% Increased Attack Speed', '+20% Faster Hit Recovery', '+6 to Evade', '+10 to Dexterity', '50% Slower Stamina Drain', '+All Resistances +10'],
    has_aura: false,
    is_ladder_only: true
  },
  {
    id: `${_BODY_ARMOR_PREFIX}-authority`,
    name: 'Authority',
    runes: [Rune_IDs.HEL, Rune_IDs.SHAEL, Rune_IDs.RAL],
    equipment: _ALL_BODY_ARMORS,
    character_level: 29,
    stats: ['2% Chance to cast level 10 Psychic Ward when struck', '10% Chance to cast level 15 Miasma Chain on striking', '+2 to Warlock Skills', '+20% Faster Hit Recovery', '+40-60% Enhanced Damage', 'Fire Resist +30%', 'Requirements -15%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_HELMET_PREFIX}-coven`,
    name: 'Coven',
    runes: [Rune_IDs.IST, Rune_IDs.RAL, Rune_IDs.IO],
    equipment: _ALL_HELMETS,
    character_level: 51,
    stats: ['5% Chance to cast level 10 Sigil: Lethargy when struck', '+1 to All Skills', '+20% Faster Cast Rate', '30-50% Enhanced Defense', '+10 to Vitality', 'Fire Resist +30%', '1-5 Life after each Kill', '26-40% Better Chance of Getting Magic Items'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-void`,
    name: 'Void',
    runes: [Rune_IDs.THUL, Rune_IDs.ZOD, Rune_IDs.IST],
    equipment: [Equipment_IDs.DAGGER],
    character_level: 69,
    stats: ['Indestructible', '+2 to All Skills', '+40% Faster Cast Rate', 'Adds 3-14 cold damage', '10-15% to Magic Skill Damage', '1-3 to Abyss', '8-12 to Strength', '30% Better Chance of Getting Magic Items', 'Level 4 Decrepify (35/35 Charges)'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_SHIELD_PREFIX}-vigilance`,
    name: 'Vigilance',
    runes: [Rune_IDs.DOL, Rune_IDs.GUL],
    equipment: _ALL_SHIELDS,
    character_level: 53,
    stats: ['5% Chance to cast level 10 Ring of Fire when struck', '+10% Faster Run/Walk', '+30% Faster Block Rate', '75-100% Enhanced Defense', '20-40 to Life', 'Replenish Life +7', '20-40 to Mana', '+5% to Maximum Poison Resist', 'Fire Resist 25-35%'],
    has_aura: false,
    is_ladder_only: false
  },
  {
    id: `${_WEAPON_PREFIX}-ritual`,
    name: 'Ritual',
    runes: [Rune_IDs.AMN, Rune_IDs.SHAEL, Rune_IDs.OHM],
    equipment: [Equipment_IDs.DAGGER],
    character_level: 57,
    stats: ['13% Chance to cast level 1 Sigil: Death when struck', '+40% Increased Attack Speed', '+250-320% Enhanced Damage', '200-260% Bonus to Attack Rating', '150-250% Damage to Demons', '7% Life stolen per hit', 'Slain Monsters Rest in Peace', '3-5 Life after each Kill'],
    has_aura: false,
    is_ladder_only: false
  },
];

export {_runeword_data as Runewords};
