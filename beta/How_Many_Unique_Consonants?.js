function countConsonants(str) {
    return (new Set(str.toLowerCase().split('').filter(a=> !a.match(/[aeiou]|[^a-z]/gi)))).size;
}
