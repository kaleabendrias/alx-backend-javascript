export class HolbertonYear {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get academicYear() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const academicYear2019 = new HolbertonYear(2019, 'San Francisco');
const academicYear2020 = new HolbertonYear(2020, 'San Francisco');

export class HolbertonStudent {
  constructor(firstName, lastName, holbertonYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonYear = holbertonYear;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get academicYear() {
    return this._holbertonYear;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonYear.academicYear} - ${this._holbertonYear.location}`;
  }
}

const studentGuillaume = new HolbertonStudent('Guillaume', 'Salva', academicYear2020);
const studentJohn = new HolbertonStudent('John', 'Doe', academicYear2020);
const studentAlbert = new HolbertonStudent('Albert', 'Clinton', academicYear2019);
const studentDonald = new HolbertonStudent('Donald', 'Bush', academicYear2019);
const studentJason = new HolbertonStudent('Jason', 'Sandler', academicYear2019);

export default [studentGuillaume, studentJohn, studentAlbert, studentDonald, studentJason];
