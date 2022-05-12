alert("press any key to fold origami");


let wrapper = document.querySelector(".wrapper");

let imageHolder = document.createElement("div");
imageHolder.classList.add("origami");
wrapper.appendChild(imageHolder);

i = 0;

var imgArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

imageHolder.style.backgroundImage = "url(assets/crane-" + imgArray[i] + ".png)";



document.addEventListener("keydown", 
    function(event){
        console.log("key down");
        imageHolder.style.backgroundImage = "url(assets/crane-" + imgArray[i++] + ".png)";
      
}

); 



document.addEventListener("click", 
    function(home){
        window.location='index.html';
      
}

); 
