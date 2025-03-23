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
