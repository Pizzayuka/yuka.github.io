var audio = new Audio('happybirthday-denkigroove.mp3');

function playSound(){
    audio.play();
}

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

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("birthdays").select({}).eachPage(gotPageOfBirthdays, gotAllBirthdays);

// an empty array to hold our book data
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
  consoleLogBirthdays();
  showBirthdays();
  listDates();
}

// just loop through the books and console.log them
function consoleLogBirthdays() {
  console.log("consoleLogBirthdays()");
  birthdays.forEach((birthday) => {
    console.log("Birthday:", birthday);
  });
}

let birthdayEntryHolder = document.createElement("div");
birthdayEntryHolder.classList.add("entry");
wrapper.appendChild(birthdayEntryHolder);



// loop through the books, create an h2 for each one, and add it to the page
function showBirthdays() {
  console.log("showBirthdays()");
  birthdays.forEach((birthday) => {

    // let datesFields = birthday.fields.dates
    // if (datesFields.contains("January 30,  2002")) {
    //   imageHolder.classList.add("jan30");
    // }
    // let birthdayHolder = document.createElement("div");
    // birthdayHolder.classList.add("bybday");
    // birthdayHolder.innerText = birthday.fields.maincharacter;
    // entry.appendChild(birthdayHolder);


    //  let menuHolder = document.createElement("span");
    //  menuHolder.innerText = birthday.fields.zodiac;
    //  menuHolder.classList.add("bdayperson");
    //  menuSelectionHolder.appendChild(menuHolder);


    //  let charactertype = birthday.fields.maincharacter;
    //  charactertype.forEach(function(maincharacter) {
    //    let charactertypeClassName = slugify(maincharacter);
    //    console.log('charactertypeClassName', charactertypeClassName);
    //    birthdayEntryHolder.classList.add(charactertypeClassName);
    //  });

    //  if (birthdayEntryHolder.classList.contains("Alexander Soukakos")) {
    //   imageHolder.classList.add("alex");
    // } 



    if (birthday.fields.img) {
     let imageHolder = document.createElement("div");
     let bdayImageField = birthday.fields.img[0];
     imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
     imageHolder.style.backgroundColor = "#EEE6E3";
     imageHolder.classList.add("bdayimage");
     birthdayEntryHolder.appendChild(imageHolder);
    } else if(birthday.fields.img){
      imageHolder.style.display = "none";

    }
   
   
    //  if ( {bdayImageField} = BLANK() ) {
    //   bdayimage.style.display = "none";
    // }
     

    let infoHolder = document.querySelector(".foot");


    
    const bdayDates = 'Birthday: ' + birthday.fields.dates;
    let bdayInfoDates = document.createElement("div");
    // bdayInfoDates.classList.add("bday-dates");
    bdayInfoDates.innerText = bdayDates;
    infoHolder.appendChild(bdayInfoDates);

    const bdayInfoText = 'Birthday person: ' + birthday.fields.maincharacter;
    let bdayInfo = document.createElement("div");
    // bdayInfo.classList.add("bdayinfo");
    bdayInfo.innerText = bdayInfoText;
    infoHolder.appendChild(bdayInfo);

    const bdayEntry = 'Entry by: ' + birthday.fields.entriesby;
    let bdayInfoEntry = document.createElement("div");
    // bdayInfoEntry.classList.add("bday-entry");
    bdayInfoEntry.innerText = bdayEntry;
    infoHolder.appendChild(bdayInfoEntry);

    const bdayYear = 'Year taken: ' + birthday.fields.year;
    let bdayInfoYear = document.createElement("div");
    // bdayInfoYear.classList.add("bday-year");
    bdayInfoYear.innerText = bdayYear;
    infoHolder.appendChild(bdayInfoYear);

    const bdayComment = 'Description: ' + birthday.fields.description;
    let bdayInfoComment = document.createElement("div");
    // bdayInfoComment.classList.add("bday-comment");
    bdayInfoComment.innerText = bdayComment;
    infoHolder.appendChild(bdayInfoComment);


  //   imageHolder.addEventListener("click", function(){
  //     bdayInfoDates.classList.toggle("selected");
  //     bdayInfo.classList.toggle("selected");
  //     bdayInfoEntry.classList.toggle("selected");
  //     bdayInfoYear.classList.toggle("selected");
  //     bdayInfoComment.classList.toggle("selected");
  // })

  });

  let sortByBday = document.querySelector(".bdayfilter")
  let menuByBday = document.querySelector(".menu-bday")
  sortByBday.addEventListener("click", function(){
    // sortByBday.classList.add("active");
    sortByBday.style.backgroundImage = "none";
    menuByBday.style.opacity = "1";
    menuByZodiac.style.display = "none";
    menuByEntry.style.display = "none";
    sortByEntry.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
    sortByZodiac.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
    });

    let sortByZodiac = document.querySelector(".zodiacfilter")
    let menuByZodiac = document.querySelector(".menu-zodiac")
    sortByZodiac.addEventListener("click", function(){
      sortByZodiac.style.backgroundImage = "none";
      menuByZodiac.style.display = "block";
      menuByBday.style.opacity = "0";
      menuByEntry.style.display = "none";
      sortByBday.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
      sortByEntry.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
      });

      let sortByEntry = document.querySelector(".entryfilter")
      let menuByEntry = document.querySelector(".menu-entry")
      sortByEntry.addEventListener("click", function(){
        sortByEntry.style.backgroundImage = "none";
        menuByEntry.style.display = "block";
        menuByBday.style.opacity = "0";
        menuByZodiac.style.display = "none";
        sortByZodiac.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
        sortByBday.style.backgroundImage = "linear-gradient(to right, #6398AF, #366275,#050c30)";
        });

    let bdayOneButton = document.querySelector("#jan-thirty")
    bdayOneButton.addEventListener("click", function(){
        if (imageHolder.classList.contains("jan30")) {
          imageHolder.style.display = "block";
          bdayOneButton.classList.add("active");
        } else {
          imageHolder.style.display = "none";
        }
      });
}

let home = document.querySelector(".logo")
home.addEventListener("click", function(){
  window.location.reload();
})

var x = document.getElementById("myAudio"); 
var playing = false;
function playAudio() { 
  if (playing === false){
    x.play(); 
    playing = true;
  } else if(playing === true){
    x.pause(); 
    playing = false;
  }
} 

