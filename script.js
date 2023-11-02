class BodySegment {
    constructor(newX, newY, deg, index){
        this.newX = newX
        this.newY = newY
        this.deg = deg
 this.r= Math.floor(255-255/26*index) 
 this.b= Math.floor(0+255/26*index)
 this.color=`rgb(${this.r}, 0, ${this.b})`
ctx.save();
//Aktiver translet efter konstruktion!
ctx.translate(newX, newY,); 
ctx.rotate(deg);
ctx.restore();
}
update(ctx){
    ctx.fillStyle = this.color
        //Spuares til Class
        ctx.save();
        ctx.translate(this.newX, this.newY,);
        ctx.rotate(this.deg);
        ctx.beginPath();
        ctx.fillRect(-60, -60, 120, 120);
        ctx.closePath();
        
        //Legs til class
        //Leg R
        ctx.beginPath();
        ctx.moveTo(60, -60);
        ctx.lineTo(125, -89);
        ctx.lineTo(60,-28);
        ctx.fill();
        ctx.closePath();
        //Leg L
        ctx.beginPath();
        ctx.moveTo(-60, -60);
        ctx.lineTo(-125, -89);
        ctx.lineTo(-60,-28);
        ctx.fill();
        ctx.closePath();
        //Toe R
        ctx.beginPath
        ctx.moveTo(125, -89);
        ctx.lineTo(150,-74);
        ctx.lineTo(80,-67);
        ctx.fill();
        ctx.closePath();
        //Toe L
        ctx.beginPath
        ctx.moveTo(-125, -89);
        ctx.lineTo(-150,-74);
        ctx.lineTo(-80,-67);
        ctx.fill();
        ctx.closePath();
        
        ctx.restore();

    }

}

//Røv X og Y
let røvX = 950
let røvY = 742
let mouseX, mouseY, dX, dY, dist




//Intro
let canvas = document.querySelector("#my-canvas")
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d")

//Body Segmenterlet Body = []

let Body = []

let test = new BodySegment(937, 594, (-1 * Math.PI)/180, 24)
Body.push(test);
test = new BodySegment(947, 506, (7 * Math.PI)/180, 23)
console.log(Body);
Body.push(test);
test = new BodySegment(969, 410, (12 * Math.PI)/180, 22)
Body.push(test);
test = new BodySegment(974, 315, (-6 * Math.PI)/180, 21)
Body.push(test);
test = new BodySegment(950, 220, (-25 * Math.PI)/180, 20)
Body.push(test);
test = new BodySegment(895, 141, (-43 * Math.PI)/180, 19)
Body.push(test);
test = new BodySegment(820, 87, (-67 * Math.PI)/180, 18)
Body.push(test);
test = new BodySegment(735, 73, (-87 * Math.PI)/180, 17)
Body.push(test);
test = new BodySegment(653, 84, (-102 * Math.PI)/180, 16)
Body.push(test);
test = new BodySegment(565, 128, (-127 * Math.PI)/180, 15)
Body.push(test);
test = new BodySegment(512, 195, (-155 * Math.PI)/180, 14)
Body.push(test);
test = new BodySegment(490, 286, (-175 * Math.PI)/180, 13)
Body.push(test);
test = new BodySegment(506, 380, (-195 * Math.PI)/180, 12)
Body.push(test);
test = new BodySegment(550, 467, (-217 * Math.PI)/180, 11)
Body.push(test);
test = new BodySegment(615, 547, (-220 * Math.PI)/180, 10)
Body.push(test);
test = new BodySegment(667, 635, (-200 * Math.PI)/180, 9)
Body.push(test);
test = new BodySegment(687, 732, (-180 * Math.PI)/180, 8)
Body.push(test);
test = new BodySegment(666, 834, (-160 * Math.PI)/180, 7)
Body.push(test);
test = new BodySegment(602, 899, (-120 * Math.PI)/180, 6)
Body.push(test);
test = new BodySegment(507, 924, (-90 * Math.PI)/180, 5)
Body.push(test);
test = new BodySegment(402, 911, (-70 * Math.PI)/180, 4)
Body.push(test);
test = new BodySegment(305, 870, (-55 * Math.PI)/180, 3)
Body.push(test);
test = new BodySegment(227, 790, (-36 * Math.PI)/180, 2)
Body.push(test);
test = new BodySegment(172, 695, (-22 * Math.PI) / 180, 1)
Body.push(test);
console.log(test)



