var sliderred, slidergreen, sliderblue;
var val1, val2, val3;


function preload(){

    
}

function setup() {
    createCanvas(600,600);



    sliderred = createSlider(0, 255, 255,1);
    sliderred.position(10, 50);
    sliderred.style('width', '80px');

    slidergreen = createSlider(0, 255, 255,1);
    slidergreen.position(10, 100);
    slidergreen.style('width', '80px');

    sliderblue = createSlider(0, 255, 255,1);
    sliderblue.position(10, 150);
    sliderblue.style('width', '80px');





}

function draw() {
    val1 = sliderred.value();
    val2 = slidergreen.value();
    val3 = sliderblue.value();
    background(val1,val2,val3);
  
    drawSprites();


}