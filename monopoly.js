var currPos = 0;
var bal = 1500;
var players = prompt("Hoeveel spelers? (1-4)")
var whatPlayer = 0;

function movePlayer(x, player){
        player.positie += x;
        if (player.positie > 39){
            player.positie = player.positie-39;
            player.balance = player.balance + 200;
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

function playerTurn(player){
    var randomNumberA = Math.floor(Math.random() * 6) + 1;
    var randomNumberB = Math.floor(Math.random() * 6) + 1;
    randomNumber = randomNumberA + randomNumberB;
    var tekst = "Je gooide " + randomNumberA + " en " + randomNumberB + "<br>";
    alert(randomNumberA);
    alert(randomNumberB);
    
    movePlayer(randomNumber, player);
    ckPos(p1.positie);
    ckDouble(randomNumberA, randomNumberB);
    
    document.getElementById('gamelog').innerHTML += tekst;
    
}

function showBal(){
    document.getElementById('bal').innerHTML= bal;
    setTimeout('showBal()', 1000);
}

var i = 1;
function endTurn(){
    
    if (i < players){
        i++;
    } else if (i > players){
        i = 0;
    }
        document.getElementById("gooien").style.display = "block";
        document.getElementById("endturn").style.display = "none";
    return i;
}
                
function showPlayer(){
    
}
var arrPlek = []

//function Vastgoed (verkocht, eigenaar, prijs, huur, huur1, huur2, huur3, huur4, huur5, aantalHuis, hypotheek, plek, naam) {
//    this.verkocht = false;
//    this.eigenaar = 0;
//    this.prijs = prijs;
//    this.huur = huur;
//    this.huur1 = huur1;
//    this.huur2 = huur2;
//    this.huur3 = huur3;
//    this.huur4 = huur4;
//    this.huur5 = huur5;
//    this.aantalHuis = 0;
//    this.hypotheek = false;
//    this.plek = plek;
//    this.naam = naam;
//    arrPlek[this.plek] = this.naam;
//    
//    
//}


function Players (id, positie, balance, gevangenis) {
    this.id = id;
    this.positie = positie;
    this.balance = balance;
    this.gevangenis = gevangenis;
    }

switch(players){
        case "1":
        var p1 = new Players(1, 1, 1500, false);
        break;
        case "2":
        var p1 = new Players(1, 1, 1500, false);
        var p2 = new Players(2, 1, 1500, false);
        break;
        case "3":
        var p1 = new Players(1, 1, 1500, false);
        var p2 = new Players(2, 1, 1500, false);
        var p3 = new Players(3, 1, 1500, false);
        break;
        case "4":
        var p1 = new Players(1, 1, 1500, false);
        var p2 = new Players(2, 1, 1500, false);
        var p3 = new Players(3, 1, 1500, false);
        var p4 = new Players(4, 1, 1500, false);
        break;
}

//var br1 = new Vastgoed(false, false, 60, 2, 10, 30, 90, 160, 250, 0, false, 1, "Ons Dorp - Dorpsstraat");
//var br2 = new Vastgoed(false, false, 60, 4, 20, 60, 180, 320, 450, 0, false, 3, "Ons Dorp - Brink");
//
//var lb1 = new Vastgoed(false, false, 100, 6, 30, 90, 270, 400, 550, 0, false, 6, "Arnhem - Steenstraat");
//var lb2 = new Vastgoed(false, false, 100, 6, 30, 90, 270, 400, 550, 0, false, 8, "Arnhem - Ketelstraat");
//var lb3 = new Vastgoed(false, false, 120, 8, 40, 100, 300, 450, 600, 0, false, 9, "Arnhem - Velperplein");
//
//var rz1 = new Vastgoed(false, false, 140, 10, 50, 150, 450, 625, 750, 0, false, 11, "Haarlem - Barteljorisstraat");
//var rz2 = new Vastgoed(false, false, 140, 10, 50, 150, 450, 625, 750, 0, false, 13, "Haarlem - Zijlweg");
//var rz3 = new Vastgoed(false, false, 160, 12, 60, 180, 500, 700, 900, 0, false, 14, "Haarlem - Houtweg");
//
//var or1 = new Vastgoed(false, false, 180, 14, 70, 200, 550, 750, 950, 0, false, 16, "Utrecht - Neude");
//var or2 = new Vastgoed(false, false, 180, 14, 70, 200, 550, 750, 950, 0, false, 18, "Utrecht - Biltstraat");
//var or3 = new Vastgoed(false, false, 200, 16, 80, 220, 600, 800, 1000, 0, false, 19, "Utrecht - Vreeburg");
//
//var rd1 = new Vastgoed(false, false, 220, 18, 90, 250, 700, 875, 1050, 0, false, 21, "Groningen - A-Kerkhof");
//var rd2 = new Vastgoed(false, false, 220, 18, 90, 250, 700, 875, 1050, 0, false, 23, "Groningen - Groote markt");
//var rd3 = new Vastgoed(false, false, 240, 20, 100, 300, 750, 925, 1100, 0, false, 24, "Groningen - Heerestraat");
//
//var ge1 = new Vastgoed(false, false, 260, 22, 110, 330, 800, 975, 1150, 0, false, 26, "'s Gravenhage - Spui");
//var ge2 = new Vastgoed(false, false, 260, 22, 110, 330, 800, 975, 1150, 0, false, 27, "'s Gravenhage - Plein");
//var ge3 = new Vastgoed(false, false, 280, 24, 120, 360, 850, 1025, 1200, 0, false, 29, "'s Gravenhage - Spui");
//
//var gr1 = new Vastgoed(false, false, 300, 26, 130, 390, 900, 1100, 1275, 0, false, 31, "Rotterdam - Hofplein");
//var gr2 = new Vastgoed(false, false, 300, 26, 130, 390, 900, 1100, 1275, 0, false, 32, "Rotterdam - Blaak");
//var gr3 = new Vastgoed(false, false, 320, 28, 150, 450, 1000, 1200, 1400, 0, false, 34, "Rotterdam - Hofplein");
//
//var bl1 = new Vastgoed(false, false, 350, 35, 175, 500, 1100, 1300, 1500, 0, false, 37, "Amsterdam - Leidsestraat");
//var bl2 = new Vastgoed(false, false, 400, 50, 200, 600, 1400, 1700, 2000, 0, false, 39, "Amsterdam - Kalverstraat");

//console.log(arrPlek[39]);
    
    
class Veld{
    constructor(){
    this.verkocht = false;
    this.eigenaar = 0;
    this.hypotheek = false;  
    }     
}
class Vastgoed extends Veld{
    constructor(naam){
        super();
        this.aantalHuis = 0;
        this.naam = naam;
    }
}   
class Station extends Veld{
    constructor(naam){
        super();
        
    }
}    
class Nuts extends Veld{
    constructor(naam){
        super();
        
    }
}
class KansFonds extends Veld{
    constructor(naam){
        super();
        
    }
}
class Belasting extend Veld{
    
}

var d = new Vastgoed("Blaak")
alert(d.naam);
var bord = [];
    
    