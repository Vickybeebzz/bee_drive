let isBeeDriving = false;

function getDistance() {
  const distance = localStorage.getItem("distance");
  if (distance == null) {
    return 0;
  }
  return parseInt(distance);
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
  isBeeDriving = true;
  changeImage();
  setTimeout(writeText, 2000);
  setTimeout((isBeeDriving = false), 2000);
  setTimeout(changeImage, 2000);
}

function changeImage() {
  const image = document.getElementById("car");

  if (isBeeDriving == true) {
    image.src = "./images/drive.gif";
  } else {
    image.src = "./images/beecar.png";
  }
}

function reset() {
  localStorage.setItem("distance", 0);
  writeText();
}

writeText();
document.getElementById("btn-drive").addEventListener("click", drive);
document.getElementById("btn-reset").addEventListener("click", reset);
