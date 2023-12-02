class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee:string){
    //some validation
    this.employees.push(employee);
  }

  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

const itDepartment = new Department("IT");

console.log(itDepartment);
itDepartment.describe();

const itDepartmentCopy = { name: "sülüman", describe: itDepartment.describe };
//itDepartmentCopy.describe();

itDepartment.addEmployee("sam");
itDepartment.addEmployee("max");
//itDepartment.employees[2] ="selin"; 

itDepartment.printEmployeeInfo();