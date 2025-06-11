// 8. Arrow function
let message = ()=> console.log("Arrow funtion");
message();
// argument parameters
let sum = (x,y) => console.log(x+y);
sum(10, 30);
// More than one statement with curly braces
let number = (num) => {
    if (num>0){
        console.log("Positive");
    }else{
        console.log("Negetive");
    }
}
number(-10);


////7. Anonymous function
// let message = function (){
//     console.log("Good morning");
// }
// message();
// //2.anonymous callback
// setTimeout(function(){
//     console.log("this runs after 3 seconds");
// }, 3000);
// //3.named function as a callback
// function displayMessage(){
//     console.log("Time's up!")
// }
// setTimeout(displayMessage, 1000);

////6. Default function parameters
// function add(a=10, b=20){
//     console.log(a+b);
// }
// add();
// add(100);
// add(100, 200);

//2
// function signin(user = "Guest"){
//     console.log("Welcome " + user);
// }
// signin();
// signin("Peter");

// 5.
// let c1;
// c1 = "Python";
// console.log(c1);

////4. update let const var
// const c1 = "HTML";
// c1 = "Python";
// console.log(c1);

//// 3. bock scope
// function message(){
//     if(true){
//         var a1 = "HTML"; // Function scoped
//         let a2 = "CSS"; // Block scoped
//         const a3 = "JavaScript"; // Block scoped
//         console.log(a1); // Ok
//         console.log(a2); // Ok
//         console.log(a3); // Ok
//     }
//     console.log(a1); // OK HTML Function scoped
//     // console.log(a2); // NOTok Block scoped
//     // console.log(a3); // NOTok Block scoped
// }
// message();

// // 2. Global Scope, Global varible
// function message(){
//     var a1 = "HTML"; 
//     let a2 = "CSS"; 
//     const a3 = "JavaScript"; 
//     if(true){
//         console.log(a1);
//         console.log(a2);
//         console.log(a3);
//     }
//     console.log(a1); 
//     console.log(a2); 
//     console.log(a3); 
// }
// message();

// // 1. Global Scope / Global varible
// var a1 = "HTML";
// let a2 = "CSS";
// const a3 = "JavaScript";
// function message(){     // block scope
//     console.log(a1);
//     console.log(a2);
//     console.log(a3);
// }
// message();

