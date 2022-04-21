
console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "key4mK4197C8yZ0ap" }).base(
  "appSHPY05SLIUrp6e"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("tiktokdata").select({}).eachPage(gotPageOfTiktoks, gotAllTiktoks);

// an empty array to hold our book data
let tiktoks = [];

// callback function that receives our data
function gotPageOfTiktoks(records, fetchNextPage) {
  console.log("gotPageOfTiktoks()");
  // add the records from this page to our books array
  tiktoks.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllTiktoks(err) {
  console.log("gotAllTiktoks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading tiktoks");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogTiktoks();
  showTiktoks();
}

// just loop through the books and console.log them
function consoleLogTiktoks() {
  console.log("consoleLogTiktoks()");
  tiktoks.forEach((tiktok) => {
    console.log("Tiktok:", tiktok);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showTiktoks() {
  console.log("showTiktoks()");
  tiktoks.forEach((tiktok) => {
    let tiktokTextHolder = document.createElement("div");
    tiktokTextHolder.classList.add("entry");
    tiktokTextHolder.innerText = tiktok.fields.text;
     wrapper.appendChild(tiktokTextHolder);


// add videos to the tiktok containers
     let videoHolder = document.createElement("video");
     videoHolder.src = tiktok.fields.video[0].url;
     videoHolder.classList.add("tiktokVideo");
     videoHolder.muted = true;
     videoHolder.autoplay = true;
     videoHolder.loop = true;
     tiktokTextHolder.appendChild(videoHolder);


// add event listener
// when user clicks on entry, the video will appear or disappear

tiktokTextHolder.addEventListener("click", show);

function show() {
  console.log("test");
  videoHolder.classList.toggle("active");
  tiktokTextHolder.classList.toggle("active");
}



  });

}