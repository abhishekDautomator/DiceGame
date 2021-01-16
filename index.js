var player1name=prompt("Enter player 1 name");
var player2name=prompt("Enter player 2 name");

function generateNumberFrom1To6(){
    return Math.ceil(Math.random()*6);
}

var num1=generateNumberFrom1To6();
var num2=generateNumberFrom1To6();

var randomDiceImg1 ="images/dice" + num1+ ".png";

var randomDiceImg2 ="images/dice" + num2+ ".png";

document.querySelector(".playerTxt1").innerHTML=player1name;
document.querySelector(".playerTxt2").innerHTML=player2name;
document.querySelector("#dice1").setAttribute("src",randomDiceImg1);
document.querySelector("#dice2").setAttribute("src",randomDiceImg2);

console.log(player1name+" has got "+num1);
console.log(player2name+" has got "+num2);

if(num1>num2){
  document.querySelector("h1").innerHTML="🚩 Hurray "+player1name+" won!";
  document.querySelector(".invisible").style.visibility='visible';
}
else if(num1<num2){
  document.querySelector("h1").innerHTML="🚩 Hurray "+player2name+" won!";
  document.querySelector(".invisible").style.visibility='visible';
}
else{
  document.querySelector("h1").innerHTML="It's a tie!";
}

function refreshPage(){
    window.location.reload();
}
