//Declared variables
var p1; var s1;
var p2; var s2;
var p3; var s3;
var p4; var s4;
var pTurn = 0;
var pArray = [" "];
// preparing the game with the selected players
function startGame(){
    var select = document.getElementById('players');
    var players = parseInt(select.options[select.selectedIndex].value);
    
    switch(players){
        
        case 1:
        p1 = new Players(1);
        sessionStorage.setItem('p1', JSON.stringify(p1));
        break;
            
        case 2:
        p1 = new Players(1);
        p2 = new Players(2);
        sessionStorage.setItem('p1', JSON.stringify(p1));
        sessionStorage.setItem('p2', JSON.stringify(p2));
        break;
            
        case 3:
        p1 = new Players(1);
        p2 = new Players(2);
        p3 = new Players(3);
        sessionStorage.setItem('p1', JSON.stringify(p1));
        sessionStorage.setItem('p2', JSON.stringify(p2));
        sessionStorage.setItem('p3', JSON.stringify(p3));
        break;
            
        case 4:
        p1 = new Players(1);
        p2 = new Players(2);
        p3 = new Players(3);
        p4 = new Players(4);  
        sessionStorage.setItem('p1', JSON.stringify(p1));
        sessionStorage.setItem('p2', JSON.stringify(p2));
        sessionStorage.setItem('p3', JSON.stringify(p3));
        sessionStorage.setItem('p4', JSON.stringify(p1));
        break;
            
    }
}

function getStorage(){
    s1 = JSON.parse(sessionStorage.p1); pArray.push(s1);
    s2 = JSON.parse(sessionStorage.p2); pArray.push(s2);
    s3 = JSON.parse(sessionStorage.p3); pArray.push(s3);
    s4 = JSON.parse(sessionStorage.p4); pArray.push(s4);
}
function dice(){
    var ranNumA = Math.floor(Math.random() * 6) + 1;
    var ranNumB = Math.floor(Math.random() * 6) + 1;
    var moveSpaces = ranNumA + ranNumB;
    alert (moveSpaces);
    return moveSpaces;
}
function ckPTurn(){
    if(pTurn<pArray.length){
        pTurn++;
    } else if (pTurn>pArray.length){
        pTurn = 1;
    }
    return pArray[pTurn - 1]
}
function movePlayer(x){
    x.positie += dice();
    alert(x.positie);
}
function turn(){
    if(pArray.length>1){
        movePlayer(ckPTurn());
        alert(pArray[1].positie);
        alert(pArray[2].positie);
    }
}
            
                