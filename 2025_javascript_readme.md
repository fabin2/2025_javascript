### JAVASCRIPT

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

**Hello world Javascript**<br>

<img src="images/hello_message.PNG" alt="hello_message_image" width="50%" height="20%"><br>

```js
document.write("Hello World"); // texts inside html element

alert("Hello world"); // alert window

console.log("Hello World"); // visible inside console
console.log(10+10);

document.write("<h1>JAVASCRIPT writing Html element<h1>") // creating html tag 
```

**VARIABLE & DATA TYPE**

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

**Truthy values and Falsy values** <br>

<img src="images/boolean_truefalsevalue1.PNG" alt="boolean_truefalsevalue1_image" width="40%" height="20%"><br>

Truthy values : `numbers > 0, 'abs' not empty string('a space inside a string is true as well'), {} objects`. <br>
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

// 3
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
