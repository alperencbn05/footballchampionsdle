// 2025/26 Sampiyonlar Ligi lig asamasi - 36 takim (PSV yerine Fenerbahce)
// Her takim 4-4-2: gk, cb, cb, lb, rb, lm, cm, cm, rm, st, st

let team1 = {
    teamName: "Liverpool",
    players: [
        { name: "Alisson", position: "gk", power: 88 },
        { name: "Van Dijk", position: "cb", power: 89 },
        { name: "Konate", position: "cb", power: 84 },
        { name: "Kerkez", position: "lb", power: 79 },
        { name: "Bradley", position: "rb", power: 76 },
        { name: "Gakpo", position: "lm", power: 82 },
        { name: "Mac Allister", position: "cm", power: 85 },
        { name: "Szoboszlai", position: "cm", power: 84 },
        { name: "Salah", position: "rm", power: 90 },
        { name: "Wirtz", position: "st", power: 89 },
        { name: "Ekitike", position: "st", power: 83 }
    ]
};

let team2 = {
    teamName: "Fenerbahce",
    players: [
        { name: "Ederson", position: "gk", power: 84 },
        { name: "Skriniar", position: "cb", power: 82 },
        { name: "Oosterwolde", position: "cb", power: 78 },
        { name: "Brown", position: "lb", power: 76 },
        { name: "Semedo", position: "rb", power: 79 },
        { name: "Kerem Akturkoglu", position: "lm", power: 81 },
        { name: "Fred", position: "cm", power: 80 },
        { name: "Ismail Yuksek", position: "cm", power: 77 },
        { name: "Szymanski", position: "rm", power: 79 },
        { name: "En-Nesyri", position: "st", power: 81 },
        { name: "Duran", position: "st", power: 82 }
    ]
};

let team3 = {
    teamName: "Bayern Munich",
    players: [
        { name: "Neuer", position: "gk", power: 86 },
        { name: "Upamecano", position: "cb", power: 85 },
        { name: "Tah", position: "cb", power: 84 },
        { name: "Davies", position: "lb", power: 84 },
        { name: "Laimer", position: "rb", power: 79 },
        { name: "Luis Diaz", position: "lm", power: 85 },
        { name: "Kimmich", position: "cm", power: 87 },
        { name: "Pavlovic", position: "cm", power: 81 },
        { name: "Olise", position: "rm", power: 87 },
        { name: "Kane", position: "st", power: 90 },
        { name: "Gnabry", position: "st", power: 80 }
    ]
};

let team4 = {
    teamName: "Real Madrid",
    players: [
        { name: "Courtois", position: "gk", power: 89 },
        { name: "Rudiger", position: "cb", power: 85 },
        { name: "Militao", position: "cb", power: 84 },
        { name: "Carreras", position: "lb", power: 80 },
        { name: "Alexander-Arnold", position: "rb", power: 86 },
        { name: "Vinicius Jr", position: "lm", power: 90 },
        { name: "Valverde", position: "cm", power: 88 },
        { name: "Bellingham", position: "cm", power: 89 },
        { name: "Rodrygo", position: "rm", power: 85 },
        { name: "Mbappe", position: "st", power: 91 },
        { name: "Endrick", position: "st", power: 78 }
    ]
};

let team5 = {
    teamName: "Marseille",
    players: [
        { name: "Rulli", position: "gk", power: 80 },
        { name: "Balerdi", position: "cb", power: 79 },
        { name: "Pavard", position: "cb", power: 81 },
        { name: "Garcia", position: "lb", power: 74 },
        { name: "Murillo", position: "rb", power: 77 },
        { name: "Weah", position: "lm", power: 77 },
        { name: "Hojbjerg", position: "cm", power: 80 },
        { name: "O'Riley", position: "cm", power: 76 },
        { name: "Greenwood", position: "rm", power: 84 },
        { name: "Aubameyang", position: "st", power: 79 },
        { name: "Gouiri", position: "st", power: 78 }
    ]
};

let team6 = {
    teamName: "Galatasaray",
    players: [
        { name: "Ugurcan Cakir", position: "gk", power: 82 },
        { name: "Davinson Sanchez", position: "cb", power: 81 },
        { name: "Bardakci", position: "cb", power: 78 },
        { name: "Eren Elmali", position: "lb", power: 75 },
        { name: "Sallai", position: "rb", power: 78 },
        { name: "Sane", position: "lm", power: 84 },
        { name: "Torreira", position: "cm", power: 81 },
        { name: "Gundogan", position: "cm", power: 82 },
        { name: "Baris Alper", position: "rm", power: 80 },
        { name: "Osimhen", position: "st", power: 88 },
        { name: "Icardi", position: "st", power: 80 }
    ]
};

