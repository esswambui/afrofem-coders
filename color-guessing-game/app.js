// color buttons
const rButton = document.getElementById('r');
const gButton = document.getElementById('g');
const bButton = document.getElementById('b');

// array of game levels html collection
const levels = Array.from(document.getElementsByClassName('mode'));

// function to get the selected game level
let gameLevel = levels.find((level) => {
    let levelClasses = Array.from(level.classList);
    return levelClasses.includes("selected");
}).innerHTML

const views = Array.from(document.getElementsByClassName('square'));

// Add event listener to each game level
levels.forEach(level => {
    level.addEventListener("click", function () {
        levels.forEach((mode) => mode.classList.remove("selected"))
        this.classList.add("selected");

        let gameLevel =this.innerHTML;
      
        if (gameLevel === "Hard") {            
            views.forEach((square) => square.classList.remove("hidden"))
        } else {
           views.forEach((square) => square.classList.add("square"))
        }
     
    })
});

