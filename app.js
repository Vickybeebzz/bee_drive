let distance = 0;

function writeText(){
  document.getElementById("textbox").innerHTML = `Little Bee Beelioli has driven ${distance} km.`;
}

function drive(){
  distance = parseInt(localStorage.getItem("distance")) + Math.floor(Math.random()*100);
  localStorage.setItem("distance",distance);
  writeText();
}

function reset(){
  localStorage.setItem("distance",0);
  distance = parseInt(localStorage.getItem("distance"));
  writeText();
}

if(parseInt(localStorage.getItem("distance") < 0)){
localStorage.setItem("distance",0);
};

distance = parseInt(localStorage.getItem("distance"));

writeText();
document.getElementById("btn-drive").addEventListener("click",drive);
document.getElementById("btn-reset").addEventListener("click",reset);