//Draw function
function draw(){
ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

Body.forEach((element) => element.update(ctx))


//ctx.translate(540, 540);
//Deaktiver efter konstruktion

//Intro assignment
/*ctx.fillStyle = "#CC5500";
//ctx.fillRect(50, 50, 500, 350);
ctx.fillRect(150, 100, 400, 400);

let squareWidth = 100 ;
let squarePadding = 30;
let numSquares = 5;


for (let i=0; i < numSquares; i++) {
    ctx.fillRect((squareWidth + squarePadding) * i, 800, squareWidth, squareWidth);

}

ctx.beginPath();
ctx.fillStyle = '#ff5566'
ctx.arc(300, 300, 100, 0, Math.PI*2);
ctx.fill();
*/



//Album Cover
//Mus function
clickedPointLabelEl = document.getElementById('clicked-coordinate-label');

function refreshCoordinate(e){
    clickedPointX = e.layerX - 9 ;
    clickedPointY = e.layerY - 80 ;
    clickedPoint = clickedPointX + "," + clickedPointY;
    clickedPointLabelEl.innerHTML = clickedPoint;
}

canvas.addEventListener('click', refreshCoordinate);



//Hale
ctx.beginPath();
ctx.fillStyle = "#0000ff"
ctx.fillRect(899, 650, 80, 80)
ctx.closePath();

/*ctx.beginPath();
ctx.fillStyle = "#000ff"
ctx.rotate((14 * Math.PI) / 180);
ctx.fillRect(1047, 490, 80, 80)
ctx.closePath();
ctx.setTransform(1, 0, 0, 1, 0, 0); */

//Titel
ctx.beginPath();
let fontface = new FontFace('ArchivoBlack', 'url(Archivo_Black/ArchivoBlack-Regular.ttf)');
document.fonts.add(fontface);

fontface.load().then(()=>{
});
ctx.fillStyle = "rgb(221,122,189, 0.7)"
    ctx.font = "180px ArchivoBlack"
    ctx.fillText ("step on my", -3, 900)
    ctx.fillStyle = "rgba(221,122,189, 0.4)"
    ctx.font = "455px ArchivoBlack"
    ctx.fillText ("toes", -2, 1120)
ctx.closePath();

//Kunstner
ctx.beginPath();
let fontface2 = new FontFace('Kenia', 'url(Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf)');
document.fonts.add(fontface2);

fontface2.load().then(()=>{
   
});
ctx.fillStyle ="#dd7abd"
ctx.font = "40px Kenia"
ctx.fillText ("backward", 20, 50)
ctx.font ="40px Kenia"
ctx.fillText ("runners", 670, 350);


ctx.closePath();

ctx.fillStyle = "#0000ff"
//Klo L
ctx.beginPath();
ctx.moveTo(938, 657);
ctx.lineTo(825, 976);
ctx.lineTo(899, 658);
ctx.fill();
ctx.closePath();
//Klo R
ctx.beginPath();
ctx.moveTo(930, 657);
ctx.lineTo(1004, 978)
ctx.lineTo(976, 655);
ctx.fill();
ctx.closePath();
//Spids L
ctx.beginPath();
ctx.moveTo(845, 920);
ctx.lineTo(860, 1020)
ctx.lineTo(825, 976);
ctx.fill();
ctx.closePath();
//Spids R
ctx.beginPath();
ctx.moveTo(993, 922);
ctx.lineTo(960, 1030);
ctx.lineTo(1004, 978);
ctx.fill();
ctx.closePath();



//Følehorn R
ctx.beginPath();
ctx.fillStyle = "#ff0000"
ctx.moveTo(130, 546);
ctx.lineTo(314, 120);
ctx.lineTo(156, 541);
ctx.fill();
ctx.closePath();
//Følehorn L
ctx.beginPath();
ctx.fillStyle = "#ff0000"
ctx.moveTo(130, 547);
ctx.lineTo(36, 151);
ctx.lineTo(110, 548);
ctx.fill();
ctx.closePath();
//Føle spids R
ctx.beginPath();
ctx.fillStyle = "#ff0000"
ctx.moveTo(314, 120);
ctx.lineTo(363, 92);
ctx.lineTo(301, 150);
ctx.fill();
ctx.closePath();
//Følespids L
ctx.beginPath();
ctx.fillStyle = "#ff0000"
ctx.moveTo(37, 155);
ctx.lineTo(70, 100);
ctx.lineTo(47, 202);
ctx.fill();
ctx.closePath();

//Squares test 1
ctx.beginPath();
ctx.fillStyle = "#ff0000"
ctx.rotate((-8 * Math.PI) / 180);
ctx.fillRect(2, 555, 110, 110)
ctx.closePath();
//Rotér tilbage
ctx.setTransform(1, 0, 0, 1, 0, 0); 





//Klo i bevægelse
let dX = røvX-mouseX
let dY = røvY-mouseY
let dist = Math.sqrt(Math.pow(dY,2)+Math.pow(dX,2))
console.log(dist);

requestAnimationFrame(draw)

}
draw();



canvas.addEventListener("mousemove", (e)=>{
//console.log(e.x, e.y);
mouseX = e.x
mouseY = e.y

})




//Noter
//Klo i forgrund?
//Animér følehorn og klo

