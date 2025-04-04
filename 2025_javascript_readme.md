# JAVASCRIPT 

```JS
<head>
    <script>
        document.write("Hello World")
    </script>
</head>
// inside head tag or in the body, at the end for loading 
<body>
    <script>
        document.write("Hello World")
    </script>
</body>
<body>
     <script src="/script.js"> /* file external */
    </script>
</body>
```

Hello world Javascript<br>

<img src="images/hello_message.PNG" alt="hello_message_image" width="50%" height="20%"><br>

```js
document.write("Hello World"); // texts inside html element

alert("Hello world"); // alert window

console.log("Hello World"); // visible inside console
console.log(10+10);

document.write("<h1>JAVASCRIPT writing Html element<h1>") // creating html tag 
```

## VARIABLE & DATA TYPE

```js
// Variable string
var person = "John ";
let person1 = "Smith";
document.write(typeof person1); //string

const pi = 3.14; // constant value cannot assign again
document.write(pi); 
pi = 3;   //error
document.write(pi); 

var person = "John  + "<br>" ";
var person = " Wayne"; // changing value
document.write(person); // Wayne

var a = 10, b = 20; // two variables
document.write(a+b);

// Number
var number1 = 10;
var number2 = 20.255;
document.write( typeof number1+number2); //number

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
console.log(typeof test2); // object { }
console.log(test2 === undefined); // false
console.log(test2 == undefined); // true
```
## DIFFERENCES `VAR LET CONST`
**SCOPE** `var` : function or global | `let, const` : block<br>
**REASSIGNEMENT** `var, let` : allowed | `const` : not allowed<br>
**REDECLARATION** `var` : allowed | `let, const` : not allowed in the same scope<br>
**HOISTING** `var` : hoisted and intialized to `undefined` | `let, const` : Hoisted but not initialized<br>
In modern JavaScript, it's generally recommended to use **const** by default, and **let** when you know a variable's value will change. Avoid using **var** unless you have a specific reason to do so.<br>
<br>

**`var`**: Function-scoped or globally-scoped. Can be re-declared and re-assigned. Hoisted (declared before the code is executed).<br>

```js
// VAR value changing
function varScope (){
    var x = 10; // var
    console.log(x);
    if (true){
        var x = 20; // re-declared within 
        console.log(x); // 20
    }
    console.log(x); // 20
}
varScope();
```
**`let`**: Block-scoped (within { } blocks). Can be re-assigned, but not re-declared in the same scope. Hoisted, but not initialized (accessing before declaration results in an error).<br>

```js
// LET block sope and outer scope
function letScope (){
    let y = 10;
    if (true){
        let y = 20; // block scope, different variable
        console.log(y); // 20
    }
    console.log(y); // 10 from the outer scope
}
letScope();
```
**`const`**: Block-scoped. Cannot be re-assigned or re-declared. Hoisted, but not initialized. When used with objects or arrays, the contents can be modified, but the variable cannot be re-assigned to a new object or array.<br>

```js
// CONST
function constScope(){
    const z = 10;
 // const z = 20; ERROR Assignment to constant variable!
    console.log(z);
    const person = {name: "Fabin"};
    person.name = "Aron"; // Allowed
 // person = {name: "Bob"}; ERROR Assignment to constant variable!
    console.log(person); // {name : "Aron"}
}
constScope();
```

**CONST LET** : modifying and reassignment Allowed and Error

```js
// 1
const myArray = [];
const myObject = {};
myArray.push(1); // [1] modifying Allowed
myObject.name = "Fabin"; // {name : "Fabin"} modifying Allowed
myArray = [2, 3]; // Error reassignment
myObject = {age: 40}; // Error reassignment
console.log(myArray);
console.log(myObject);

//2
let myArray2 = [];
let myObject2 = {};
myArray2.push(2); // [2] modifying Allowed
myObject2.city = "Strasbourg"; // {city : "Strasbourg"} modifying Allowed
myArray2 = [3, 4]; // [3,4] Allowed Reassignment
myObject2 = {country : "France"} // {country : "France"} Allowed Reassignment
console.log(myArray2);
console.log(myObject2);
```

## Truthy values and Falsy values <br>

