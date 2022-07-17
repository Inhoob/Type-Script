class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

interface Person {
  firstName: String;
  lastName: String;
}

let user = new Student("Jane", "M. ", "User");

document.body.textContent = greeter(user);
