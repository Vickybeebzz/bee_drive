let distance = 0;

function writeText(){
  document.getElementById("textbox").innerHTML = `Little Bee Beelioli has driven ${distance} km.`;
}

function drive(){
  distance = parseInt(localStorage.distance) + Math.floor(Math.random()*100);
  localStorage.distance=distance;
  writeText();
}

function reset(){
  localStorage.distance=0;
  distance = 0;
  writeText();
}

distance=parseInt(localStorage.distance);
writeText();
document.getElementById("btn-drive").addEventListener("click",drive);
document.getElementById("btn-reset").addEventListener("click",reset);