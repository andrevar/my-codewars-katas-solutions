const tapFive = {
  encrypt: function(str) {
      var tab = {'A':'11','B':'12','C':'13','D':'14','E':'15',
                 'F':'21','G':'22','H':'23','I':'24','J':'25',
                 'L':'31','M':'32','N':'33','O':'34','P':'35',
                 'Q':'41','R':'42','S':'43','T':'44','U':'45',
                 'V':'51','W':'52','X':'53','Y':'54','Z':'55'};
      str = str.toUpperCase().split(' ').join('');
      var strEn = '';
      for(let x = 0; x < str.length; x++) {
          if(str[x] == 'K') {
              strEn += '13';
          }
          if(tab[str[x]] === undefined) {
              continue;
          }
              strEn += tab[str[x]];
      }
      console.log(str)
      return strEn;    
      
  },
  decrypt: function(str) {
      var tab = [['A','B','C','D','E'],
                 ['F','G','H','I','J'],
                 ['L','M','N','O','P',],
                 ['Q','R','S','T','U',],
                 ['V','W','X','Y','Z',]];
        var strDe = '';
           for(let x = 0; x < str.length; x += 2) {
               strDe += tab[parseInt(str[x] - 1)][parseInt(str[x + 1]) - 1];
           }
       return strDe;               
  }
};
