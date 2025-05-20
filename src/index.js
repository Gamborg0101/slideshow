require("./style.css");

const pic1 = document.getElementById("picture1");
const pic2 = document.getElementById("picture2");
const pic3 = document.getElementById("picture3");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

const dots = document.getElementsByClassName("dot");

let counter = 0;

let pictures = [pic1, pic2, pic3];

for (let n = 0; n < dots.length; n++) {
  dots[n].addEventListener("click", () => {
    pictures.forEach((pic) => {
      pic.style.display = "none";
    });

    for (let i = 0; i < dots.length; i++) {
      dots[i].style.backgroundColor = "gray";
    }
    dots[n].style.backgroundColor = "blue";
    pictures[n].style.display = "block";
  });
}

function picChange() {
  pictures[counter].style.display = "none";

  counter++;
  if (counter >= pictures.length) {
    counter = 0;
  }
  pictures[counter].style.display = "block";
  dots[counter].style.backgroundColor = "blue";
}

setInterval(picChange, 1000);

nextBtn.addEventListener("click", () => {
  pictures[counter].style.display = "none";
  counter++;
  if (counter >= pictures.length) {
    counter = 0;
  }
  pictures[counter].style.display = "block";
});

prevBtn.addEventListener("click", () => {
  pictures[counter].style.display = "none";
  counter--;
  if (counter < 0) {
    counter = pictures.length - 1;
  }
  pictures[counter].style.display = "block";
});
