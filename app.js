let distance = 0;
function writeText() {
  document.getElementById(
    "textbox"
  ).innerHTML = `Little Bee Beelioli has driven ${distance} km.`;
}

function drive() {
  distance =
    parseInt(localStorage.getItem("distance")) +
    Math.floor(Math.random() * 100);
  localStorage.setItem("distance", distance);
  changeImage();
  setTimeout(writeText, 2000);
  setTimeout(changeImage, 2000);
}

function changeImage() {
  if (document.getElementById("car").src.match("./images/beecar.png")) {
    document.getElementById("car").src = "./images/drive.gif";
  } else {
    document.getElementById("car").src = "./images/beecar.png";
  }
}

function reset() {
  localStorage.setItem("distance", 0);
  distance = parseInt(localStorage.getItem("distance"));
  writeText();
}

if (localStorage.getItem("distance") == null) {
  localStorage.setItem("distance", 0);
}

distance = parseInt(localStorage.getItem("distance"));

writeText();
document.getElementById("btn-drive").addEventListener("click", drive);
document.getElementById("btn-reset").addEventListener("click", reset);
