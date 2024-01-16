/* 
Whta this chapter is about?

asynk await >> promise chains >> callback hell
*/

/*
Sync in JS

synchronous :-
synchronus means the code runs in a particular sequence of intructions given in the program.Each instruction waits for the previous instruction to complete its execution
*/
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
/*
Due to synchronous programing, somthing imp intruction get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allow to execute next instructions immediately and doesn't block thw flow.
*/

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 4000); //timeout ;
//========================

// console.log("one");
// console.log("two");

// setTimeout(() => {
//         console.log("hello");
// }, 4000); //timeout ;

// console.log("three");
// console.log("four");

//===========================

/*
Callbacks  
Callbacks - a callback is a function passed as an argument to another function.
*/

// function sum(a,b) {
//     console.log(a + b);
// }

// function calculater(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// // calculater(2,3, sum); // 1
// calculater(2,3, (a, b)=>{
//     console.log(a + b);
// });// 2

// 2 =========================

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);

//========================
/*
Callback Hell
Callback hell- Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)

this style of programming becomes difficult to understand & manage.
*/

// function getData(dataId) {
//    setTimeout(()=>{
//     console.log("data", dataId);
//    },2000);
// }


//data1
//data2
//data3
//==============================

// function getData(dataId, getNextData) {

// //2s
//     setTimeout(()=>{
//      console.log("data", dataId);
//      if(getNextData){
//      getNextData();
//      }
//     },2000);
//  }

//  //Callback Hell:-
// getData(1, ()=> {
//     console.log("getting data2");
//     getData(2, ()=> {
//         console.log("getting data3");
//         getData(3, ()=> {
//             console.log("getting data4");
//             getData(4, );
//         });
//     });
// });

//==============================

/*
Promises:- 
Promise is for "eventual" completion of task. it is an object in JS.
it is a solution to callback hell.

let promise = new promise((resolve, reject)=>{...}) -:- function with 2 handlers

* resolve & reject are callbacks by JS

--A javascript Promise Object cal be:
* Pending: the is undifined
* Resolved: the result is a value (fulfiled) - // resolve(result)
* Rejected: the resut is am error object - // reject(error)

** Promise has state (pending,fulfilled) & some result (result for resolve & error for reject).
*/
 

// let promise = new Promise((resolve, reject)=>{
//     console.log("i am promise");
//     // resolve("success");
//     reject("some error occurred");
// });


// function getData(dataId, getNextData) {

//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData){
//             getNextData();
//             }
//            },5000);

//     });
//  }

//===============

/*
 Promises

 .then() & .catch()

 promise.than((res)=>{....});
 promise.catch((srr)=>{...});

*/

// const getPromise = () =>{
    
//     return new Promise((resolve, reject)=>{
//     console.log("i am promise");
//     resolve("success");
//     // reject("Network error");
   
//  });
 
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("reject",err);
// });

//===========================

//Promise chain :-
// example 1) 
//  function asycFunc() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
//  }

//  function asycFunc2() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
//  }

//  console.log("fetching data1....");
// new asycFunc().then((res)=>{
//     // console.log(res);
//     console.log("fetching data1...");
//      asycFunc2().then((res) =>{
//         // console.log(res);
//     });
    
//  });

//-------------------------
// same use of uper code ->

//  console.log("fetching data1....");
//  let p1 = new asycFunc();
//  p1.then((res)=>{
//     // console.log(res);
//     console.log("fetching data1...");
//     let p2 = asycFunc2();
//     p2.then((res) =>{
//         // console.log(res);
//     });
    
//  });

//---------------------------

// FIRST USE BUT DATA PRINT PARALALY ->
//  console.log("fetching data2....");
//  let p2 = new asycFunc2();
//  p2.then((res)=>{
//     console.log(res);
//  });

//==============================
// // Promise chain

// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error");
//             },2000);
//     });
//  }
// // Promise chain / Promise chaning->

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) =>{
//         return getData(3);
//     })
//     .then((res) =>{
//         console.log(res);
//     });


// same code different form- 
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     });
// });

// same code different form-
//----------------
// let p1 = getData(1);
// p1.then((res) => {

// });

/*
    Async-Await
    async function always returns a promise.

    async function myFunc(){....}

    await pauses the excution of its surrounding async function until the promise is settled. 
//--------

async await >> promise chain >> callback hell
 
*/

// async function hello() {
//     console.log("hello");
// }

//-------------------------------------

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

//  async function getWeatherData() {
//     await api(); //1st call
//     await api(); //2nd call
//  }

//=====================================
// Async-await

// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error");
//             },2000);
//     });
//  }

//  // Async-await:-
//  async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....");
//     await getData(5);
//     console.log("getting data6....");
//     await getData(6);
//  }


//===================================

/* IIFE : immediately invoked Function Expression
IIFE is a function that is called immediately as soon as it is defined.
( function () {
    // .....
})();

 (() => {
    // .....
 })();

 (async () => {
    // ......
 })();
*/

//IIFE - immediately invoked Function Expression

// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error");
//             },2000);
//     });
//  }

//  (async function () {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....");
//     await getData(5);
//     console.log("getting data6....");
//     await getData(6);
//  })();