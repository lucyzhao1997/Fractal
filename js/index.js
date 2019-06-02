
var c = document.getElementsByTagName("canvas")[0];
var context = c.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = windows.innerHeight
var colors = ["#ffffff","#f9d1f6","#d1ffff","#bbb5ff","#fdffb2"];
var width = $(window).height();
var height = $(window).width();
var numOfFlakes = 20;
var numofBranches = 8;
var time = 2; //2 seconds
var timeCount =0;
function letItSnow(){
    ran =[]
    randomX = []
    randomY = []
    for(var i =0;i<numOfFlakes;i++){
        randomX.push(Math.round(width*i /numOfFlakes))
        randomY.push(Math.round(height*i /numOfFlakes))        
    }
    for (var l =0; l<numOfFlakes; m++){
        var x = Math.floor(Math.random() * randomX.length);
        ran.push(randomX[x]);
        randomX.splice(x, 1);
        var y = Math.floor(Math.random() * randomY.length);
        ran.push(randomY[y]);
        randomY.splice(y, 1);
        ran.push(Math.floor(Math.random() * 60) + 30);
        ran.push(Math.floor(Math.random() * 10) + 6);
        ran.push(
            colors[
                Math.round(
                    (l / colors.length - Math.floor(l / colors.length)) *
                        colors.length
                )
            ]
        );
    }
    draw();
}
function draw() {
    ctx.clearRect(0, 0, width, height);
    for (var j = 0; j < numOfFlakes/2; j++){
        drawSnow(
            timeCount,
            ran[j * 5 + 0],
            ran[j * 5 + 1],
            ran[j * 5 + 2]
        );
    }
    timeCount+= 0.01
    if(timeCount <1){
        windows.setTimeout(draw, time*1000 *0.01);
    }
}
function drawSnow(n,x,y,s) {
     for (var k = 0; k< numofBranches; k++){
         drawBranch(n, x, y,s, 360*k /numofBranches);
     }
}
function drawBranch(n, x, y, s, angle){
    var n_1, n_2;
    if (n < 0.5) {
        n_1 = n * 2;
        n_2 = 0;
    } else {
        n_1 = 1;
        n_2 = n * 2 - 1;
    }
    context.translate(x,y);
    context.rotate(-1 * ang * Math.PI / 180);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(
        s * 2 * n_1 * (n_1 - 1),
        s * 2 * n_1);
    context.stroke();
    ctx.closePath();
    ctx.rotate(ang * Math.PI / 180);
    ctx.translate(-1 * x_st, -1 * y_st);

}
