var pass = [];
var signIn = function(newPassword) {
    pass.push(newPassword);
};
var logIn = function(password) {
    return pass.includes(password);
};
