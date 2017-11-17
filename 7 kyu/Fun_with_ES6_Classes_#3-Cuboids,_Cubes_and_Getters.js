class Cuboid {
    constructor(length,width,height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return 2 * (this.length * this.height  + this.height * this.width + this.width * this.length);
    }
    get volume() {
        return this.length * this.height  * this.width;
    }
}
class Cube extends Cuboid {
  constructor(length) {
      super(length,length,length)
  }    
}
