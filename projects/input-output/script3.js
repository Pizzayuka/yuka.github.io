alert("press any key to roll a joint");


let wrapper = document.querySelector(".wrapper");

let imageHolder = document.createElement("div");
imageHolder.classList.add("joint");
wrapper.appendChild(imageHolder);

i = 0;

var imgArray = [ 1, 2, 3, 4, 5, 6 ];

imageHolder.style.backgroundImage = "url(assets/joint" + imgArray[i] + ".jpg)";



document.addEventListener("keydown", 
    function(event){
        console.log("key down");
        imageHolder.style.backgroundImage = "url(assets/joint" + imgArray[i++] + ".jpg)";
      
}

); 



document.addEventListener("click", 
    function(home){
        window.location='index.html';
      
}

); 
