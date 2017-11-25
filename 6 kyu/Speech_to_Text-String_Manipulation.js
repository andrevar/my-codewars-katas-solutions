var bot = {
  message: function(msg) {
      if (msg.match(/Add/)) {
          return parseInt(msg.match(/\d+/g)[0]) + parseInt(msg.match(/\d+/g)[1]);
      }  
      if (msg.match(/Subtract/)) {
          return parseInt(msg.match(/\d+/g)[1]) - parseInt(msg.match(/\d+/g)[0]);
      } 
      if (msg.match(/weather/)) {
          if (msg.match(/pm\?/) && (parseInt(msg.match(/\d+/g)[0]) >= 6) 
              && (parseInt(msg.match(/\d+/g)[1]) > 0) ) {
                  return 'raining';
              }
          if (msg.match(/am\?/) && parseInt(msg.match(/\d+/g)[0]) < 6 ) {
                  return 'raining';
              }    
          return 'sunny';
         
      } 
  }
};
