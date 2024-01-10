export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: (string | number)) {
    if (typeof(salary) === "number" && salary < 500){
        return new Teacher;
    }
    return new Director;
}

export function isDirector(employee: Director | Teacher): employee is Director {
    return 'workDirectorTasks' in employee;
}

export function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return (employee.workDirectorTasks());
    }
    else {
        return (employee as Teacher).workTeacherTasks();
    }
}

type Subjects = ('Math' | 'History')

export function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass("Math"));
console.log(teachClass("History"));