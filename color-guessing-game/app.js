// color buttons
const rButton = document.getElementById('r');
const gButton = document.getElementById('g');
const bButton = document.getElementById('b');

let colorDisplay = document.querySelector("#color-display");

// array of game levels html collection
const levels = Array.from(document.getElementsByClassName('mode'));

//array of squares
let squares = Array.from(document.getElementsByClassName('square'));


const startButton = document.getElementById('reset');

// function to get the selected game level
let gameLevel = levels.find((level) => {
    let levelClasses = Array.from(level.classList);
    return levelClasses.includes("selected");
}).innerHTML

// array of randomly generated colors
let colors = generateRandomColors(squares.length);

var pickedColor = randomColorPick();

// Add event listener to each game level
levels.forEach(level => {
    level.addEventListener("click", function () {
        levels.forEach((mode) => mode.classList.remove("selected"))
        this.classList.add("selected");

        let gameLevel =this.innerHTML;
        console.log(gameLevel)
        

        switch (gameLevel) {
            case "Easy":
                const numSquares = squares.length/2
                //let slicedSquares = squares.slice(numSquares);
                //slicedSquares.forEach((square) => square.classList.add("hidden"))
                colors = generateRandomColors(numSquares);
                //reset winning color
                pickedColor = randomColorPick();
                //change display to show new picked color
                colorDisplay.textContent = pickedColor;
                for(let i = 0; i < squares.length; i++){
                    if(colors[i]){
                        squares[i].style.background = colors[i];
                        } else {
                        //squares[i].className += "hidden";      
                        squares[i].style.display = "none";                }
                }                
                break;
            case "Hard":
                //squares.forEach((square) => square.classList.remove("hidden"))
                const allSquares = squares.length;
                colors = generateRandomColors(allSquares);
                //reset winning color
                pickedColor = randomColorPick();
                //change display to show new picked color
                colorDisplay.textContent = pickedColor;
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";
                   
                    }
                break;

        }
      
        /*if (gameLevel === "Hard") {            
            squares.forEach((square) => square.classList.remove("hidden"))
        } else {
           squares.forEach((square) => square.classList.add("square"))
        }*/
     
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

// Add all generated colors to an array
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

// Pick a random color from the array of colors.
function randomColorPick(){
        //pick a random number
        let randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex];
        }

    