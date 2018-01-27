function thunk(fn,...args) {
    return function () {return fn(...args);};            
}

function trampoline(f) {
    while (typeof f === 'function') {
        f = f();
    }
    return f;   
}
function _isEven(n) {
      return function () { 
          if(n == 0) {
              return true;
          }
          return thunk(_isOdd,n-1);
          }
}
function _isOdd (n) {
      return function () { 
          if(n == 0) {
              return false;
          }
          return thunk(_isEven,n-1);
          }
}
function isEven(n) {
  return trampoline(thunk(_isEven,n));
}

function isOdd(n) {
  return trampoline(thunk(_isOdd,n));
}
