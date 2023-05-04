
let videofileChaos = "videos/Chaos.mp4"
let videofileExcite = "videos/Excite.mp4"
let videofileFrustration = "videos/Frustration.mp4"
let videofileDefault = "videos/Default.mp4"

let vid;
let playing = true;
let img;
let s ;
let myRec;
let Chaos_song;
let Excite_song;
let Default_song;
let Frustration_song;
let imgchaos
function preload(){
  soundFormats('wav');
  Default_song = loadSound('videos/Default.wav')
  Chaos_song = loadSound('videos/Roadtohome.wav')
  Excite_song = loadSound('videos/Excite.wav')
  Frustration_song = loadSound('videos/Frustration.wav')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();

  vidDefault = createVideo(videofileDefault);
  //vid.size(1024, 1024);
  vidDefault.volume(0);
  vidDefault.loop();
  vidDefault.hide(); // hides the html video loader
  vidDefault.position(0.0);

  vidChaos = createVideo(videofileChaos);
  //vid.size(1024, 1024);
  vidChaos.volume(0);
  vidChaos.loop();
  vidChaos.hide(); // hides the html video loader
  vidChaos.position(0.0);
console.log("hello")

vidFrustration = createVideo(videofileFrustration);
//vid.size(1024, 1024);
vidFrustration.volume(0);
vidFrustration.loop();
vidFrustration.hide(); // hides the html video loader
vidFrustration.position(0.0);

vidExcite = createVideo(videofileExcite);
//vid.size(1024, 1024);
vidExcite.volume(0);
vidExcite.loop();
vidExcite.hide(); // hides the html video loader
vidExcite.position(0.0);



//myRec = new p5.SpeechRec(); // new P5.SpeechRec object

  //myRec.onResult = showResult;
		
 
    myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
    myRec.continuous = true; // do continuous recognition
    myRec.interimResults = true; // allow partial recognition (faster, less accurate)
  
    myRec.start();

    img = vidDefault;

}

function draw() {
  background(220);
  
  s = second();

  
  //imgchaos = vidChaos.get();
  image(img.get(),0, 0,windowWidth,windowHeight); // redraws the video frame by frame in                         p5

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

// function mousePressed() {
//  if (playing) {
//    vid.pause();
//  }
//   else {
//     vid.play();
//   }
//   playing = !playing;
  
// }

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function keyPressed() {
  if ( keyCode === UP_ARROW){
    let fs = fullscreen();
     fullscreen(!fs);
  }
}

function showResult()
	{
		if(myRec.resultValue==true) {
			//background(192, 255, 192);
			//text(myRec.resultString, width/2, height/2);
			console.log("show "+myRec.resultString);
		}
	}

  function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
    //console.log('myRec', myRec)
    let str = myRec.resultString;
    //console.log('str ', str)
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("chaos")!==-1) { 
      actionChaos()
     }
		if(mostrecentword.indexOf("frustration")!==-1) { 
     actionFrustration() 
    }
		if(mostrecentword.indexOf("excitement")!==-1) { 
      actionExcite(); 
    }
	
    if(mostrecentword.indexOf("start")!==-1) { 
      actionStart() 
    }
	
   if(mostrecentword.indexOf("stop")!==-1) {
    actionPause() 
 }
		console.log("chicken"+mostrecentword);
	}


  function actionExcite() {
		console.log("actionStart");
     {
      
      Excite_song.play();
      console.log("play chaos sound")

      img = vidExcite;
    
    }
    //  else {
    //    vid.play();
    //  }
    //  playing = !playing;

  }

  function actionChaos() {
		console.log("actionChaos");
     {
     // vidDefault.hide();
      img = vidChaos;
      //image(imgchaos,0, 0,windowWidth,windowHeight);
      //vidDefault.stop();
      vidChaos.play();
      Chaos_song.play();
      console.log("play chaos sound")
    }
    //  else {
    //    vid.play();
    //  }
    //  playing = !playing;

  }

  function actionFrustration() {
		console.log("actionFrustration");
     {
      vidFrustration.play();
      Frustration_song.play();
      console.log("play Frustration sound")

      img = vidFrustration;
    }
    //  else {
    //    vid.play();
    //  }
    //  playing = !playing;

  }



  function actionStart() {
		console.log("actionStart");
     {
      vidDefault.play();
      Default_song.play();
      console.log("play chaos sound")

      img = vidDefault;
    }
    //  else {
    //    vid.play();
    //  }
    //  playing = !playing;

  }

  function actionPause() {

    vidDefault.pause();
    Default_song.stop();
    Chaos_song.stop();
    Frustration_song.stop();
    Excite_song.stop();
		// console.log("actionStop");
    // if (playing) {
    //   vid.pause();
    // }
    //  else {
    //    vid.play();
    //  }
    //  playing = !playing;
  }

