// complete the function
function solution(string) {
    return string.split('').map(function(a) {
        if (a.charCodeAt(0) > 64 && a.charCodeAt(0 )< 91) {
        return " " + a;
        } else {
        return a;
        }
    }).join('');
}
