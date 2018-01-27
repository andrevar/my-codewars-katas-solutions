function solve(str,idx){
    if(str[idx] != '(') {return -1;}
    var count = 0;
    for(let x = idx+0; x < str.length; x++) {
        if(str[x] == '(') { count++; }
        if(str[x] == ')') { count--; }
        if(count === 0) { return x;}
    }
    return -1;
    
}
