Array.prototype.sameStructureAs = function (other) {
    var arr = JSON.stringify(this).replace(/"\["/,'').replace(/"\]"/,'').replace(/[^\[\],]/g,'');
    var oth = JSON.stringify(other).replace(/"\["/,'').replace(/"\]"/,'').replace(/[^\[\],]/g,'');
    return arr == oth;
};
