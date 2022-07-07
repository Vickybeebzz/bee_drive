function getDistance() {
  let distance = localStorage.getItem("distance");
  if (distance == null) {
    return 0;
  } else return parseInt(distance);
}

function writeText() {
  document.getElementById(
    "textbox"
  ).innerHTML = `Little Bee Beelioli has driven ${getDistance()} km.`;
}

function drive() {
  localStorage.setItem(
    "distance",
    getDistance() + Math.floor(Math.random() * 100)
  );
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
  writeText();
}

writeText();
document.getElementById("btn-drive").addEventListener("click", drive);
document.getElementById("btn-reset").addEventListener("click", reset);
