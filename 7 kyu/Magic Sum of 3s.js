function magicSum(numbers) {
    if(!numbers) {return 0;}
    var sum = 0;
    for (let x = 0; x < numbers.length; x++) {
        if(numbers[x] % 2 == 1 && numbers[x].toString().match(/3/)) {
            sum += numbers[x];
        }
    }
    return sum;
}
