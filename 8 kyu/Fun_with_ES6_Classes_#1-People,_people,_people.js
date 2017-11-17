class Person {
  constructor(firstName,lastName,age,gender) {
      this.firstName = firstName || 'John';
      this.lastName = lastName || 'Doe';
      this.age = age || 0;
      this.gender = gender || 'Male';
  }
  static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
  }
  sayFullName(){
      return `${this.firstName} ${this.lastName}`;
  }
}
