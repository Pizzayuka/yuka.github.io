

let bird = document.querySelector("#bird");

bird.addEventListener("click", function(popUp){

    document.querySelector(".popup").style.display ="block";
})

let no = document.querySelector("#no");

no.addEventListener("click", function(visitOrigami){

    window.location='paper-crane.html';
})


let yes = document.querySelector("#yes");

yes.addEventListener("click", function(visitWeed){

    window.location='roll-joint.html';
})