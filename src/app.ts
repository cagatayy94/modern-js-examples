const userName = "Cagatay";
//userName = "nasıl";

let age = 30;

age = 30;
/* 
//bad works sometimes
function add(a:number, b:number){
    let result; // or var result;
    result =  a+b;
    return result;
}

//console.log(result);

// doesnt have access variable 
if(age > 20){
    let isOld = false;
}

console.log(isOld);

// can access variable but can have some memory issues
if(age > 20){
    var isOld = false;
}

console.log(isOld); */

//Arrow functions
const add = (a: number, b: number) => a + b;

/* const printOutput = (output:string|number) => {
    console.log(output);
} */

//shorter version of above
const printOutput: (output: number | string) => void = (output) =>
  console.log(output);
// () => {}

const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(add(12, 34));

//default argument
//Arrow functions
const addWithDefault = (a: number = 10, b: number) => a + b;
printOutput(addWithDefault(undefined, 55));

//do this instead
const addWithDefault2 = (a: number, b: number = 19) => a + b;
printOutput(addWithDefault2(10));

//The spread operator
const hobbies = ["sports", "cookie"];
const hobbiesOutdoor = ["biking", "climbing"];
const activeHobbies = ["hiking", ...hobbiesOutdoor];

activeHobbies.push(...hobbies);

const person = {
  name: "cagatay",
  age: 23,
};

//copies only reference
const copiedPersonReference = person;

const copiedNewPerson = { ...person };
