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

// loop through the books, create an h2 for each one, and add it to the page
function showBirthdays() {
  console.log("showBirthdays()");
  birthdays.forEach((birthday) => {
    let birthdayTextHolder = document.createElement("div");
    birthdayTextHolder.classList.add("entry");
    birthdayTextHolder.innerText = birthday.fields.maincharacter;
     wrapper.appendChild(birthdayTextHolder);


     let imageHolder = document.createElement("div");
     imageHolder.style.backgroundImage = birthday.fields.img[0].url;
     imageHolder.classList.add("bdayimage");
     birthdayTextHolder.appendChild(imageHolder);

     let birthdayListHolder = document.createElement("li");
     birthdayListHolder.classList.add("dates");
     birthdayListHolder.innerText = birthday.fields.dates;
      menu.appendChild(birthdayListHolder);

    let runTheseText = document.createElement("p");
    runTheseText.innerText = "Happy Birthday" + birthday.fields.maincharacter;
    foot.appendChild(runTheseText);

    //  let videoHolder = document.createElement("video");
    //  videoHolder.src = tiktok.fields.video[0].url;
    //  videoHolder.classList.add("tiktokVideo");
    //  videoHolder.muted = true;
    //  videoHolder.autoplay = true;
    //  videoHolder.loop = true;
    //  tiktokTextHolder.appendChild(videoHolder);
  });
}

