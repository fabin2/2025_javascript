var myId1 = document.getElementById("id_1");
myId1.innerHTML = "Fabin riza";
myId1.style.color = "blue";

var myClass1 = document.getElementsByClassName("class_1");
console.log(myClass1);
myClass1[0].innerHTML = "Class [0]"; // html collection(2) 0 position from the group class_1 

var myTagName = document.getElementsByTagName("h2"); 
myTagName[0].innerHTML = "Tag name changed" // 0 positioned h2 element

// text from first input and onclick function to span
var myByname = document.getElementsByName("text_input")[0]; // Node list similar html collection list
var idSpan= document.getElementById("input_span");
function message(){
    idSpan.innerHTML = "Hi " + myByname.value;
}

// NodeList
let listItem = document.querySelectorAll('li');
listItem[0].parentNode.appendChild(document.createElement('li'));
listItem = document.querySelectorAll('li');
console.log(listItem);
console.log(listItem.length);

// creat element span and delete
let myspanCreated = document.createElement('span');
function creat(){
    myspanCreated.innerHTML = "Now click remove";
    document.body.appendChild(myspanCreated);
}
function remove(){
    myspanCreated.remove(); 
}