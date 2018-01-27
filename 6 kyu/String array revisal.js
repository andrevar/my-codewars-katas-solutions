function dup(s) {
     return s.map(a=>{
            let temp = a.match(/(.)\1+/g);
            if(temp) {
                for(let y of temp) {
                    a = a.replace(y,y[0]);
                }
            }
            return a;
     });
};
