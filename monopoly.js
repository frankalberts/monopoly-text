var currPos = 0;
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
    
    if(currPos == b1.plek && b1.verkocht == "no"){
        alert("Je kan dit vastgoed kopen");
}
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

function Vastgoed (verkocht, eigenaar, prijs, huur, huur1, huur2, huur3, huur4, huur5, aantalHuis, hypotheek, plek, naam) {
    this.verkocht = verkocht;
    this.eigenaar = eigenaar;
    this.prijs = prijs;
    this.huur = huur;
    this.huur1 = huur1;
    this.huur2 = huur2;
    this.huur3 = huur3;
    this.huur4 = huur4;
    this.huur5 = huur5;
    this.aantalHuis = aantalHuis;
    this.hypotheel = hypotheek;
    this.plek = plek;
    this.naam
}
function Players (id, positie, balance,) {
    this.id = id;
    this.positie = positie;
    this.balance = balance;
    }
for (var i = 0; i < players; i++){
    
}
var br1 = new Vastgoed(false, false, 60, 2, 10, 30, 90, 160, 250, 0, false, 1, "Ons Dorp - Dorpsstraat");
var br2 = new Vastgoed(false, false, 60, 4, 20, 60, 180, 320, 450, 0, false, 3, "Ons Dorp - Brink");

var lb1 = new Vastgoed(false, false, 100, 6, 30, 90, 270, 400, 550, 0, false, 6, "Arnhem - Steenstraat");
var lb2 = new Vastgoed(false, false, 100, 6, 30, 90, 270, 400, 550, 0, false, 8, "Arnhem - Ketelstraat");
var lb3 = new Vastgoed(false, false, 120, 8, 40, 100, 300, 450, 600, 0, false, 9, "Arnhem - Velperplein");

var rz1 = new Vastgoed(false, false, 140, 10, 50, 150, 450, 625, 750, 0, false, 11, "Haarlem - Barteljorisstraat");
var rz2 = new Vastgoed(false, false, 140, 10, 50, 150, 450, 625, 750, 0, false, 13, "Haarlem - Zijlweg");
var rz3 = new Vastgoed(false, false, 160, 12, 60, 180, 500, 700, 900, 0, false, 14, "Haarlem - Houtweg");

var or1 = new Vastgoed(false, false, 180, 14, 70, 200, 550, 750, 950, 0, false, 16, "Utrecht - Neude");
var or2 = new Vastgoed(false, false, 180, 14, 70, 200, 550, 750, 950, 0, false, 18, "Utrecht - Biltstraat");
var or3 = new Vastgoed(false, false, 200, 16, 80, 220, 600, 800, 1000, 0, false, 19, "Utrecht - Vreeburg");

var rd1 = new Vastgoed(false, false, 220, 18, 90, 250, 700, 875, 1050, 0, false, 21, "Groningen - A-Kerkhof");
var rd1 = new Vastgoed(false, false, 220, 18, 90, 250, 700, 875, 1050, 0, false, 23, "Groningen - Groote markt");
var rd1 = new Vastgoed(false, false, 240, 20, 100, 300, 750, 925, 1100, 0, false, 24, "Groningen - Heerestraat");

var ge1 = new Vastgoed(false, false, 260, 22, 110, 330, 800, 975, 1150, 0, false, 26, "'s Gravenhage - Spui");
var ge2 = new Vastgoed(false, false, 260, 22, 110, 330, 800, 975, 1150, 0, false, 26, "'s Gravenhage - Plein");
var ge3 = new Vastgoed(false, false, 260, 22, 110, 330, 800, 975, 1150, 0, false, 26, "'s Gravenhage - Spui");

var gr1 = new Vastgoed(false, false, 300, 22, 110, 330, 800, 975, 1150, 0, false, 26, "'s Gravenhage - Spui");