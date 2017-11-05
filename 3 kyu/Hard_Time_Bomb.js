var wireCode = global[Object.keys(global).filter(function (a) {
    return typeof global[a] === "number"; 
})]; // Find the wire.
Bomb.CutTheWire(wireCode);
