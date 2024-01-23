// for loop
console.log("For loop");
for(let i=0; i<5; i++){
    console.log(i);
}

// while loop
console.log("While loop");
let count=0
while(count<5){
    console.log(count);
    count++;
}

// Do while loop
console.log("Do while loop");
let count1=0;
do{
    console.log(count1);
    count1++;
}while(count1<5)

// For in loop used to access properties of an object
let person={name:"Amartya",age:20,occupation:"Developer"};
for(let key in person){
    console.log(key + ":"+person[key]);
}


// function without a name is called anonymous function
// object literal notation
let car={
    make:"Toyota",
    model:"Camry",
    year:2024,
    isElectric:false,
    start:function(){  // function without a name is called anonymous function
        console.log("Engine Started");
    }
}

// Accessing properties
console.log(car.make);
console.log(car.isElectric);

// Calling a method
car.start();



// OBJECT CONSTRUCTOR
// object constructor funtction
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
// creating instances of the object
let Book1=new Book("The Catcher in the Rye","J.D. Salinger",1951);
let Book2=new Book("To kill a mockinbird","Harper Lee",1960);

console.log(Book1.title);
console.log(Book1.year);
console.log(Book2.author);
console.log(Book2.year);
console.log(Book1);

// Array
let fruits=["Apple","Banana","Pineapple","Guava","Orange"];
// accessing elements
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits);

// Adding elements to the end of an array
fruits.push("kiwi");
console.log(fruits);
// Adding elements to the begining of an array
fruits.unshift("Mango");
console.log(fruits);
// Removing the last element from an array
let removedLast=fruits.pop();
console.log(fruits);
console.log(removedLast);  // returns kiwi only the last element.
// Removing the first elemetn from an array
let removedFirst=fruits.shift();
console.log(fruits);

// Finding index of an element
let indexOfOrange=fruits.indexOf("Orange");
// Iteration using a for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// slicing an array
let citrus=fruits.slice(1,3);
console.log(citrus);

// Splicing an array (modifying original array)
let removed=fruits.splice(1,2,"pear","Melon");
// Concatenating arays 
let  moreFruits=["grapefruit","pineapple"];
let allFruits=fruits.concat(moreFruits);


// multiply(34,3);   Uncaught ReferenceError ReferenceError: Cannot access 'multiply' before initialization

// Function Expression
const multiply=function(a,b){
    return a*b;
};
// Invocation
const product=multiply(4,6);
console.log('function Expression - Product:',product);

// Arrow Function
const subtract=(c,d) => c-d;
// Invocation
const difference=subtract(8,3);
console.log('Arrow Function-Difference:',difference);


// ERROR HANDLING
try{
    // code that may throw an error
    throw new Error("An error");
}catch(error){
    // code to handle the error
    console.error(error.message);
}finally{
    // code that will run regardless of whether there was an error
    console.log("cleanup code");
}

// Difference between error and exception,