<img src="images/boolean_truefalsevalue1.PNG" alt="boolean_truefalsevalue1_image" width="40%" height="20%"><br>

Truthy values : `numbers > 0, 'abs' not empty string('a space inside a string is true as well'), {} objects, arrays[], function(){}, date()`. <br>
Falsy values : `0, '', undefined, null, Nan`. <br>

```js
// Boolean false values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Boolean true values
console.log(Boolean(2));
console.log(Boolean('abs'));
console.log(Boolean({}));
```
In a condition always return a boolean value true or false.
```js
// 1
const chocolates = 0;
if(chocolates){
    console.log('Yes I have chocolates');
}else{
    console.log('No I dont have anything'); // if condition false so this runs
}

// 2
let fruitName;
if(fruitName){
    console.log('Fruit name available');
}else{
    console.log('No fruit name available'); // if condition false so this runs
}

// 2.1
let fruitName = 'Apple'; // codition is true here, if runs
```
**Not ! symbole** converting false values into true for execution. <br>
<img src="images/boolean_falsevalueto_true.PNG" alt="boolean_falsevalueto_true_image" width="60%" height="20%"><br>

```js
// 1
a = 0;
b = "";
c = undefined;
d = null;
e = NaN;
if(!a && !b && !c && !d && !e){ // conditions are true
    console.log("a: " +a, "b: " +b, "c: " +c, "d: " +d, "e: " +e);
}else{
    console.log("Else one of this condition is turning false here!")
}

// 2
let data = 'DataPassing';
if(!data){
    console.log(`Sorry! no records`);
}else{
    console.log(`Do something ${data}`);  // execute here, condition False
}
```

## Undefined - Null

```js
let a;
let b = null;

myFunction(a); // calls the myFunction with the value of a, which is undefined.
myFunction(b); // calls the myFunction with the value of b, which is null.
function myFunction(DefualtVal){
    console.log(DefualtVal);
}

// 2
myFunction(a); // 10
myFunction(b); // null
function myFunction(DefualtVal = 10){
    console.log(DefualtVal);
}
```

## OPERATOR <br>
`Arithmetic Operators` : <br>
**`+`** Addition <br>
**`-`** Substraction <br>
**`*`** Multiplication <br>
**`/`** Division <br>
**`%`** Modulus <br>
**`++`** Increment <br>
**`--`** Decrement <br>
**`**`** Exponentiation <br>

```js
var a = 10;
var b = 20;
document.write(a+b); // 30
document.write(a-b); // -20
document.write(a/b); // 0.5
document.write(a*b); // 200
document.write(10/3); // 1 remainder
document.write(20/3); // 2 remainder

var a = 20;
a++; // a = a+1;
document.write(a); // 21

var a = 20;
a--; // a-1
document.write(a); // 19

document.write(3 ** 2); // 9 squre
document.write(3 ** 3); // 27 cube
```

## `Assignment Operators` : <br>
`=` Assign: **x = 10** <br>
`+=` Add and Assign:  **x += 4** -> x= x + 4 <br>
`-=` Substract and Assign:  **x -= 4** -> x= x - 4 <br>
`*=` Multiply and Assign:  **x `*=` 4** -> x= x * 4 <br>
`/=` Divide and Assign:  **x /= 4** -> x= x / 4 <br>
`%=` Modulus and Assign:  **x %= 4** -> x= x % 4 <br>

```js
// +=
var a = 10;
var b = a += 4;
document.write(b); // 14

// *=
var a = 10;
var b = a *= 4;
console.log(b); // 40

// /=
var a = 10;
a /= 4;
document.write(a); // 2.5

// %=
var a = 10;
a %= 4;
document.write(a); // 2 remainder
```

## `Comarison Operators` : <br>
`==` Equal to: **a == b** <br>
`===` Identical: **a === b** <br>
`!=` Not equal to: **a != b** <br>
`>` Greater than: **a > b** <br>
`<` Less than: **a < b** <br>
`>=` Greater than or equal to: **a >= b** <br>
`<=` Less than or equal to: **a <= b** <br>

