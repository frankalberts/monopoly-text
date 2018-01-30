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
    alert(bord[x].naam);
    alert(x);
}
function rollDice(){
    
}
var i = 0;
function ckDouble(x, y){
    
    if (x == y && i < 3){
        randomNumberA = Math.floor(Math.random() * 6) + 1;
        randomNumberB = Math.floor(Math.random() * 6) + 1;
        randomNumber = randomNumberA + randomNumberB;
        currPos += randomNumber;
        i++;
    } else if (x == y && i == 3){
        p1.positie = 11;
        p1.gevangenis = true;
        document.getElementById("endturn").style.display = "block";
        document.getElementById("gooien").style.display = "none";
        i = 0;
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
    if (p1.gevangenis == true && randomNumberA != randomNumberB && j > 4){
        j++;
        
    } else{
    ckDouble(randomNumberA, randomNumberB);
        if (p1.gevangenis == true){
            
        } else if (p1.gevangenis == true && randomNumberA == randomNumberB){
            movePlayer(randomNumber, player);
        } else{
            movePlayer(randomNumber, player);
        }
    
    ckPos(p1.positie);
    }
    
    document.getElementById('gamelog').innerHTML += tekst;
}


function showBal(x){
    document.getElementById('bal').innerHTML= x.balance;
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

class Veld{
    constructor(){
    this.verkocht = false;
    this.eigenaar = 0;
    this.hypotheek = false;  
    }     
}
class Vastgoed extends Veld{
    constructor(naam, prijs, huur, huur1, huur2, huur3, huur4, huur5){
        super();
        this.naam = naam;
        this.prijs = prijs;
        this.huur = huur;
        this.huur1 = huur1;
        this.huur2 = huur2;
        this.huur3 = huur3;
        this.huur4 = huur4;
        this.huur5 = huur5;
        this.aantalHuis = 0;
    }
}   
class Station extends Veld{
    constructor(naam, prijs, huur, huur1, huur2, huur3){
        super();
        this.naam = naam;
        this.prijs = prijs;
        this.huur = huur;
        this.huur1 = huur1;
        this.huur2 = huur2;
        this.huur3 = huur3;
    }
}    
class Nuts extends Veld{
    constructor(naam, prijs, huur, huur1){
        super();
        this.naam = naam;
        this.prijs = prijs;
        this.huur = huur;
        this.huur1 = huur1;
    }
}
class KansFonds extends Veld{
    constructor(naam){
        super();
        this.naam = naam;
    }
}
class Belasting extends Veld{
    constructor(naam, prijs){
        super();
        this.naam = naam;
        this.prijs = prijs;
    }
}
class Overige extends Veld{
    constructor(naam){
        super();
        this.naam = naam;
    }
}
var bord = [" "];
var start = new Overige("Start"); bord.push(start);
var br1 = new Vastgoed("Ons Dorp - Dorpsstraat", 60, 2, 10, 30, 90, 160, 250); bord.push(br1);
var af1 = new KansFonds("Algemeen Fonds"); bord.push(af1);
var br2 = new Vastgoed("Ons Dorp - Brink", 60, 4, 20, 60, 180, 320, 450); bord.push(br2);
var bel1 = new Belasting("Inkomstenbelasting", 200); bord.push(bel1);
var statZ = new Station("Station Zuid", 200, 25, 50, 100, 200); bord.push(statZ);
var lb1 = new Vastgoed("Arnhem - Steenstraat", 100, 6, 30, 90, 270, 400, 550); bord.push(lb1);
var ks1 = new KansFonds("Kans"); bord.push(ks1);
var lb2 = new Vastgoed("Arnhem - Ketelstraat", 100, 6, 30, 90, 270, 400, 550); bord.push(lb2);
var lb3 = new Vastgoed("Arnhem - Velperplein",120, 8, 40, 100, 300, 450, 600); bord.push(lb3);
var jail = new Overige("Gevangenis"); bord.push(jail);
var rz1 = new Vastgoed("Haarlem - Barteljorisstraat", 140, 10, 50, 150, 450, 625, 750); bord.push(rz1);
var elec = new Nuts("Elektriciteitsbedrijf", 150, 4, 10); bord.push(elec);
var rz2 = new Vastgoed("Haarlem - Zijlweg", 140, 10, 50, 150, 450, 625, 750);bord.push(rz2);
var rz3 = new Vastgoed("Haarlem - Houtweg", 160, 12, 60, 180, 500, 700, 900);bord.push(rz3);
var statW = new Station("Station West", 200, 25, 50, 100, 200); bord.push(statW);
var or1 = new Vastgoed("Utrecht - Neude", 180, 14, 70, 200, 550, 750, 950); bord.push(or1);
var af2 = new KansFonds("Algemeen Fonds"); bord.push(af2);
var or2 = new Vastgoed("Utrecht - Biltstraat", 180, 14, 70, 200, 550, 750, 950); bord.push(or2);
var or3 = new Vastgoed("Utrecht - Vreeburg", 200, 16, 80, 220, 600, 800, 1000); bord.push(or3);
var park = new Overige("Vrij Parkeren"); bord.push(park);
var rd1 = new Vastgoed("Groningen - A-Kerkhof", 220, 18, 90, 250, 700, 875, 1050); bord.push(rd1);
var ks2 = new KansFonds("Kans"); bord.push(ks2);
var rd2 = new Vastgoed("Groningen - Groote Markt", 220, 18, 90, 250, 700, 875, 1050); bord.push(rd2);
var rd3 = new Vastgoed("Groningen - Heerestraat", 240, 20, 100, 300, 750, 925, 1100); bord.push(rd3);
var statN = new Station("Station Noord", 200, 25, 50, 100, 200); bord.push(statN);
var ge1 = new Vastgoed("Den Haag - Spui", 260, 22, 110, 330, 800, 975, 1150); bord.push(ge1);
var ge2 = new Vastgoed("Den Haag - Plein", 260, 22, 110, 330, 800, 975, 1150); bord.push(ge2);
var watr = new Nuts("Waterleiding", 150, 4, 10); bord.push(watr);
var ge3 = new Vastgoed("Den Haag - Lange Poten", 280, 24, 120, 360, 850, 1025, 1200);bord.push(ge3);
var gTJ = new Overige("Ga naar de Gevangenis"); bord.push(gTJ);
var gr1 = new Vastgoed("Rotterdam - Hofplein", 280, 24, 120, 360, 850, 1025, 1200);bord.push(gr1);
var gr2 = new Vastgoed("Rotterdam - Blaak", 280, 24, 120, 360, 850, 1025, 1200);bord.push(gr2);
var af3 = new KansFonds("Algemeen Fonds"); bord.push(af3);
var gr3 = new Vastgoed("Rotterdam - Hofplein", 320, 28, 150, 450, 1000, 1200, 1400); bord.push(gr3);
var statO = new Station("Station Oost", 200, 25, 50, 100, 200); bord.push(statO);
var ks3 = new KansFonds("Kans"); bord.push(ks3);
var bl1 = new Vastgoed("Amsterdam - Leidsestraat", 350, 35, 175, 500, 1100, 1300, 1500); bord.push(bl1);
var bel2 = new Belasting("Extra Belasting", 200); bord.push(bel2);
var bl2 = new Vastgoed("Amsterdam - Kalverstraat", 400, 50, 200, 600, 1400, 1700, 2000); bord.push(bl2);

    