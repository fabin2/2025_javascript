// document.write("Hello World");
// alert("Hello world");
// console.log(10+10);

document.write("<h1>JAVASCRIPT writing Html element<h1>");
// document.write
// console.log

function sayHello(){
    document.write("Hello <br>");
}
function sayHi(){
    document.write("Hi <br>")
}
function add(num1, num2, callback){
    document.write(num1 + num2 + " ");
    callback();
}
let a = 80;
let b = 20;
add(a, b, sayHello);
add(50, 10, sayHi);
add(50, 10, function(){
    document.write("anonymous function");
});




// function constScope(){
//     const z = 10;
//  // const z = 20; ERROR Assignment to constant variable!
//     console.log(z);
//     const person = {name: "Fabin"};
//     person.name = "Aron"; // Allowed
//  // person = {name: "Bob"};
//     console.log(person); // {name : "Aron"}
// }
// constScope();

// function letScope (){
//     let y = 10;
//     if (true){
//         let y = 20;
//         console.log(y);
//     }
//     console.log(y);
// }
// letScope();

// function varScope (){
//     var x = 10;
//     console.log(x);
//     if (true){
//         var x = 20; // re-declared within 
//         console.log(x); // 20
//     }
//     console.log(x); // 20
// }
// varScope();

// var myObject2 = {
//     firstname: "Fabin",
//     lastname: "Riza",
//     Age: 40,
//     emai: "fabinriza1@yahoo.co.in"
// };
// for(key in myObject2){
//     document.write(myObject2[key]);
// }

// var myObject = new Object();
// myObject.firstname = 'Fabin';
// myObject.lastname = 'Riza';
// myObject.age = 25;
// myObject.fullname = function(){
//     return this.firstname + " " + this.lastname;
// }
// for (var key in myObject){
//     let value = (typeof myObject[key] === 'function') ? myObject[key]() : myObject[key];
//     document.write(key + " : " + value + "<br>");
// }

// var myObject = {
//     firstname: 'Fabin',
//     lastname: 'Riza',
//     age: 40,
//     email: 'fabinriza1@yahoo.co.in',
//     hobies: ['Run', 'Gym', 'Ride'],
//     living: {
//         'city': 'Strasbourg',
//         'country': 'France'
//     },
//     salary: function(){
//         return 200000;
//     },
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }
//  document.write(myObject.fullname());
//  document.write(myObject.living.city);

// var animalArray = ["Monkey", "Fish", "Tiger"];
// animalArray.forEach(loop);
// function loop(value, index) {
//     document.write(`${index} : ${value} <br>`);
// }

// var i = 10;
// do{
//     document.write(i + "<br>");
//     i--;
// }while (i >= 5);

// var i = 10;
// while(i >= 5){
//     document.write(i + "<br>");
//     i--;
// }

// function iterateArray(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(`Element at index `, i, `:`, arr[i], `<br>`);
//     }
// }
// const myArray = [10, 20, 30, 40, 50];
// iterateArray(myArray);

// for(let i=1; i<=5; i++){
//     document.write(i + "<br>");
// }

// function getStatus(code){
//     switch(code * 2){
//         case 200:
//             return "OK";
//         case 404:
//             return "Not Found";
//         default:
//             return "Unknown";
//     }
// }
// console.log(getStatus(100));

// let score = 85;
// let grade;
// switch(true){
//     case score >= 90:
//         grade = 'A';
//         break;
//     case score >= 80:
//         grade = 'B';
//         break;
//     default:
//         grade = c;
// }
// document.write(grade);

// let day = 2;
// let dayName;
// switch(day){
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Friday";
//         break;
//     default:
//         dayName = "Invalid day";
// }
// document.write(`${dayName}`);

// var a = "a";
// switch(a){
//     case "A":
//         document.write("Apple");
//         break;
//     case "B":
//         document.write("Butter");
//         break;
//     case "C":
//         document.write("Cat");
//         break;
//     default:
//         document.write("Nothing matching");
// }

// let myObject = {name:"John", age:30};
// document.write(`My object is: ${JSON.stringify(myObject)}`);
// let myArray = [1, 2, 3];
// document.write(`<br>My array is: ${myArray.join(", ")}`);

// var a = 1;
// var b = 2;
// var c = 3;
// if(a > 0){
//     document.write("Value is " + a + "<br>");
// }
// if(b > 0){
//     document.write(`Value is  ${b} <br>`);
// }
// if(c > 0){
//     document.write(`Valus is ${c} <br>`);
// }

// var a = 50;
// var b = 20;
// document.write(!(b == 10));

// var a = 20;
// var b = "20";
// document.write(a === b);
// console.log(5 + "10");

// var a = 10;
// a %= 4;
// document.write(a);

// var a = 10;
// a /= 4;
// document.write(a);

// let a, b, c, d, e;
// a, b, c, d, e = 0, "", undefined, null, NaN;

// let data = 'DataPassing';
// if(!data){
//     console.log(`Sorry! no records`);
// }else{
//     console.log(`Do something   ${data}`);
// }

// a = 0;
// b = "";
// c = undefined;
// d = null;
// e = NaN;
// if(!a && !b && !c && !d && !e){
//     console.log("a: " +a, "b: " +b, "c: " +c, "d: " +d, "e: " +e);
// }else{
//     console.log("one of this condition is turning false here!")
// }
// a = 0;
// b = "";
// c = undefined;
// d = null;
// e = NaN;
// if(!a){
//     console.log("a: " +a);
// }
// if(!b){
//     console.log("b: " +b);
// }
// if(!c){
//     console.log("c: " +c);
// }
// if(!d){
//     console.log("d: " +d);
// }
// if(!e){
//     console.log("f: " +e);
// }

// let fruitName = 'Apple';
// if(fruitName){
//     console.log('Fruit name available');
// }else{
//     console.log('No fruit name available');
// }

// const chocolates = 0;
// if(chocolates){
//     console.log('Yes I have chocolates');
// }else{
//     console.log('No I dont have anything');
// }

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean(2));
// console.log(Boolean('abs'));
// console.log(Boolean({}));

/*
// String
var person = "John ";
document.write(person + "<br>");
let person1 = "Smith";
document.write(person1)
document.write(typeof person1); //string

const pi = 3.14;
document.write(pi);
// Number
var number1 = 10;
var number2 = 20.255;
// document.write( typeof number1+number2); //number

// Boolean
var js = true;
var html = false;
console.log(typeof js); //boolean
console.log(typeof html); //boolean

// Undefined
var test1;
console.log(typeof test1); // undefined

//Null
var test2 = null; // empty value assigned
console.log(typeof test2); // object
console.log(test2 === undefined); // false
console.log(test2 == undefined); // true
*/