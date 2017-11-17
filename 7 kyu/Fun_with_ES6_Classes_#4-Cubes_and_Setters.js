class Cube {
    constructor(length){
        this.length = length;
    }
    get surfaceArea() {
        return this.length * this.length * 6;
    }
    get volume() {
        return this.length * this.length  * this.length;
    }
    set surfaceArea(newArea){
            this.length = Math.sqrt(newArea / 6) ;
    }
    set volume(newVolume){
            this.length = Math.pow(newVolume, (1/3));
    }
 
}
