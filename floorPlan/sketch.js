function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}
c = false; 
s = false;
let arrX = [0];
let arrY = [0];
let sarrX = [0];
let sarrY = [0];
function draw() {
  //background(220);
  
  fill(255);
  for(let i = 0; i < arrX.length; i++){
    circle(arrX[i], arrY[i], 100);
  }
  for(let i = 0; i < sarrX.length; i++){
    rect(sarrX[i], sarrY[i], 100);
  }
  
  if(!c){
    fill(255);
  }else{
    fill(0);
  }
  circle(50, 50, 100);
  
  if(!s){
    fill(255);
  }else{
    fill(0);
  }
  rect(100, 0, 100);
}

function mousePressed(){
  if(mouseX < 100 && mouseY < 100){
    c = !c; 
  }else if( mouseY < 100 && mouseX > 100 && mouseX < 200)    {
    s = !s; 
  }else if(c){
      arrX.push(mouseX);
      arrY.push(mouseY);
  }else if(s){
    sarrX.push(mouseX);
    sarrY.push(mouseY);
  }
}

//background(220);
//circle(mouseX, mouseY, 100);