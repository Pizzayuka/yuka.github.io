
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
  consoleLogBirthdays();
  showBirthdays();
  // listDates();
}

// // just loop through the books and console.log them
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
    let birthdayEntryHolder = document.createElement("div");
    birthdayEntryHolder.classList.add("entry");
     wrapper.appendChild(birthdayEntryHolder);

     if (birthday.fields.img) {
           let imageHolder = document.createElement("div");
           let bdayImageField = birthday.fields.img[0];
           imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
           imageHolder.style.backgroundColor = "#EEE6E3";
           imageHolder.classList.add("bdayimage");
           birthdayEntryHolder.appendChild(imageHolder);

           birthdayEntryHolder.addEventListener("click", showInfo);
            var isSelected = false;
            let zoomImg = document.querySelector(".zoom")

            function showInfo(){

              if(isSelected === false){
                console.log("selected img")
              imageHolder.style.backgroundImage = "none";
              imageHolder.style.backgroundColor = "orangered";
              zoomImg.style.backgroundImage = "url(" + bdayImageField.url + ")";
              zoomImg.classList.add("active-img");
              bdayInfoDates.style.display ="block";
              bdayInfo.style.display ="block";
              bdayInfoEntry.style.display ="block";
              bdayInfoYear.style.display ="block";
              bdayInfoComment.style.display ="block";

              isSelected = true

              } else if(isSelected === true){
                imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
                imageHolder.style.backgroundColor = "#EEE6E3";
                zoomImg.style.backgroundImage = "none";
                zoomImg.classList.remove("active-img");
                bdayInfoDates.style.display ="none";
                bdayInfo.style.display ="none";
                bdayInfoEntry.style.display ="none";
                bdayInfoYear.style.display ="none";
                bdayInfoComment.style.display ="none";
              
                isSelected = false;
              }
              
            }

          } else if(birthday.fields.img){
            imageHolder.style.display = "none";
          }
          
    // imageHolder.addEventListener("click", showInfo);

    // function showInfo(){
    //   imageHolder.classList.toggle("active-img");
    // }
    // let indivisudalImg = document.querySelector("bdayimage");
    // indivisudalImg.addEventListener("click", showInfo);

    // function showInfo(){
    //   console.log("selected img")
    //   // indivisudalImg.classList.toggle("active-img");
    // }

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


// Yuka old code

// let birthdayEntryHolder = document.createElement("div");
// birthdayEntryHolder.classList.add("entry");
// wrapper.appendChild(birthdayEntryHolder);



// // loop through the books, create an h2 for each one, and add it to the page
// function showBirthdays() {
//   console.log("showBirthdays()");
//   birthdays.forEach((birthday) => {

//     // let datesFields = birthday.fields.dates
//     // if (datesFields.contains("January 30,  2002")) {
//     //   imageHolder.classList.add("jan30");
//     // }
//     // let birthdayHolder = document.createElement("div");
//     // birthdayHolder.classList.add("bybday");
//     // birthdayHolder.innerText = birthday.fields.maincharacter;
//     // entry.appendChild(birthdayHolder);


//     //  let menuHolder = document.createElement("span");
//     //  menuHolder.innerText = birthday.fields.zodiac;
//     //  menuHolder.classList.add("bdayperson");
//     //  menuSelectionHolder.appendChild(menuHolder);


//     //  let charactertype = birthday.fields.maincharacter;
//     //  charactertype.forEach(function(maincharacter) {
//     //    let charactertypeClassName = slugify(maincharacter);
//     //    console.log('charactertypeClassName', charactertypeClassName);
//     //    birthdayEntryHolder.classList.add(charactertypeClassName);
//     //  });

//     //  if (birthdayEntryHolder.classList.contains("Alexander Soukakos")) {
//     //   imageHolder.classList.add("alex");
//     // } 



//     if (birthday.fields.img) {
//      let imageHolder = document.createElement("div");
//      let bdayImageField = birthday.fields.img[0];
//      imageHolder.style.backgroundImage = "url(" + bdayImageField.url + ")";
//      imageHolder.style.backgroundColor = "#EEE6E3";
//      imageHolder.classList.add("bdayimage");
//      birthdayEntryHolder.appendChild(imageHolder);
//     } else if(birthday.fields.img){
//       imageHolder.style.display = "none";

//     }
   
   
//     //  if ( {bdayImageField} = BLANK() ) {
//     //   bdayimage.style.display = "none";
//     // }
     

//     let infoHolder = document.querySelector(".foot");


    
//     const bdayDates = 'Birthday: ' + birthday.fields.dates;
//     let bdayInfoDates = document.createElement("div");
//     // bdayInfoDates.classList.add("bday-dates");
//     bdayInfoDates.innerText = bdayDates;
//     infoHolder.appendChild(bdayInfoDates);

