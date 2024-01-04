class HolbertonClass {
  constructor(year, location) {
    this.startYear = year;
    this.location = location;
  }

  get year() {
    return this.startYear;
  }

  get place() {
    return this.location;
  }
}

const classOf2019 = new HolbertonClass(2019, 'San Francisco');
const classOf2020 = new HolbertonClass(2020, 'San Francisco');

class HolbertonStudent {
  constructor(first, last, holbertonClass) {
    this.firstName = first;
    this.lastName = last;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get holbertonClassInfo() {
    return `${this.firstName} ${this.lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.place}`;
  }
}

const studentA = new HolbertonStudent('Guillaume', 'Salva', classOf2020);
const studentB = new HolbertonStudent('John', 'Doe', classOf2020);
const studentC = new HolbertonStudent('Albert', 'Clinton', classOf2019);
const studentD = new HolbertonStudent('Donald', 'Bush', classOf2019);
const studentE = new HolbertonStudent('Jason', 'Sandler', classOf2019);

export default [studentA, studentB, studentC, studentD, studentE];
