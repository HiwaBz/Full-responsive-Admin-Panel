let dayLight = document.querySelector(".light-dark");
let light = document.querySelector(".light-img");
let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let h = document.querySelector("h1");
let select = document.querySelector("select");
let p = document.querySelector("p");
let username = document.querySelector(".username");
let gmail = document.querySelector(".gmail");
let pall = document.querySelectorAll(".p-menu");
let selected = document.querySelector(".selected");
let span = document.querySelector("span");

const arr = [body, header];
const elements = [h, select, p, gmail, username, ...pall, span];

dayLight.addEventListener("click", function () {
  if (body.style.backgroundColor === "white") {
    // change selected color
    select.style.color = "#030142";
    //changing the style of borders in thmemes
    nav.style.borderRight = "solid #7c7c7c 1px";
    header.style.borderBottom = "solid #7c7c7c 1px";
    //loop over the backgtound
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "#030142";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#7c7c7c";
    }

    light.src = "src/pics/light.svg";
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
    light.src = "src/pics/night.svg";
  }
});

//
