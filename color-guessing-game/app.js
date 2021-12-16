// color buttons
const redButton = document.getElementById('r');
const greenButton = document.getElementById('g');
const blueButton = document.getElementById('b');

let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");

// array of game levels html collection
const levels = Array.from(document.getElementsByClassName('mode'));

//array of squares
const squares = Array.from(document.getElementsByClassName('square'));


const startButton = document.getElementById('reset');
// background color to squares
startButton.addEventListener("click", function () {
    //generate all new colors       
    const colors = generateRandomColors(squares.length);
    startButton.textContent = "New Colors";

    //messageDisplay.textContent = "";
    for (let i=0; i<squares.length; i++) {
        const square = squares[i];

        square.dataset.rgb_value = JSON.stringify(randomRGB())
        square.style.backgroundColor = setColor(square.dataset.rgb_value);
        console.log(JSON.parse(square.dataset.rgb_value))
    }

    const pickedColor = randomColorPick(squares);
    setHeaderColor(pickedColor);
    console.log(JSON.parse(pickedColor.dataset.rgb_value))
//})
    const correctColor = pickedColor.dataset.rgb_value
    //for(let i = 0; i < squares.length; i++) {
    //add click listeners to squares    
    squares.forEach(square => {
        square.addEventListener("click", function(){
         //grab color of clicked square
        const clickedColor = this.dataset.rgb_value;
        
        //compare color to pickedColor
        console.log(clickedColor, correctColor);

        if(clickedColor == correctColor){
            messageDisplay.textContent = "Correct!";
            startButton.textContent = "Play Again?";
            colorAll(clickedColor);
        
         } else {
            this.style.backgroundColor = "#050505";
            messageDisplay.textContent = "Try Again";
            }
        })

    })      
})

// function to get the selected game level
let gameLevel = levels.find((level) => {
    let levelClasses = Array.from(level.classList);
    return levelClasses.includes("selected");
}).innerHTML

// array of randomly generated colors
let colors = generateRandomColors(squares.length);

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
                //colorDisplay.textContent = pickedColor;
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
                //colorDisplay.textContent = pickedColor;
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";
                   
                    }
                break;

        }
      
       
    })
});




// function to generate random RGB colors
function randomRGB () {
    const red = Math.floor(Math.random () *256);
    const green = Math.floor(Math.random () *256);
    const blue = Math.floor(Math.random () *256);
    const rgbArray = [red,green,blue]
    

    return rgbArray;
}

// function to assign a color dataset to each square

// Add all generated colors to an array
function generateRandomColors(genColor){
    //make an array
    let arrColors = []
    //repeat num times
    for(let i = 0; i < genColor; i++){
        const rgb = randomRGB()
        const rgbString = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    // get random color and push into array
    arrColors.push(rgbString)
    }
    //return that array
    return arrColors;
    }

// Pick a random color from the array of colors.
function randomColorPick(squares){
        //pick a random number
        let randomIndex = Math.floor(Math.random() * squares.length)
        return squares[randomIndex];
        }
function setColor(color) {
    const colors = JSON.parse(color);
    const [r,g,b] = colors;
    const rgbString = "rgb(" + r + ", " + g + ", " + b + ")";

    return rgbString;

}
function setHeaderColor(pickedSquare) {
   const setElementColor = (rgbValues, element) => {
        const [r,g,b] = rgbValues;
        
        element.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
        element.innerHTML = rgbValues.find((rgbValue) => {
            return rgbValue > 0;
        })
   }
    const rgbColors = pickedSquare.dataset.rgb_value;
    const colors = JSON.parse(rgbColors);

    const redBg = [colors[0],0,0];
    const greenBg = [0,colors[1],0];
    const blueBg = [0,0,colors[2]];

    setElementColor(redBg,redButton)
    setElementColor(greenBg,greenButton)
    setElementColor(blueBg,blueButton)
}

function colorAll(color){
            //loop through all squares
            for(let i = 0; i < squares.length; i++){
               
                const colors = JSON.parse(color);
                const [r,g,b] = colors;
                const rgbString = "rgb(" + r + ", " + g + ", " + b + ")";
                           
                
                //change each color to match given color
                squares[i].style.backgroundColor = rgbString;
            }

          

            }

        