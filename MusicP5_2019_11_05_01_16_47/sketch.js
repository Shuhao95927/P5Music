let FMsynth;
let AMsynth;
let cymbal;

let loop,loop2,loop3;
let part;

let counter = 0;
let PosterCounter = 0;

let StrangerThings,StrangerThingsP1,StrangerThingsP2;

function preload() {
  StrangerThings = loadImage('assets/STlogo1.jpg');
  StrangerThingsP1 = loadImage('assets/STposter1.jpg');
  StrangerThingsP2 = loadImage('assets/STposter2.jpg');
}

function setup() {
  createCanvas(1600, 900);
  image(StrangerThings, 0, 0,1600,900);
  
  FMsynth = new Tone.FMSynth().toMaster();
  
  AMsynth = new Tone.AMSynth().toMaster();
  
  cymbal = new Tone.MembraneSynth().toMaster();

  loop = new Tone.Loop(playSound,'8n');
  loop2 = new Tone.Loop(playSoundA,'8n');
  loop3 = new Tone.Loop(playSoundB,'8n');
  
  loop.start(1);
  Tone.Transport.start();
  loop.stop(8);
  
  
}

function mousePressed(){
  PosterCounter = PosterCounter+1;
  if(PosterCounter===1){
   setTimeout(function(){  loop2.start(1);}, 500);
       setTimeout(function(){  loop2.stop(0);}, 7000);
    // playSoundA();
  }
  if(PosterCounter===2){
   setTimeout(function(){  loop3.start(1);}, 500);
       setTimeout(function(){  loop3.stop(0);}, 14000);
  }
  if(PosterCounter===3){
    setTimeout(function(){  loop.start(1);}, 500);
       setTimeout(function(){  loop.stop(0);}, 7000);    PosterCounter=0;
  }
}



function playSound(){
  if(counter%2===0){
  AMsynth.triggerAttackRelease('C1', '3n');

  }
  
  if(counter===0){
  FMsynth.triggerAttackRelease("C2", "6n");
  cymbal.triggerAttackRelease('C1','3n');


  }
   if(counter===1){
  FMsynth.triggerAttackRelease("E2", "6n");
  cymbal.triggerAttackRelease('C1','3n');


  }
   if(counter===2){
  FMsynth.triggerAttackRelease("G2", "6n"); 

  }
   if(counter===3){
  FMsynth.triggerAttackRelease("B2", "6n");

   }
   if(counter===4){
  FMsynth.triggerAttackRelease("C3", "6n");
  cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===5){
  FMsynth.triggerAttackRelease("B2", "6n");
  cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===6){
  FMsynth.triggerAttackRelease("G2", "4n");
   
  }
   if(counter===7){
  FMsynth.triggerAttackRelease("E2", "4n");
  }
  
  counter = (counter+1)%8;

}

function playSoundA(){
  
   image(StrangerThingsP1, 0, 0,1600,900);
  
  if(counter%2===0){
  AMsynth.triggerAttackRelease('C1', '3n');

  }
  
  if(counter===0){
  FMsynth.triggerAttackRelease("C2", "6n");
  cymbal.triggerAttackRelease('C1','3n');

  }
   if(counter===1){
  FMsynth.triggerAttackRelease("E2", "6n");
  cymbal.triggerAttackRelease('C1','3n');
  }
   
  if(counter===2){
  FMsynth.triggerAttackRelease("G2", "6n"); 

  }
   if(counter===3){
  FMsynth.triggerAttackRelease("B2", "6n");
    
   }
   if(counter===4){
  FMsynth.triggerAttackRelease("C3", "6n");
  cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===5){
  FMsynth.triggerAttackRelease("B3", "6n");
  cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===6){
  FMsynth.triggerAttackRelease("C4", "6n");
   
  }
   if(counter===7){
  FMsynth.triggerAttackRelease("B3", "6n");

   }
  
  if(counter===8){
  FMsynth.triggerAttackRelease("G3", "6n");
  cymbal.triggerAttackRelease('C1','3n');

   }
  
  if(counter===9){
  FMsynth.triggerAttackRelease("E3", "6n");
  cymbal.triggerAttackRelease('C1','3n');

  }
  
   if(counter===10){
  FMsynth.triggerAttackRelease("C3", "6n");
   }
  
   if(counter===11){
  FMsynth.triggerAttackRelease("B2", "6n");
   }
  
   if(counter===12){
  FMsynth.triggerAttackRelease("G2", "6n");
  cymbal.triggerAttackRelease('C1','3n');

   }
  
  if(counter===13){
  FMsynth.triggerAttackRelease("E2", "6n");
  cymbal.triggerAttackRelease('C1','3n');

  }
  
    if(counter===14){
  FMsynth.triggerAttackRelease("C2", "6n");
   }
  
  counter = (counter+1)%16;
  console.log(counter);

}

function playSoundB(){
   image(StrangerThingsP2, 0, 0,1600,900);

  if(counter%2===0){
  AMsynth.triggerAttackRelease('C1', '3n');

  }
  
  if(counter===0){
  FMsynth.triggerAttackRelease("C1", "6n");
  AMsynth.triggerAttackRelease("C2", "6n");
  
  cymbal.triggerAttackRelease('C1','3n');


  }
   if(counter===1){
  FMsynth.triggerAttackRelease("E1", "6n");
  AMsynth.triggerAttackRelease("E2", "6n");

  cymbal.triggerAttackRelease('C1','3n');


  }
   if(counter===2){
  FMsynth.triggerAttackRelease("G1", "6n"); 
  AMsynth.triggerAttackRelease("G2", "6n"); 
  }
   if(counter===3){
  FMsynth.triggerAttackRelease("B1", "6n");
  AMsynth.triggerAttackRelease("B2", "6n");

   }
   if(counter===4){
  FMsynth.triggerAttackRelease("C2", "6n");
  AMsynth.triggerAttackRelease("C3", "6n");

     cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===5){
  FMsynth.triggerAttackRelease("B1", "6n");
  AMsynth.triggerAttackRelease("B2", "6n");

  cymbal.triggerAttackRelease('C1','3n');


   }
   if(counter===6){
  FMsynth.triggerAttackRelease("G1", "6n");
  AMsynth.triggerAttackRelease("G2", "6n");

   
  }
   if(counter===7){
  FMsynth.triggerAttackRelease("E1", "6n");
  AMsynth.triggerAttackRelease("E2", "6n");

  }
  
  counter = (counter+1)%8;
}



