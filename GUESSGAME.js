var colors = [];
var pickedColor;
var numSquare = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();

function init()
{
    setUpModeButton(); 
    setUpSquares();
    reset();
}

function  reset(){
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = " ";
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
        squares[i].style.display="block";
        squares[i].style.backgroundColor = colors[i];
        }
        else
         {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "black";
}



resetButton.addEventListener("click", function()
{
   reset();
});


for(var i = 0 ; i < squares.length; i++)
{
     //add click listeners to squares
     squares[i].addEventListener("click", function()
     {
        //grab color of clicked square
          var clickedColor = this.style.backgroundColor;  
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "You did it!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";

        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try again!"
        }
    });
}

function changeColors(color)
{
    //loop through all squares
    for(var i = 0; i < squares.length; i++)
    {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() 
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num)
{
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i< num ; i++)
    {
        //get random color and push into arr
        arr.push(randomColor());

    }
    //return that array
    return arr;
}


function randomColor()
{
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

function setUpModeButton(){
    for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function()
    {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquare = 3;
        }else{
            numSquare = 6;
        }
                reset();
  
    });
}
}

function setUpSquares(){
    for(var i = 0 ; i < squares.length; i++)
    {
     
     //add click listeners to squares
     squares[i].addEventListener("click", function()
     {
        //grab color of clicked square
          var clickedColor = this.style.backgroundColor;  
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "You did it!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";

        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try again!"
        }
    });
}
}