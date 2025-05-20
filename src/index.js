require("./style.css");

const pic1 = document.getElementById("picture1");
const pic2 = document.getElementById("picture2");
const pic3 = document.getElementById("picture3");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

let counter = 0;

let pictures = [pic1, pic2, pic3];

nextBtn.addEventListener("click", () => {
  pictures[counter].style.display = "none";
  counter++;
  if (counter >= pictures.length) {
    counter = 0;
  }
  console.log(pictures[counter]);
  console.log("Count: ", counter);
  pictures[counter].style.display = "block";
});

console.log(counter);
prevBtn.addEventListener("click", () => {
  pictures[counter].style.display = "none";
  counter--;

  if (counter < 0) {
    counter = pictures.length - 1;
  }
  console.log(pictures[counter]);
  console.log("Count: ", counter);

  pictures[counter].style.display = "block";
});