let team7 = {
    teamName: "Arsenal",
    players: [
        { name: "Raya", position: "gk", power: 86 },
        { name: "Saliba", position: "cb", power: 88 },
        { name: "Gabriel", position: "cb", power: 86 },
        { name: "Calafiori", position: "lb", power: 81 },
        { name: "Timber", position: "rb", power: 84 },
        { name: "Martinelli", position: "lm", power: 83 },
        { name: "Rice", position: "cm", power: 88 },
        { name: "Odegaard", position: "cm", power: 87 },
        { name: "Saka", position: "rm", power: 89 },
        { name: "Gyokeres", position: "st", power: 86 },
        { name: "Havertz", position: "st", power: 83 }
    ]
};

let team8 = {
    teamName: "Manchester City",
    players: [
        { name: "Donnarumma", position: "gk", power: 87 },
        { name: "Ruben Dias", position: "cb", power: 86 },
        { name: "Gvardiol", position: "cb", power: 85 },
        { name: "Ait-Nouri", position: "lb", power: 81 },
        { name: "Nunes", position: "rb", power: 79 },
        { name: "Doku", position: "lm", power: 84 },
        { name: "Rodri", position: "cm", power: 90 },
        { name: "Bernardo Silva", position: "cm", power: 86 },
        { name: "Foden", position: "rm", power: 86 },
        { name: "Haaland", position: "st", power: 91 },
        { name: "Marmoush", position: "st", power: 84 }
    ]
};

let team9 = {
    teamName: "Chelsea",
    players: [
        { name: "Robert Sanchez", position: "gk", power: 80 },
        { name: "Colwill", position: "cb", power: 82 },
        { name: "Fofana", position: "cb", power: 81 },
        { name: "Cucurella", position: "lb", power: 83 },
        { name: "Reece James", position: "rb", power: 84 },
        { name: "Pedro Neto", position: "lm", power: 82 },
        { name: "Caicedo", position: "cm", power: 86 },
        { name: "Enzo Fernandez", position: "cm", power: 84 },
        { name: "Palmer", position: "rm", power: 88 },
        { name: "Joao Pedro", position: "st", power: 83 },
        { name: "Delap", position: "st", power: 79 }
    ]
};

let team10 = {
    teamName: "Newcastle",
    players: [
        { name: "Pope", position: "gk", power: 82 },
        { name: "Botman", position: "cb", power: 82 },
        { name: "Burn", position: "cb", power: 78 },
        { name: "Hall", position: "lb", power: 80 },
        { name: "Livramento", position: "rb", power: 80 },
        { name: "Gordon", position: "lm", power: 84 },
        { name: "Bruno Guimaraes", position: "cm", power: 86 },
        { name: "Tonali", position: "cm", power: 85 },
        { name: "Murphy", position: "rm", power: 78 },
        { name: "Woltemade", position: "st", power: 81 },
        { name: "Osula", position: "st", power: 74 }
    ]
};

let team11 = {
    teamName: "Tottenham",
    players: [
        { name: "Vicario", position: "gk", power: 82 },
        { name: "Romero", position: "cb", power: 84 },
        { name: "Van de Ven", position: "cb", power: 83 },
        { name: "Udogie", position: "lb", power: 80 },
        { name: "Porro", position: "rb", power: 82 },
        { name: "Simons", position: "lm", power: 83 },
        { name: "Bentancur", position: "cm", power: 80 },
        { name: "Palhinha", position: "cm", power: 81 },
        { name: "Kudus", position: "rm", power: 82 },
        { name: "Solanke", position: "st", power: 80 },
        { name: "Richarlison", position: "st", power: 78 }
    ]
};

let team12 = {
    teamName: "Barcelona",
    players: [
        { name: "Joan Garcia", position: "gk", power: 84 },
        { name: "Cubarsi", position: "cb", power: 85 },
        { name: "Araujo", position: "cb", power: 84 },
        { name: "Balde", position: "lb", power: 84 },
        { name: "Kounde", position: "rb", power: 85 },
        { name: "Raphinha", position: "lm", power: 89 },
        { name: "Pedri", position: "cm", power: 89 },
        { name: "De Jong", position: "cm", power: 85 },
        { name: "Yamal", position: "rm", power: 91 },
        { name: "Lewandowski", position: "st", power: 88 },
        { name: "Ferran Torres", position: "st", power: 82 }
    ]
};

