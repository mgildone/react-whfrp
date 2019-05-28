function roll1d10(){
    "use strict";
     return Math.floor(Math.random() * 10) + 1;
    }
    
    function roll2d10(){
    "use strict";
     return Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + 2;
    }
    
    function rollXd10(x){
    "use strict";
        var j;
        var roll= 0;
        for (j = 0; j < x; j += 1) {
            roll += roll1d10();
        }
        return roll;
    }
    
    function roll1d100(){
    "use strict";
     return Math.floor(Math.random() * 100) + 1;
    }
    
    function generateChar(SpeciesChoice) {
    "use strict";
    var Name = "";
    var NameTxt = "";
    
    var xp = 0;
    var xpSpend = 0;
    var XpTxt = "";
    
    var SpeciesTxt ="";
    var SpeciesN;
    var SpeciesAll = ["Human","Dwarf","Halfling","High Elf","Wood Elf"];
    
    var Sex = 0;
    
    var NamesHumanMale = ["Armin", "Adolf", "Adolphus", "Albrecht", "Alexander", "Aldred", "Alfred",
    "Anders", "Anton", "Axel", "Bernard", "Bernd", "Bert", "Boris", "Bruno", 
    "Chedwic", "Christian", "Christoph", "Claus", "Clemons", "Conrad", "Konrad", 
    "Dahlbert", "Detlef", "Dieter", "Dirk", "Erberhardt", "Erik", "Erich",
    "Ernst", "Erwin", "Erzbet", "Felix", "Franz", "Friedrich", "Fredrick",
    "Fritz", "Georg", "Gerd", "Gotz", "Gregor", "Gunter", "Gunther", "Gustav",
    "Hannes", "Hans", "Hanzi", "Heiner", "Heinrich", "Heinz", "Hieronymus",
    "Helmut", "Henri", "Holger", "Ingo", "Jens", "Joachim", "Johann", "Johannes",
    "Jonas", "Jorg", "Josef", "Jurgen", "Kaster", "Karl", "Klaus", "Knud",
    "Konrad", "Kurt", "Lou", "Luitpold", "Manfred", "Marius", "Max (Maximilian)",
    "Mathieu", "Matthias", "Mikhail", "Mortmore", "Nathaniel", "Nicholas",
    "Nicholaus", "Nikolaus", "Norbert", "Oswald", "Otto", "Paulus", "Peter",
    "Rainer", "Reiner", "Rolf", "Rudger", "Rudolf", "Rudolph", "Ruy", "Sepp",
    "Siegfried", "Stefan", "Sven", "Thadius", "Theodor", "Udo", "Ulrich", "Ulrike",
    "Volker", "Werner", "Wiesel", "Wilhelm", "Wim", "Wolf", "Wolfgang", "Adalbert",
    "Adam", "Adolf", "Adolphus", "Albert", "Albrecht", "Aldred", "Alexander",
    "Axel", "Alfons", "Alfred", "Alois", "Aloisius", "Andreas", "Anders", "Anton",
    "Antonius", "Armin", "Arnold", "Arthur", "August", "Augustus", "Balthasar",
    "Benedikt", "Bernhard", "Benno", "Bernd", "Berthold", "Bartolomeus", "Bertram",
    "Bonifatius", "Clemens", "Cyrilus", "Daniel", "David", "Detlef", "Dettel",
    "Dieter", "Dieterich", "Dirk", "Eberhard", "Edgar", "Edler", "Edmund", "Eduard",
    "Ede", "Egolf", "Egon", "Eitel", "Elmar", "Elmer", "Emil", "Emilius", "Erhard",
    "Erich", "Erik", "Ernst", "Erwin", "Eugen", "Fabian", "Felix", "Ferdinand",
    "Ferdl", "Florian", "Frank", "Franz", "Francius", "Friedrich", "Frieder",
    "Fritz", "Gabriel", "Georg", "Gerhard", "Gerd", "Götz", "Gregor", "Gunter",
    "Gustav", "Gustavus", "Harald", "Heinrich", "Heiner", "Heinz", "Herbert",
    "Heribert", "Hermann", "Arminius", "Hieronymus", "Holger", "Hubert", "Hugo",
    "Ignaz", "Ignatius", "Isidor", "Jakob", "Jacobus", "Joachim", "Achim", "Jochen",
    "Johannes", "Hans", "Hannes", "Jonas", "Jonathan", "Jorg", "Josef", "Josephus",
    "Sepp", "Julius", "Jurgen", "Karl", "Carolus", "Kasimir", "Kaster", "Castor",
    "Kaspar", "Kasper", "Caspar", "Knut", "Konrad", "Conrad", "Konz", "Konstantin",
    "Kurt", "Laurenz", "Lorenz", "Laurentius", "Leonhard", "Leo", "Ludwig",
    "Lodeweik", "Luitpold", "Lutz", "Manfred", "Marius", "Markus", "Martin",
    "Mathias", "Mattheus", "Maximilian", "Max", "Melchior", "Michael", "Michel",
    "Moritz", "Nathan", "Nikolaus", "Niklas", "Klaus", "Norbert", "Olaf", "Oskar",
    "Oswald", "Otto", "Paul", "Paulus", "Peter", "Petrus", "Philipp", "Philippus",
    "Pius", "Raimund", "Reimund", "Rainer", "Reiner", "Richard", "Robert", "Bert",
    "Roland", "Rudiger", "Rudger", "Roger", "Rudolf", "Rolf", "Rudi", "Ruprecht",
    "Rupert", "Samuel", "Siegfried", "Silvester", "Simon", "Stefan", "Stephan",
    "Steffen", "Sven", "Thadeus", "Theodor", "Theo", "Thomas", "Timotheus",
    "Titus", "Tobias", "Udo", "Ulrich", "Valentin", "Veit", "Viktor", "Volkmar",
    "Volker", "Walter", "Wendel", "Werner", "Wolfgang", "Wolf", "Wilhelm", "Wili",
    "Zacharias"];
    var NamesDwarfMale = ["Adrik","Alberich","Baern","Barendd", "Brouor", "Bruenor",
    "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain",
    "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn",
    "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal",
     "Alrik", "Bronda", "Dimzad", "Fenna", "Gottri", "Gudrun", "Snorri"];
    var NamesHalflingMale = ["Alton","Ander","Cade","Corrin", "Eldon", "Errich,",
    "Finnan", "Garret", "Lindal", "Lyle", "Merrie", "Milo", "Osborn", "Perrin",
    "Reed", "Roscoe", "Wellby", "Ferdinand", "Heironymus", "Maximillian",
    "Theodosius"];
    var NamesElfMale = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro",
    "Berrian", "Carrie", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai",
    "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias",
    "Peren", "Quarion", "Riardol", "Rolen", "Soveliss", "Thamior", "Tharivol",
    "Theren", "Varis"];
    
    var NamesHumanFemale = ["Andrea", "Angelika", "Anita", "Anna-Lise", "Astrid", "Brigid", "Brigitte",
    "Camilla", "Celeste", "Charlotte", "Christa", "Christiane", "Clementine",
    "Cordula", "Daniele", "Doris", "Eva", "Edda", "Edith", "Elga", "Elisabeth",
    "Elixabet", "Ellen", "Etti", "Frances", "Frieda", "Gabriel e", "Gaby", "Gerd",
    "Gertrud", "Gisela", "Gloria", "Hanna", "Hanni", "Hannelore", "Heidi", "Helena",
    "Helene", "Helga", "Helke", "Helma", "Henriette", "Ingrid", "Karin", "Karina",
    "Katharina", "Kathe", "Katrin", "Julianne", "Lena", "Lile", "Lilian", "Lisa",
    "Liv", "Magdalene", "Margret", "Margarethe", "Magrit", "Maria", "Mariann",
    "Marianne", "Marlene", "Marthe", "Mel ory", "Monika", "Nadja", "Nastassja",
    "Natja", "Oliva", "Rena", "Rosa", "Ruth", "Sybil e", "Tatjana", "Uli", "Ursula",
    "Vera", "Veronika", "Winifred", "Yella", "Yvette", "Dagmar", "Adelheid",
    "Heide", "Agathe", "Agatha", "Agnes", "Alexandra", "Alexa", "Alix", "Andrea",
    "Angelika", "Anna", "Anne", "Anneliese", "Annette", "Antonia", "Augusta",
    "Beata", "Beate", "Bertha", "Berthe", "Brigitte", "Gitte", "Britta", "Cacilie",
    "Camila", "Carola", "Karola", "Charlotte", "Lotte", "Claudia", "Clementine",
    "Cordula", "Cornelia", "Kornelia", "Daniela", "Dora", "Doris", "Dorothea",
    "Edda", "Edith", "Eleonore", "Elisabeth", "Elsbeth", "Elsa", "Lisbeth", "Elke",
    "Elen", "Else", "Elvira", "Emilie", "Emilia", "Erika", "Esther", "Eugenie",
    "Eva", "Felicitas", "Franka", "Franza", "Franziska", "Franzi", "Frieda",
    "Friederike", "Gabriele", "Gerda", "Gertraud", "Gertraut", "Gertrude",
    "Gisela", "Gloria", "Hanna", "Hannelore", "Hedwig", "Helene", "Helena",
    "Helga", "Helma", "Henriette", "Hildegard", "Hilde", "Ida", "Ilse", "Ina",
    "Ingrid", "Isabela", "Isadora", "Isolde", "Johanna", "Josephine", "Judith",
    "Jutta", "Juliane", "Julia", "Karin", "Karla", "Karoline", "Katharina", "Kathe",
    "Kathrin", "Leonore", "Liliane", "Lore", "Luise", "Luzia", "Magda",
    "Magdalene", "Lene", "Lena", "Margarete", "Margareta", "Gretel", "Margit",
    "Margot", "Marie", "Marianne", "Marion", "Marlene", "Martha", "Marthe",
    "Mathilde", "Michaela", "Monika", "Nadja", "Ottilie", "Paula", "Petra",
    "Rebekka", "Regina", "Regine", "Renate", "Renata", "Rikarda", "Rosa", "Ruth",
    "Sabine", "Sibyle", "Silvia", "Sophie", "Stefanie", "Stephanie", "Susanne",
    "Susanna", "Therese", "Ulrike", "Ursula", "Ursel", "Valentina", "Verena",
    "Vera", "Veronika", "Viktoria", "Wilhelmine", "Winifred"];
    var NamesDwarfFemale = ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal",
    "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja",
    "Hlin", "Kathra", "Kristryd", "Hilde", "Liftrasa", "Mardred", "Riswynn",
    "Sannl", "Torbera", "Torgga", "Vistra"];
    var NamesHalflingFemale = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia",
    "Lidda", "Meda", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym",
    "Vani", "Verna", "Antoniella", "Esmerelda", "Thomasina"];
    
    var NamesElfFemale = ["Adrie", "Althaea", "Anastrianna,", "Andraste", "Antinua",
    "Bethrynna", "Birel", "Caelynn,", "Drusilia", "Enna", "Felosial", "Ielenia",
    "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara",
    "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui",
    "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"];
    
    var NamesAllMale = [ NamesHumanMale, NamesDwarfMale, NamesHalflingMale,
     NamesElfMale, NamesElfMale];
    
    var NamesAllFemale = [ NamesHumanFemale, NamesDwarfFemale, NamesHalflingFemale,
     NamesElfFemale, NamesElfFemale];
    
    var NamesAll = [NamesAllMale, NamesAllFemale];
    
    var SurnamesHuman = ["Abel", "Abend", "Abendrot", "Achenbach", "Ackermann", "Adler", "Albers",
    "Alendorf", "Alsheimer", "Alt", "Arndt", "Aschendorf", "Baer", "Baumann",
    "Berger", "Biedenkopf", "Blacher", "Blech", "Blum", "Bockenheim", "Bohm",
    "Bohne", "Bohnen", "Bol", "Bormann", "Bornheim", "Brandauer", "Brahms",
    "Bratsch", "Braun", "Bremer", "Bruck", "Brunkhorst", "Brustelin", "Buchwald",
    "Carow", "Castel", "Clausewitz", "Clemm", "Cloos", "Delschaft", "Dickopf",
    "Dietrich", "Diffring", "Dissel", "Dornbusch", "Dreckspatz", "Dabisch", "Damm",
    "Datz", "Daube", "Denker", "Diestelmeyer", "Dippel", "Dirnbach", "Dolinger",
    "Donner", "Dreyer", "Duster", "Dastein", "Eberlein", "Ebert", "Eckstein",
    "Edel", "Eibl", "Eifer", "Eiferer", "Eigenbrot", "Eckmann", "Emmel", "Engels",
    "Ensslin", "Erbach", "Eschenheim", "Fabel", "Faler", "Fassbinder", "Fassnacht",
    "Feder", "Feiler", "Feldmann", "Feuerbach", "Feyerabend", "Fischer",
    "Fleischer", "Frei", "Freihof", "Fritsch", "Fuchs", "Ganz", "Gehweiler",
    "Geissler", "Gickel", "Glaubrecht", "Goetz", "Goldstein", "Gottschalk",
    "Grau", "Grasser", "Griem", "Grobschnitt", "Gronemeyer", "Gschwendtner",
    "Guhne", "Gunzberg", "Gutmann", "Haak", "Hack", "Harnisch", "Hartwig",
    "Hasen", "Hasener", "Hassel", "Heinemann", "Helfrich", "Hermann", "Hinfalig",
    "Hintz", "Hockschwarzer", "Hofbauer", "Hoffmann", "Hoger", "Holzkrug", "Holt",
    "Horn", "Jaeger", "Jackel", "Junghans", "Kahl", "Kannicher", "Kant", "Karge",
    "Kaufmann", "Keler", "Keush", "Keilgeld", "Kier", "Klammer", "Kleist", "Kluge",
    "Knopp", "Kochel", "Kohl", "Konigs", "Kopp", "Korff", "Korte", "Kortner",
    "Krauss", "Kreuzer", "Kroetz", "Kronenhof", "Kruck", "Krug", "Kruger", "Kummer",
    "Ladengast", "Lang", "Langen", "Laubrich", "Lauschen", "Leinweber", "Leipnitz",
    "Lenz", "Lesch", "Liebenfels", "Lochner", "Lommel", "Lupenrein", "Mack",
    "Macken", "Magen", "Maier", "Mankau", "Manzel", "Marx", "Mattes", "Meier",
    "Melinger", "Messner", "Moseke", "Moos", "Moser", "Muler", "Murnau", "Nagel",
    "Nass", "Neubauer", "Nieden", "Nol", "Nutzniesser", "Oberlander", "Offen",
    "Olbricht", "Oldenhaler", "Osten", "Otterbach", "Pabst", "Palenberg", "Panke",
    "Patzer", "Peilstock", "Pfeffer", "Plotz", "Pommer", "Praunheim", "Raab",
    "Rabeneck", "Radmacher", "Reich", "Reitsmann", "Reitz", "Reusse", "Rommel",
    "Rotlander", "Rudiger", "Rupp", "Sagebrecht", "Sander", "Sauber", "Schaden",
    "Schaake", "Schauble", "Schenk", "Scheydt", "Schnel", "Schondorff", "Schubert",
    "Schmidt", "Schwanenheim", "Semmelrogge", "Sierck", "Silber", "Sinkel",
    "Speilhalter", "Steinhoff", "Stratz", "Stumpfnase", "Tauber", "Tetzel",
    "Tiele", "Tietmeyer", "Tischer", "Trapp", "Treuer", "Trommler", "Ulmann",
    "Uebele", "Ulbricht", "Unverzagt", "Unzeit", "Veigl", "Vieweg", "Viertel",
    "Vocken", "Vogel", "Vogler", "Wagner", "Weinrich", "Weizsacker", "Wennemann",
    "Wegener", "Weyrauch", "Wiene", "Winkler", "Winterstein", "Witzen",
    "Wolkenstein", "Zech", "Zieren", "Zimmermann", "Zischer", "Zopf", "Zweifel",
    "Klauen", "Karge", "Shcatten", "Mittel", "Drakens", "Grau", "Axtschlagpass",
    "Gross", "Reik", "Meut", "Niderreik", "Dunkelfeuerpass", "Schwarz", "Duster",
    "Dach", "Welten"];
    var SurnamesDwarf = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", 
    "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", 
    "Strakelin", "Torunn", "Ungart", "Baragraz", "Durak", "Galazil", "Gnoldok", 
    "Nazril", "Okri", "Ardrungan", "Bryntok", "Gazani", "Gromheld", "Harrazlings", 
    "Unboki", "Dokkintroll", "Ganvalgger", "Kvitang", "Thrungtak", "Wyrgrinti", 
    "Zankonk"];
    var SurnamesHalfling = ["Brushgather","Goodbarrel","Greenbottle","High-hill",
    "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough",
    "Ashfield", "Brandysnap", "Hayfoot", "Rumster", "Shortbottom", "Thorncobble"];
    var SurnamesElf = ["Amakiir(Gemflower)","Amastacia(Starflower)",
    "Galanodel(Moonwhisper)","Holimion(Diamonddew)", "Ilphelkiir(Gemblossom)",
    "Liadon(Silverfrond)", "Meliamne(Oakenheel)", "Natlo(Nightbreeze)",
    "Siannodel(Moonbrook)", "Xiloscient(Goldpetal)", "Emberfell", "Fireborn",
    "Foamheart", "Goldenhair", "Silverspray", "Spellsign", "Fleetriver",
    "Shadowstalker", "Treeshaper", "Weavewatcher", "Willowlimb", "Windrunner"];
    var SurnamesAll = [ SurnamesHuman, SurnamesDwarf, SurnamesHalfling, SurnamesElf, SurnamesElf];
    
    var SurnameSuffixHumanNoble = ["burg","berg","stein","stock","wald"];
    var SurnameSuffixDwarvenMale = ["sson","sson","sson","snev"];
    var SurnameSuffixDwarvenFemale = ["sdottir","sdottir","sdottir","sniz"];
    var SurnameSuffixDwarvenAll = [SurnameSuffixDwarvenMale, SurnameSuffixDwarvenFemale];
    
    var ClassN;
    var ClassAll = ["Academic","Burgher","Courtier","Peasant","Ranger","Riverfolk",
    "Rogue","Warrior"];
    var CareerN;
    var CareerName;
    var CareerAll = ["Apothecary","Engineer","Lawyer","Nun",
    "Physician","Priest","Scholar","Wizard",
    "Agitator","Artisan","Beggar","Investigator",
    "Merchant","Rat Catcher","Townsman","Watchman",
    "Advisor","Artist","Duellist","Envoy",
    "Noble","Servant","Spy","Warden",
    "Bailiff","Hedge Witch","Herbalist","Hunter",
    "Miner","Mystic","Scout","Villager",
    "Bounty Hunter","Coachman","Entertainer","Flagellant",
    "Messenger","Pedlar","Roadwarden","Witch Hunter",
    "Boatman","Huffer","Riverwoman","Riverwarden",
    "Seaman","Smuggler","Stevedore","Wrecker",
    "Bawd","Charlatan","Fence","Grave Robber",
    "Outlaw","Thief","Racketeer","Witch",
    "Cavalryman","Guard","Knight","Pit Fighter",
    "Protagonist","Soldier","Troll Slayer","Warrior Priest"];
    var CareerHuman = [1,2,3,5,6,11,13,14,15,17,19,20,21,23,26,27,28,29,30,31,32,35,
    36,37,38,39,40,42,43,44,45,50,51,52,54,56,57,58,59,60,62,63,66,68,70,71,73,74,
    76,77,78,79,83,86,87,88,90,92,93,94,95,99,-1,100];
    var CareerDwarf = [1,4,6,-1,7,-1,9,-1,11,17,18,20,25,-1,31,34,36,37,38,40,41,42,
    43,45,47,-1,-1,49,54,-1,55,56,60,61,63,-1,65,67,-1,-1,69,70,72,-1,73,75,77,78,
    -1,-1,79,-1,82,83,84,-1,-1,87,-1,90,93,96,100,-1];
    var CareerHalfling = [1,2,4,-1,6,-1,8,-1,10,15,19,21,25,28,31,33,34,36,-1,37,-1,
    43,44,46,47,-1,50,52,53,-1,54,57,58,60,63,-1,65,67,68,-1,69,70,73,74,75,79,84,-1,
    85,86,87,88,89,93,94,-1,-1,96,-1,97,-1,100,-1,-1];
    var CareerHElf = [2,-1,6,-1,8,-1,12,16,-1,19,-1,21,26,-1,28,29,31,32,34,37,40,-1,
    43,45,-1,-1,47,50,-1,-1,56,-1,59,-1,62,-1,63,-1,-1,-1,64,-1,-1,-1,79,80,-1,-1,
    82,85,-1,-1,88,-1,-1,-1,92,94,95,97,98,100,-1,-1];
    var CareerWElf = [-1,-1,-1,-1,-1,-1,1,5,-1,10,-1,-1,-1,-1,-1,-1,14,18,-1,25,31,
    -1,35,-1,-1,-1,42,53,-1,57,68,-1,70,-1,78,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    79,-1,-1,-1,-1,85,-1,-1,-1,90,92,94,96,-1,100,-1,-1];
    var CareerSpeciesAll = [CareerHuman, CareerDwarf, CareerHalfling, CareerHElf, CareerWElf];
    var CareerSpecies = [];
    var CareerTxt ="";
    var CareerAdvance = [ [3,6,7],[1,6,7],[5,6,7],[6,7,9],
    [6,7,8],[3,4,8],[3,7,8],[0,7,8],
    [1,7,9],[2,3,6],[3,4,9],[5,4,7],
    [0,4,9],[0,1,8],[4,7,9],[0,2,9],
    [3,5,4],[2,5,6],[0,5,4],[3,4,9],
    [0,5,6],[2,3,4],[4,8,9],[2,3,8],
    [0,5,8],[3,5,6],[3,5,4],[2,3,6],
    [2,3,8],[5,6,9],[3,5,4],[2,3,4],
    [0,3,4],[1,3,8],[4,6,9],[0,2,3],
    [3,5,4],[3,6,8],[1,3,5],[3,5,8],
    [2,3,4],[0,3,5],[3,4,6],[1,2,9],
    [4,6,9],[4,6,8],[0,3,5],[0,2,5],
    [4,6,9],[5,4,9],[5,4,9],[2,5,8],
    [0,2,3],[5,4,8],[0,2,3],[0,3,8],
    [0,2,4],[0,3,4],[2,5,4],[0,2,3],
    [2,3,4],[0,2,8],[0,3,8],[0,8,9]
    ];
    var CareerSocial = ["Brass 3","Brass 4","Brass 4","Brass 1",
    "Brass 4","Brass 2","Brass 3","Brass 3",
    "Brass 1","Brass 2","Brass 0","Silver 1",
    "Silver 2","Brass 2","Silver 1","Brass 3",
    "Silver 2","Silver 1","Silver 3","Silver 2",
    "Gold 1","Silver 1","Brass 3","Silver 1",
    "Silver 1","Brass 1","Brass 2","Brass 2",
    "Brass 2","Brass 1","Brass 3","Brass 2",
    "Silver 1","Silver 1","Brass 3","Brass 0",
    "Brass 3","Brass 1","Brass 5","Silver 1",
    "Silver 1","Brass 4","Brass 2","Silver 1",
    "Silver 1","Brass 2","Brass 3","Brass 2",
    "Brass 1","Brass 3","Silver 1","Brass 2",
    "Brass 1","Brass 1","Brass 3","Brass 1",
    "Silver 2","Silver 1","Silver 3","Brass 4",
    "Brass 2","Brass 2","Silver 1","Brass 2"];
    
    
    var StatsTxt = "";
    var StatsName = ["WS","BS","S","T","AG","I","DEX","INT","WP","FEL"];
    var StatsR = [0,0,0,0,0,0,0,0,0,0];
    var StatsHuman = [20,20,20,20,20,20,20,20,20,20,20];
    var StatsDwarf = [30,20,20,30,10,20,30,20,40,10];
    var StatsHalfling = [10,30,10,20,20,20,30,20,30,30];
    var StatsHElf = [30,30,20,20,30,40,30,30,30,20];
    var StatsWElf = [30,30,20,20,30,40,30,30,30,20];
    var StatsAll = [StatsHuman, StatsDwarf, StatsHalfling, StatsHElf, StatsWElf];
    var StatsCareer = [0,0,0,0,0,0,0,0,0,0];
    var StatsAdvance = [0,0,0,0,0,0,0,0,0,0];
    var StatsBase = [0,0,0,0,0,0,0,0,0,0];
    var StatsTalents  = [0,0,0,0,0,0,0,0,0,0];
    
    var FateResilienceTxt = "";
    var StatsExtraName = ["W","M","Fate","Resilience", "Extra"];
    var StatsExtraHuman = [ 0, 4, 2, 1, 3];
    var StatsExtraDwarf = [ 0, 3, 0, 2, 2];
    var StatsExtraHalfling = [ 0, 3, 0, 2, 3];
    var StatsExtraHElf = [ 0, 5, 0, 0, 2];
    var StatsExtraWElf  = [ 0, 5, 0, 0, 2];
    var StatsExtraAll = [StatsExtraHuman, StatsExtraDwarf, StatsExtraHalfling, StatsExtraHElf, StatsExtraWElf];
    var StatsExtraBase = [ 0, 0, 0, 0, 0 ];
    var StatsExtra = [ 0, 0, 0, 0, 0 ];
    
    var SkillStartHuman= ["Animal Care",
    "Charm", 
    "Cool",
    "Evaluate",
    "Gossip","Haggle",
    "Language (Bretonnian)",
    "Language (Wastelander)", 
    "Leadership",
    "Lore (Reikland)",
    "Melee (Basic)", 
    "Ranged (Bow)"];
    
    var SkillStartDwarf = ["Consume Alcohol",
    "Cool",
    "Endurance",
    "Entertain (Storytelling)",
    "Evaluate",
    "Intimidate",
    "Language (Khazalid)",
    "Lore (Dwarfs)",
    "Lore (Geology)",
    "Lore (Metallurgy)",
    "Melee (Basic)",
    "Trade (Any one)"];
    
    var SkillStartHalfling = ["Charm",
    "Consume Alcohol",
    "Dodge",
    "Gamble",
    "Haggle",
    "Intuition",
    "Language (Mootish)",
    "Lore (Reikland)",
    "Perception",
    "Sleight of Hand",
    "Stealth (Any one)",
    "Trade (Cook)"];
    
    var SkillStartHElf = ["Cool",
    "Entertain (Sing)",
    "Evaluate",
    "Language (Eltharin)",
    "Leadership",
    "Melee (Basic)",
    "Navigation",
    "Perception",
    "Play (Any one)",
    "Ranged (Bow)",
    "Sail",
    "Swim"];
    var SkillStartWElf = ["Athletics",
    "Climb",
    "Endurance",
    "Entertain (Sing)",
    "Intimidate",
    "Language (Eltharin)",
    "Melee (Basic)",
    "Outdoor Survival",
    "Perception",
    "Ranged (Bow)",
    "Stealth (Rural or Urban)",
    "Track"];
    
    var SkillStartAll = [SkillStartHuman,
     SkillStartDwarf,SkillStartHalfling,
     SkillStartHElf,SkillStartWElf];
    
    var SkillTxt ="";
    var SkillStart;
    var SkillNames = [];
    var SkillValues = [];
    
    var TalentStartHuman = ["Doomed","Savvy or Suave","Random","Random","Random" ];
    var TalentStartDwarf = ["Magic Resistance","Night Vision","Read/Write or Relentless","Resolute or Strong-Minded","Sturdy"];
    var TalentStartHalfling = ["Acute Sense (Taste)", "Night Vision", "Resistance (Chaos)", "Small", "Random"];
    var TalentStartHElf = ["Acute Sense (Vision)", "Coolheaded or Savvy", "Night Vision", "Second Sight or Sixth Sense", "Read/Write"];
    var TalentStartWElf = ["Acute Sense (Vision)", "Hardy or Second Sight", "Night Vision", "Read/Write or Very Resilient", "Rover"];
    
    var TalentStartAll = [TalentStartHuman,
     TalentStartDwarf,TalentStartHalfling,
     TalentStartHElf,TalentStartWElf];
    
    var TalentTxt ="";
    var TalentNames = [];
    var TalentValues = [];
    
    var TalentRandom = [3, 6, 9, 12, 15, 18, 21, 24, 28, 31, 34, 38, 41, 44, 47, 50, 52, 55, 58, 62, 65, 68, 71, 74, 78, 81, 84, 87, 91, 94, 97, 100];
    
    var TalentRandomName = ["Acute Sense (Any one)",
    "Ambidextrous",
    "Animal Affinity",
    "Artistic",
    "Attractive",
    "Coolheaded",
    "Craftsman (Any one)",
    "Flee!",
    "Hardy",
    "Lightning Reflexes",
    "Linguistics",
    "Luck",
    "Marksman",
    "Mimic",
    "Night Vision",
    "Nimble Fingered",
    "Noble Blood",
    "Orientation",
    "Perfect Pitch",
    "Pure Soul",
    "Quick-Witted",
    "Resistance (Any one)",
    "Savvy",
    "Sharp",
    "Sixth Sense",
    "Strong Legs",
    "Sturdy",
    "Suave",
    "Super Numerate",
    "Very Resilient",
    "Very Strong",
    "Warrior Born"];
    
    
    var CareerTalents = [ ["Concoct","Craftsman (Apothecary)","Etiquette (Scholar)","Read/Write"],
    ["Artist","Gunner","Read/Write","Tinker"],
    ["Blather","Etiquette (Scholar)","Read/Write","Speedreader"],
    ["Bless (Any one)","Stone Soup","Panhandle","Read/Write"],
    ["Bookish","Field Dressing","Read/Write","Strike to Stun"],
    ["Bless (Any one)","Holy Visions","Read/Write","Suave"],
    ["Carouser","Read/Write","Savvy","Super Numerate"],
    ["Aethyric Attunement","Petty Magic (Any one)","Read/Write","Second Sight"],
    ["Blather","Gregarious","Panhandle","Read/Write"],
    ["Artistic","Craftsman (Any one)","Strong Back","Very Strong"],
    ["Panhandle","Resistance (Disease)","Stone Soup","Very Resilient"],
    ["Alley Cat","Beneath Notice","Read/Write","Sharp"],
    ["Blather","Dealmaker","Read/Write","Suave"],
    ["Night Vision","Resistance (Disease)","Strike Mighty Blow","Strike to Stun"],
    ["Alley Cat","Beneath Notice","Etiquette (Servants)","Sturdy"],
    ["Drilled","Hardy","Strike to Stun","Tenacious"],
    ["Beneath Notice","Etiquette (Any one)","Gregarious","Read/Write"],
    ["Artistic","Sharp","Strong Back","Tenacious"],
    ["Beat Blade","Distract","Feint","Step Aside"],
    ["Blather","Etiquette (Nobles)","Read/Write","Suave"],
    ["Etiquette (Nobles)","Luck","Noble Blood","Read/Write"],
    ["Beneath Notice","Strong Back","Strong-minded","Sturdy"],
    ["Blather","Carouser","Gregarious","Shadow"],
    ["Menacing","Night Vision","Sharp","Strike to Stun"],
    ["Embezzle","Numismatics","Strong Back","Tenacious"],
    ["Fast-Hands","Petty Magic","Rover","Strider (Woodlands)"],
    ["Acute Sense (Taste)","Orientation","Rover","Strider (Any one)"],
    ["Hardy","Rover","Strider (Any one)","Trapper"],
    ["Rover","Strider (Rocky)","Sturdy","Tenacious"],
    ["Attractive","Luck","Second Sight","Suave"],
    ["Orientation","Rover","Sharp","Strider (Any one)"],
    ["Rover","Strong Back","Strong-minded","Stone Soup"],
    ["Break and Enter","Shadow","Strike to Stun","Suave"],
    ["Animal Affinity","Seasoned Traveller","Trick-Riding","Tenacious"],
    ["Attractive","Mimic","Public-Speaking","Suave"],
    ["Berserk Charge","Frenzy","Read/Write","Stone Soup"],
    ["Flee!","Fleet Footed","Sprinter","Step Aside"],
    ["Fisherman","Flee!","Rover","Tinker"],
    ["Coolheaded","Embezzle","Marksman","Numismatics"],
    ["Coolheaded","Menacing","Read/Write","Resolute"],
    ["Dirty Fighting","Fisherman","Strong Back","Strong Swimmer"],
    ["Fisherman","Night Vision","Orientation","Waterman"],
    ["Fisherman","Gregarious","Strider (Marshes)","Strong Swimmer"],
    ["Strong Swimmer","Strong Back","Very Strong","Waterman"],
    ["Fisherman","Strider (Coastal)","Strong Back","Strong Swimmer"],
    ["Criminal","Fisherman","Strider (Marshes)","Strong Back"],
    ["Dirty Fighting","Strong Back","Sturdy","Very Strong"],
    ["Break and Enter","Criminal","Fisherman","Strong Back"],
    ["Attractive","Alley Cat","Blather","Gregarious"],
    ["Cardsharp","Diceman","Etiquette (Any one)","Luck"],
    ["Alley Cat","Cardsharp","Dealmaker","Gregarious"],
    ["Alley Cat","Criminal","Flee!","Strong Back"],
    ["Combat Aware","Criminal","Rover","Flee!"],
    ["Alley Cat","Criminal","Etiquette (Criminals)","Flee!"],
    ["Criminal","Etiquette (Criminals)","Menacing","Strike Mighty Blow"],
    ["Criminal","Menacing","Petty Magic","Instinctive Diction"],
    ["Combat Aware","Crack the Whip","Lightning Reflexes","Roughrider"],
    ["Diceman","Etiquette (Servants)","Strike to Stun","Tenacious"],
    ["Etiquette (Any one)","Roughrider","Sturdy","Warrior Born"],
    ["Dirty Fighter","In-fighter","Iron Jaw","Reversal"],
    ["In-fighter","Dirty Fighting","Menacing","Warrior Born"],
    ["Diceman","Marksman","Strong Back","Warrior Born"],
    ["Duel Wielder","Fearless (Everything)","Frenzy","Slayer"],
    ["Bless (Any one)","Etiquette (Cultists)","Read/Write","Strong-minded"] ];
    
    var CareerSkill = [
    ["Consume Alcohol","Heal","Language (Classical)","Lore (Chemistry)","Lore (Medicine)","Lore (Plants)","Trade (Apothecary)","Trade (Poisoner)"],
    ["Consume Alcohol","Cool","Endurance","Language (Classical)","Lore (Science)","Perception","Ranged (Blackpowder)","Trade (Engineer)"],
    ["Consume Alcohol","Endurance","Haggle","Language (Classical)","Lore (Law)","Lore (Theology)","Perception","Research"],
    ["Art (Calligraphy)","Cool","Endurance","Entertain (Storyteller)","Gossip","Heal","Lore (Theology)","Pray"],
    ["Bookish","Field Dressing","Read/Write","Strike to Stun"],
    ["Athletics","Cool","Endurance","Intuition","Lore (Theology)","Perception","Pray","Research"],
    ["Consume Alcohol","Entertain (Storytelling)","Gamble","Gossip","Haggle","Language (Classical)","Lore (Any one)","Research"],
    ["Channelling","Dodge","Intuition","Language (Magick)","Lore (Magic)","Melee (Basic)","Melee (Polearm)","Perception"],
    ["Art (Writing)","Bribery","Charm","Consume Alcohol","Gossip","Haggle","Lore (Politics)","Trade (Printing)"],
    ["Athletics","Cool","Consume Alcohol","Dodge","Endurance","Evaluate","Stealth (Urban)","Trade (Any one)"],
    ["Athletics","Charm","Consume Alcohol","Cool","Dodge","Endurance","Intuition","Stealth (Urban)"],
    ["Charm","Climb","Cool","Gossip","Intuition","Perception","Stealth (Urban)","Track"],
    ["Animal Care","Bribery","Charm","Consume Alcohol","Drive","Gamble","Gossip","Haggle"],
    ["Athletics","Animal Training (Dog)","Charm Animal","Consume Alcohol","Endurance","Melee (Basic)","Ranged (Sling)","Stealth (Underground or Urban)"],
    ["Charm","Climb","Consume Alcohol","Drive","Dodge","Gamble","Gossip","Haggle"],
    ["Athletics","Climb","Consume Alcohol","Dodge","Endurance","Gamble","Melee","Perception"],
    ["Bribery","Consume Alcohol","Endurance","Gossip","Haggle","Language (Classical)","Lore (Politics)","Perception"],
    ["Art (Any one)","Cool","Consume Alcohol","Evaluate","Endurance","Gossip","Perception","Stealth (Urban)"],
    ["Athletics","Dodge","Endurance","Heal","Intuition","Language (Classical)","Melee (Any one)","Perception"],
    ["Athletics","Charm","Drive","Dodge","Endurance","Intuition","Ride (Horse)","Row"],
    ["Bribery","Consume Alcohol","Gamble","Intimidate","Leadership","Lore (Heraldry)","Melee (Fencing)","Play (Any one)"],
    ["Athletics","Climb","Drive","Dodge","Endurance","Intuition","Perception","Stealth (Any one)"],
    ["Bribery","Charm","Cool","Gamble","Gossip","Haggle","Perception","Stealth (Any one)"],
    ["Athletics","Charm Animal","Consume Alcohol","Cool","Endurance","Intuition","Perception","Trade (Any one)"],
    ["Cool","Dodge","Endurance","Gossip","Haggle","Intimidate","Melee","Perception"],
    ["Channelling","Endurance","Intuition","Lore (Folklore)","Lore (Herbs)","Outdoor Survival","Perception","Trade (Charms)"],
    ["Charm Animal","Climb","Endurance","Lore (Herbs)","Outdoor Survival","Perception","Swim","Trade (Herbalist)"],
    ["Charm Animal","Climb","Endurance","Lore (Beasts)","Outdoor Survival","Perception","Ranged (Bow)","Set Trap"],
    ["Cool","Endurance","Intuition","Lore (Local)","Melee (Two-handed)","Outdoor Survival","Perception","Swim"],
    ["Charm","Entertain (Fortune Telling)","Dodge","Gossip","Haggle","Intuition","Perception","Sleight of Hand"],
    ["Charm Animal","Climb","Endurance","Gossip","Lore (Local)","Melee (Basic)","Outdoor Survival","Perception"],
    ["Animal Care","Athletics","Consume Alcohol","Endurance","Gossip","Melee (Fist)","Lore (Local)","Outdoor Survival"],
    ["Bribery","Charm","Gossip","Haggle","Intuition","Melee (Basic)","Outdoor Survival","Perception"],
    ["Animal Care","Charm Animal","Climb","Drive","Endurance","Perception","Ranged (Entangling)","Ride (Horse)"],
    ["Athletics","Charm","Entertain (Any one)","Gossip","Haggle","Perform (Any one)","Play (Any one)","Sleight of Hand"],
    ["Dodge","Endurance","Heal","Intimidate","Intuition","Lore (Theology)","Melee (Flail)","Outdoor Survival"],
    ["Athletics","Climb","Dodge","Endurance","Gossip","Navigation","Perception","Melee (Fist)"],
    ["Charm","Endurance","Entertain (Storytelling)","Gossip","Haggle","Intuition","Outdoor Survival","Stealth (Rural or Urban)"],
    ["Bribery","Consume Alcohol","Gamble","Gossip","Haggle","Melee (Basic)","Perception","Ranged (Crossbow)"],
    ["Charm","Consume Alcohol","Heal","Intimidate","Intuition","Lore (Torture)","Melee (Basic)","Perception"],
    ["Consume Alcohol","Dodge","Endurance","Gossip","Melee (Basic)","Row","Sail","Swim"],
    ["Consume Alcohol","Gossip","Intuition","Lore (Local)","Lore (Riverways)","Perception","Row","Swim"],
    ["Athletics","Consume Alcohol","Dodge","Endurance","Gossip","Outdoor Survival","Row","Swim"],
    ["Athletics","Dodge","Endurance","Melee (Basic)","Perception","Row","Sail","Swim"],
    ["Climb","Consume Alcohol","Gamble","Gossip","Row","Melee (Fist)","Sail","Swim"],
    ["Athletics","Bribery","Cool","Consume Alcohol","Row","Sail","Stealth (Rural or Urban)","Swim"],
    ["Athletics","Climb","Consume Alcohol","Dodge","Endurance","Gossip","Melee (Basic)","Swim"],
    ["Climb","Consume Alcohol","Dodge","Endurance","Row","Melee (Basic)","Outdoor Survival","Swim"],
    ["Bribery","Charm","Consume Alcohol","Entertain (Any one)","Gamble","Gossip","Haggle","Intimidate"],
    ["Bribery","Consume Alcohol","Charm","Entertain (Storytelling)","Gamble","Gossip","Haggle","Sleight of Hand"],
    ["Charm","Dodge","Evaluate","Gamble","Gamble","Gossip","Haggle","Melee (Basic)"],
    ["Climb","Cool","Dodge","Endurance","Gossip","Intuition","Perception","Stealth (Any one)"],
    ["Athletics","Consume Alcohol","Cool","Endurance","Gamble","Intimidate","Melee (Basic)","Outdoor Survival"],
    ["Athletics","Climb","Cool","Dodge","Endurance","Intuition","Perception","Stealth (Urban)"],
    ["Consume Alcohol","Cool","Dodge","Endurance","Intimidate","Lore (Local)","Melee (Fist)","Stealth (Urban)"],
    ["Channelling","Cool","Endurance","Gossip","Intimidate","Language (Magick)","Sleight of Hand","Stealth (Rural)"],
    ["Animal Care","Charm Animal","Endurance","Language (Battle)","Melee (Basic)","Outdoor Survival","Perception","Ride (Horse)"],
    ["Consume Alcohol","Endurance","Entertain (Storytelling)","Gamble","Gossip","Intuition","Melee (Basic)","Perception"],
    ["Athletics","Animal Care","Charm Animal","Heal","Lore (Heraldry)","Melee (Cavalry)","Ride (Horse)","Trade (Farrier)"],
    ["Athletics","Cool","Dodge","Endurance","Gamble","Intimidate","Melee (Any one)","Melee (Fist)"],
    ["Athletics","Dodge","Endurance","Entertain (Taunt)","Gossip","Haggle","Intimidate","Melee (Any one)",""],
    ["Athletics","Climb","Cool","Dodge","Endurance","Language (Battle)","Melee (Basic)","Play (Drum or Fife)"],
    ["Consume Alcohol","Cool","Dodge","Endurance","Gamble","Heal","Lore (Trolls)","Melee (Basic)"],
    ["Cool","Dodge","Endurance","Heal","Leadership","Lore (Theology)","Melee (Any one)","Pray"]
    ];
    
    var TrappingTxt = "";
    
    var TrappingClass = ["Clothing, Dagger, Pouch, Sling Bag containing Writing Kit and 1d10 sheets of Parchment",
    "Cloak, Clothing, Dagger, Hat, Pouch, Sling Bag containing Lunch",
    "Courtly Garb, Dagger, Pouch containing Tweezers, Ear Pick and a Comb",
    "Cloak, Clothing, Dagger, Pouch, Sling Bag containing Rations (1 day)",
    "Cloak, Clothing, Dagger, Pouch, Backpack containing Tinderbox, Blanket, Rations (1 day)",
    "Cloak, Clothing, Dagger, Pouch, Sling Bag containing a Flask of Spirits",
    "Clothing, Dagger, Pouch, Sling Bag containing 2 Candles, 1d10 Matches, a Hood or Mask",
    "Clothing, Hand Weapon, Dagger, Pouch"];
    
    var TrappingCareer = ["Book (Blank), Healing Draft, Leather Jerkin, Pestle and Mortar",
    "Book (Engineer), Hammer and Spikes",
    "Book (Law), Magnifying Glass",
    "Religious Symbol, Robes",
    "Bandages, Healing Draught",
    "Religious Symbol, Robes",
    "Alcohol, Book, Opinions, Writing Kit",
    "Grimoire, Staff",
    "Writing Kit, Hammer and Nails, Pile of Leaflets",
    "Chalk, Leather Jerkin, 1d10 rags",
    "Poor Quality Blanket, Cup",
    "Lantern, Lamp Oil, Journal, Quill and Ink",
    "Abacus, Mule and Cart, Canvas Tarpaulin, 3d10 Silver Shillings",
    "Sling with Ammunition, Sack, Small but Vicious Dog",
    "Lodgings, Sturdy Boots",
    "Hand Weapon, Leather Jack, Uniform",
    "Writing Kit",
    "Brush or Chisel or Quill Pen",
    "Basic Weapon or Rapier, Sling Bag containing Clothing and 1d10 Bandages",
    "Leather Jack, Livery, Scroll Case",
    "Courtly Garb, Foil or Hand Mirror, Jewellery worth 3d10 gc, Personal Servant",
    "Floor Brush",
    "Charcoal Stick, Sling Bag with 2 different sets of clothing and Hooded Cloak",
    "Keys, Lantern, Lamp Oil, Livery",
    "Hand Weapon, Small Lock Box",
    "d10 Lucky Charms, Quarterstaff, Backpack",
    "Boots, Cloak, Sling Bag containing an Assortment of Herbs",
    "Selection of Animal Traps, Hand Weapon, Sturdy Boots and Cloak",
    "Charcoal Stick, Crude Map, Pan, Spade",
    "Deck of Cards or Set of Dice, Chep Jewellery",
    "Hand Weapon, Leather Jack, Sturdy Boots and Cloak, Rope",
    "None",
    "Hand Weapon, Leather Jerkin, Rope",
    "Warm Coat and Gloves, Whip",
    "Bowl, Instrument",
    "Flail, Tattered Robes",
    "Scroll Case",
    "Backpack, Bedroll, Goods worth 2d10 brass, Tent",
    "Crossbow with 10 Bolts, Leather Jack",
    "Hand Weapon, Instruments of Torture",
    "Hand Weapon (Boat Hook), Leather Jack, Pole",
    "Hand Weapon (Boat Hook), Storm Lantern and Oil",
    "Bucket, Fishing Rod and Bait, Leather Leggings",
    "Hand Weapon (Sword), Leather Jack, Uniform",
    "Bucket, Brush, Mop",
    "Large Sack, Mask or Scarves, Tinderbox, Storm Lantern and Oil",
    "Hand Weapon (Boat Hook), Leather Gloves",
    "Crowbar, Large Sack, Leather Gloves",
    "Flask of Spirits",
    "Backpack, 2 sets of Clothing, Deck of Cards, Dice",
    "Hand Weapon, Stolen goods worth 3d10 Shillings",
    "Crowbar, Handcart, Hooded Cloak, Tarpaulin",
    "Bedroll, Hand Weapon, Leather Jerkin, Tinderbox",
    "Crowbar, Leather Jerkin, Sack",
    "Brass Knuckles, Leather Jack",
    "Candles, Chalk, Doll, Pins",
    "Hand Weapon, Leather Jack, Riding Horse with Saddle and Tack",
    "Hand Weapon, Leather Jerkin, Storm Lantern with Oil",
    "Demilance, Leather Jack, Mail Shirt, Riding Horse with Saddle and Tack, Shield and Trade Tools (Farrier)",
    "Bandages, Brass Knuckles, Hand Weapon, Leather Jack",
    "Brass Knuckles, Hood or Mask, Leather Jack",
    "Axe, Flask of Spirits, Shame, Tattoos",
    "Hand Weapon (Sword), Leather Armor, Uniform",
    "Book (Religion), Leather Jerkin, Religious Symbol, Robes, Weapon (Any one)"];
    
    /* Grouped Talents to select random group*/
    
    var AnyTalents = [ ["Acute Sense (Any one)","Acute Sense (Vision)","Acute Sense (Taste)","Acute Sense (Touch)", "Acute Sense (Hearing)", "Acute Sense (Smell)"],
    ["Bless (Any one)","Bless (Manann)","Bless (Morr)","Bless (Myrmidia)",
    "Bless (Ranald)","Bless (Taal)","Bless (Shallya)","Bless (Sigmar)","Bless (Ulric)","Bless (Verena)",
    /* Extra changes for more usual cults*/
    "Bless (Sigmar)","Bless (Sigmar)","Bless (Ulric)"],
    ["Craftsman (Any one)","Craftsman (Apothecary)","Craftsman (Artist)","Craftsman (Bowyer)","Craftsman (Brewing)",
    "Craftsman (Calligrapher)","Craftsman (Candlemaker)","Craftsman (Carpentry)","Craftsman (Cartographer)",
    "Craftsman (Cook)","Craftsman (Cooper)","Craftsman (Embalmer)","Craftsman (Engineering)","Craftsman (Farmer)",
    "Craftsman (Farrier)", "Craftsman (Gem Cutter)","Craftsman (Goldsmith)","Craftsman (Gunsmith)",
    "Craftsman (Herbalist)","Craftsman (Jewellry Making)","Craftsman (Landlord)","Craftsman (Manager)",
    "Craftsman (Mason)","Craftsman (Merchant)","Craftsman (Miller)","Craftsman (Miner)","Craftsman (Prospector)",
    "Craftsman (Shipwright)","Craftsman (Shoemaker)","Craftsman (Smithing)","Craftsman (Tailor)","Craftsman (Tanner)",
    /* Extra changes for more usual adventuring crafts*/
    "Craftsman (Mason)","Craftsman (Smithing)","Craftsman (Carpentry)","Craftsman (Cook)","Craftsman (Engineering)"],
    ["Etiquette (Any one)","Etiquette (Criminals)","Etiquette (Cultists)","Etiquette (Guilders)","Etiquette (Nobles)","Etiquette (Scholar)","Etiquette (Servants)","Etiquette (Soldiers)"],
    ["Fearless (Any one)", "Fearless (Beastmen)", "Fearless (Greenskins)", "Fearless (Outlaws)", "Fearless (Vampires)", "Fearless (Watchmen)", "Fearless (Witches)"],
    ["Hatred (Any one)","Hatred ()"],
    ["Master Tradesman (Any one)","Master Tradesman ()"],
    ["Resistance (Any one)", "Resistance(Chaos)", "Resistance(Disease)", "Resistance(Poison)"] ,
    ["Savant (Any one)", "Savant ()"],
    ["Strider (Any one)", "Strider (Coastal)", "Strider (Deserts)", "Strider (Marshes)", "Strider (Rocky)", "Strider (Tundra)", "Strider (Woodlands)"]
    ];
    
    /* Grouped skills to select random group*/
    
    var AnySkills = [ 
    ["Art (Any one)", "Art (Calligraphy)", "Art (Writing)",  "Art (Sculpture)", "Art (Painting)", "Art (Weaving)", "Art (Tatoo)", "Art (Mosaics)"],
    ["Entertain (Any one)","Entertain (Fortune Telling)", "Entertain (Sing)", "Entertain (Acting)", "Entertain (Comedy)",
    "Entertain (Storytelling)","Entertain (Taunt)",
    /* Duplicate to get more common stuff*/
    "Entertain (Acting)", "Entertain (Sing)"
    ],
    ["Melee (Any one)", "Melee (Parry)", "Melee (Polearm)", "Melee (Fencing)", "Melee (Two-handed)", "Melee (Flail)", "Melee (Cavalry)", "Melee (Fist)",
    /* Duplicate to get more common stuff, No Melee (Basic) */
     "Melee (Parry)", "Melee (Polearm)", "Melee (Fencing)", "Melee (Two-handed)"
    ],
    ["Play (Any one)","Play (Drum)","Play (Fife)","Play (Lute)","Play (Bagpipes)"],
    ["Trade (Any one)","Trade (Apothecary)","Trade (Cook)","Trade (Charms)","Trade (Engineer)",
    "Trade (Farrier)","Trade (Printing)", "Trade (Poisoner)", "Trade (Smithing)","Trade (Carpentry)"],
    ["Lore (Any one)", "Lore (Reikland)", "Lore (Dwarfs)", "Lore (Geology)", "Lore (Metallurgy)", "Lore (Chemistry)", 
    "Lore (Medicine)", "Lore (Plants)", "Lore (Science)", "Lore (Law)", "Lore (Theology)","Lore (Magic)", "Lore (Politics)",
    "Lore (Heraldry)", "Lore (Folklore)", "Lore (Herbs)", "Lore (Beasts)", "Lore (Local)", "Lore (Torture)",
    "Lore (Riverways)", "Lore (Trolls)","Lore (History)", "Lore ()"],
    ["Perform (Any one)", "Perform (Acrobatics)", "Perform (Firebrathing)"],
    ["Stealth (Any one)", "Stealth (Urban)", "Stealth (Rural)", "Stealth (Underground)"]
    ];
    
    var mouseoverSkills = ["Art (Basic, Grouped), Dex, Create works of Art in your chosen medium.",
    "Athletics (Basic), Ag, Impacts on your movement abilities in combat.",
    "Bribery (Basic), Fel, Will tell you if a target may be bribed and allow you to guess a target number.",
    "Charm (Basic), Fel, Opposed Charm/Cool to influence.",
    "Charm Animal (Basic), WP, Influence an animal.",
    "Climb (Basic), S, How easy to scale surfaces.",
    "Cool (Basic), WP, Resist psychology and charm etc.",
    "Consume Alcohol (Basic), T, Ability to resist drunkenness.",
    "Dodge (Basic), Ag, Ability to avoid blows.",
    "Drive (Basic), Ag, Ability to guide vehicles.",
    "Endurance (Basic), T, Withstand hardship.",
    "Entertain (Basic, Grouped), Fel, Act/sing etc.",
    "Gamble (Basic), Int, Measure the likelihood of a bet paying off.",
    "Gossip (Basic), Fel, Learn interesting information.",
    "Haggle (Basic), Fel, Opposed test to reduce price.",
    "Intimidate (Basic), S, Bully your opponent.",
    "Intuition (Basic), I, Suss if something is wrong or give you an advantage in combat.",
    "Leadership (Basic), Fel, Issue orders or bolster psychology tests.",
    "Melee (Basic/Advanced, Grouped), WS, Represents training in weapons.",
    "Navigation (Basic), I, Find your way around.",
    "Outdoor Survival (Basic), Int, Forage, build shelters, fish etc.",
    "Perception (Basic), I, Ability to spot things/oppose stealth.",
    "Ride (Basic, Grouped, Ag, How skilled at riding animals.",
    "Row (Basic), S, How effective at rowing in dangerous situations.",
    "Stealth (Basic, Grouped), Ag, Concealment vs opposed perception.",
    "Animal Care (Advanced), Int, Tend animals if they become sick or wounded.",
    "Animal Training (Advanced, Grouped), Int, Train/intimidate animals.",
    "Channelling (Advanced, Grouped), WP, Ability to control the winds of magic.",
    "Evaluate (Advanced), Int, Determine the value of objects.",
    "Heal (Advanced), Int, Heal disease, infection, wound pg 123.",
    "Language (Advanced, Grouped), Int, Speak the tongue. Language(Magick) is used to cast spells.",
    "Lore (Advanced, Grouped), Int, formally taught in that area, allowing you to recall facts.",
    "Perform (Advanced, Grouped), Ag, Acrobatics, dancing etc.",
    "Pick lock (Advanced), Dex, Breaking into locks.",
    "Play (Advanced, Grouped), Dex, Playing an instrument.",
    "Pray (Advanced), Fel, Used to pray to a deity with blessings.",
    "Ranged (Advanced, Grouped), BS, Applies to using ranged weapons.",
    "Research (Advanced), Int, Pulling information from libraries, scrolls, etc.",
    "Sail (Advanced, Grouped), Ag, Manoeuvring with sails.",
    "Secret Signs (Advanced, Grouped), Int, How to use special markings or signs in a group.",
    "Set Trap (Advanced), Dex, Set and disarm traps",
    "Sleight of Hand (Advanced), Dex, Picking pockets etc",
    "Swim (Advanced), S, How well you can swim without drowning.",
    "Track (Advanced), I, Ability to follow trails and signs left by others.",
    "Trade (Advanced, Grouped), Dex, Earn money with your service"];
    
    var dataTalents = [["Accurate Shot","BSB","+1 dmg on all ranged weapons."],
    ["Acute Sense","IB","Perception; Choose 1 sense. Perception test using sense to spot imperceptible detail."],
    ["Aethyric Attunement","IB","Channeling; No miscast if double rolled on successful channel test."],
    ["Alley Cat","IB","Stealth (Urban); Stealth (Urban) reverse dice of any failed test to check success."],
    ["Ambidextrous","2","Off hand -10. (0 if taken twice)."],
    ["Animal Affinity","WPB","Charm Animal; All Bestial Trait creatures calm in your presence."],
    ["Argumentative","FelB","Charm (debating); Choose either rolled SL or number rolled onunits die."],
    ["Arcane Magic (Lore)","IntB","Know 1 of the 8 Arcane Lores of magic."],
    ["Artistic","DexB","Trade (Artist); Produce precise sketches. Add Trade (Artist) to any career."],
    ["Attractive","FelB","Charm (to attracted); Choose either rolled SL or number rolled onunits die."],
    ["Battle Rage","WPB","Melee (Frenzied); You can end your Frenzy with successful Cool Test at end of round."],
    ["Beneath Notice","FelB","Stealth (in plain sight); Higher status tier ignore you / don’t get advantage in combat with you."],
    ["Beat Blade","WSB","Melee (fencing); Before attack, perform Melee(fencing) test. Opponent - 1 Advantage (extra per SL)."],
    ["Berserk Charge","SB","Melee; + 1 damage on charge per times taken."],
    ["Blather","FelB","Charm (to blather); Opposed Blather/ intelligence to giveopponent stunned condition."],
    ["Bless","1","You can empower prayers."],
    ["Bookish","IntB","Research; Reverse dice of any failed test to check success."],
    ["Break and Enter","SB","Melee (vs inanimate); +1dmg vs objects per times taken."],
    ["Briber","FelB","Bribery; Reduce base cost of bribe by 10%."],
    ["Cardsharp","IntB","Gamble / Sleight of Hand; Use either rolled SL or units die num."],
    ["Careful Strike","IB","Modify hit loc. +/- 10 per times taken."],
    ["Carouser","TB","Consume alcohol; Reverse dice of failed Consume Alcohol Test to score Success."],
    ["Catfall","AgB","Athletics (on falling); Reduce fall by 1 yard + 1 per SL for damage"],
    ["Cat Tongued","FelB","Charm (on lying); Listeners do not oppose on intuition."],
    ["Chaos Magic (Lore)","None","Learn chaos magic spells!"],
    ["Combat Aware","I B Perception (Melee); Challenging Perception Test to ignore surprise."],
    ["Combat Master","AgiB","Each time taken, count as +1 person for outnumbered."],
    ["Combat Reflexes","IB","Initiative counts as 10 for combat."],
    ["Commanding Presence","FelB","Leadership; Lower status cannot resist leadership with opposed willpower."],
    ["Concot","1","1/2 time taken to use Trade(apothecary)."],
    ["Contortionist","AgiB","When using contort; Squeeze and bend through unlikely gaps."],
    ["Cool Headed","1","Permanent +5 to starting Willpower."],
    ["Crack the whip","DexB","Drive / Ride; Fleeing/running animal +1 Movement with whip."],
    ["Craftsman (Trade)","DexB","Trade; Add trade skill or -5xp cost to career"],
    ["Criminal","None) Take money as income."],
    ["Deadeye Shot","1","Don’t reverse die for location, pick."],
    ["Dealmaker","FelB","Haggle Reduce or increase price 10%."],
    ["Detect Artefact","IntB","Intuition test determines if item is magical."],
    ["Diceman","IntB","Gamble / Sleight of Hand; Use either rolled SL or number on units die for success."],
    ["Dirty Fighting","WSB","Melee (fist); +1 dmg for melee(fist) for each level."],
    ["Disarm","IB","Melee (while disarming); Use action for opposed melee, opponent loses held weapon."],
    ["Distract","AgiB","Athletics (while distracting); Use move to opposed Athletics/cool. Opponent cannot gain advantage til next round."],
    ["Doomed","1","If character dies in this manner, 1/2 xp goes to next one."],
    ["Drilled","WSB","Melee besides ally When standing next to Ally with drilled and lose Advantage, keep 1."],
    ["Dual Wielder","AgiB","Melee Attack with both weapons"],
    ["Embezzle","IntB","Embezzling Opposed intelligence test against employer to skim money."],
    ["Enclosed Fighter","AgiB","Dodge Ignore melee penalties in enclosed spaces."],
    ["Etiquette","FelB","Charm/ gossip Blend into chosen group"],
    ["Fast Hands","DexB","Sleight of hand/ fist No passive perception test against sleight of hand skill."],
    ["Fast Shot","AgiB","Ranged (reloading); If loaded, fire outside of normal initiative order."],
    ["Fearless","WPB","Cool; With average cool test, ignore psychology against specific enemy."],
    ["Feint","WSB","Fencing (Feinting); Feint as action, opposed melee test, attack before next round cannot be opposed."],
    ["Field Dressing","IntB","Heal; You may reverse dice results if it results in success."],
    ["Fisherman","IntB","Fishing; Find enough fish to feed your party."],
    ["Flagellant","TB","Resisting ruinous powers Pray number of wounds equal to level in flagellant. Frenzy immediately without testing."],
    ["Flee","AgiB","Athletics (fleeing); Movement +1 when fleeing"],
    ["Fleet Footed","1","+1 to Movement Attribute"],
    ["Frenzy","1","You can Frenzy"],
    ["Frightening","SB","Fear rating of +1 per times taken"],
    ["Furious Assault","AgiB","Melee (on extra attacks); Spend advantage or move to make extra attack."],
    ["Gregarious","FelB","Gossip; Reverse dice if allows a success"],
    ["Gunner","DexB","Add SL to gunner level in extended reload"],
    ["Hardy","TB","Add TB to wounds"],
    ["Hatred","WPB","Willpower Hatred for chosen group"],
    ["Holy Hatred","FelB","+1dmg with miracles per level"],
    ["Holy Rage","WPB","Pray when frenzied Can invoke blessings and miracles when frenzied"],
    ["Holy Visions","IB","Intuition Intuition test to receive visions"],
    ["Huffer","IB","Lore on rivers Easier to traverse dangerous rivers"],
    ["Hunter's Eye","IB","Trail Test Hunt down enough game to feed your group"],
    ["Impassioned Zeal","FelB","Charm Double Fel to determine public influenced by your speech."],
    ["Implacable","TB","Ignore Wound loss from bleeding"],
    ["In-Fighter","DexB","Infighting No penalties for fighting against opponent with longer weapon. +10 to hit opponent in infighting."],
    ["Inspiring","FelB","Leadership Increase amount of people influenced in war."],
    ["Invoke Divine Lore","None","Perform miracles for 1 god."],
    ["Instinctive Diction","IB","Lenguage (Magick); No miscast rolling double on sucessfull test."],
    ["Iron Jaw","TB","Endurance Challenging endurance test to resist Stunned condition"],
    ["Iron Will","WPB","Cool Vs Intimidate; Intimidate skill does not cause you Fear."],
    ["Jump up","AgiB","Athletics (Jumping); Challenging agility test to regain feet when Prone."],
    ["Kingpin","1","Ignore status loss of Criminal Talent"],
    ["Lightning reflexes","1","Permanent +5 to starting Agility"],
    ["Lip Reading","IB","Perception Perception test to understand what is said"],
    ["Linguistics","IntB","Language; Language exposed to counts as basic instead of advanced with successful intelligence check."],
    ["Luck","FelB","Fortune max == Fate max + Luck level"],
    ["Magic Resistance","1","Must Oppose any spell with Willpower, may never learn magic"],
    ["Magical Sense","IB","Intuition detect wizards Average intuition check when encounter spellcaster"],
    ["Magnum Opus","None","Create a high value piece of work."],
    ["Marksman","1","Permanent + 5 to BS"],
    ["Master of Disguise","FelB","Entertain (Acting); Expert at disguising yourself"],
    ["Master Orator","FelB","SL bonus equal to Master Orator Level to charm in public speaking"],
    ["Master Tradesman","DexB","Reduce required SL of extended test of trade skill by talent level"],
    ["Menacing","SB","When using Intimidate, gain SL bonus == Menacing levels"],
    ["Mimic","IB","Entertain (Acting); Replicate any accent with an initiative test"],
    ["Nimble Fingered","1","Permanent +5 to starting dex"],
    ["Night Vision","IB","Perception (in low light); See clearly for 20y per Night vision level"],
    ["Noble Blood","1","Any influenced by status Considered higher status than everyone else unless they have Noble Blood Talent"],
    ["Nose for Trouble","IB","Test to spot troublemakers; Intuition test to spot those seeking to cause trouble. Opposed if hiding"],
    ["Numismatics","IB","Evaluate worth of coins Judge value of coins without test and can spot forged coins easily"],
    ["Old Salt","AgiB","Sail Ignore negative modifiers at sailing tests."],
    ["Orientation","IB","Navigation You automatically know which way is north"],
    ["Panhandle","FelB","Charm(begging) Charm test to be every half hour instead of full hour"],
    ["Perfect Pitch","TB","Entertain/ language You can replicate notes perfectly and add performer(sing) to your career"],
    ["Petty Magic","WPB","You may cast a number of petty magics"],
    ["Pharmacist","IntB","Trade (Apothecary) Reverse any failed Apothecary tests if it means it will succeed"],
    ["Pilot","IB","Reverse test to navigate any dangerous waters if it will succeed"],
    ["Public Speaker","FelB","Influence a larger number of people when publicly speaking"],
    ["Pure Soul","WPB","Gain extra Corruption Points equal to Pure Soul level before taking a corruption test."],
    ["Rapid Reload","DexB","Add SL equal to Rapid Reload level to any test to reload."],
    ["Reaction Strike","IB","Initiative tests When charged, may attempt a Challenging Initiative test to gain immediate free attack."],
    ["Read/Write","1","You can read/write all of the languages you can speak."],
    ["Relentless","AgiB","When using advantage to disengage, you may keep advantage equal to Relentless level."],
    ["Resolute","SB","Add level of Resolute to Strength bonus on Charge."],
    ["Resistance(Threat)","TB","Tests to resist threat You automatically pass the first test to resist specified threat."],
    ["Reversal","WSB","Melee defending IF you win opposed test, you may take all opponents advantage instead of gaining +1."],
    ["Riposte","AgiB","Melee defending If weapon has fast quality, you may cause damage when defending against attacks == to riposte level"],
    ["Robust","TB","Reduce all incoming damage by extra +1, but still suffer minimum of 1 wound."],
    ["Rough Rider","AgiB","Ride(horse) in combat You can direct your mount to take an action, not just a move."],
    ["Rover","AgiB","Stealth in rural environment; By standers do not get passive perception to spot stealth in rural environment."],
    ["Savvy","1","Permanent +5 bonus to starting intelligence."],
    ["Savant (Lore)","IntB","Lore (chosen Lore) You automatically know a correct number of pieces of information about the relevant issue without Lore test."],
    ["Scale Sheer surface","SB","Climb Ignore climb test penalties to climb sheer surfaces."],
    ["Schemer","IntB","Intelligence tests GM will provide you with observations about current situation based on SL."],
    ["Sea Legs","TB","Tests to resist sea sickness; Ignore penalties to tests to ignore sea sickness."],
    ["Seasoned Traveller","IntB","Lore local Add lore Local to current career."],
    ["Secret Identity","IntB","Entertain Acting You may use social status of disguised career."],
    ["Second Sight","IB","Detect winds of magic You now have the sight."],
    ["Shadow","AgiB","Any skill shadowing Use shadowing rules without doing combined test. Use perception or stealth."],
    ["Sharp","1","Gain a permanent +5 to starting initiative."],
    ["Sharpshooter","IB","Ignore size penalties to ranged tests."],
    ["Shieldsman","AgiB","Parry test with shield When using Melee(Parry) with shield, you gain advantage equal to this talent if you lose."],
    ["Sixth Sense","IB","Intuition You get a strange feeling when you are in danger. You may ignore surprise on Intuition Test."],
    ["Slayer","1","On dmg SB is increased to opponent’s TB if lower."],
    ["Small","1","You are small."],
    ["Sniper","4","Ranged No penalties for long range, 1/2 penalties for extreme range."],
    ["Speed reader","IntB","Language Research and language Read and understand number of pages == SL + speed reader level."],
    ["Sprinter","AgiB","Athletics (running); Movement counts as 1 higher when running."],
    ["Strider (terrain)","AgiB","Athletics (to cross terrain); You ignore movement penalties in chosen terrain."],
    ["Step Aside","AgiB","Dodge tests If you use Dodge to defend and win opposed test, you may move up to 2 yards without free attack penalty."],
    ["Strike Mighty Blow","SB","Add Strike Mighty Blow level to Dmg."],
    ["Strike to Stun","WSB","Melee (to stun tests); Ignore called shot penalty to use head hit location with weapon with pummel quality."],
    ["Stone Soup","TB","Endurance to resist hunger; 1/2 food required to avoid penalties, test for starvation every 3 days."],
    ["Strong Back","SB","Row and swim; Add levels in Strong Back to Opposed strength tests and carry additional encumbrance."],
    ["Strong Legs","SB","Add Strong legs level to SL in Athletics tests in leaping."],
    ["Strong Swimmer","SB","Swim; Add Strong Swimmer level to TB for holding breath."],
    ["Strong Minded","WPB","Add Strong Minded level to maximum resolve pool."],
    ["Stout Hearted","WPB","Cool Tests to remove broken May attempt cool test at the end of each of your turns as well as at the end of the round."],
    ["Sturdy","SB","Strength test when lifting; Increase Encumbrance points by sturdy *2."],
    ["Suave","1","Permanent +5 to starting fellowship."],
    ["Super Numerate","IB","Evaluate, Gamble; You may use a simple calculator to represent what your PC is capable of mentally thinking."],
    ["Supportive","FelB","Social test to influence superior Use either SL or units rolled to influence superior."],
    ["Sure Shot","IB","You may ignore armour points == Sure shot level."],
    ["Surgery","IntB","Heal (outside combat); Treat any critical wound marked as needing surgery. Extended Challenging Heal test to resolve internal healing issues."],
    ["Tenacious","TB","Endurance; Double the length of time needed to perform successful Endurance tests."],
    ["Tinker","TB","Trade to repair broken items All non magical trade skills count as basic when repairing broken items."],
    ["Tower of Memories","IntB","Perfectly recall a sequence of facts as long as your intelligence without having to make a test."],
    ["Trapper","","Set Trap Perception to spot traps/ set traps; Can make perception tests automatically without telling the GM of your intention."],
    ["Trick Riding","AgiB","Dodge (test on horseback); Use perform and dodge skill whilst mounted. You can also move at start of round instead of your turn."],
    ["Tunnel Rat","AgiB","Stealth tests underground By standers get no passive perception test on your stealth underground."],
    ["Unshakable","WPB","Cool test to resist Black Powder Panic; You only need to take a cool test to resist broken Condition if you are wounded by black powder weapon."],
    ["Very resilient","1","Permanent +5 to starting Toughness Characteristic."],
    ["Very Strong","1","Permanent +5 to starting Strength Characteristic."],
    ["War Leader","FelB","Command tests during war; All subordinates add your level in War leader to their SL in a Willpower Test."],
    ["Warrior Born","1","Permanent +5 to starting Weapon Skill Characteristic."],
    ["War Wizard","1","Cast a spell with Casting number of 5 or less without using your action."],
    ["Waterman","AgiB","Sail test Ignore negatives to tests when on a barge."],
    ["Wealthy","None","When earning you secure +1 GC per times wealthy is taken."],
    ["Well Prepared","IB","You may pull the trapping required for any situation provided it has Encumbrance of 0."],
    ["Witch!","WPB","Add Language (Magick) to any career, lower cost, can Lear spells spending Resilience."]
    ];
    var mouseoverTalents =[];
    for (i in dataTalents) {
        mouseoverTalents.push(dataTalents[i][0]+" (Max "+dataTalents[i][1]+") "+dataTalents[i][2]);
    }
    
    /*----------functions-----------*/
    
    function randomTalent(){
         var TalentRoll = roll1d100();
         var i = 0;
         while (TalentRandom[i] < TalentRoll ) {
             i += 1;
         }
         return TalentRandomName[i];
    }
    
    function parseInicialTalent(TalentArray) {
    /* Get Initial Talents */
         var x;
         var ch;
         var Talents;
         for (x in TalentArray) {
              Talents = TalentArray[x].split(" or ");
              if (Talents.length > 1) {
                   if (document.getElementById("choiceCheck").checked == true)  {
                        refreshCharacterDisplay ();
                       ch = (confirm (TalentArray[x])?0:1);
                   } else {
                       ch = Math.floor(Math.random() * Talents.length );
                   }
               TalentArray[x] = Talents [ch];
          }
              if (TalentArray[x] == "Random") {
                   TalentArray[x] = randomTalent();
              }
         }
         return TalentArray;
    }
    
    function splitFateResilience ( extraPoints ) {
        var x = Math.floor(Math.random() * extraPoints ) +1;
        return [ x, extraPoints - x ]
    }
    
    function parseTalent2Stats (TalentArray) {
        var x;
        /* var StatsName = ["WS","BS","S","T","AG","I","DEX","INT","WP","FEL"]; */
        var stat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (x in TalentArray) {
            switch (TalentArray[x]) {
                case "Coolheaded":
                    stat[8] = 5;
                    break;
                case "Fleetfooted": /*Movement*/
                    break;
                case "Hardy": /*Wounds*/
                    break;
                case "Lightning Reflexes":
                    stat[4] = 5;
                    break;
                case "Marksman":
                    stat[1] = 5;
                    break;
                case "Nimble Fingered":
                    stat[6] = 5;
                    break;
                case "Savvy":
                    stat[7] = 5;
                    break;
                case "Sharp":
                    stat[5] = 5;
                    break;
                case "Suave":
                    stat[9] = 5;
                    break;
                case "Very Resilient":
                    stat[3] = 5;
                    break;
                case "Very Strong":
                    stat[2] = 5;
                     break;
                case "Warrior Born":
                    stat[0] = 5;
                     break;
                default:
            }
        }
        return stat;
    }
    
    function parseTalentAny (TalentArray) {
        var x;
        var y;
        for (x in TalentArray) {
            if (TalentArray[x].indexOf("(Any one)") > -1 ) {
               for (y in AnyTalents) {
                   if ( (TalentArray[x]).localeCompare(AnyTalents[y][0]) == 0  ) {
                    TalentArray[x] = AnyTalents[y][ Math.floor( Math.random() * ( AnyTalents[y].length - 1 ) + 1 ) ];
                    }
               }
           }
        }
        return TalentArray;
    }
    function parseSkillAny (SkillArray) { 
        var x;
        var y;
        for (x in SkillArray) {
            if (SkillArray[x].indexOf("(Any one)") > -1) {
               for (y in AnySkills) {
                   if ((SkillArray[x]).localeCompare(AnySkills[y][0]) == 0 ) {
                    SkillArray[x] = AnySkills[y][ Math.floor( Math.random() * ( AnySkills[y].length - 1 ) + 1 ) ];
                    }
               }
           }
        }
        return SkillArray;
    }
    
    function dedupeNameValue(NameArray,ValueArray) {
        var i;
        var j;
        var toremove = [];
        for (i = 0; i< (NameArray.length - 1); i += 1) {
            for (j = i + 1; j < (NameArray.length ) ; j += 1) {
                if( (NameArray[i]).localeCompare(NameArray[j]) == 0) { 
                    toremove.push(j);
                    ValueArray[i] += ValueArray[j];
                }
            }
        }
        if (toremove.length > 0) {
            for (i in toremove) {
                NameArray.splice ( toremove[i] , 1);
                ValueArray.splice ( toremove[i] , 1);
            }
        }
        var CombinedArray = [NameArray, ValueArray];
        return CombinedArray;
    }
    
    function parseOrParenthesis(NameArray) {
         var i;
         var Pick;
         var Base;
         var ch;
         for (i in NameArray) {
            if (NameArray[i].indexOf(" or ") > -1) {
                Base = (NameArray[i].replace(")","")).split(" (");
                Pick = Base[1].split(" or ");
                if (Pick.length > 1) {
                   if (document.getElementById("choiceCheck").checked == true)  {
                       ch = (confirm (NameArray[i])?0:1);
                   } else {
                       ch = Math.floor(Math.random() * Pick.length );
                   }
                    NameArray[i] = Base[0] + " ("+ Pick [ ch ] + ")";
                }
            }
         }
         return NameArray;
    }
    
    function rollTrappings(TrapString) {
       if (TrapString.indexOf("d10") > -1) {
            var r1d10st = roll1d10() +" ";
            var r2d10st = roll2d10() +" ";
            var r3d10st = rollXd10(3) +" ";
            var r4d10st = rollXd10(4) +" ";
            var r5d10st = rollXd10(5) +" ";
            TrapString = TrapString.replace(/1d10 /g, r1d10st);
            TrapString = TrapString.replace(/2d10 /g, r2d10st);
            TrapString = TrapString.replace(/3d10 /g, r3d10st);
            /* No trapping with more than 4d10 stuff added a couple more to be sure*/
            TrapString = TrapString.replace(/4d10 /g, r4d10st);
            TrapString = TrapString.replace(/5d10 /g, r5d10st);
            /* Some places uses d10 instead of 1d10*/
            TrapString = TrapString.replace(/d10 /g, r1d10st );
       }
       return TrapString;
    }
    
    function rollMoney (SocialString) {
        var money = "";
        var ParsedSocial = SocialString.split(" ");
        switch (ParsedSocial[0]) {
            case "Gold":
                money =    ParsedSocial[1] + " Gold Crowns.";
                break;
            case "Silver":
                money =   rollXd10(ParsedSocial[1]) + " Silver Shillings.";
                break;
            case "Brass":
                money =   rollXd10(ParsedSocial[1]*2) + " Brass Pennies.";
                break;
            default:
                money =  "Not a single coin.";
        }
        return money;
    }
    
    function getMouseOverText(Name, MOArray){
        var NameBase = "";
        console.log(Name.split(" (")); 
        if (Name.split(" (").length == 0) {
            NameBase = Name; 
        } else {
            NameBase = Name.split(" (")[0];
        };
        var x = 0;
        var MOTxt = "";
        /* The Mouse over should have a format XXXX (xxx) xxxxxxxxxx */
        for (x = 0; x< (MOArray.length); x += 1) {
            if ( NameBase.indexOf( MOArray[x].split(" (")[0] ) > -1) {
                MOTxt = MOArray[x];
            }
        }
        return MOTxt;
    }
    
    function refreshCharacterDisplay () {
        document.getElementById("nameB").innerHTML = NameTxt;
        document.getElementById("speciesB").innerHTML = SpeciesTxt;
        document.getElementById("careerB").innerHTML = CareerTxt;
        document.getElementById("xpB").innerHTML = XpTxt;
        document.getElementById("statsB").innerHTML = StatsTxt;
        document.getElementById("skillsB").innerHTML = SkillTxt;
        document.getElementById("fateresilienceB").innerHTML = FateResilienceTxt;
        document.getElementById("talentsB").innerHTML = TalentTxt;
        document.getElementById("trappingsB").innerHTML = TrappingTxt;
    }
    
    /*------ Start Rolling--------*/
    
    refreshCharacterDisplay ();
    
    var SpeciesRoll = roll1d100();
    
    var i;
    var x;
    
    if (SpeciesRoll <= 90) {
         SpeciesN = 1;
    } else if (SpeciesRoll <= 95) {
         SpeciesN = 2;
    } else if (SpeciesRoll <= 98) {
         SpeciesN = 3;
    } else if (SpeciesRoll <= 99) {
         SpeciesN = 4;
    } else {
         SpeciesN = 5;
    }
    
    if  (SpeciesChoice>0) {
        SpeciesN = SpeciesChoice;
    } else {
        xp += 20;
    }
    
    console.log(SpeciesN);
    
    SpeciesTxt = SpeciesAll[ SpeciesN - 1 ];
    
    console.log(SpeciesTxt);
    
    Sex = Math.floor(Math.random() * 2);
    
    var NamesSpecies = NamesAll[Sex][SpeciesN - 1 ];
    var SurnamesSpecies;
    
    /* Dwarves could get Icelandic style surnames, but from either 66% MAle 33% female */
    if ((SpeciesN == 2) && (Math.random() > .5)) {
        SurnamesSpecies = NamesAll[Math.floor(Math.random() * 3 / 2)][SpeciesN - 1 ].slice();
        var suffix = SurnameSuffixDwarvenAll[Sex][ Math.floor(Math.random() * SurnameSuffixDwarvenAll[Sex].length)];
            for(i=0;i<SurnamesSpecies.length;i++){
                SurnamesSpecies[i] = SurnamesSpecies[i] + suffix;
            }   
    } else {
        SurnamesSpecies  = SurnamesAll[SpeciesN - 1 ];
    }
    
    NameTxt = NamesSpecies[ Math.floor(Math.random() * NamesSpecies.length) ] + " " 
        +  SurnamesSpecies[ Math.floor(Math.random() * SurnamesSpecies.length) ] ;
    
    SkillStart = SkillStartAll[ SpeciesN - 1 ];
    
    console.log(SkillStart);
    
    for (i = 0; i < 6; i += 1) {
         var skrandom = Math.floor(Math.random() * SkillStart.length);
         SkillNames.push ( SkillStart.splice (skrandom , 1)[0] );
         var skvar;
         if ( i < 3 ) {
             skvar = 5;
         } else {
             skvar = 3;
         }
         SkillValues.push ( skvar );
    }
    
    console.log(SkillStart);
    console.log(SkillNames);
    
    TalentNames = TalentStartAll [ SpeciesN - 1 ];
    TalentNames = parseInicialTalent (TalentNames);
    TalentValues = [1,1,1,1,1];
    
    var CareerSpecies = CareerSpeciesAll [ SpeciesN - 1 ];
    
    var CareerRoll = roll1d100();
    i = 0;
    while (CareerSpecies[i] < CareerRoll ) {
         i += 1;
    }
    
    CareerN = i;
    
    CareerName = CareerAll[CareerN];
    
    /*If we agree keep the 1st career so no changes just less xp*/
    
    
    if ((document.getElementById("careerCheck").checked == true) ) {
        refreshCharacterDisplay ();
        if ( !confirm("Keep career as " + SpeciesTxt + " " + CareerName) ) {
            var newCareerRoll = [CareerRoll,0,0];
            var newCareerN = [CareerN,0,0];
            var newCareerName = [CareerName,"",""];
            var x;
    
            for (i=1;i<3; i += 1) {
                newCareerRoll[i] = roll1d100();
                x = 0;
                while (CareerSpecies[x] < newCareerRoll[i] ) {
                    x += 1;
                }
                newCareerN[i] = x;
                newCareerName[i] = CareerAll[x];
            }
    
            if (!confirm("Keep first from " + newCareerName.toString())) {
                if (confirm("Keep second from " + newCareerName.toString())) {
                    CareerRoll = newCareerRoll[1];
                    CareerN = newCareerN[1];
                    CareerName=newCareerName[1];
                } else {
                    CareerRoll = newCareerRoll[2];
                    CareerN = newCareerN[2];
                    CareerName=newCareerName[2];
                }
            } 
            xp += 25;
        }  else  {
            xp += 50;
        }
    } else {
            xp += 50;
    }
    
    ClassN = Math.floor(CareerN / 8);
    
    StatsCareer[ CareerAdvance[CareerN][0] ] = 1;
    StatsCareer[ CareerAdvance[CareerN][1] ] = 1;
    StatsCareer[ CareerAdvance[CareerN][2] ] = 1;
    
    StatsBase = StatsAll [ SpeciesN - 1 ];
    StatsExtraBase = StatsExtraAll [ SpeciesN - 1 ];
    
    for (i in StatsR) {
         StatsR[i] = roll2d10();
    }
    
    if ((document.getElementById("reRollCheck").checked == true) ) {
        refreshCharacterDisplay ();
        if ( !confirm(StatsR) ) {
            for (i in StatsR) {
                StatsR[i] = roll2d10();
            }
            alert (StatsR);
            xp += 25;
        }  else  {
            xp += 50;
        }
    } else {
            xp += 50;
    }
    
    /* Advance stats*/
    var sta = CareerAdvance[CareerN];
    var randadvChoice = [ [5,0,0],
    [4,1,0],
    [3,1,1],
    [3,2,0],
    [2,2,1] ];
    var randAdv = randadvChoice[ Math.floor(Math.random() * 5) ];
    
    for (i = 0; i < 3; i += 1) {
        var statrand = Math.floor(Math.random() * sta.length);
        StatsAdvance [  sta.splice (statrand , 1) ] = randAdv[i];
    }
    
    /* Split the extra fate/resilience */
    var FateResilienceRoll = splitFateResilience(StatsExtraBase[4]);
    StatsExtraBase[2] += FateResilienceRoll[0];
    StatsExtraBase[3] += FateResilienceRoll[1];
    
    var ski = CareerSkill[CareerN];
    var randskiChoice =  [
    [5,5,5,5,5,5,5,5],
    [7,6,5,5,5,5,4,3],
    [6,6,6,5,5,4,4,4],
    [8,7,6,5,5,4,3,2],
    [8,8,7,7,4,2,2,2],
    [9,8,5,5,5,5,2,1],
    [10,8,7,5,5,3,2,0],   
    [10,9,8,7,3,2,1,0],
    [10,10,10,6,1,1,1,1],
    [10,10,10,10,0,0,0,0]
    ];
    var randSki = randskiChoice[ Math.floor(Math.random() * randskiChoice.length ) ];
    
    for (i = 0; i < 8; i += 1) {
         var skirand = Math.floor(Math.random() * ski.length);
         SkillNames.push ( ski.splice (skirand , 1)[0] );
         var skvar = randSki[i]; 
         SkillValues.push ( skvar );
    }
    
    console.log(SkillNames);
    
    var randTalent = Math.floor(Math.random() * 4);
    TalentNames.push( CareerTalents[CareerN][randTalent]);
    TalentValues.push(1);
    
    StatsTalents = parseTalent2Stats(TalentNames);
     
    TalentNames = parseTalentAny(TalentNames).slice(0);
    
    SkillNames = parseOrParenthesis(SkillNames).slice(0);
    console.log(SkillNames);
    
    SkillNames = parseSkillAny(SkillNames).slice(0);
     console.log(SkillNames);
    
    var TalentNamesValue = dedupeNameValue(TalentNames, TalentValues );
    TalentNames = TalentNamesValue[0].slice(0);
    TalentValues = TalentNamesValue[1].slice(0);
    
    /* After getting talents we check if we are an human noble or have nobleblood*/
    /*SurnameSuffixHumanNoble*/
    if ((SpeciesN == 1) && ((CareerName == "Noble") || (TalentNames.includes("Noble Blood")))) {
        NameTxt = NameTxt.replace(" "," von ") + SurnameSuffixHumanNoble[Math.floor(Math.random() * SurnameSuffixHumanNoble.length)];
    };
    
    var SkillNamesValue = dedupeNameValue(SkillNames, SkillValues );
    SkillNames = SkillNamesValue[0].slice(0);
    SkillValues = SkillNamesValue[1].slice(0);
    console.log(SkillNames);
    
    var Trapping = rollTrappings(TrappingClass[ClassN] + ", " + TrappingCareer[CareerN]);
    
    var Money = rollMoney(CareerSocial [ CareerN ]);
    
    /* Generate the final strings */
    
    CareerTxt ="(" + ClassAll [ ClassN ] + ") " + CareerName + ", Social Level "+ CareerSocial [ CareerN ] ;
    
    XpTxt = "<b>XP:</b> " + xp + "/" + xpSpend;
    
    for (i = 0; i < SkillNames.length ; i += 1) {
        var MouseOverTxt = getMouseOverText (SkillNames[i],mouseoverSkills);
        SkillTxt += "<span title = '" + MouseOverTxt + "'>" + SkillNames[i] + ":" + SkillValues[i] + "</span>; ";
    }
    
    for (i = 0; i < TalentNames.length ; i += 1) {
        var MouseOverTxt = getMouseOverText (TalentNames[i],mouseoverTalents);
         TalentTxt += "<span title = '" + MouseOverTxt + "'>" + TalentNames[i] + ":" + TalentValues[i] + "</span>; ";
    }
    
    StatsTxt = "<table><tr>";
    for (i in StatsName) {
        StatsTxt += "<th><B>" + StatsName[i] +"</B></th>";
    }
    StatsTxt += "</tr><tr style='text-align: right'>";
    for (i in StatsAdvance) {
         var star = "";
         if (StatsTalents[i]) { star = "*";}
        StatsTxt += "<td>" + ( StatsR[i] + StatsBase[i] + StatsTalents[i]  ) + star + "</td>";
    }
    StatsTxt += "</tr><tr style='text-align: right'>";
    for (i in StatsAdvance) {
         StatsTxt += "<td>" +  ( StatsAdvance[i] ) + "</td>";
    }
    StatsTxt += "</tr><tr style='text-align: right'>";
    for (i in StatsAdvance) {
        StatsTxt += "<td>" + ( StatsR[i] + StatsBase[i] + StatsTalents[i] + StatsAdvance[i] ) + "</td>";
    }
    StatsTxt += "</tr></table>";
    
    FateResilienceTxt = "Fate: "+ StatsExtraBase[2] + " Resilience: " + StatsExtraBase[3];
    
    TrappingTxt = Trapping + ".<br>" + Money;
    
    /* Put all shit in the screen */
    refreshCharacterDisplay ();
    
    return 1;
    }