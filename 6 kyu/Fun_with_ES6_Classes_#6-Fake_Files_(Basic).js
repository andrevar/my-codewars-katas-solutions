class File {
  constructor(fullName,contents) {
      this._fullName = fullName;
      this.contents = contents;
      this._filename = fullName.slice(0,fullName.lastIndexOf('.'));
      this._extension = fullName.slice(fullName.lastIndexOf('.') + 1);
      this.s = 0;
      this.c = 0;
  }
  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._filename;
  }
  get extension() {
    return this._extension;
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    if(this.contents == '') {
        this.contents = str;
    } else {
    this.contents += '\n' + str;
    }
  }
  gets() {
    this.s++;
    return this.contents.split('\n')[this.s - 1];
  }
  getc() {
    this.c++;
    return this.contents[this.c - 1];
  }
}
