var player = document.getElementById('player');
var canvas = document.getElementById('canvas');

var xPos = 0;
var yPos = 0;

function move(e){
    
    //alert(e.keyCode);
    if(e.keyCode == 39){
        xPos+=10;
        player.style.left = xPos + 'px';
        if(xPos>=790){
            xPos-=10
        }
    }
    if(e.keyCode == 37){
        xPos-=10;
        player.style.left = xPos + 'px';
        if(xPos<=0){
            xPos+=10
        }
    }
    if(e.keyCode == 38){
        yPos-=10;
        player.style.top = yPos +'px';
        if(yPos<=0){
            yPos+=10
        }
    }
    if(e.keyCode == 40){
        yPos+=10;
        player.style.top = yPos +'px';
        if(yPos>=490){
            yPos-=10
        }
    }
}

document.onkeydown = move;