let team13 = {
    teamName: "Atletico Madrid",
    players: [
        { name: "Oblak", position: "gk", power: 87 },
        { name: "Gimenez", position: "cb", power: 82 },
        { name: "Le Normand", position: "cb", power: 82 },
        { name: "Hancko", position: "lb", power: 81 },
        { name: "Llorente", position: "rb", power: 82 },
        { name: "Baena", position: "lm", power: 82 },
        { name: "Barrios", position: "cm", power: 84 },
        { name: "Koke", position: "cm", power: 79 },
        { name: "Giuliano Simeone", position: "rm", power: 80 },
        { name: "Griezmann", position: "st", power: 84 },
        { name: "Julian Alvarez", position: "st", power: 87 }
    ]
};

let team14 = {
    teamName: "Athletic Club",
    players: [
        { name: "Unai Simon", position: "gk", power: 84 },
        { name: "Vivian", position: "cb", power: 82 },
        { name: "Paredes", position: "cb", power: 79 },
        { name: "Yuri Berchiche", position: "lb", power: 78 },
        { name: "Gorosabel", position: "rb", power: 76 },
        { name: "Nico Williams", position: "lm", power: 87 },
        { name: "Galarreta", position: "cm", power: 78 },
        { name: "Jauregizar", position: "cm", power: 77 },
        { name: "Inaki Williams", position: "rm", power: 82 },
        { name: "Guruzeta", position: "st", power: 78 },
        { name: "Maroan", position: "st", power: 74 }
    ]
};

let team15 = {
    teamName: "Villarreal",
    players: [
        { name: "Luiz Junior", position: "gk", power: 78 },
        { name: "Foyth", position: "cb", power: 79 },
        { name: "Mourino", position: "cb", power: 76 },
        { name: "Sergi Cardona", position: "lb", power: 76 },
        { name: "Femenia", position: "rb", power: 75 },
        { name: "Buchanan", position: "lm", power: 77 },
        { name: "Parejo", position: "cm", power: 80 },
        { name: "Comesana", position: "cm", power: 77 },
        { name: "Solomon", position: "rm", power: 76 },
        { name: "Mikautadze", position: "st", power: 80 },
        { name: "Gerard Moreno", position: "st", power: 79 }
    ]
};

let team16 = {
    teamName: "Leverkusen",
    players: [
        { name: "Hradecky", position: "gk", power: 80 },
        { name: "Tapsoba", position: "cb", power: 82 },
        { name: "Quansah", position: "cb", power: 78 },
        { name: "Grimaldo", position: "lb", power: 84 },
        { name: "Arthur", position: "rb", power: 74 },
        { name: "Poku", position: "lm", power: 76 },
        { name: "Palacios", position: "cm", power: 80 },
        { name: "Aleix Garcia", position: "cm", power: 79 },
        { name: "Ben Seghir", position: "rm", power: 79 },
        { name: "Schick", position: "st", power: 82 },
        { name: "Boniface", position: "st", power: 81 }
    ]
};

let team17 = {
    teamName: "Dortmund",
    players: [
        { name: "Kobel", position: "gk", power: 85 },
        { name: "Schlotterbeck", position: "cb", power: 83 },
        { name: "Anton", position: "cb", power: 80 },
        { name: "Bensebaini", position: "lb", power: 79 },
        { name: "Ryerson", position: "rb", power: 78 },
        { name: "Adeyemi", position: "lm", power: 82 },
        { name: "Gross", position: "cm", power: 78 },
        { name: "Jobe Bellingham", position: "cm", power: 78 },
        { name: "Beier", position: "rm", power: 79 },
        { name: "Guirassy", position: "st", power: 85 },
        { name: "Fabio Silva", position: "st", power: 77 }
    ]
};

let team18 = {
    teamName: "Frankfurt",
    players: [
        { name: "Zetterer", position: "gk", power: 77 },
        { name: "Koch", position: "cb", power: 80 },
        { name: "Theate", position: "cb", power: 79 },
        { name: "Nathaniel Brown", position: "lb", power: 77 },
        { name: "Kristensen", position: "rb", power: 78 },
        { name: "Bahoya", position: "lm", power: 76 },
        { name: "Larsson", position: "cm", power: 80 },
        { name: "Chaibi", position: "cm", power: 78 },
        { name: "Doan", position: "rm", power: 79 },
        { name: "Burkardt", position: "st", power: 80 },
        { name: "Batshuayi", position: "st", power: 75 }
    ]
};