```js
/*  == Loose Equality: Checks if values are equal (may convert data types).
    === Strict Equality: Checks if values and data types are equal (no conversion).*/

// ==
var a = 20;
var b = 10;
document.write(a == b); // false (b=20 //true)

// === datatype
var a = 20;
var b = "20";
document.write(a === b); // false (datatype b is a string but a==b true)

var a = 10;
var b = 20;
document.write(a != b); // true
document.write(a > b); // false
document.write(a >= b); // false
```
## Type Coercion <br>
`String Coercion`: It occurs when the string is combined with the non-string using (+). JavaScript converts numbers and booleans into strings before concatenation.<br>
`Number Coercion`: JavaScript converts the string into a number before operating.<br>
`Boolean Coercion`: JavaScript treats the true value as ‘1’ and the false value as ‘0’.<br>
```js
// String Coercion
console.log("5" + 2); // "52"
console.log("5" + true); // "5true"

// Number Coercion
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("10" / "2");  // 5

// Boolean Coercion
console.log(Boolean("hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

// ==
console.log(0 == "0"); // true
console.log(0 == false); // true
console.log(" " + 0 == 0); // true

// Null
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null + 1); // 1

// NaN : NaN is not equal to itself, so the isNaN() function is the preferred way to check for NaN
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
```
Best Practices
```js
// Best Practices
console.log(5 === "5"); // false

console.log(Number("123")); // 123

// only non-null and defined values are considered valid.
if(value !== null && value !== undefined){
    console.log("Value exist");
}

console.log(parseInt("42px")); // 42

console.log(parseFloat("3.14abc")); // 3.14

// check if a value is NaN instead of comparing it directly
if(isNan(value)){
    console.log("Invalid number");
}
```

## LOGICAL OPERATOR <br>
`&&` Logical **and**: True -> **Both statements are true** <br>
`||` Logical **or**: True -> **One of the statement is true** <br>
`!` Logical **not**: **Opposite result** <br>

```js
// && :both or many conditions
var a = 10;
var b = 20;
document.write(a == 10 && b == 20); // true document.write(true)

// || pipe or OR :any of one codition true check
var a = 50;
var b = 20;
document.write(a == 10 || b == 20); // true

// ! Opposite result
var a = 50;
var b = 20;
document.write(!(b == 20)); // false 
```
## IF ELSE conditional statement <br>
Once an if or else if condition is true, the remaining conditions in the chain are not evaluated. After a true condition is found, the rest of the else if and else blocks are skipped entirely.
```js
if (condition true) {
    execute;
    }
```
```js
// 1
var a = 0;
if(a > 0){
    document.write("Positive number");
}else if(a < 0){
    document.write("Negative number");
}else{
    document.write("Its Zero");
}

// 2 if if if every condition
var a = 1;
var b = 2;
var c = 3;

if(a > 0){
    document.write("Value is " + a + "<br>"); // + string concatenation
}
if(b > 0){
    document.write(`Value is  ${b} <br>`); // ` template literals
}
if(c > 0){
    document.write(`Valus is ${c} <br>`);
}
```

## SWITCH <br>
Each `case label` got specific value. If the `expression's value is strictly equal (===)` to value1, the code will be executed.<br>
If omit `break`, the code will "fall through" to the next case, even if its value doesn't match the expression (unless you intentionally want fall-through behavior) <br>
`default` label is optional. It specifies the code to execute if the expression doesn't match any of the case values. <br>

```js
switch (expression){
    case value1:
        code 1; // execute if expression === value1
        break;
    case value2:
        code 2;
        break;
    case value3:
        code 3;
        break;
    default:
        code default;
        break;
}
```
```js
// 1
var a = "a";

switch(a){
    case "A":
        document.write("Apple"); // "A" Apple 
        break;
    case "B":
        document.write("Butter");
        break;
    case "C":
        document.write("Cat");
        break;
    default:
        document.write("Nothing matching"); // "a" false
}

// 2
let day = 2;
let dayName; //

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Friday";
        break;
    default:
        dayName = "Invalid day";
}
document.write(`${dayName}`); // Friday

// 3 true boolean
let score = 85;
let grade;

switch(true){
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    default:
        grade = c;
}
document.write(grade); // B

// 4 using function
function getStatus(code){
    switch(code * 2){
        case 200:
            return "OK";
        case 404:
            return "Not Found";
        default:
            return "Unknown";
    }
}
document.write(getStatus(100)); // OK
```

