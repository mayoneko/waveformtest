var fft;

function setup() {
  createCanvas(1000,300);
  fill(0);
  
  textAlign(CENTER,CENTER);
  textSize(9);
  
  var mic=new p5.AudioIn();
  mic.start();
  
  fft=new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  var waveform=fft.waveform();
  
  background(230);
  for (var i=0;i<waveform.length;i+=10){
  	var x=map(i,0,waveform.length,0,width);
  	var p=map(waveform[i],-1.0,1.0,12354,12531);
  	var y=map(waveform[i],-1.0,1.0,height,0);
  	text(String.fromCodePoint(int(p)),x,y);
  }

/*
  beginShape();
  for (var i=0;i<waveform.length;i++){
  	var x=map(i,0,waveform.length,0,width);
  	var y=map(waveform[i],-1.0,1.0,height,0);
  	vertex(x,y);
  }
  endShape();
*/
}