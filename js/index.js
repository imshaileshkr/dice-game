
//                ******************************* For Player 1 ***************************************


var randomNumber1 = Math.floor(Math.random() *6) +1;  //  Find the Random number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 +".png"; //  For finding the random image from dice1.png to dice6.png

var randomImageSource = "img/"+randomDiceImage;  // img/dice1.png  to img/dice6.png

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//                ******************************* For Player 2 ***************************************


// var randomNumber2 = Math.floor(Math.random()*6) +1; 

// var randomDiceImage = "dice"+randomNumber2+".png";

// var  randomImageSource = "img/"+randomDiceImage;

// var image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1; 

var  randomImageSource2 = "img/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
function refreshPage(){
				
					location.reload();
				}				
			