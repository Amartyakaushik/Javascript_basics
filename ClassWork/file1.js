// var is as function level scope 

function exampleFunction(){
    if(true){
        var functionScopedVar="I am function-Scoped";
    }
    console.log(functionScopedVar);
}
exampleFunction();
console.log(functionScopedVar);

// let is used as block level scope

function exampleFunction(){
    if(true){
        let functionScopedVar="I am function-Scoped";
    }
    console.log(functionScopedVar);
}
exampleFunction();
console.log(functionScopedVar);

const constantVar="I am constant";
if(true){
    console.log(constantVar);
}

var nonConstVar="I may could be constant or maybe not";

if(true){

}

function exampleFunction(){
    if(true){
        const ConstantVar="I am BLock-Scoped";
    }
    console.log(ConstantVar);
}
exampleFunction();
console.log(ConstantVar);

var shadowedVar="I am global";
function exampleFunction(){
    var shadowedVar="I am local";
    console.log(shadowedVar);
}
console.log(shadowedVar);

let shadowedVar1="I am global";
function exampleFunction(){
    var shadowedVar1="I am local";
    console.log(shadowedVar1);
}
console.log(shadowedVar1);

console.log(x);
let x=9;
console.log(x);

console.log(x);
console.log(x);


// DATA TYPES
// 1) PRIMITIVE 
// i) String
let name="Amartya Kasuhik";
console.log(name);

// ii) Number
let num=3;
// iii) Boolean
let isStudent=true

console.log(typeof(num));
console.log(typeof(name));
console.log(typeof(isStudent));


// Object
let person={
    name:"Amartya Kaushik",
    age:20,
    isStudent:true
};

console.log(person.name);
console.log(person.age);
console.log(person);

// Array
let fruits=[1,"Banana","Apple"];
console.log(fruits[2]);

// Function
