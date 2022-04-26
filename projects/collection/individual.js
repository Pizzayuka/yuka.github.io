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

let body = document.querySelector("body");

function showBirthdays() {
    console.log("showBirthdays()");
    birthdays.forEach((birthday) => {

        let bdayImageField = birthday.fields.img[0];

    body.style.backgroundImage = "url(" + bdayImageField.url + ")";
});

}