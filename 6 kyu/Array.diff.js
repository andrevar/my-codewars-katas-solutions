function array_diff(a, b) {
    return a.filter(function(x) {
        return !b.includes(x);
});
}
