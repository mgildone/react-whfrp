import { chances } from "../../utils/chances";

const human = [
  { id: 1, name: "Apothecary", pct: 1 },
  { id: 2, name: "Engineer", pct: 1 },
  { id: 3, name: "Lawyer", pct: 1 },
  { id: 4, name: "Nun", pct: 2 },
  { id: 5, name: "Physician", pct: 1 },
  { id: 6, name: "Priest", pct: 5 },
  { id: 7, name: "Scholar", pct: 2 },
  { id: 8, name: "Wizard", pct: 1 },
  { id: 9, name: "Agitator", pct: 1 },
  { id: 10, name: "Artisan", pct: 2 },
  { id: 11, name: "Beggar", pct: 2 },
  { id: 12, name: "Investigator", pct: 1 },
  { id: 13, name: "Merchant", pct: 1 },
  { id: 14, name: "Rat Catcher", pct: 2 },
  { id: 15, name: "Townsman", pct: 3 },
  { id: 16, name: "Watchman", pct: 1 },
  { id: 17, name: "Advisor", pct: 1 },
  { id: 18, name: "Artist", pct: 1 },
  { id: 19, name: "Duellist", pct: 1 },
  { id: 20, name: "Envoy", pct: 1 },
  { id: 21, name: "Noble", pct: 1 },
  { id: 22, name: "Servant", pct: 3 },
  { id: 23, name: "Spy", pct: 1 },
  { id: 24, name: "Warden", pct: 1 },
  { id: 25, name: "Bailiff", pct: 1 },
  { id: 26, name: "Hedge Witch", pct: 1 },
  { id: 27, name: "Herbalist", pct: 1 },
  { id: 28, name: "Hunter", pct: 2 },
  { id: 29, name: "Miner", pct: 1 },
  { id: 30, name: "Mystic", pct: 1 },
  { id: 31, name: "Scout", pct: 1 },
  { id: 32, name: "Villager", pct: 5 },
  { id: 33, name: "Bounty Hunter", pct: 1 },
  { id: 34, name: "Coachman", pct: 1 },
  { id: 35, name: "Entertainer", pct: 2 },
  { id: 36, name: "Flagellant", pct: 2 },
  { id: 37, name: "Messenger", pct: 1 },
  { id: 38, name: "Pedlar", pct: 1 },
  { id: 39, name: "Roadwarden", pct: 1 },
  { id: 40, name: "Witch Hunter", pct: 1 },
  { id: 41, name: "Boatman", pct: 2 },
  { id: 42, name: "Huffer", pct: 1 },
  { id: 43, name: "Riverwarden", pct: 2 },
  { id: 44, name: "Riverwoman", pct: 3 },
  { id: 45, name: "Seaman", pct: 2 },
  { id: 46, name: "Smuggler", pct: 1 },
  { id: 47, name: "Stevedore", pct: 2 },
  { id: 48, name: "Wrecker", pct: 1 },
  { id: 49, name: "Bawd", pct: 2 },
  { id: 50, name: "Charlatan", pct: 1 },
  { id: 51, name: "Fence", pct: 1 },
  { id: 52, name: "Grave Robber", pct: 1 },
  { id: 53, name: "Outlaw", pct: 4 },
  { id: 54, name: "Racketeer", pct: 1 },
  { id: 55, name: "Thief", pct: 3 },
  { id: 56, name: "Witch", pct: 1 },
  { id: 57, name: "Cavalryman", pct: 2 },
  { id: 58, name: "Guard", pct: 2 },
  { id: 59, name: "Knight", pct: 1 },
  { id: 60, name: "Pit Fighter", pct: 1 },
  { id: 61, name: "Protagonist", pct: 1 },
  { id: 62, name: "Soldier", pct: 4 },
  { id: 64, name: "Warrior Priest", pct: 1 }
];
const dwarf = [
  { id: 1, name: "Apothecary", pct: 1 },
  { id: 2, name: "Engineer", pct: 3 },
  { id: 3, name: "Lawyer", pct: 2 },
  { id: 5, name: "Physician", pct: 1 },
  { id: 7, name: "Scholar", pct: 2 },
  { id: 9, name: "Agitator", pct: 2 },
  { id: 10, name: "Artisan", pct: 6 },
  { id: 11, name: "Beggar", pct: 1 },
  { id: 12, name: "Investigator", pct: 2 },
  { id: 13, name: "Merchant", pct: 5 },
  { id: 14, name: "Rat Catcher", pct: 1 },
  { id: 15, name: "Townsman", pct: 6 },
  { id: 16, name: "Watchman", pct: 3 },
  { id: 17, name: "Advisor", pct: 2 },
  { id: 18, name: "Artist", pct: 1 },
  { id: 19, name: "Duellist", pct: 1 },
  { id: 20, name: "Envoy", pct: 2 },
  { id: 21, name: "Noble", pct: 1 },
  { id: 22, name: "Servant", pct: 1 },
  { id: 23, name: "Spy", pct: 1 },
  { id: 24, name: "Warden", pct: 2 },
  { id: 25, name: "Bailiff", pct: 2 },
  { id: 28, name: "Hunter", pct: 2 },
  { id: 29, name: "Miner", pct: 5 },
  { id: 31, name: "Scout", pct: 1 },
  { id: 32, name: "Villager", pct: 1 },
  { id: 33, name: "Bounty Hunter", pct: 4 },
  { id: 34, name: "Coachman", pct: 1 },
  { id: 35, name: "Entertainer", pct: 2 },
  { id: 37, name: "Messenger", pct: 2 },
  { id: 38, name: "Pedlar", pct: 2 },
  { id: 41, name: "Boatman", pct: 2 },
  { id: 42, name: "Huffer", pct: 1 },
  { id: 44, name: "Riverwoman", pct: 2 },
  { id: 45, name: "Seaman", pct: 1 },
  { id: 46, name: "Smuggler", pct: 2 },
  { id: 47, name: "Stevedore", pct: 2 },
  { id: 48, name: "Wrecker", pct: 1 },
  { id: 51, name: "Fence", pct: 1 },
  { id: 53, name: "Outlaw", pct: 3 },
  { id: 54, name: "Racketeer", pct: 1 },
  { id: 55, name: "Thief", pct: 1 },
  { id: 58, name: "Guard", pct: 3 },
  { id: 60, name: "Pit Fighter", pct: 2 },
  { id: 61, name: "Protagonist", pct: 3 },
  { id: 62, name: "Soldier", pct: 3 },
  { id: 63, name: "Troll Slayer", pct: 4 }
];
const halfling = [
  { id: 1, name: "Apothecary", pct: 1 },
  { id: 2, name: "Engineer", pct: 1 },
  { id: 3, name: "Lawyer", pct: 2 },
  { id: 5, name: "Physician", pct: 2 },
  { id: 7, name: "Scholar", pct: 2 },
  { id: 9, name: "Agitator", pct: 2 },
  { id: 10, name: "Artisan", pct: 5 },
  { id: 11, name: "Beggar", pct: 4 },
  { id: 12, name: "Investigator", pct: 2 },
  { id: 13, name: "Merchant", pct: 4 },
  { id: 14, name: "Rat Catcher", pct: 3 },
  { id: 15, name: "Townsman", pct: 3 },
  { id: 16, name: "Watchman", pct: 2 },
  { id: 17, name: "Advisor", pct: 1 },
  { id: 18, name: "Artist", pct: 2 },
  { id: 20, name: "Envoy", pct: 1 },
  { id: 22, name: "Servant", pct: 6 },
  { id: 23, name: "Spy", pct: 1 },
  { id: 24, name: "Warden", pct: 2 },
  { id: 25, name: "Bailiff", pct: 1 },
  { id: 27, name: "Herbalist", pct: 3 },
  { id: 28, name: "Hunter", pct: 2 },
  { id: 29, name: "Miner", pct: 1 },
  { id: 31, name: "Scout", pct: 1 },
  { id: 32, name: "Villager", pct: 3 },
  { id: 33, name: "Bounty Hunter", pct: 1 },
  { id: 34, name: "Coachman", pct: 2 },
  { id: 35, name: "Entertainer", pct: 3 },
  { id: 37, name: "Messenger", pct: 2 },
  { id: 38, name: "Pedlar", pct: 2 },
  { id: 41, name: "Boatman", pct: 1 },
  { id: 42, name: "Huffer", pct: 1 },
  { id: 44, name: "Riverwoman", pct: 3 },
  { id: 45, name: "Seaman", pct: 1 },
  { id: 46, name: "Smuggler", pct: 4 },
  { id: 47, name: "Stevedore", pct: 3 },
  { id: 48, name: "Wrecker", pct: 1 },
  { id: 49, name: "Bawd", pct: 3 },
  { id: 50, name: "Charlatan", pct: 1 },
  { id: 51, name: "Fence", pct: 1 },
  { id: 52, name: "Grave Robber", pct: 1 },
  { id: 53, name: "Outlaw", pct: 1 },
  { id: 54, name: "Racketeer", pct: 1 },
  { id: 55, name: "Thief", pct: 4 },
  { id: 58, name: "Guard", pct: 2 },
  { id: 60, name: "Pit Fighter", pct: 1 },
  { id: 62, name: "Soldier", pct: 3 }
];
const helf = [
  { id: 1, name: "Apothecary", pct: 2 },
  { id: 3, name: "Lawyer", pct: 4 },
  { id: 5, name: "Physician", pct: 2 },
  { id: 7, name: "Scholar", pct: 4 },
  { id: 8, name: "Wizard", pct: 4 },
  { id: 10, name: "Artisan", pct: 3 },
  { id: 12, name: "Investigator", pct: 2 },
  { id: 13, name: "Merchant", pct: 5 },
  { id: 15, name: "Townsman", pct: 2 },
  { id: 16, name: "Watchman", pct: 1 },
  { id: 17, name: "Advisor", pct: 2 },
  { id: 18, name: "Artist", pct: 1 },
  { id: 19, name: "Duellist", pct: 2 },
  { id: 20, name: "Envoy", pct: 3 },
  { id: 21, name: "Noble", pct: 3 },
  { id: 23, name: "Spy", pct: 2 },
  { id: 24, name: "Warden", pct: 2 },
  { id: 27, name: "Herbalist", pct: 2 },
  { id: 28, name: "Hunter", pct: 3 },
  { id: 31, name: "Scout", pct: 6 },
  { id: 33, name: "Bounty Hunter", pct: 3 },
  { id: 35, name: "Entertainer", pct: 3 },
  { id: 37, name: "Messenger", pct: 1 },
  { id: 41, name: "Boatman", pct: 1 },
  { id: 45, name: "Seaman", pct: 15 },
  { id: 46, name: "Smuggler", pct: 1 },
  { id: 49, name: "Bawd", pct: 2 },
  { id: 50, name: "Charlatan", pct: 3 },
  { id: 53, name: "Outlaw", pct: 3 },
  { id: 57, name: "Cavalryman", pct: 4 },
  { id: 58, name: "Guard", pct: 2 },
  { id: 59, name: "Knight", pct: 1 },
  { id: 60, name: "Pit Fighter", pct: 2 },
  { id: 61, name: "Protagonist", pct: 1 },
  { id: 62, name: "Soldier", pct: 2 }
];
const welf = [
  { id: 7, name: "Scholar", pct: 1 },
  { id: 8, name: "Wizard", pct: 4 },
  { id: 10, name: "Artisan", pct: 5 },
  { id: 17, name: "Advisor", pct: 5 },
  { id: 18, name: "Artist", pct: 5 },
  { id: 20, name: "Envoy", pct: 7 },
  { id: 21, name: "Noble", pct: 6 },
  { id: 23, name: "Spy", pct: 4 },
  { id: 27, name: "Herbalist", pct: 7 },
  { id: 28, name: "Hunter", pct: 10 },
  { id: 30, name: "Mystic", pct: 5 },
  { id: 31, name: "Scout", pct: 11 },
  { id: 33, name: "Bounty Hunter", pct: 2 },
  { id: 35, name: "Entertainer", pct: 5 },
  { id: 37, name: "Messenger", pct: 3 },
  { id: 48, name: "Wrecker", pct: 1 },
  { id: 53, name: "Outlaw", pct: 6 },
  { id: 57, name: "Cavalryman", pct: 5 },
  { id: 58, name: "Guard", pct: 2 },
  { id: 59, name: "Knight", pct: 2 },
  { id: 60, name: "Pit Fighter", pct: 2 },
  { id: 62, name: "Soldier", pct: 4 }
];

export default {
  human,
  dwarf,
  halfling,
  helf,
  welf,
  humanChances: chances(human),
  dwarfChances: chances(dwarf),
  halflingChances: chances(halfling),
  helfChances: chances(helf),
  welfChances: chances(welf)
};
