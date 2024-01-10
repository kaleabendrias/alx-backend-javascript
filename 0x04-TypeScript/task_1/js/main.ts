interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
};

export interface Directors extends Teacher {
    numberOfReports: number,
};

export function printTeacher(firstName: string, lastName: string) {
    return (`${firstName.charAt(0)}. ${lastName}`)
}

class StudentClass {
    private firstName: string;
    private lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working'
    }
    displayName() {
        return this.firstName;
    }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const teacher2 = printTeacher("john", "doe");
console.log(teacher2)

const student1 = new StudentClass("john", "doe");
console.log(student1.displayName());
console.log(student1.workOnHomework());