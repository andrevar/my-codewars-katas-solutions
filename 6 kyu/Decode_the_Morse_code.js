decodeMorse = function(morseCode){
  var morse = morseCode.trim().split(' ');
  morse = morse.map(function(a) {
    return a = MORSE_CODE[a] || " ";
  });
  return morse.join('').replace(/\s+/g, " ");}
