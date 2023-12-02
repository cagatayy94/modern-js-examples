class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const itDepartment = new Department("IT");

console.log(itDepartment);
itDepartment.describe();

const itDepartmentCopy = { name: "sülüman", describe: itDepartment.describe };
itDepartmentCopy.describe();
