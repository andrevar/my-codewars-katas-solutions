function songDecoder(song){ 
    return song.split('WUB').filter(function(a) {
        return a != '';
    }).join(' ');
}