let team19 = {
    teamName: "Inter",
    players: [
        { name: "Sommer", position: "gk", power: 85 },
        { name: "Bastoni", position: "cb", power: 87 },
        { name: "Acerbi", position: "cb", power: 80 },
        { name: "Dimarco", position: "lb", power: 85 },
        { name: "Dumfries", position: "rb", power: 84 },
        { name: "Carlos Augusto", position: "lm", power: 79 },
        { name: "Barella", position: "cm", power: 87 },
        { name: "Calhanoglu", position: "cm", power: 86 },
        { name: "Luis Henrique", position: "rm", power: 77 },
        { name: "Lautaro", position: "st", power: 89 },
        { name: "Thuram", position: "st", power: 85 }
    ]
};

let team20 = {
    teamName: "Napoli",
    players: [
        { name: "Meret", position: "gk", power: 81 },
        { name: "Buongiorno", position: "cb", power: 83 },
        { name: "Rrahmani", position: "cb", power: 81 },
        { name: "Olivera", position: "lb", power: 79 },
        { name: "Di Lorenzo", position: "rb", power: 83 },
        { name: "Neres", position: "lm", power: 81 },
        { name: "De Bruyne", position: "cm", power: 87 },
        { name: "McTominay", position: "cm", power: 85 },
        { name: "Politano", position: "rm", power: 81 },
        { name: "Lukaku", position: "st", power: 83 },
        { name: "Hojlund", position: "st", power: 79 }
    ]
};

let team21 = {
    teamName: "Atalanta",
    players: [
        { name: "Carnesecchi", position: "gk", power: 81 },
        { name: "Hien", position: "cb", power: 80 },
        { name: "Djimsiti", position: "cb", power: 77 },
        { name: "Zappacosta", position: "lb", power: 77 },
        { name: "Bellanova", position: "rb", power: 78 },
        { name: "Lookman", position: "lm", power: 85 },
        { name: "Ederson", position: "cm", power: 82 },
        { name: "De Roon", position: "cm", power: 78 },
        { name: "De Ketelaere", position: "rm", power: 82 },
        { name: "Scamacca", position: "st", power: 79 },
        { name: "Krstovic", position: "st", power: 77 }
    ]
};

let team22 = {
    teamName: "Juventus",
    players: [
        { name: "Di Gregorio", position: "gk", power: 82 },
        { name: "Bremer", position: "cb", power: 85 },
        { name: "Gatti", position: "cb", power: 79 },
        { name: "Cambiaso", position: "lb", power: 81 },
        { name: "Kalulu", position: "rb", power: 79 },
        { name: "Yildiz", position: "lm", power: 84 },
        { name: "Locatelli", position: "cm", power: 81 },
        { name: "Khephren Thuram", position: "cm", power: 82 },
        { name: "Conceicao", position: "rm", power: 79 },
        { name: "Vlahovic", position: "st", power: 82 },
        { name: "Jonathan David", position: "st", power: 80 }
    ]
};

let team23 = {
    teamName: "PSG",
    players: [
        { name: "Chevalier", position: "gk", power: 83 },
        { name: "Marquinhos", position: "cb", power: 85 },
        { name: "Pacho", position: "cb", power: 83 },
        { name: "Nuno Mendes", position: "lb", power: 87 },
        { name: "Hakimi", position: "rb", power: 88 },
        { name: "Kvaratskhelia", position: "lm", power: 88 },
        { name: "Vitinha", position: "cm", power: 89 },
        { name: "Joao Neves", position: "cm", power: 86 },
        { name: "Doue", position: "rm", power: 86 },
        { name: "Dembele", position: "st", power: 90 },
        { name: "Barcola", position: "st", power: 84 }
    ]
};

let team24 = {
    teamName: "Monaco",
    players: [
        { name: "Majecki", position: "gk", power: 76 },
        { name: "Kehrer", position: "cb", power: 77 },
        { name: "Salisu", position: "cb", power: 76 },
        { name: "Caio Henrique", position: "lb", power: 79 },
        { name: "Vanderson", position: "rb", power: 79 },
        { name: "Minamino", position: "lm", power: 78 },
        { name: "Zakaria", position: "cm", power: 81 },
        { name: "Golovin", position: "cm", power: 80 },
        { name: "Akliouche", position: "rm", power: 82 },
        { name: "Balogun", position: "st", power: 78 },
        { name: "Biereth", position: "st", power: 77 }
    ]
};

