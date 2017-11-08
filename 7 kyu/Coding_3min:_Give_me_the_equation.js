function sc(a,b,c){
    if(a+b==c){
        return a.toString() + '+' + b + '=' + c;
    }
    if(b+a==c){
        return b.toString() + '+' + a + '=' + c;
    }
    if(a-b==c){
        return a.toString() + '-' + b + '=' + c;
    }
    if(b-a==c){
        return b.toString() + '-' + a + '=' + c;
    }
    if(a*b==c){
        return a.toString() + '*' + b + '=' + c;
    } 
    if(a/b==c){
        return a.toString() + '/' + b + '=' + c;
    }
     if(b/a==c){
        return b.toString() + '/' + a + '=' + c;
    }
    return '';
}
