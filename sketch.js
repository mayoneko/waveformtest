var fft;

function setup() {
  createCanvas(512,256);
  noFill();
  
  var mic=new p5.AudioIn();
  mic.start();
  
  fft=new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  var waveform=fft.waveform();
  
  background(230);
  beginShape();
  for (var i=0;i<waveform.length;i++){
  	var x=map(i,0,waveform.length,0,width);
  	var y=map(waveform[i],-1.0,1.0,height,0);
  	vertex(x,y);
  }
  endShape();
}