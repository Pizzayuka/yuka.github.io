let result = document.querySelector(".result");
let inputElement = document.querySelector(".input");


inputElement.addEventListener("keydown", 
    function(event){

    if(event.key == "Enter"){
        console.log(inputElement.value);
        result.innerText = inputElement.value;
        inputElement.style.display = "none";
    }
});

result.addEventListener("click", 
    function(redo){
        inputElement.style.display = "block";
        result.innerText = "";
});

// document.addEventListener("keydown", function(event){

//     console.log(event);
//     console.log("what did we just press:");
//     console.log(event.key);
//     if(event.key == "Enter"){
//         document.body.classList.toggle("red");
//     }

//     result.innerText = "You just pressed:" + event.key;
// })