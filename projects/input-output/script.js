let wrapper = document.querySelector(".wrapper");

let imageHolder = document.createElement("div");
imageHolder.classList.add("origami");
wrapper.appendChild(imageHolder);


// var imgArray = [0, 1, 2, 3, 4, 5];
i = 1;

imageHolder.style.backgroundImage = "url('assets/crane" + i + ".jpg)";


// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'assets/crane1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'assets/crane2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = 'assets/crane3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = 'assets/crane4.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = 'assets/crane5.jpg';

// imgArray[5] = new Image();
// imgArray[5].src = 'assets/crane6.jpg';

// imgArray[5] = new Image();
// imgArray[5].src = 'assets/crane.jpg';


// imageHolder.style.backgroundImage = "url(" + imgArray[0].src + ")";

// document.addEventListener("keydown", 
//     function(event){
//         console.log("key down");
//         for (let i = 0; i < 6; i++) {
//             imageHolder.style.backgroundImage = "url(" + imgArray[i].src + ")";
//         }
// });