let distance = 0;

function writeText(){
  document.getElementById("textbox").innerHTML = `Little Bee Beelioli has driven ${distance} km.`;
}

function drive(){
distance = parseInt(localStorage.distance) + Math.floor(Math.random()*100);
localStorage.distance=distance;
writeText();
}

writeText();
document.querySelector("button").addEventListener("click",drive);