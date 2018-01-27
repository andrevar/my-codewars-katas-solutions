function proofread (str) { 
    str = str.toLowerCase().replace(/ie/g,'ei').split('');
    str[0] = str[0].toUpperCase();
    for (let x = 0; x < str.length - 1; x++) {
        if (str[x] == '.') {
            str[x + 2] = str[x + 2].toUpperCase();    
        }
    }
    return str.join('');
} 


proofread ("ShE deCIeved HiM.");
