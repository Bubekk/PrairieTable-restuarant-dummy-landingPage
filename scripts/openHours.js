//VAR DECLARATIONS
let headerDate = document.querySelector(".header-date-text");
let author = document.getElementById("author");

//DATE DECLARATION
let date = new Date();
let day = date.getDate();
let dayOfWeek = date.getDay();
let month = date.toLocaleString("en-US", { month: "long" });
let year = date.getFullYear();
let hour = date.toLocaleString("en-US", { hour: "numeric", hour12: false });

//CHECKING WICH DAY OF WEEK IS THIS
let isOpen = "";

function checkDayOfWeek() {
  if (dayOfWeek == 0) {
    isOpen = false;
    // console.log("niedziela jest");
  } else if (dayOfWeek >= 1) {
    // console.log("nie jest niedziela sprawdzam godzine");
    checkHour();
  }
}

//CHECKING IS RESTAURANT IS OPEN BY THE HOUR
function checkHour() {
  if (dayOfWeek <= 4 && hour > 10 && hour < 20) {
    isOpen = true;
    // console.log("jest pon do czw i godziny otwarcia");
  } else if (dayOfWeek >= 5 && hour >= 12 && hour <= 23) {
    isOpen = true;
    // console.log("jest pią do sob i godziny otwarcia", dayOfWeek, hour);
  } else {
    isOpen = false;
    // console.log("są dni otwarcia ale nie godziny otwarcia", hour);
  }
}

checkDayOfWeek();

//RETURNING "OPEN"/"CLOSE"
let openTag = isOpen ? "OPEN" : "CLOSED";

headerDate.innerHTML =
  day + " " + month.toUpperCase() + " " + year + " " + "-" + " " + openTag;
  author.innerHTML = "@Bubekk" + " " + year;
