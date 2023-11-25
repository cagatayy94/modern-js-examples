const userName = "Cagatay";
//userName = "nasıl";

let age = 30;

age = 30;

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

console.log(isOld);