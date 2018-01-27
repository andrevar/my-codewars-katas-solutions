function findNb(m) {
    var s = 0, c = 1;
    while (s <= m) {
        s += c*c*c;
        if (s == m) {
            return c;
        }
        c++;
    }
    return -1;
}