//     const bdayInfoText = 'Birthday person: ' + birthday.fields.maincharacter;
//     let bdayInfo = document.createElement("div");
//     // bdayInfo.classList.add("bdayinfo");
//     bdayInfo.innerText = bdayInfoText;
//     infoHolder.appendChild(bdayInfo);

//     const bdayEntry = 'Entry by: ' + birthday.fields.entriesby;
//     let bdayInfoEntry = document.createElement("div");
//     // bdayInfoEntry.classList.add("bday-entry");
//     bdayInfoEntry.innerText = bdayEntry;
//     infoHolder.appendChild(bdayInfoEntry);

//     const bdayYear = 'Year taken: ' + birthday.fields.year;
//     let bdayInfoYear = document.createElement("div");
//     // bdayInfoYear.classList.add("bday-year");
//     bdayInfoYear.innerText = bdayYear;
//     infoHolder.appendChild(bdayInfoYear);

//     const bdayComment = 'Description: ' + birthday.fields.description;
//     let bdayInfoComment = document.createElement("div");
//     // bdayInfoComment.classList.add("bday-comment");
//     bdayInfoComment.innerText = bdayComment;
//     infoHolder.appendChild(bdayInfoComment);


//     imageHolder.addEventListener("click", show);

//   //  function show() {
//   //       bdayInfoDates.classList.toggle("selected");
//   //       // bdayInfo.classList.toggle("selected");
//   //       // bdayInfoEntry.classList.toggle("selected");
//   //       // bdayInfoYear.classList.toggle("selected");
//   //       // bdayInfoComment.classList.toggle("selected");
//   //   }


//   });



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
  
    // let bdayOne = document.querySelector("jan-thirty");

    // bdayOne.addEventListener("click", showOnlyOne);

    // function showOnlyOne(){
    //   bdayOne.classList.add("apply");
    // }

    let dates = ["Jan 30", "Feb 2", "Feb 15", "Mar 24", "Apr 18", "May 6", "May 27", "Jun 1", "Jun 3", "Jun 14", "Jun 26", "Sep 4","Oct 20", "Nov 15", "Nov 20", "Dec 1"];
    let datesHolder = document.querySelector(".menu-bday")
    var arrayLength = dates.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(dates[i]);

       let indivisualDates = document.createElement("span");
       indivisualDates.innerText = dates[i];
        datesHolder.appendChild(indivisualDates);
        // indivisualDates.classList.add("");
        indivisualDates.addEventListener("click", applyCategoryDates);

        function applyCategoryDates(){
          indivisualDates.classList.add("apply");
        }

        // function sortedByBday(){
        //   if (onlyJan30 === true) {
        //     imageHolder.style.display = "block";
        //     console.log("displaying only jan 30");
        // } else if((onlyJan30 === false)){
        //   imageHolder.style.display = "none";
        // }
        // }

    }

    let zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Virgo", "Libra", "Scorpio", "Sagittarius", "Aquarius"];
    let zodiacHolder = document.querySelector(".menu-zodiac")
    var arrayLength = zodiac.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(zodiac[i]);

       let indivisualZodiac = document.createElement("span");
       indivisualZodiac.innerText = zodiac[i];
       zodiacHolder.appendChild(indivisualZodiac);
        // indivisualDates.classList.add("");
        indivisualZodiac.addEventListener("click", applyCategoryZodiac);

        function applyCategoryZodiac(){
          indivisualZodiac.classList.add("apply");
        }

    }

    let entry = ["Andrea", "Ira", "Leslie", "Noor", "Olivia", "Sidhya", "Sofia", "Yuka"];
    let entryHolder = document.querySelector(".menu-entry")
    var arrayLength = entry.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(entry[i]);

       let indivisualEntry = document.createElement("span");
       indivisualEntry.innerText = entry[i];
       entryHolder.appendChild(indivisualEntry);
        // indivisualDates.classList.add("");
        indivisualEntry.addEventListener("click", applyCategoryEntry);

        function applyCategoryEntry(){
          indivisualEntry.classList.add("apply");
        }

    }

    

    // function showDates(){
    //   dates.forEach() => {
    //     console.log("showDates()");
    //     // let indivisualDates = document.createElement("span");
    //     // indivisualDates.innerText = dates[0];
    //     // indivisualDates.classList.add("dot");
    //     // datesHolder.appendChild(indivisualDates);
    //   };
    // }
  
    // let individualButton = document.querySelector(".menu-bday span")
    // // // // let dotIsActive = false

    // // individualButton.addEventListener("click", activateDot);
    
   
    // function activateDot(){
    //   individualButton.classList.add("apply")
    // }
    
       
//     let bdayOneButton = document.querySelector("#jan-thirty")
//     bdayOneButton.addEventListener("click", function(){
//         if (imageHolder.classList.contains("jan30")) {
//           imageHolder.style.display = "block";
//           bdayOneButton.classList.add("active");
//         } else {
//           imageHolder.style.display = "none";
//         }
//       });
// }

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

