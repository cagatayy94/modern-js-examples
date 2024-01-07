class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  constructor(id: string, public admins:string[]){
    super(id, 'IT');
    this.calculate();
  }

  calculate() {
    console.log(12+12);
  }

}

const itDepartment = new ITDepartment("h1", ["asd", "2asd"]);

console.log(itDepartment);
itDepartment.describe();

const itDepartmentCopy = { name: "sülüman", describe: itDepartment.describe };
//itDepartmentCopy.describe();

itDepartment.addEmployee("sam");
itDepartment.addEmployee("max");
//itDepartment.employees[2] ="selin";

itDepartment.printEmployeeInfo();

console.log("asdasd");