var player = document.getElementById('player');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var xPos = 0;
var yPos = 0;

function move(e){
    
    //alert(e.keyCode);
    if(e.keyCode == 39){
        xPos+=10;
        player.style.left = xPos + 'px';
        if(xPos>=793){
            xPos-=10
        }
    }
    if(e.keyCode == 37){
        xPos-=10;
        player.style.left = xPos + 'px';
        if(xPos<=10){
            xPos+=10
        }
    }
    if(e.keyCode == 38){
        yPos-=10;
        player.style.top = yPos +'px';
        if(yPos<=10){
            yPos+=10
        }
    }
    if(e.keyCode == 40){
        yPos+=10;
        player.style.top = yPos +'px';
        if(yPos>=493){
            yPos-=10
        }
    }
}

document.onkeydown = move;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);