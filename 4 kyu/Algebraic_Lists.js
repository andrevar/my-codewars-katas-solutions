function Cons(head,tail){
    this.head = head;
    this.tail = tail;
}
Cons.fromArray = function(array){
    tail = null;
    array.reverse().map(function(a) {
        tail = new Cons(a, tail);
        return a;
    });
    return tail;
};

function filter(list, predicate){
    var arr = list.toArray();
    arr = arr.filter(predicate);
    return Cons.fromArray(arr);
}

function map(list, mapper){
    var arr = list.toArray();
    arr = arr.map(mapper);
    return Cons.fromArray(arr);
}

Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };
