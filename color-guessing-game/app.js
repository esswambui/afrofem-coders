// color buttons
const rButton = document.getElementById('r');
const gButton = document.getElementById('g');
const bButton = document.getElementById('b');

// array of game levels html collection
const levels = Array.from(document.getElementsByClassName('mode'));

//array of squares
const squares = Array.from(document.getElementsByClassName('square'));
let numSquares = squares.length; 

const startButton = document.getElementById('reset');

// function to get the selected game level
let gameLevel = levels.find((level) => {
    let levelClasses = Array.from(level.classList);
    return levelClasses.includes("selected");
}).innerHTML

// array of randomly generated colors
let colors = generateRandomColors(numSquares);

var pickedColor = randomColorPick();

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


// background color to squares
startButton.addEventListener("click", function () {
    	for (let i=0; i<squares.length; i++) {
            const square = squares[i];
            square.style.backgroundColor = randomRGB();
        }
})



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
    let arrColors = []
    //repeat num times
    for(let i = 0; i < genColor; i++){
    // get random color and push into array
    arrColors.push(randomRGB())
    }
    //return that array
    return arrColors;
    }

function randomColorPick(){
        //pick a random number
        let randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex];
        }

    