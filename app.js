let isBeeDriving = false;
let driver = new BeeDriver();

function BeeDriver() {
  this.isDriving = false;

  this.drive = function () {
    this.isDriving = true;
    changeImage();
    setTimeout(() => {
      localStorage.setItem(
        "distance",
        getDistance() + Math.floor(Math.random() * 100)
      );
      writeText();
      this.isDriving = false;
      changeImage();
    }, 2000);
  };

  this.reset = function () {
    localStorage.setItem("distance", 0);
    writeText();
  };
}

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

function changeImage() {
  const image = document.getElementById("car");
  if (driver.isDriving == true) {
    console.log(this.isDriving);
    image.src = "./images/drive.gif";
  } else {
    console.log(this.isDriving);
    image.src = "./images/beecar.png";
  }
}

writeText();
document
  .getElementById("btn-drive")
  .addEventListener("click", () => driver.drive());
document
  .getElementById("btn-reset")
  .addEventListener("click", () => driver.reset());
