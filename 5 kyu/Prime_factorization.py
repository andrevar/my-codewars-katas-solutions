class PrimeFactorizer {
    constructor(n) {
        this.n = n;
    }
    get factor(){
        var factors = [], i;
        var obj = {};
        for (i = 2; i <= this.n; i++) {
            while (this.n % i === 0) {
                factors.push(i);
                this.n /= i;
            }
        }
        factors.map(a => {obj[a] = (obj[a] || 0) + 1; return a});
        return obj;
    }
}
