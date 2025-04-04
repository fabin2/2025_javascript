var myId1 = document.getElementById("id_1");
myId1.innerHTML = "Fabin riza";
myId1.style.color = "blue";

var myClass1 = document.getElementsByClassName("class_1");
console.log(myClass1);
myClass1[0].innerHTML = "Class [0]"; // html collection(2) 0 position from the group class_1 

var myTagName = document.getElementsByTagName("h2"); 
myTagName[0].innerHTML = "Tag name changed" // 0 positioned h2 element

// // text from first input and onclick function to span
var myByname = document.getElementsByName("text_input")[0]; // Node list similar html collection list
var idSpan= document.getElementById("input_span");
function message(){
    idSpan.innerHTML = "Hi " + myByname.value;
}

// // NodeList
let listItem = document.querySelectorAll('li');
listItem[0].parentNode.appendChild(document.createElement('li'));
listItem = document.querySelectorAll('li');
console.log(listItem);
console.log(listItem.length);

// // Creat element span and delete
let myspanCreated = document.createElement('span');
let test = document.getElementById('myspan');
function creat(){
    myspanCreated.innerHTML = "Now click remove";
    if(test){
        test.appendChild(myspanCreated);
    }
}
function remove(){
    myspanCreated.remove(); 
}

// // Creat Events
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

// // RETURN!
function calculateFactorial(number){
    if(isNaN(number) || number < 0){
        return 'Invalid input !'
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

// Return: arrays or objects are used to return multiple value
function getData(){
    let firstname = 'Fabin ',
    lastname = 'Riza ',
    age = '40 ',
    occupation = 'Developpeur '
    return {firstname, lastname, age, occupation}
}
const {firstname, lastname, age, occupation} = getData();
document.write(`F : ${firstname} L : ${lastname} A : ${age} W : ${occupation}`);

// Const Let modify and reassignment
const myArray = [];
const myObject = {};
myArray.push(1);
myObject.name = "Fabin";
//// myArray = [2,3]; error
//// myObject = {name : "Fabin"} error
let myArray2 = [];
let myObject2 = {};
myArray2.push(1);
myArray2 = [2,3];
myObject2.city = "Strasbourg";
myObject2 = {country : "France"}
console.log(myArray2);
console.log(myObject2);

// Object Oriented
let employee = {
    name: "Fabin",
    position: "Developpeur",
    salary: 5000,
    getSalary: function(){
        document.write("Salary of "+this.name+" is "+this.salary+ " as a "+this.position);
    }
}
employee.getSalary();

// CLASS is like a blueprint 
class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        document.write(`CLASS I am ${this.name} works as ${this.position} and my salary is ${this.salary} <br>`);
    }
}
let emp1 = new Employee("Alex", "Accountant", 4000);
let emp2 = new Employee("Lucy", "Chef de projet", 5000);
// console.log(emp1, emp2);
// document.write(emp2.salary);
emp2.getSalary();

// Static method
class MathUtils {
    static add(x, y){
        return x + y;
    }
}
const result1 = MathUtils.add(5,10);
console.log(result1);

// // inheritance
class EmployeeE {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getInfos(){
        document.write(`INHERITANCE Name : ${this.name} Position : ${this.position} Salary : ${this.salary}`)
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
console.log(mgr1);
mgr1.getInfos();
// mgr1.myStaticmethod();
Manager.myStaticmethod();

