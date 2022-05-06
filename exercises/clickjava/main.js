
// EXAMPLE 1: Click Me
// let clickDiv = document.querySelector(".clickDiv");

// clickDiv.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console
//   console.log(event.pageX);
// });

// EXAMPLE 2: Click Me If Statement
// let clickDiv = document.querySelector(".clickDiv");

// clickDiv.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console
//   console.log(event.pageX);


// //create an if statement 
//   if (event.pageX < 100) {
//     clickDiv.style.backgroundColor = "magenta";
//   } else {
//     clickDiv.style.backgroundColor = "blue";
//   }
// });

// EXAMPLE 3: Click Me If Statement with Loop
// select all not just one
// let clickDiv = document.querySelectorAll(".example");


// //for each loop on the clickDiv array
// clickDiv.forEach((div) => {
//   //for each div add the event listner click and a function
//   div.addEventListener("click", function(event){
// //log a phrase in the console
//   console.log("Click!");
// //log the event in the console 
//   console.log(event);
// //use dot notation to grab a part of the event and log it into the console.
// // pageY is where in the vertical space you clicked
//   console.log(event.pageY);

// let colorDivider = document.body.clientHeight/2;
//   console.log("Color Divider:" , colorDivider);
//   //create an if statement where we check if the events vertical location is above half the page, then it will be magenta
//   // if it is lower than the half of hte page, it will be blue
//     if (event.pageY < colorDivider) {
//       div.style.backgroundColor = "magenta";
//     } else {
//       div.style.backgroundColor = "blue";
//     }


//   });

// });

// EXAMPLE 4 MOUSE ENTER EVENTS

// let hoverDiv = document.querySelector(".hoverDiv");

// hoverDiv.addEventListener("mouseover", function(event){
//   console.log("Mouse over!");
//   console.log(event);
// })

// // mouseleave event
// hoverDiv.addEventListener("mouseleave", function(event){
//   console.log("Mouse leaving!");
//   console.log(event);
// })

// EXAMPLE 5 Mouse Move Events
let moveDiv = document.querySelector(".moveDiv");

moveDiv.addEventListener("mousemove", function(event){
  console.log("Mouse move!");
  console.log(event);
});

// EXAMPLE 6 SCROLL DIV

let scrollDiv = document.querySelector(".scrollDiv");

scrollDiv.addEventListener("wheel", function(event){
  console.log("Wheel!");
  console.log(event);
  console.log(event.deltaY);
});