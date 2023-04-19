

let vid;
let playing = true;

let s ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();

  vid = createVideo("Untitled.mp4");
  //vid.size(1024, 1024);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  vid.position(0.0);
  
  

}

function draw() {
  background(220);
  
  s = second();

  let img = vid.get();
  image(img,0, 0,windowWidth,windowHeight); // redraws the video frame by frame in                         p5

  //textSize(40);
  //counter = nf(vid.time(), 0, 2); // first argument is decimal places to the left (use zero to default to places necessary)
  //text(counter, 10, 300);
  //fill('white');
  //textSize(30);
  //text( s, 100, 100)
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function keyPressed() {
  if ( keyCode === UP_ARROW){
    let fs = fullscreen();
     fullscreen(!fs);
  }
}