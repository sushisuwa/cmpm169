let gifs = [];
let songs = [];
let currentGif = 0;
let currentSong = 0;

function preload(){
  tv = loadImage('retrotvpix.png');
  for (let i = 0; i < 5; i++) {
    gifs.push('gif' + i + '.gif');
  }
  
  for (let i = 1; i <= 5; i++) {
    songs.push(loadSound('song' + i + '.mp3'));
  }
}

function setup(){
  createCanvas(600,600);
  displayGif(currentGif);
  songs[currentSong].loop();
  songs[currentSong].setVolume(0.1);
}

function displayGif(index) {
  if (document.getElementById('gif')) {
    document.getElementById('gif').remove();
  }
  
  // Create a new <img> element
  let img = createImg(gifs[index]);
  img.id('gif');
  img.position(77, 70);
  img.size(444, 385); 
}

function draw(){
  image(tv,0,0);
  textSize(20);
  fill(255);
  text('Press keys 1-5 to switch between songs', 115, 40);
}

function keyPressed() {
  if (key >= '1' && key <= '5') {
    let index = int(key) - 1;
    
    if (index >= 0 && index < gifs.length) {
      currentGif = index;
      displayGif(currentGif);
      
      if (songs[currentSong].isPlaying()) {
        songs[currentSong].stop();
      }
      currentSong = index;
      //songs[currentSong].play();
      songs[currentSong].loop();
      songs[currentSong].setVolume(0.1);
    }
  }
}