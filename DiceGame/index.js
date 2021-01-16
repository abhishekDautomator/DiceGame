alert("Let's start the game -> Who wins between the two");

function generateNumberFrom1To6(){
    return Math.ceil(Math.random()*6);
}

var num1=generateNumberFrom1To6();
var num2=generateNumberFrom1To6();

var randomDiceImg1 ="images/dice" + num1+ ".png";

var randomDiceImg2 ="images/dice" + num2+ ".png";

document.querySelector("#dice1").setAttribute("src",randomDiceImg1);
document.querySelector("#dice2").setAttribute("src",randomDiceImg2);

console.log("Player 1 has got "+num1);
console.log("Player 2 has got "+num2);

if(num1>num2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
  document.querySelector(".invisible").style.visibility='visible';
}
else if(num1<num2){
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
  document.querySelector(".invisible").style.visibility='visible';
}
else{
  document.querySelector("h1").innerHTML="It's a tie!";
}
