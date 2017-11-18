function password(str) {
    return !!str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g);
}
