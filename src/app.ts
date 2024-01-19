type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name:"Max",
    privilages:["asd", "sda "],
    startDate: new Date()
}