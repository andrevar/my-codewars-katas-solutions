function reverseMessage(str) {
    return str? str.split('').reverse().map(a=>a.toLowerCase()).join('')
          .split(' ').map(b=>{ b = b.split(''); b[0] = b[0].toUpperCase();
           return b.join(''); }).join(' ') : '';
}
