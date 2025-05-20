require("./style.css");

const pic1 = document.getElementById("picture1");
const pic2 = document.getElementById("picture2");
const pic3 = document.getElementById("picture3");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

let counter = 0;

let pictures = [pic1, pic2, pic3];

nextBtn.addEventListener("click", () => {
  console.log(pictures[counter]);

  if (counter < 3) {
    console.log("Count: ", counter);
    counter++;
  }
  if (counter >= 3) {
    counter = 0;
  }

  prevBtn.addEventListener("click", () => {
    console.log("perfekt");
  });
});
