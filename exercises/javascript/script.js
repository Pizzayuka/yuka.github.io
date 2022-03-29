let navElement = document.querySelector(".nav");
let headline = document.querySelector("h1");
let headlines = document.querySelectorAll("h1");


headline.classList.add("pink");


function turnOnLight() {
    console.log("Lights on!");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);


let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}


// uses forEach to loop through all of the headlines
headlines.forEach(function(headline) {
    // add an event listener to each individual headline
    headline.addEventListener('click', function (event) {
      // toggle the red class on this headline
      headline.classList.toggle("red");
    });
  });