let team25 = {
    teamName: "Ajax",
    players: [
        { name: "Pasveer", position: "gk", power: 74 },
        { name: "Sutalo", position: "cb", power: 76 },
        { name: "Itakura", position: "cb", power: 78 },
        { name: "Wijndal", position: "lb", power: 74 },
        { name: "Gaaei", position: "rb", power: 72 },
        { name: "Godts", position: "lm", power: 75 },
        { name: "Taylor", position: "cm", power: 77 },
        { name: "Klaassen", position: "cm", power: 74 },
        { name: "Berghuis", position: "rm", power: 76 },
        { name: "Weghorst", position: "st", power: 75 },
        { name: "Dolberg", position: "st", power: 76 }
    ]
};

let team26 = {
    teamName: "Sporting",
    players: [
        { name: "Rui Silva", position: "gk", power: 78 },
        { name: "Inacio", position: "cb", power: 82 },
        { name: "Diomande", position: "cb", power: 80 },
        { name: "Matheus Reis", position: "lb", power: 76 },
        { name: "Fresneda", position: "rb", power: 76 },
        { name: "Trincao", position: "lm", power: 80 },
        { name: "Hjulmand", position: "cm", power: 82 },
        { name: "Morita", position: "cm", power: 78 },
        { name: "Quenda", position: "rm", power: 79 },
        { name: "Luis Suarez", position: "st", power: 79 },
        { name: "Ioannidis", position: "st", power: 79 }
    ]
};

let team27 = {
    teamName: "Benfica",
    players: [
        { name: "Trubin", position: "gk", power: 81 },
        { name: "Otamendi", position: "cb", power: 80 },
        { name: "Antonio Silva", position: "cb", power: 81 },
        { name: "Dahl", position: "lb", power: 75 },
        { name: "Dedic", position: "rb", power: 77 },
        { name: "Aursnes", position: "lm", power: 79 },
        { name: "Richard Rios", position: "cm", power: 80 },
        { name: "Florentino", position: "cm", power: 79 },
        { name: "Schjelderup", position: "rm", power: 77 },
        { name: "Pavlidis", position: "st", power: 82 },
        { name: "Ivanovic", position: "st", power: 76 }
    ]
};

let team28 = {
    teamName: "Club Brugge",
    players: [
        { name: "Jackers", position: "gk", power: 74 },
        { name: "Mechele", position: "cb", power: 76 },
        { name: "Ordonez", position: "cb", power: 77 },
        { name: "Seys", position: "lb", power: 75 },
        { name: "Sabbe", position: "rb", power: 75 },
        { name: "Tzolis", position: "lm", power: 79 },
        { name: "Vanaken", position: "cm", power: 79 },
        { name: "Onyedika", position: "cm", power: 76 },
        { name: "Talbi", position: "rm", power: 76 },
        { name: "Tresoldi", position: "st", power: 74 },
        { name: "Vermant", position: "st", power: 72 }
    ]
};

let team29 = {
    teamName: "Union SG",
    players: [
        { name: "Scherpen", position: "gk", power: 75 },
        { name: "Burgess", position: "cb", power: 74 },
        { name: "Kevin Mac Allister", position: "cb", power: 73 },
        { name: "Leysen", position: "lb", power: 72 },
        { name: "Khalaili", position: "rb", power: 73 },
        { name: "Niang", position: "lm", power: 73 },
        { name: "Rasmussen", position: "cm", power: 73 },
        { name: "Zorgane", position: "cm", power: 75 },
        { name: "El Hadj", position: "rm", power: 73 },
        { name: "Promise David", position: "st", power: 74 },
        { name: "Rodriguez", position: "st", power: 73 }
    ]
};

let team30 = {
    teamName: "Slavia Praha",
    players: [
        { name: "Stanek", position: "gk", power: 76 },
        { name: "Vlcek", position: "cb", power: 74 },
        { name: "Zima", position: "cb", power: 74 },
        { name: "Boril", position: "lb", power: 73 },
        { name: "Doudera", position: "rb", power: 73 },
        { name: "Provod", position: "lm", power: 76 },
        { name: "Dorley", position: "cm", power: 74 },
        { name: "Sadilek", position: "cm", power: 73 },
        { name: "Schranz", position: "rm", power: 74 },
        { name: "Chory", position: "st", power: 74 },
        { name: "Kusej", position: "st", power: 73 }
    ]
};

