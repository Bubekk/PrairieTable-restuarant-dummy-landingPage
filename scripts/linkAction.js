//VAR DECLARATIONS
let links = document.querySelectorAll(".navbutton-link");
let sections = document.querySelectorAll("section");

//ANIMATION TOGGLE
function getAnimated(element) {
    element.style.animation = "bgFlash 2s";
    element.onanimationend = () => {
        element.style.animation = "";
    }
}

//LISTENERS FOR LINKS
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() { getAnimated(sections[i+1]) })
}

