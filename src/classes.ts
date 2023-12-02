class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    //this.id = id;
    //this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.id + " " + this.name);
  }

  addEmployee(employee: string) {
    //some validation
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const itDepartment = new Department("h1", "IT");

console.log(itDepartment);
itDepartment.describe();

const itDepartmentCopy = { name: "sülüman", describe: itDepartment.describe };
//itDepartmentCopy.describe();

itDepartment.addEmployee("sam");
itDepartment.addEmployee("max");
//itDepartment.employees[2] ="selin";

itDepartment.printEmployeeInfo();