let team31 = {
    teamName: "Olympiacos",
    players: [
        { name: "Tzolakis", position: "gk", power: 77 },
        { name: "Retsos", position: "cb", power: 76 },
        { name: "Pirola", position: "cb", power: 75 },
        { name: "Ortega", position: "lb", power: 74 },
        { name: "Rodinei", position: "rb", power: 75 },
        { name: "Podence", position: "lm", power: 77 },
        { name: "Hezze", position: "cm", power: 76 },
        { name: "Dani Garcia", position: "cm", power: 75 },
        { name: "Martins", position: "rm", power: 76 },
        { name: "El Kaabi", position: "st", power: 78 },
        { name: "Yaremchuk", position: "st", power: 74 }
    ]
};

let team32 = {
    teamName: "Bodo Glimt",
    players: [
        { name: "Haikin", position: "gk", power: 74 },
        { name: "Gundersen", position: "cb", power: 72 },
        { name: "Nielsen", position: "cb", power: 72 },
        { name: "Bjorkan", position: "lb", power: 73 },
        { name: "Sjovold", position: "rb", power: 72 },
        { name: "Hauge", position: "lm", power: 76 },
        { name: "Berg", position: "cm", power: 75 },
        { name: "Evjen", position: "cm", power: 75 },
        { name: "Blomberg", position: "rm", power: 73 },
        { name: "Hogh", position: "st", power: 73 },
        { name: "Helmersen", position: "st", power: 72 }
    ]
};

let team33 = {
    teamName: "Copenhagen",
    players: [
        { name: "Kotarski", position: "gk", power: 75 },
        { name: "Hatzidiakos", position: "cb", power: 74 },
        { name: "McKenna", position: "cb", power: 75 },
        { name: "Lopez", position: "lb", power: 73 },
        { name: "Huescas", position: "rb", power: 73 },
        { name: "Robert", position: "lm", power: 74 },
        { name: "Lerager", position: "cm", power: 74 },
        { name: "Delaney", position: "cm", power: 72 },
        { name: "Elyounoussi", position: "rm", power: 75 },
        { name: "Cornelius", position: "st", power: 74 },
        { name: "Claesson", position: "st", power: 73 }
    ]
};

let team34 = {
    teamName: "Qarabag",
    players: [
        { name: "Kochalski", position: "gk", power: 72 },
        { name: "Mustafazada", position: "cb", power: 71 },
        { name: "Medina", position: "cb", power: 72 },
        { name: "Cafarquliyev", position: "lb", power: 70 },
        { name: "Silva", position: "rb", power: 71 },
        { name: "Zoubir", position: "lm", power: 76 },
        { name: "Bicalho", position: "cm", power: 72 },
        { name: "Jankovic", position: "cm", power: 73 },
        { name: "Kashchuk", position: "rm", power: 71 },
        { name: "Juninho", position: "st", power: 73 },
        { name: "Akhundzada", position: "st", power: 70 }
    ]
};

let team35 = {
    teamName: "Pafos",
    players: [
        { name: "Michail", position: "gk", power: 70 },
        { name: "Luckassen", position: "cb", power: 72 },
        { name: "David Luiz", position: "cb", power: 73 },
        { name: "Correia", position: "lb", power: 70 },
        { name: "Bruno", position: "rb", power: 70 },
        { name: "Jaja", position: "lm", power: 72 },
        { name: "Sunjic", position: "cm", power: 71 },
        { name: "Pileas", position: "cm", power: 69 },
        { name: "Orsic", position: "rm", power: 74 },
        { name: "Jairo", position: "st", power: 71 },
        { name: "Silva", position: "st", power: 69 }
    ]
};

let team36 = {
    teamName: "Kairat",
    players: [
        { name: "Anarbekov", position: "gk", power: 71 },
        { name: "Sorokin", position: "cb", power: 70 },
        { name: "Martynovich", position: "cb", power: 69 },
        { name: "Mata", position: "lb", power: 68 },
        { name: "Tapalov", position: "rb", power: 68 },
        { name: "Satpaev", position: "lm", power: 73 },
        { name: "Kasabulat", position: "cm", power: 69 },
        { name: "Arad", position: "cm", power: 68 },
        { name: "Gromyko", position: "rm", power: 71 },
        { name: "Jorginho", position: "st", power: 70 },
        { name: "Edmilson", position: "st", power: 69 }
    ]
};

// Hepsi bir arada - index.js'te teams dizisi olarak kullanilabilir
let allTeams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team18, team19, team20, team21, team22, team23, team24, team25, team26, team27, team28, team29, team30, team31, team32, team33, team34, team35, team36];
