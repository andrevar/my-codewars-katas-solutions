function zeros (n) {
    var sum = 0;
    for(let x = 5; x <= n; x += 5) {
        if(x % 5 == 0) {
            let temp = x;
            while(temp % 5 == 0) {
                temp /= 5;
                sum++;
            }
        }
    }
    return sum;
}
