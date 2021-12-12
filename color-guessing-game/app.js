// color buttons
const rButton = document.getElementById('r');
const gButton = document.getElementById('g');
const bButton = document.getElementById('b');

// array of game levels html collection
const levels = Array.from(document.getElementsByClassName('mode'));

//array of squares
const squares = Array.from(document.getElementsByClassName('square'));
const numSquares = squares.length; 


// function to get the selected game level
let gameLevel = levels.find((level) => {
    let levelClasses = Array.from(level.classList);
    return levelClasses.includes("selected");
}).innerHTML


// Add event listener to each game level
levels.forEach(level => {
    level.addEventListener("click", function () {
        levels.forEach((mode) => mode.classList.remove("selected"))
        this.classList.add("selected");

        let gameLevel =this.innerHTML;
      
        if (gameLevel === "Hard") {            
            squares.forEach((square) => square.classList.remove("hidden"))
        } else {
           squares.forEach((square) => square.classList.add("square"))
        }
     
    })
});

// function to generate random RGB colors
function randomRGB () {
    const red = Math.floor(Math.random () *256);
    const green = Math.floor(Math.random () *256);
    const blue = Math.floor(Math.random () *256);
    const rgbString = "rgb(" + red + "," + green + "," + blue + ")";

    return rgbString;
}
function generateRandomColors(genColor){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < genColor; i++){
    // get random color and push into array
    arr.push(randomColor())
    }
    //return that array
    return arr;
    }
// background color to squares
const startButton = document.getElementById("reset");

startButton.addEventListener("click", function () {
    	for (let i=0; i<squares.length; i++) {

           
            const square = squares[i];
            square.style.backgroundColor = randomRGB();
        }
})

var colors = generateRandomColors(numSquares);

