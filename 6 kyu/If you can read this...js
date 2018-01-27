function to_nato(words) {
    var nato = {"A": "Alfa","B": "Bravo","C": "Charlie","D": "Delta","E": "Echo","F": "Foxtrot",
                "G": "Golf","H": "Hotel","I": "India","J": "Juliett","K": "Kilo","L": "Lima",
                "M": "Mike","N": "November","O": "Oscar","P": "Papa","Q": "Quebec","R": "Romeo",
                "S": "Sierra","T": "Tango","U": "Uniform","V": "Victor","W": "Whiskey","X": "Xray",
                "Y": "Yankee","Z": "Zulu"}
    var s = '';
    words = words.toUpperCase();
    for (var x = 0; x < words.length; x++) {
        if (words[x].match(/[A-Z]/)) {
            s += (nato[words[x]] + ' ');    
        } else if (words[x] != ' ') {
            s += words[x] + ' ';
        }
    }
    return s.trim();
}
