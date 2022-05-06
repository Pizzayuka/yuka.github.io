
/* globals require */
console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

// load the airtable library, call it "Airtable"

let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "keyzKb1rVwpolkriZ" }).base(
  "appXlMKOMGyDYrBIc"
);

// //get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("birthdays").select({}).eachPage(gotPageOfBirthdays, gotAllBirthdays);

// // an empty array to hold our book data
let birthdays = [];

// callback function that receives our data
function gotPageOfBirthdays(records, fetchNextPage) {
  console.log("gotPageOfBirthdays()");
  // add the records from this page to our books array
  birthdays.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBirthdays(err) {
  console.log("gotAllBirthdays()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading birthdays");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  // consoleLogBirthdays();
  showBirthdays();
  // listDates();
}

// // just loop through the books and console.log them
// function consoleLogBirthdays() {
//   console.log("consoleLogBirthdays()");
//   birthdays.forEach((birthday) => {
//     console.log("Birthday:", birthday);
//   });
// }

// function deleteShit () {
//   document.getElementsByClassName('wrapper').innerHTML="";
//   console.log('shit deleted bro');
// }

// loop through the books, create an h2 for each one, and add it to the page
function showBirthdays() {
  console.log("showBirthdays()");
  birthdays.forEach((birthday) => {
    let birthdayEntryHolder = document.createElement("div");
    birthdayEntryHolder.classList.add("entry");
     wrapper.appendChild(birthdayEntryHolder);

    if (birthday.fields.img) {
      let imageHolder = document.createElement("div");
      let bdayImageField = birthday.fields.img[0];
      // imageHolder.classList.add(birthday.filds.entriesby);
      imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
      imageHolder.style.backgroundColor = "#EEE6E3";
      imageHolder.classList.add("bdayimage");
      // imageHolder.dataset.imgName = bdayImageField.url;

      birthdayEntryHolder.appendChild(imageHolder);
      
      birthdayEntryHolder.addEventListener("click", showInfo);
      // var isSelected = false;
      let zoomImg = document.querySelector(".zoom");


      // showing information about the img... it works but keeps selecting 
      function showInfo(e) {

        // let foot = document.querySelector(".foot");
        // while(foot.firstChild) {
        //   foot.removeChild(foot.firstChild);
        // }

        if(bdayInfoComment.querySelector(".displaying")){
          console.log(e.currentTarget.img);


          zoomImg.style.backgroundImage = "none";
          zoomImg.classList.remove("active-img");
          bdayInfoComment.querySelector(".displaying").classList.toggle("displaying");


        // imageHolder.style.backgroundImage = "none";
        // imageHolder.style.backgroundColor = "orangered";
        // zoomImg.style.backgroundImage = "url(" + bdayImageField.url + ")";
        // zoomImg.classList.add("active-img");
        // bdayInfoDates.style.display ="block";
        // bdayInfo.style.display ="block";
        // bdayInfoEntry.style.display ="block";
        // bdayInfoYear.style.display ="block";
        // bdayInfoComment.style.display ="block";

        
        // bdayInfoComment.classList.add("displaying");

        //tutors helped....still not working

      
        // let footv = document.querySelector(".foot")
        // for(i=0; i<footv.length; i++) {
        //   footv.children[i].style.display = "none";
        // }

        // isSelected = true

        // } else {

          zoomImg.style.backgroundImage = "url(" + bdayImageField.url + ")";
          zoomImg.classList.add("active-img");



          // imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
          // imageHolder.style.backgroundColor = "#EEE6E3";
          // zoomImg.style.backgroundImage = "none";
          // zoomImg.classList.remove("active-img");
          // bdayInfoDates.style.display ="none";
          // bdayInfo.style.display ="none";
          // bdayInfoEntry.style.display ="none";
          // bdayInfoYear.style.display ="none";
          // bdayInfoComment.style.display = "none";
          
          // bdayInfoComment.classList.remove("displaying");


          // let bdaycomment = document.getElementsByClassName("bday-comment")
          // for(let i=0; i<bdaycomment.length; i++){

          //   if (bdayInfoComment.querySelector(".displaying")) {
          //     bdayInfoComment.classList.remove("displaying");
          //   } else{
          //     bdayInfoComment.classList.add("displaying");
          //   }
          // }


          // let bdaycomment = document.getElementsByClassName("bday-comment")
          // for(let i=0; i<bdaycomment.length; i++){

          //   if (bdayComment[i].dataset.imgName !== zoomImg.dataset.imgName) {
          //     bdaycomment[i].style.display = "none";
          //   }
          // }


          //document.getElementsByClassName("bday-comment").style.display = "none";
          // isSelected = false;
        // }

        e.currentTarget.classList.toggle("displaying");

        }
        
      }
  

      // this kinda works but doen't toggle and can't get rid of background img when selected
      // birthdayEntryHolder.addEventListener("click", showInfo, );
      
      // function showInfo(){
  
      //   if(birthdayEntryHolder.classList.contains("selected-img")) {
      //     birthdayEntryHolder.querySelector("selected-img").classList.remove("selected-img");
      //     // birthdayEntryHolder.classList.add("deselected-img");

      //   } else{
      //   birthdayEntryHolder.classList.toggle("selected-img");
      //   }
      // }

    } else if(birthday.fields.img){
      imageHolder.style.display = "none";
    }

    let infoHolder = document.querySelector(".foot");

    const bdayDates = 'Birthday: ' + birthday.fields.dates;
    let bdayInfoDates = document.createElement("div");
    bdayInfoDates.classList.add("bday-dates");
    bdayInfoDates.innerText = bdayDates;
    infoHolder.appendChild(bdayInfoDates);

    const bdayInfoText = 'Birthday person: ' + birthday.fields.maincharacter;
    let bdayInfo = document.createElement("div");
    bdayInfo.classList.add("bday-person");
    bdayInfo.innerText = bdayInfoText;
    infoHolder.appendChild(bdayInfo);

    const bdayEntry = 'Entry by: ' + birthday.fields.entriesby;
    let bdayInfoEntry = document.createElement("div");
    bdayInfoEntry.classList.add("bday-entry");
    bdayInfoEntry.innerText = bdayEntry;
    infoHolder.appendChild(bdayInfoEntry);

    const bdayYear = 'Year taken: ' + birthday.fields.year;
    let bdayInfoYear = document.createElement("div");
    bdayInfoYear.classList.add("bday-year");
    bdayInfoYear.innerText = bdayYear;
    infoHolder.appendChild(bdayInfoYear);

    const bdayComment = 'Description: ' + birthday.fields.description;
    let bdayInfoComment = document.createElement("div");
    bdayInfoComment.classList.add("bday-comment");
    //bdayInfoComment.dataset.imgName = bdayImageField.url;
    bdayInfoComment.innerText = bdayComment;
    infoHolder.appendChild(bdayInfoComment);

  //   imageHolder.addEventListener("click", show);

  //  function show() {

  //       console.log("test");

  //       // bdayInfoDates.classList.toggle("selected");
  //       // bdayInfo.classList.toggle("selected");
  //       // bdayInfoEntry.classList.toggle("selected");
  //       // bdayInfoYear.classList.toggle("selected");
  //       // bdayInfoComment.classList.toggle("selected");
  //   }


  
  //   let onlyJan30 = false
  //   let fieldDates = birthday.fields.dates 
  // if(fieldDates.contains("January 30,  2002")) {
  //   imageHolder.classList.add("jan30");
  //   onlyJan30 = true
  // }
  


  });
}


// setting references to nav buttons
let sortByBday = document.querySelector(".bdayfilter")
let menuByBday = document.querySelector(".menu-bday")

let sortByZodiac = document.querySelector(".zodiacfilter")
let menuByZodiac = document.querySelector(".menu-zodiac")

let sortByEntry = document.querySelector(".entryfilter")
let menuByEntry = document.querySelector(".menu-entry")

  sortByBday.addEventListener("click", showBdayMenu);
  function showBdayMenu() {
    console.log("activate bday button");
    menuByBday.classList.add("active");
    menuByBday.classList.remove("hide");
    sortByBday.classList.add("active-button");
    menuByZodiac.classList.remove("active");
    menuByZodiac.classList.add("hide");
    sortByZodiac.classList.remove("active-button");
    menuByEntry.classList.remove("active");
    menuByEntry.classList.add("hide");
    sortByEntry.classList.remove("active-button");
  }

  sortByZodiac.addEventListener("click", showZodiacMenu);
  function showZodiacMenu() {

    console.log("activate zodiac button");
    menuByZodiac.classList.add("active");
    menuByZodiac.classList.remove("hide");
    sortByZodiac.classList.add("active-button");
    menuByBday.classList.remove("active");
    menuByBday.classList.add("hide");
    sortByBday.classList.remove("active-button");
    menuByEntry.classList.remove("active");
    menuByEntry.classList.add("hide");
    sortByEntry.classList.remove("active-button");

  }

  sortByEntry.addEventListener("click", showEntryMenu);
  function showEntryMenu() {
    console.log("activate entry button");
    menuByEntry.classList.add("active");
    menuByEntry.classList.remove("hide");
    sortByEntry.classList.add("active-button");
    menuByBday.classList.remove("active");
    menuByBday.classList.add("hide");
    sortByBday.classList.remove("active-button");
    menuByZodiac.classList.remove("active");
    menuByZodiac.classList.add("hide");
    sortByZodiac.classList.remove("active-button");
  }
  

//  menu

let dates = ["Jan 30", "Feb 2", "Feb 15", "Mar 24", "Apr 18", "May 6", "May 27", "Jun 1", "Jun 3", "Jun 14", "Jun 26", "Sep 4","Oct 20", "Nov 15", "Nov 20", "Dec 1"];
let datesHolder = document.querySelector(".menu-bday")
var arrayLength = dates.length;

// THE LOOP THAT HOLDS THE DATE FUNCTIONALITY
for (var i = 0; i < arrayLength; i++) {
  // console.log(dates[i]);

  let indivisualDates = document.createElement("span");
  indivisualDates.innerText = dates[i];
  indivisualDates.addEventListener("click", filterByDate);
  indivisualDates.date = dates[i];

  datesHolder.appendChild(indivisualDates);
}

// this is where im trying to filter the data

// var isFiltered = false;

function filterByDate(e) {
console.log(e.currentTarget.date);
if(datesHolder.querySelector(".apply")) {
datesHolder.querySelector(".apply").classList.toggle("apply");
}
e.currentTarget.classList.toggle("apply");
// document.querySelector(".wrapper").innerHTML = ""
// console.log(birthday.fields.dates);
  // if(fieldDates.contains("jan30")) {
  //   console.log("only jan30 pics")
  // }

}


let zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Virgo", "Libra", "Scorpio", "Sagittarius", "Aquarius"];
let zodiacHolder = document.querySelector(".menu-zodiac")
var arrayLength = zodiac.length;
for (var i = 0; i < arrayLength; i++) {
  // console.log(zodiac[i]);

  let indivisualZodiac = document.createElement("span");
  indivisualZodiac.innerText = zodiac[i];
  indivisualZodiac.addEventListener("click", filterByZodiac);
  indivisualZodiac.zodiac = zodiac[i];

  zodiacHolder.appendChild(indivisualZodiac);
}

function filterByZodiac(e) {
  console.log(e.currentTarget.zodiac);
  if(zodiacHolder.querySelector(".apply")) {
    zodiacHolder.querySelector(".apply").classList.toggle("apply");
  }
  e.currentTarget.classList.toggle("apply");
}

let entry = ["Andrea", "Ira", "Leslie", "Noor", "Olivia", "Sidhya", "Sofia", "Yuka"];
let entryHolder = document.querySelector(".menu-entry")
var arrayLength = entry.length;
for (var i = 0; i < arrayLength; i++) {
  // console.log(entry[i]);

  let indivisualEntry = document.createElement("span");
  indivisualEntry.innerText = entry[i];
  indivisualEntry.addEventListener("click", filterByEntry)
  indivisualEntry.entry = entry[i]

  entryHolder.appendChild(indivisualEntry);
}

function filterByEntry(e){
  console.log(e.currentTarget.entry);
  if(entryHolder.querySelector(".apply")){
    entryHolder.querySelector(".apply").classList.toggle("apply");
  }

  e.currentTarget.classList.toggle("apply");
}


// logo reload

let home = document.querySelector(".logo")
home.addEventListener("click", function(){
  window.location.reload();
})

// audio

var x = document.getElementById("myAudio");
var y = document.getElementById("myAudio2");
var z = document.getElementById("myAudio3");
var lol = document.getElementById("myAudio4");

var songCount = 1;

let bdaysongs =[x, y, z, lol];

var playing = false;
function playAudio() { 

  
  songCount++

  if (songCount >=5){
  songCount = 1
  }
  console.log(songCount);




   if (playing === false){
    if(songCount == 1){
    y.play(); 
  } if(songCount == 2){
    x.play();
  } if (songCount == 3){
    z.play();
  } if (songCount == 4){
    lol.play();
  }
    playing = true;
  }
   else if(playing === true){
    x.pause(); 
    y.pause();
    z.pause();
    lol.pause();
    playing = false;
  }
} 