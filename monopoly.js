var currPos = 1;
var bal = 1500;
var players = prompt("Hoeveel spelers? (1-4)")
var whatPlayer = 0;

function movePlayer(x){
        currPos += x;
        if (currPos > 39){
            currPos = currPos-39;
            bal = bal + 200;
        }
}
function ckPos(x){
    alert(x);
}

var i = 0;
function ckDouble(x, y){
    
    if (x == y && i < 2){
        randomNumberA = Math.floor(Math.random() * 6) + 1;
        randomNumberB = Math.floor(Math.random() * 6) + 1;
        randomNumber = randomNumberA + randomNumberB;
        currPos += randomNumber;
        i++;
    } else if (x == y && i == 2){
        currPos = 40;
    }
    else{
        document.getElementById("gooien").style.display = "none";
        i = 0;
        document.getElementById("endturn").style.display = "block";
    }
    
}

function playerTurn(){
    var randomNumberA = Math.floor(Math.random() * 6) + 1;
    var randomNumberB = Math.floor(Math.random() * 6) + 1;
    randomNumber = randomNumberA + randomNumberB;
    var tekst = "Je gooide " + randomNumberA + " en " + randomNumberB + "<br>";
    alert(randomNumberA);
    alert(randomNumberB);
    
    movePlayer(randomNumber);
    ckPos(currPos);
    ckDouble(randomNumberA, randomNumberB);
    
    document.getElementById('gamelog').innerHTML += tekst;
}

function showBal(){
    document.getElementById('bal').innerHTML= bal;
    setTimeout('showBal()', 1000);
}
function endTurn(){
        document.getElementById("gooien").style.display = "block";
        document.getElementById("endturn").style.display = "none";
}
function showPlayer(){
    
}