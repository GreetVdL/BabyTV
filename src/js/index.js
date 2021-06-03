import "../css/style.scss";
import Circle from "./components/circle.js";

const amountCircles = 10;

let count = 0;

// function circleDraw() {
//   new Circle();
//   count++;
//   console.log(count);
// }

// const interval = setInterval(circleDraw, 200);

// if (count === amountCircles) {
//   clearInterval(interval);
// }

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
}

async function drawCircle() {
  new Circle();
  await wait();
}

for (let i = 0; i < amountCircles; i++) {
  drawCircle();
}
