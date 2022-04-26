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

let datesFields = birthday.fields.dates
if (datesFields.contains("January 30,  2002")) {
  imageHolder.classList.add("jan30");
}

// loop through the books, create an h2 for each one, and add it to the page
function showBirthdays() {
  console.log("showBirthdays()");
  birthdays.forEach((birthday) => {

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
     imageHolder.classList.add("bdayimage");
     birthdayEntryHolder.appendChild(imageHolder);
    } else if(birthday.fields.img){
      imageHolder.style.display = "none";

    }
   
   

    // let filterBday = document.querySelector(".bdayfiltery");
    // let filterZodiac = document.querySelector(".zodiacfilter");
    // filterBday.addEventListener("click", function(){
    //   if (videoHolder.classList.contains("spirituality")) {
    //     videoHolder.style.display = "block";
    //     spiritualitybutton.classList.add("active");
    //   } else {
    //     videoHolder.style.display = "none";
    //   }
    // });

    //  if ( {bdayImageField} = BLANK() ) {
    //   bdayimage.style.display = "none";
    // }
     

    // let runTheseText = document.createElement("p");
    // runTheseText.innerText = "Happy Birthday" + birthday.fields.maincharacter;
    // foot.appendChild(runTheseText);

    //  let videoHolder = document.createElement("video");
    //  videoHolder.src = tiktok.fields.video[0].url;
    //  videoHolder.classList.add("tiktokVideo");
    //  videoHolder.muted = true;
    //  videoHolder.autoplay = true;
    //  videoHolder.loop = true;
    //  tiktokTextHolder.appendChild(videoHolder);
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