## LOOP
Run the same code over and over again, each time with a different value. <br>
`for` - loops through a block of code a number of times. <br>
`while` - loops through a block of code while a specified condition is true. <br>
`do/while` - also loops through a block of code while a specified condition is true. <br>
`foreach` - 
`for/in` - loops through the properties of an object. <br>
`for/of` - loops through the values of an iterable object. <br>

```js
for (initialization; condition; update){
    code to be executed;
}
```
```js
// for
for(let i=1; i<=5; i++){
    document.write(i + "<br>"); // 12345
}
```
```js
// while
var i = 10;
while(i >= 5){
    document.write(i + "<br>"); // 10 9 8 7 6 5
    i--;
}
```
```js
// do while
var i = 10;
do{
    document.write(i + "<br>"); // 10 9 8 7 6 5
    i--;
}while (i >= 5);
```

## OBJECT
**FOR IN** <br>
for...in is designed for iterating over object properties, not arrays (although it can be used with arrays, it's generally not recommended). <br>

```js
for (var keyvalue in object){
    code to be executed
}
```
```js
var myObject2 = {
    firstname: "Fabin",
    lastname: "Riza",
    Age: 40,
    emai: "fabinriza1@yahoo.co.in"
};
for(key in myObject2){
    document.write(myObject2[key]); // Fabin bla ....!
}
```
```js
// function inside
var myObject = {
    firstname: 'Fabin',
    lastname: 'Riza',
    age: 40,
    email: 'fabinriza1@yahoo.co.in',
    hobies: ['Run', 'Gym', 'Ride'],
    living: {
        'city': 'Strasbourg',
        'country': 'France'
    },
    salary: function(){
        return 200000;
    },
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
};
 document.write(myObject.fullname()); // Fabin Riza
 document.write(myObject.living.city); // Strasbourg
```
another way to make object
```js
var person = new Object();
person.firstname = 'Fabin';
person.lastname = 'Riza';
person.age = 25;
person.fullname = function(){
    return this.firstname + " " + this.lastname;
};
document.write(person.firstname); // Fabin
document.write(person.fullname()); // Fabin RIza
```
```js
// function checked, if else and Ternery
var myObject = new Object();
myObject.firstname = 'Fabin';
myObject.lastname = 'Riza';
myObject.age = 25;
myObject.fullname = function(){
    return this.firstname + " " + this.lastname;
};
for(var key in myObject){
    if(typeof myObject[key] === 'function'){
        document.write(key +" : "+ myObject[key]() + "<br>");
    }else{
        document.write(key +" : "+ myObject[key] + "<br>");
    }
}

// 2 
for (var key in myObject){
    let value = (typeof myObject[key] === 'function') ? myObject[key]() : myObject[key];
    document.write(key + " : " + value + "<br>");
}
```
## FUNCTION <br>
```js
function name(parameter){
}
name(argument);
```
**...rest parameter**<br>
Rest parameter `(...name)`: collects idefinite arguments into an array, must be the last parameter. Useful when argument count is unknown.
```js
function calcultaCart(...num){
    return num;
}
document.write(calcultaCart(20,40,15,24));
```
```js
// default value in parameter and overwriting
function hello(firstname = "defaultvalue1", lastname = "defualtvalue2"){
    document.write("Hi " +firstname+ " " +lastname)
}
hello(); // without values, Hi defualtvalue1...
hello("fabin", "riza"); // Hi Fab.... overwriting
```
```js
// return
function sum(num1, num2) {
    return num1+ num2;
}
var resultFunction = sum(1,2); // value returned to this function and stored in a variable
document.write(resultFunction);  // 3

// 2
function sum(math, econ, comp){
    let sum = math + econ + comp;
    return sum
}
function percentage(total){
    let percent = total/300 * 100;
    document.write(percent + " %"); // 76.6 %
}
let totalMark = sum(80, 70, 80);
percentage(totalMark);
```

## Return
The return value can be of any data type, including numbers, strings, objects, arrays or even functions.
```js
let res1 = fun(10,20);
function fun(x,y){
    x+y;
}
console.log(res1); // undefined 

// return
let res1 = fun(10,20);
function fun(x,y){
    return x+y;
}
console.log(res1); // 30 !!!
```

```js
// return
function calculateFactorial(number){
    if(isNaN(number) || number < 0){
        return 'Invalid input !' // if true result = Invalid input !
    }
    if(number === 0 || number === 1){
        return 1;
    }
    let factorial = 1;
    for(let i=2; i<=number; i++){
        factorial *= i;
    }
    return factorial;
}
const result = calculateFactorial(4); // 4!=4∗3∗2∗1=24
console.log(result);
```
```js
// return
let res = fun();
function fun(){
    let i = 1;
    while(i){
        document.write(i+"<br>"); //1 2 3 4
        if(i === 4){
            return;
        }
        document.write(i+"<br>"); //1 2 3
        i++
    }
    document.write("Hello"); // return avoid this execution 
}
```

```js
// RETURN: arrays or objects are used to return MULTIPLE VALUE
function getData(){
    let firstname = 'Fabin ',
    lastname = 'Riza ',
    age ='40 ',
    occupation = 'Developpeur '

    return [firstname, lastname, age, occupation] // return multiple values
}
const [firstname, lastname, age, occupation] = getData();  // values 
document.write(`F : ${firstname} L : ${lastname} A : ${age} W : ${occupation}`);

```

## Callback
```JS
// 3 callback included anonymous 
// 100 Hello 60 HI 60 blabla
function sayHello(){
    document.write("Hello <br>");
}
function sayHi(){
    document.write("Hi <br>")
}
function add(num1, num2, callback){     // callback
    document.write(num1 + num2 + " ");
    callback();
}
let a = 80;
let b = 20;
add(a, b, sayHello); // 100 Hello
add(50, 10, sayHi); // 60 HI 
add(50, 10, function(){
    document.write("anonymous function"); // 60 blabla
});
```

## ARRAY <br>
```js
var animal = ["Elephant", "Lion", "Cat"];
animal [0] = "Dog"; // replaced index 0
animal [3] = "Fish";
animal.push("Fox", "Cheetah")
animal.shift(); // delete first element
animal.pop(); // delete last element
animal.sort(); // alphabet order/ numerical
animal.splice(2, 1); // from index 2 remove 1 element (position, numbers of values removed)
animal.splice(1, 0, "Crow", "Eagle"); // adding element from 1
animal.splice(4); // from index 4 remove values till the end 

 for(var i=0; i<animal.length; i++){
     document.write(animal[i] +"<br>"); // index number to print value
 }
 console.log(animal); // array(length:4) 0:"Cat" 1:"Crow"
```
**FOR FOREACH FOROF SPREAD**
```js
let myArray = ['a','b','c'];
for (let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}
myArray.forEach(element => {
    console.log(element);
})
for(const element of myArray) {
    console.log(element);
}
console.log( ...myArray); // SPREAD prints all the elements in oneline
```
**FOREACH**
```js
// foreach value
var animalArray = ["Monkey", "Fish", "Tiger"];
animalArray.forEach(function(value) {
    document.write(`${value} <br>`); // Monkey Fish Tiger
});

// foreach value index
animalArray.forEach(function(arrayValue, arrayIndex) {
    document.write(`${arrayIndex} : ${arrayValue} <br>`); // 0: Monkey 1: Fish 2: Tiger
});

// foreach outside function
animalArray.forEach(loop);
function loop(arrayValue, arrayIndex) {
    document.write(`${arrayIndex} : ${arrayValue} <br>`);
}
```

`JSON.stringify( )`
```js
let myArray = ['a',null,undefined, true, false, 'c'];
document.write(JSON.stringify(myArray)); // ["a",null,null,true,false,"c"]
```
**STRING**
```js
let text = "FABIN RIZA";
document.write(text.length); // 10
document.write(text[0]); // F
document.write(text.charAt(1)); // A
document.write(text.replace("I", "i")); 
document.write(text.slice(2,5)) // BIN
console.log(mytext.split(" ")); // space " ", array(2) ["FABIN" "RIZA"]
console.log(mytext.split("")); // no space "", array(10) ["F""" "space" """A"]
```

Split and array destructuring
```js
const dateString = "26-03-2025";
const [day, month, year] = dateString.split("-");
console.log(` Date:${day} M:${month} Y:${year}`); // Date:26 M:03 Y:2025
```
MATH object
```js
let a = 100;
document.write(Math.sqrt(a)); // 10 square root
document.write(Math.abs(a)); // absolute, negative value to absolute 
document.write(Math.min(10, 3, 20, 30)); // 3
document.write(Math.max(10, 3, 20, 30)); // 30
document.write(Math.pow(2,10)); // 4 POWER (squre, qube)1024
document.write(Math.floor(6.9)); // 6
document.write(Math.ceil(6.1)); // 7
document.write(Math.round(6.5)); // Round 6.4=6 6.5=7
document.write(Math.random()); // 0 to 1 random numbers 0.1225blabla

let r = Math.random();
let rounded = Math.floor(r*10);
document.write(rounded); // 1 to 10 any random numbers
```

## `D O M`  :Document object model

The HTML DOM is an API that represents web pages as objects. Browsers create it when loading pages, allowing JavaScript to manipulate HTML elements, attributes, CSS and events.
```html
<!-- DOM TREE hierarchy 
parent child relationships between elements
each element is a node in the tree
Text content is also represented as nodes
Attributes: The id="myDiv" is an attribute of the <div> element.
DOM represents the page in browser memory, so JS can access and manipulate all of these nodes
-->
Document
  |
  <html>
  |   |
  |   <head>
  |   |   |
  |   |   <title>
  |   |       |
  |   |       "My Web Page" (text node)
  |   |
  |   <body>
  |       |
  |       <h1>
  |       |   |
  |       |   "Welcome!" (text node)
  |       |
  |       <p>
  |       |   |
  |       |   "This is a paragraph." (text node)
  |       |
  |       <div id="myDiv">
  |           |
  |           <ul>
  |               |
  |               <li>
  |               |   |
  |               |   "Item 1" (text node)
  |               |
  |               <li>
  |                   |
  |                   "Item 2" (text node)
```

Accessing Document object

```js
getElementById() - Element Object
getElementByName() - Html Collection
getElementByTagName() - Html Collection
getElementByClassName()
// QuerySelectorAll
css Selectors()
document.querySelector() - Element Object
document.querySelectorAll() - Node List
```

```js
// Adding content in to h1
var myH1 = document.getElementById("id_h1");
myH1.innerHTML = "Fabin riza";
myH1.style.color = "blue";

// Accessing with class name, class group - html collection(2) like array. Represented with index number
var myClass1 = document.getElementsByClassName("class_1");
console.log(myClass1);
myClass1[0].innerHTML = "Class [0]"; // 0 position from the group class_1 

// HTML any element group byTagname
var myTagName = document.getElementsByTagName("h2"); 
myTagName[0].innerHTML = "Tag name changed" // 0 positioned h2 element

// ByName: text from first input and onclick function to span
var myByname = document.getElementsByName("text_input")[0]; // Node list similar html collection list
var idSpan= document.getElementById("input_span");
function message(){
    idSpan.innerHTML = "Hi " + myByname.value;
}
```
**HtmlCollection vs NodeList** <br>

**`Html collection`** is collection of element of nodes only : can contain only one type of node, and that one type of node is element node. Difference : Html collection can be accessed by their name, by the id or by the index number within that collection.<br>
**`Node List`** is collection of nodes only : NodeList can contain any Node Type. That means within its collection it can have text nodes, comment nodes, element nodes etc. Difference : A Node list item can only be accessed by their index number<br>
Html collections are live and node list items are typically static.

```js
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

// 1. HTMLCollection : live
let listItem = document.getElementsByTagName('li');
console.log(listItem); // HTMLCollection(3) [li, li, li]
console.log(listItem.length); // 3

listItem[0].parentNode.appendChild(document.createElement('li')); // one li added and its Live
console.log(listItem); // HTMLCollection(4) [li, li, li, li]
console.log(listItem.length); // 4

// 2. NodeList querySelectorAll : static
let listItem = document.querySelectorAll('li');
console.log(listItem); // NodeList(3) [li, li, li]
console.log(listItem.length); // 3

listItem[0].parentNode.appendChild(document.createElement('li')); //its still static at the console but on browser ok
console.log(listItem); // NodeList(3) [li, li, li]
console.log(listItem.length); // 3

// Updated NodeList
let listItem = document.querySelectorAll('li'); // 3 times li
listItem[0].parentNode.appendChild(document.createElement('li')); // 1 li added
listItem = document.querySelectorAll('li'); // again calling for update
console.log(listItem); // NodeList(4) [li, li, li, li]
console.log(listItem.length); // 4
```

**Creat and Delete**

```js
/* <input type="button" value="Create" onclick="creat()">
<input type="button" value="Remove" onclick="remove()"></input>  */


// creat element span and delete
let myspanCreated = document.createElement('span');
function creat(){
    myspanCreated.innerHTML = "Now click remove";
    document.body.appendChild(myspanCreated);
}
function remove(){
    myspanCreated.remove(); 
}
```

**Creat Events**

```js
/* <span id="eventid">Create Events</span>
<input type="button" id="eventbutton" value="Color"> */

// Creat Events
let myEvent = document.getElementById('eventid');
let myEventbutton = document.getElementById('eventbutton');
myEvent.addEventListener('mouseover', changeBackground);
myEventbutton.addEventListener('click', changeColor);
function changeBackground(){
    myEvent.style.backgroundColor = 'Red';
}
function changeColor(){
    myEvent.style.color = 'yellow';
}
```

## **`Object Oriented`**

```js
let employee = {
    name: "Fabin",
    position: "Developpeur",
    salary: 5000,
    getSalary: function(){
        document.write("Salary of "+this.name+" is "+this.salary+ " as a "+this.position);
    }
}
employee.getSalary(); // Salary of Fabin is 5000 as a Developpeur
```

## **CLASS** methods objects (instances) **: OOP**

```js
class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        document.write(`I am ${this.name} works as ${this.position} and my salary is ${this.salary}`);
    }
}
let emp1 = new Employee("Alex", "Accountant", 4000); // object
let emp2 = new Employee("Lucy", "Chef de projet", 6000);

document.write(emp2.salary); // 6000
emp2.getSalary(); // I am Lucy works as Chef de projet and my salary is 6000
```
**inheritance**

1. mgr1 = new Manager(...): Creates a Manager object, calling the EmployeeE constructor.<br>
2. constructor(...): EmployeeE's constructor sets name, position, and salary.<br>
3. mgr1.getInfos(): Executes EmployeeE's getInfos() method.<br>
4. document.write(...): Displays the employee's info.<br>

```js
// Inheritance
class EmployeeE {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getInfos(){
        document.write(`INHERITANCE Name : ${this.name} Position : ${this.position} Salary : ${this.salary}`)
    }
}
class Manager extends EmployeeE {
}
class Supervisor extends EmployeeE{
}
let mgr1 = new Manager("Schmidt", "HR Manager", 6000);

mgr1.getInfos(); // INHERITANCE Name : Schmidt Position : HR Manager Salary : 6000
```

```js
// Static method 
class MathUtils {
    static add(x, y){
        return x + y;
    }
}
const result = MathUtils.add(5,10);
console.log(result); // 15
```

```js
// Static method 
class EmployeeE {
    constructor(name, position, salary){
        ...
    }
    getInfos(){
    }
    static myStaticmethod(){
        console.log("MY Static Function");
    }
}
class Manager extends EmployeeE {
}
class Supervisor extends EmployeeE{
}
let mgr1 = new Manager("Schmidt", "HR Manager", 6000);
mgr1.myStaticmethod(); // ERROR ! we cant access making object
Manager.myStaticmethod(); // Access with the class name EmployeeE or Manager
```

Different types of methods in the Class
1. Consturctor method : Initializes object instances.
2. Prototype method : Used for inheritance and sharing methods.
3. Static methods : Methods that belong to the class itself.
4. Instance methods : Functions that belong to the instance of the class.
5. Getters / Setters : Control access to properties.
6. Class Fields :  initialize instance properties.

CHECK : 
1. Object litral { }
2. Constructor function
3. Prototypes
4. Classes
5. Instances (new, this)

CHECK :
Four pillars : 
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism