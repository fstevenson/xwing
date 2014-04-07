(function() {
  var exportObj;

  exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

  if (exportObj.codeToLanguage == null) {
    exportObj.codeToLanguage = {};
  }

  exportObj.codeToLanguage.en = 'English';

  if (exportObj.translations == null) {
    exportObj.translations = {};
  }

  exportObj.translations.English = {
    action: {
      "Barrel Roll": "Barrel Roll",
      "Boost": "Boost",
      "Evade": "Evade",
      "Focus": "Focus",
      "Target Lock": "Target Lock",
      "Recover": "Recover",
      "Reinforce": "Reinforce",
      "Jam": "Jam",
      "Coordinate": "Coordinate",
      "Cloak": "Cloak"
    },
    slot: {
      "Astromech": "Astromech",
      "Bomb": "Bomb",
      "Cannon": "Cannon",
      "Crew": "Crew",
      "Elite": "Elite",
      "Missile": "Missile",
      "System": "System",
      "Torpedo": "Torpedo",
      "Turret": "Turret",
      "Cargo": "Cargo",
      "Hardpoint": "Hardpoint",
      "Team": "Team"
    },
    sources: {
      "Core": "Core",
      "A-Wing Expansion Pack": "A-Wing Expansion Pack",
      "B-Wing Expansion Pack": "B-Wing Expansion Pack",
      "X-Wing Expansion Pack": "X-Wing Expansion Pack",
      "Y-Wing Expansion Pack": "Y-Wing Expansion Pack",
      "Millennium Falcon Expansion Pack": "Millennium Falcon Expansion Pack",
      "HWK-290 Expansion Pack": "HWK-290 Expansion Pack",
      "TIE Fighter Expansion Pack": "TIE Fighter Expansion Pack",
      "TIE Interceptor Expansion Pack": "TIE Interceptor Expansion Pack",
      "TIE Bomber Expansion Pack": "TIE Bomber Expansion Pack",
      "TIE Advanced Expansion Pack": "TIE Advanced Expansion Pack",
      "Lambda-Class Shuttle Expansion Pack": "Lambda-Class Shuttle Expansion Pack",
      "Slave I Expansion Pack": "Slave I Expansion Pack",
      "Imperial Aces Expansion Pack": "Imperial Aces Expansion Pack",
      "Rebel Transport Expansion Pack": "Rebel Transport Expansion Pack",
      "Z-95 Headhunter Expansion Pack": "Z-95 Headhunter Expansion Pack",
      "TIE Defender Expansion Pack": "TIE Defender Expansion Pack",
      "E-Wing Expansion Pack": "E-Wing Expansion Pack",
      "TIE Phantom Expansion Pack": "TIE Phantom Expansion Pack",
      "Tantive IV Expansion Pack": "Tantive IV Expansion Pack",
      "Rebel Aces Expansion Pack": "Rebel Aces Expansion Pack"
    },
    ui: {
      shipSelectorPlaceholder: "Select a ship",
      pilotSelectorPlaceholder: "Select a pilot",
      upgradePlaceholder: function(translator, language, slot) {
        return "No " + (translator(language, 'slot', slot)) + " Upgrade";
      },
      modificationPlaceholder: "No Modification",
      titlePlaceholder: "No Title",
      upgradeHeader: function(translator, language, slot) {
        return "" + (translator(language, 'slot', slot)) + " Upgrade";
      }
    },
    byCSSSelector: {
      '.xwing-card-browser .translate.sort-cards-by': 'Sort cards by',
      '.xwing-card-browser option[value="name"]': 'Name',
      '.xwing-card-browser option[value="source"]': 'Source',
      '.xwing-card-browser option[value="type-by-points"]': 'Type (by Points)',
      '.xwing-card-browser option[value="type-by-name"]': 'Type (by Name)',
      '.xwing-card-browser .translate.select-a-card': 'Select a card from the list at the left.'
    },
    singular: {
      'pilots': 'Pilot',
      'modifications': 'Modification',
      'titles': 'Title'
    },
    types: {
      'Pilot': 'Pilot',
      'Modification': 'Modification',
      'Title': 'Title'
    }
  };

  if (exportObj.cardLoaders == null) {
    exportObj.cardLoaders = {};
  }

  exportObj.cardLoaders.English = function() {
    var basic_cards, e, field, modification, modification_data, modification_name, modification_translations, pilot, pilot_data, pilot_name, pilot_translations, source, title, title_data, title_name, title_translations, translation, translations, upgrade, upgrade_data, upgrade_name, upgrade_translations, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _m, _n, _o, _p, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    exportObj.cardLanguage = 'English';
    basic_cards = window.basicCardData();
    exportObj.ships = basic_cards.ships;
    pilot_translations = {
      "Wedge Antilles": {
        text: "When attacking, reduce the defender's agility value by 1 (to a minimum of \"0\")."
      },
      "Garven Dreis": {
        text: "After spending a focus token, you may place that token on any other friendly ship at Range 1-2 (instead of discarding it)."
      },
      "Biggs Darklighter": {
        text: "Other friendly ships at Range 1 cannot be targeted by attacks if the attacker could target you instead."
      },
      "Luke Skywalker": {
        text: "When defending, you may change 1 of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to a <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> result."
      },
      '"Dutch" Vander': {
        text: "After acquiring a target lock, choose another friendly ship at Range 1-2.  The chosen ship may immediately acquire a target lock."
      },
      "Horton Salm": {
        text: "When attacking at Range 2-3, you may reroll any of your blank results."
      },
      '"Winged Gundark"': {
        text: "When attacking at Range 1, you may change 1 of your <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results to a <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result."
      },
      '"Night Beast"': {
        text: "After executing a green maneuver, you may perform a free focus action."
      },
      '"Backstabber"': {
        text: "When attacking from outside the defender's firing arc, roll 1 additional attack die."
      },
      '"Dark Curse"': {
        text: "When defending, ships attacking you cannot spend focus tokens or reroll attack dice."
      },
      '"Mauler Mithel"': {
        text: "When attacking at Range 1, roll 1 additional attack die."
      },
      '"Howlrunner"': {
        text: "When another friendly ship at Range 1 is attacking with its primary weapon, it may reroll 1 attack die."
      },
      "Maarek Stele": {
        text: "When your attack deals a faceup Damage card to the defender, instead draw 3 Damage cards, choose 1 to deal, and discard the others."
      },
      "Darth Vader": {
        text: "During your \"Perform Action\" step, you may perform 2 actions."
      },
      "\"Fel's Wrath\"": {
        text: "When the number of Damage cards assigned to you equals or exceeds your hull value, you are not destroyed until the end of the Combat phase."
      },
      "Turr Phennir": {
        text: "After you perform an attack, you may perform a free boost or barrel roll action."
      },
      "Soontir Fel": {
        text: "When you receive a stress token, you may assign 1 focus token to your ship."
      },
      "Tycho Celchu": {
        text: "You may perform actions even while you have stress tokens."
      },
      "Arvel Crynyd": {
        text: "You may declare an enemy ship inside your firing arc that you are touching as the target of your attack."
      },
      "Chewbacca": {
        text: "When you are dealt a faceup Damage card, immediately flip it facedown (without resolving its ability)."
      },
      "Lando Calrissian": {
        text: "After you execute a green maneuver, choose 1 other friendly ship at Range 1.  That ship may perform 1 free action shown on its action bar."
      },
      "Han Solo": {
        text: "When attacking, you may reroll all of your dice.  If you choose to do so, you must reroll as many of your dice as possible."
      },
      "Kath Scarlet": {
        text: "When attacking, the defender receives 1 stress token if he cancels at least 1 <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result."
      },
      "Boba Fett": {
        text: "When you reveal a bank maneuver (<img class=\"icon-bankleft\" alt=\"Bank Left\" src=\"images/transparent.png\" /> or <img class=\"icon-bankright\" alt=\"Bank Right\" src=\"images/transparent.png\" />), you may rotate your dial to the other bank maneuver of the same speed."
      },
      "Krassis Trelix": {
        text: "When attacking with a secondary weapon, you may reroll 1 attack die."
      },
      "Ten Numb": {
        text: "When attacking, 1 of your <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> results cannot be canceled by defense dice."
      },
      "Ibtisam": {
        text: "When attacking or defending, if you have at least 1 stress token, you may reroll 1 of your dice."
      },
      "Roark Garnet": {
        text: 'At the start of the Combat phase, choose 1 other friendly ship at Range 1-3.  Until the end of the phase, treat that ship\'s pilot skill value as "12."'
      },
      "Kyle Katarn": {
        text: "At the start of the Combat phase, you may assign 1 of your focus tokens to another friendly ship at Range 1-3."
      },
      "Jan Ors": {
        text: "When another friendly ship at Range 1-3 is attacking, if you have no stress tokens, you may receive 1 stress token to allow that ship to roll 1 additional attack die."
      },
      "Captain Jonus": {
        text: "When another friendly ship at Range 1 attacks with a secondary weapon, it may reroll up to 2 attack dice."
      },
      "Major Rhymer": {
        text: "When attacking with a secondary weapon, you may increase or decrease the weapon range by 1 to a limit of Range 1-3."
      },
      "Captain Kagi": {
        text: "When an enemy ship acquires a target lock, it must lock onto your ship if able."
      },
      "Colonel Jendon": {
        text: "At the start of the Combat phase, you may assign 1 of your blue target lock tokens to a friendly ship at Range 1 if it does not have a blue target lock token."
      },
      "Captain Yorr": {
        text: "When another friendly ship at Range 1-2 would receive a stress token, if you have 2 or fewer stress tokens, you may receive that token instead."
      },
      "Lieutenant Lorrir": {
        text: "When performing a barrel roll action, you may receive 1 stress token to use the (<img class=\"icon-bankleft\" alt=\"Bank Left\" src=\"images/transparent.png\" /> 1) or (<img class=\"icon-bankright\" alt=\"Bank Right\" src=\"images/transparent.png\" /> 1) template instead of the (<img class=\"icon-straight\" alt=\"Straight\" src=\"images/transparent.png\" /> 1) template."
      },
      "Tetran Cowall": {
        text: "When you reveal a <img class=\"icon-uturn\" alt=\"Koiogran Turn\" src=\"images/transparent.png\" /> maneuver, you may treat the speed of that maneuver as \"1,\" \"3,\" or \"5\"."
      },
      "Kir Kanos": {
        text: "When attacking at Range 2-3, you may spend 1 evade token to add 1 <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result to your roll."
      },
      "Carnor Jax": {
        text: "Enemy ships at Range 1 cannot perform focus or evade actions and cannot spend focus or evade tokens."
      },
      "Lieutenant Blount": {
        text: "When attacking, the defender is hit by your attack, even if he does not suffer any damage."
      },
      "Airen Cracken": {
        text: "After you perform an attack, you may choose another friendly ship at Range 1.  That ship may perform 1 free action."
      },
      "Colonel Vessery": {
        text: "This card has not yet been released."
      },
      "Rexler Brath": {
        text: "After you perform an ??? deals at least 1 ??? defender, you ??? token to ???"
      },
      "Etahn A'baht": {
        text: "When an enemy ship inside your firing arc at Range 1-3 is defending, the attacker may change 1 of its <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results to a <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result."
      },
      "Corran Horn": {
        text: "At the start of the ??? you may perform ??? cannot attack ???"
      },
      "Unspoiled PS6 TIE Phantom Pilot": {
        text: "This card has not yet been released."
      },
      '"Whisper"': {
        text: "After you perform an attack that hits, you may assign 1 focus to your ship."
      },
      "Wes Janson": {
        text: "After you perform an attack, you may remove 1 focus, evade, or blue target lock token from the defender."
      },
      "Jek Porkins": {
        text: "When you receive a stress token, you may remove it and roll 1 attack die.  On a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result, deal 1 facedown Damage card to this ship."
      },
      '"Hobbie" Kilvan': {
        text: "When you acquire or spend a target lock, you may remove 1 stress token from your ship."
      },
      "Tarn Mison": {
        text: "When an enemy ship declares you as the target of an attack, you may acquire a target lock on that ship."
      },
      "Jake Farrell": {
        text: "After you perform a focus action or are assigned a focus token, you may perform a free boost or barrel roll action."
      },
      "Unspoiled PS5 A-Wing Pilot": {
        text: "This card has not yet been revealed."
      },
      "Keyan Farlander": {
        text: "When attacking, you may remove 1 stress token to change all of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" />results."
      },
      "Unspoiled PS5 B-Wing Pilot": {
        text: "This card has not yet been revealed."
      }
    };
    upgrade_translations = {
      "Ion Cannon Turret": {
        text: "<strong>Attack:</strong> Attack 1 ship (even a ship outside your firing arc).<br /><br />If this attack hits the target ship, the ship suffers 1 damage and receives 1 ion token.  Then cancel all dice results."
      },
      "Proton Torpedoes": {
        text: "<strong>Attack (target lock):</strong> Spend your target lock and discard this card to perform this attack.<br /><br />You may change 1 of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to a <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result."
      },
      "R2 Astromech": {
        text: "You may treat all 1- and 2-speed maneuvers as green maneuvers."
      },
      "R2-D2": {
        text: "After executing a green maneuver, you may recover 1 shield (up to your shield value)."
      },
      "R2-F2": {
        text: "<strong>Action:</strong> Increase your agility value by 1 until the end of this game round."
      },
      "R5-D8": {
        text: "<strong>Action:</strong> Roll 1 defense die.<br /><br />On a <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> or <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> result, discard 1 of your facedown Damage cards."
      },
      "R5-K6": {
        text: "After spending your target lock, roll 1 defense die.<br /><br />On a <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> result, immediately acquire a target lock on that same ship.  You cannot spend this target lock during this attack."
      },
      "R5 Astromech": {
        text: "During the End phase, you may choose 1 of your faceup Damage cards with the Ship trait and flip it facedown."
      },
      "Determination": {
        text: "When you are dealt a faceup Damage card with the Pilot trait, discard it immediately without resolving its effect."
      },
      "Swarm Tactics": {
        text: "At the start of the Combat phase, choose 1 friendly ship at Range 1.<br /><br />Until the end of this phase, treat the chosen ship as it its pilot skill were equal to your pilot skill."
      },
      "Squad Leader": {
        text: "<strong>Action:</strong> Choose 1 ship at Range 1-2 that has a lower pilot skill than you.<br /><br />The chosen ship may immediately perform 1 free action."
      },
      "Expert Handling": {
        text: "<strong>Action:</strong> Perform a free barrel roll action.  If you do not have the <img class=\"icon-barrel-roll\" alt=\"Barrel Roll\" src=\"images/transparent.png\" /> action icon, receive 1 stress token.<br /><br />You may then remove 1 enemy target lock from your ship."
      },
      "Marksmanship": {
        text: "<strong>Action:</strong> When attacking this round, you may change 1 of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to a <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result and all of your other <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results."
      },
      "Concussion Missiles": {
        text: "<strong>Attack (target lock):</strong>  Spend your target lock and discard this card to perform this attack.<br /><br />You may change 1 of your blank results to a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result."
      },
      "Cluster Missiles": {
        text: "<strong>Attack (target lock):</strong> Spend your target lock and discard this card to perform this attack twice."
      },
      "Daredevil": {
        text: "<strong>Action:</strong> Execute a white (<img class=\"icon-turnleft\" alt=\"Turn Left\" src=\"images/transparent.png\" /> 1) or (<img class=\"icon-turnright\" alt=\"Turn Right\" src=\"images/transparent.png\" /> 1) maneuver.  Then, receive 1 stress token.<br /><br />Then, if you do not have the <img class=\"icon-boost\" alt=\"Boost\" src=\"images/transparent.png\" /> action icon, roll 2 attack dice.  Suffer any damage (<img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" />) and any critical damage (<img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" />) rolled."
      },
      "Elusiveness": {
        text: "When defending, you may receive 1 stress token to choose 1 attack die.  The attacker must reroll that die.<br /><br />If you have at least 1 stress token, you cannot use this ability."
      },
      "Homing Missiles": {
        text: "<strong>Attack (target lock):</strong> Discard this card to perform this attack.<br /><br />The defender cannot spend evade tokens during this attack."
      },
      "Push the Limit": {
        text: "Once per round, after you perform an action, you may perform 1 free action shown in your action bar.<br /><br />Then receive 1 stress token."
      },
      "Deadeye": {
        text: "You may treat the <strong>Attack (target lock):</strong> header as <strong>Attack (focus):</strong>.<br /><br />When an attack instructs you to spend a target lock, you may spend a focus token instead."
      },
      "Expose": {
        text: "<strong>Action:</strong> Until the end of the round, increase your primary weapon value by 1 and decrease your agility value by 1."
      },
      "Gunner": {
        text: "After you perform an attack that does not hit, you may immediately perform a primary weapon attack.  You cannot perform another attack this round."
      },
      "Ion Cannon": {
        text: "<strong>Attack:</strong> Attack 1 ship.<br /><br />If this attack hits, the defender suffers 1 damage and receives 1 ion token.  Then cancel all dice results."
      },
      "Heavy Laser Cannon": {
        text: "<strong>Attack:</strong> Attack 1 ship.<br /><br />Immediately after rolling your attack dice, you must change all of your <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> results to <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results."
      },
      "Seismic Charges": {
        text: "When you reveal your maneuver dial, you may discard this card to drop 1 seismic charge token.<br /><br />This token detonates at the end of the Activation phase."
      },
      "Mercenary Copilot": {
        text: "When attacking at Range 3, you may change 1 of your <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results to a <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result."
      },
      "Assault Missiles": {
        text: "<strong>Attack (target lock):</strong> Spend your target lock and discard this card to perform this attack.<br /><br />If this attack hits, each other ship at Range 1 of the defender suffers 1 damage."
      },
      "Veteran Instincts": {
        text: "Increase your pilot skill value by 2."
      },
      "Proximity Mines": {
        text: "<strong>Action:</strong> Discard this card to drop 1 proximity mine token.<br /><br />When a ship executes a maneuver, if its base or maneuver template overlaps this token, this token detonates."
      },
      "Weapons Engineer": {
        text: "You may maintain 2 target locks (only 1 per enemy ship).<br /><br />When you acquire a target lock, you may lock onto 2 different ships."
      },
      "Draw Their Fire": {
        text: "When a friendly ship at Range 1 is hit by an attack, you may suffer 1 of the uncanceled <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> results instead of the target ship."
      },
      "Luke Skywalker": {
        text: "After you perform an attack that does not hit, you may immediately perform a primary weapon attack.  You may change 1 <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> result to a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result.  You cannot perform another attack this round."
      },
      "Nien Nunb": {
        text: "You may treat all <img class=\"icon-straight\" alt=\"Straight\" src=\"images/transparent.png\" /> maneuvers as green maneuvers."
      },
      "Chewbacca": {
        text: "When you are dealt a Damage card, you may immediately discard that card and recover 1 shield.<br /><br />Then, discard this Upgrade card."
      },
      "Advanced Proton Torpedoes": {
        text: "<strong>Attack (target lock):</strong> Spend your target lock and discard this card to perform this attack.<br /><br />You may change up to 3 of your blank results to <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results."
      },
      "Autoblaster": {
        text: "<strong>Attack:</strong> Attack 1 ship.<br /><br />Your <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results cannot be canceled by defense dice.<br /><br />The defender may cancel <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> results before <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results."
      },
      "Fire-Control System": {
        text: "After you perform an attack, you may acquire a target lock on the defender."
      },
      "Blaster Turret": {
        text: "<strong>Attack (focus):</strong> Spend 1 focus token to perform this attack against 1 ship (even a ship outside your firing arc)."
      },
      "Recon Specialist": {
        text: "When you perform a focus action, assign 1 additional focus token to your ship."
      },
      "Saboteur": {
        text: "<strong>Action:</strong> Choose 1 enemy ship at Range 1 and roll 1 attack die.  On a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> or <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result, choose 1 random facedown Damage card assigned to that ship, flip it faceup, and resolve it."
      },
      "Intelligence Agent": {
        text: "At the start of the Activation phase, choose 1 enemy ship at Range 1-2.  You may look at that ship's chosen maneuver."
      },
      "Proton Bomb": "When you reveal your maneuver dial, you may discard this card to <strong>drop</strong> 1 proton bomb token.<br /><br />This token <strong>detonates</strong> at the end of the Activation phase.",
      "Adrenaline Rush": "When you reveal a red maneuver, you may discard this card to treat that maneuver as a white maneuver until the end of the Activation phase.",
      "Advanced Sensors": "Immediately before you reveal your maneuver, you may perform 1 free action.<br /><br />If you use this ability, you must skip your \"Perform Action\" step during this round.",
      "Sensor Jammer": {
        text: "When defending, you may change 1 of the attacker's <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> results into a <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> result.<br /><br />The attacker cannot reroll the die with the changed result."
      },
      "Darth Vader": {
        text: "After you perform an attack against an enemy ship, you may suffer 2 damage to cause that ship to suffer 1 critical damage."
      },
      "Rebel Captive": {
        text: "Once per round, the first ship that declares you as the target of an attack immediately receives 1 stress token."
      },
      "Flight Instructor": {
        text: "When defending, you may reroll 1 of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results.  If the attacker's pilot skill value is \"2\" or lower, you may reroll 1 of your blank results instead."
      },
      "Navigator": {
        text: "When you reveal a maneuver, you may rotate your dial to another maneuver with the same bearing.<br /><br />You cannot rotate to a red maneuver if you have any stress tokens."
      },
      "Opportunist": {
        text: "When attacking, if the defender does not have any focus or evade tokens, you may receive 1 stress token to roll 1 additional attack die.<br /><br />You cannot use this ability if you have any stress tokens."
      },
      "Comms Booster": {
        text: "<strong>Energy:</strong> Spend 1 energy to remove all stress tokens from a friendly ship at Range 1-3.  Then assign 1 focus token to that ship."
      },
      "Slicer Tools": {
        text: "<strong>Action:</strong> Choose 1 or more ships at Range 1-3 that have a stress token.  For each ship chosen, you may spend 1 energy to cause that ship to suffer 1 damage."
      },
      "Shield Projector": {
        text: "When an enemy ship is declaring either a small or large ship as the target of its attack, you may spend 3 energy to force that ship to target you if possible."
      },
      "Ion Pulse Missiles": {
        text: "<strong>Attack (target lock):</strong> Discard this card to perform this attack.<br /><br />If this attack hits, the defender suffers 1 damage and receives 2 ion tokens.  Then cancel <strong>all<strong> dice results."
      },
      "Wingman": {
        text: "At the start of the Combat phase, remove 1 stress token from another friendly ship at Range 1."
      },
      "Decoy": {
        text: "This card has not yet been released."
      },
      "Outmaneuver": {
        text: "This card has not yet been released."
      },
      "Predator": {
        text: "This card has not yet been released."
      },
      "Flechette Torpedoes": {
        text: "<strong>Attack (target lock):</strong> Discard this card and spend your target lock to perform this attack.<br /><br />After you perform this attack, the defender receives 1 stress token if its hull value is \"4\" or lower."
      },
      "R7 Astromech": {
        text: "This card has not yet been released."
      },
      "R7-T1": {
        text: "<strong>Action:</strong> Choose an enemy ship at Range 1-2.  If you are inside that ship's firing arc, you may acquire a target lock on that ship.  Then, you may perform a free boost action."
      },
      "Tactician": {
        text: "This card has not yet been released."
      },
      "R2-D2 (Crew)": {
        text: "At the end of the End phase, if you have no shields, you may recover 1 shield and roll 1 attack die.  On a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result, randomly flip 1 of your facedown Damage cards faceup and resolve it."
      },
      "C-3PO": {
        text: "Once per round, before you roll 1 or more defense dice, you may guess aloud a number of <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> results.  If you roll that many <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> results (before modifying dice), add 1 <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> result."
      },
      "Single Turbolasers": {
        text: "<strong>Attack (Energy):</strong> Spend 2 energy from this card to perform this attack.  The defender doubles his agility value against this attack.  You may change 1 of your <img class=\"icon-focus\" alt=\"Focus\" src=\"images/transparent.png\" /> results to a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> result."
      },
      "Quad Laser Cannons": {
        text: "<strong>Attack (Energy):</strong> Spend 1 energy from this card to perform this attack.  If this attack does not hit, you may immediately spend 1 energy from this card to perform this attack again."
      },
      "Tibanna Gas Supplies": {
        text: "<strong>Energy:</strong> You may discard this card to gain 3 energy."
      },
      "Ionization Reactor": {
        text: "<strong>Energy:</strong> Spend 5 energy from this card and discard this card to cause each other ship at Range 1 to suffer 1 damage and receive 1 ion token."
      },
      "Engine Booster": {
        text: "Immediately before you reveal your maneuver dial, you may spend 1 energy to execute a white (<img class=\"icon-straight\" alt=\"Straight\" src=\"images/transparent.png\" /> 1) maneuver.  You cannot use this ability if you would overlap another ship."
      },
      "R3-A2": {
        text: "When you declare the target of your attack, if the defender is inside your firing arc, you may receive 1 stress token to cause the defender to receive 1 stress token."
      },
      "R2-D6": {
        text: "Your upgrade bar gains the <img class=\"icon-elite\" alt=\"Elite\" src=\"images/transparent.png\" /> upgrade icon.<br /><br />You cannot equip this upgrade if you already have a <img class=\"icon-elite\" alt=\"Elite\" src=\"images/transparent.png\" /> upgrade icon or if your pilot skill value is \"2\" or lower."
      },
      "Enhanced Scopes": {
        text: "During the Activation phase, treat your pilot skill value as \"0\"."
      },
      "Chardaan Refit": {
        text: "This card has a negative squad point cost."
      },
      "Proton Rockets": {
        text: "This card has not yet been revealed."
      },
      "Kyle Katarn": {
        text: "After you receive a stress token from your ship, you may assign a focus token to ???"
      },
      "Jan Ors": {
        text: "This card has not yet been revealed."
      }
    };
    modification_translations = {
      "Stealth Device": {
        text: "Increase your agility value by 1.  If you are hit by an attack, discard this card."
      },
      "Shield Upgrade": {
        text: "Increase your shield value by 1."
      },
      "Engine Upgrade": {
        text: "Your action bar gains the <img class=\"icon-boost\" alt=\"Boost\" src=\"images/transparent.png\" /> action icon."
      },
      "Anti-Pursuit Lasers": {
        text: "After an enemy ship executes a maneuver that causes it to overlap your ship, roll 1 attack die.  On a <img class=\"icon-hit\" alt=\"Hit\" src=\"images/transparent.png\" /> or <img class=\"icon-crit\" alt=\"Crit\" src=\"images/transparent.png\" /> result, the enemy ship suffers 1 damage."
      },
      "Targeting Computer": {
        text: "Your action bar gains the <img class=\"icon-target-lock\" alt=\"Target Lock\" src=\"images/transparent.png\" /> action icon."
      },
      "Hull Upgrade": {
        text: "Increase your hull value by 1."
      },
      "Munitions Failsafe": {
        text: "When attacking with a secondary weapon that instructs you to discard it to perform the attack, do not discard it unless the attack hits."
      },
      "Stygium Particle Accelerator": {
        text: "When you either decloak or perform a cloak action, you may perform a free evade action."
      },
      "Advanced Cloaking Device": {
        text: "After you perform an attack, you may perform a free cloak action."
      }
    };
    title_translations = {
      "Slave I": {
        text: "Your upgrade bar gains the <img class=\"icon-torpedo\" alt=\"Torpedo\" src=\"images/transparent.png\" /> upgrade icon."
      },
      "Millennium Falcon": {
        text: "Your action bar gains the <img class=\"icon-evade\" alt=\"Evade\" src=\"images/transparent.png\" /> action icon."
      },
      "Moldy Crow": {
        text: "During the End phase, do not remove unused focus tokens from your ship."
      },
      "ST-321": {
        text: "When acquiring a target lock, you may lock onto any enemy ship in the play area."
      },
      "Royal Guard TIE": {
        text: "You may equip up to 2 different Modification upgrades (instead of 1).<br /><br />You cannot equip this card if your pilot skill value is \"4\" or lower."
      },
      "Dodonna's Pride": {
        text: "When you perform a coordinate action, you may choose 2 friendly ships (instead of 1).  Those ships may each perform 1 free action."
      },
      "A-Wing Test Pilot": {
        text: "Your upgrade bar gains 1 <img class=\"icon-elite\" alt=\"Elite\" src=\"images/transparent.png\" /> upgrade icon.<br /><br />You cannot equip 2 of the same <img class=\"icon-elite\" alt=\"Elite\" src=\"images/transparent.png\" /> Upgrade cards.  You cannot equip this if your pilot skill value is \"1\" or lower."
      },
      "B-Wing/E": {
        text: "Your upgrade bar gains the <img class=\"icon-crew\" alt=\"Crew\" src=\"images/transparent.png\" /> upgrade icon."
      },
      "Tantive IV": {
        text: "Your fore section upgrade bar gains 1 additional <img class=\"icon-crew\" alt=\"Crew\" src=\"images/transparent.png\" /> and 1 additional <img class=\"icon-team\" alt=\"Team\" src=\"images/transparent.png\" /> upgrade icon."
      }
    };
    exportObj.pilots = {};
    _ref = basic_cards.pilotsById;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      pilot_data = _ref[_i];
      exportObj.pilots[pilot_data.name] = pilot_data;
    }
    for (pilot_name in pilot_translations) {
      translations = pilot_translations[pilot_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.pilots[pilot_name][field] = translation;
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for pilot " + pilot_name);
          throw e;
        }
      }
    }
    exportObj.upgrades = {};
    _ref1 = basic_cards.upgradesById;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      upgrade_data = _ref1[_j];
      exportObj.upgrades[upgrade_data.name] = upgrade_data;
    }
    for (upgrade_name in upgrade_translations) {
      translations = upgrade_translations[upgrade_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.upgrades[upgrade_name][field] = translation;
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for upgrade " + upgrade_name);
          throw e;
        }
      }
    }
    exportObj.modifications = {};
    _ref2 = basic_cards.modificationsById;
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      modification_data = _ref2[_k];
      exportObj.modifications[modification_data.name] = modification_data;
    }
    for (modification_name in modification_translations) {
      translations = modification_translations[modification_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.modifications[modification_name][field] = translation;
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for modification " + modification_name);
          throw e;
        }
      }
    }
    exportObj.titles = {};
    _ref3 = basic_cards.titlesById;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      title_data = _ref3[_l];
      exportObj.titles[title_data.name] = title_data;
    }
    for (title_name in title_translations) {
      translations = title_translations[title_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.titles[title_name][field] = translation;
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for title " + title_name);
          throw e;
        }
      }
    }
    exportObj.expansions = {};
    exportObj.pilotsById = {};
    exportObj.pilotsByLocalizedName = {};
    _ref4 = exportObj.pilots;
    for (pilot_name in _ref4) {
      pilot = _ref4[pilot_name];
      exportObj.pilotsById[pilot.id] = pilot;
      exportObj.pilotsByLocalizedName[pilot.name] = pilot;
      _ref5 = pilot.sources;
      for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {
        source = _ref5[_m];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.pilotsById).length !== Object.keys(exportObj.pilots).length) {
      throw new Error("At least one pilot shares an ID with another");
    }
    exportObj.upgradesById = {};
    exportObj.upgradesByLocalizedName = {};
    _ref6 = exportObj.upgrades;
    for (upgrade_name in _ref6) {
      upgrade = _ref6[upgrade_name];
      exportObj.upgradesById[upgrade.id] = upgrade;
      exportObj.upgradesByLocalizedName[upgrade.name] = upgrade;
      _ref7 = upgrade.sources;
      for (_n = 0, _len5 = _ref7.length; _n < _len5; _n++) {
        source = _ref7[_n];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.upgradesById).length !== Object.keys(exportObj.upgrades).length) {
      throw new Error("At least one upgrade shares an ID with another");
    }
    exportObj.modificationsById = {};
    exportObj.modificationsByLocalizedName = {};
    _ref8 = exportObj.modifications;
    for (modification_name in _ref8) {
      modification = _ref8[modification_name];
      exportObj.modificationsById[modification.id] = modification;
      exportObj.modificationsByLocalizedName[modification.name] = modification;
      _ref9 = modification.sources;
      for (_o = 0, _len6 = _ref9.length; _o < _len6; _o++) {
        source = _ref9[_o];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.modificationsById).length !== Object.keys(exportObj.modifications).length) {
      throw new Error("At least one modification shares an ID with another");
    }
    exportObj.titlesById = {};
    exportObj.titlesByLocalizedName = {};
    _ref10 = exportObj.titles;
    for (title_name in _ref10) {
      title = _ref10[title_name];
      exportObj.titlesById[title.id] = title;
      exportObj.titlesByLocalizedName[title.name] = title;
      _ref11 = title.sources;
      for (_p = 0, _len7 = _ref11.length; _p < _len7; _p++) {
        source = _ref11[_p];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.titlesById).length !== Object.keys(exportObj.titles).length) {
      throw new Error("At least one title shares an ID with another");
    }
    exportObj.titlesByShip = {};
    _ref12 = exportObj.titles;
    for (title_name in _ref12) {
      title = _ref12[title_name];
      if (!(title.ship in exportObj.titlesByShip)) {
        exportObj.titlesByShip[title.ship] = [];
      }
      exportObj.titlesByShip[title.ship].push(title);
    }
    return exportObj.expansions = Object.keys(exportObj.expansions).sort();
  };

}).call(this);

//@ sourceMappingURL=cards-en.map