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

// function wait() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 1000);
//   });
// }

// async function drawCircle() {
//   new Circle();
//   await wait();
// }

const promises = [];
const allCircles = [];

for (let i = 1; i <= amountCircles; i++) {
  promises.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        allCircles.push(new Circle());
        resolve();
      }, 200 * i);
    })
  );
}

async function pinkify() {
  await Promise.all(promises);
  console.log("eureka");
  allCircles.forEach((circle) => {
    circle.htmlRef.style.backgroundColor = "#F192D2";
  });
}

pinkify();

//   promises.push(
//     new Promise((resolve, reject) => {
//       setTimeout(
//         // allCircles.push(new Circle());
//         resolve,
//         200 * i
//       );
//     })
//   );

// Promise.all(promises).then(console.log("alle cirkels zijn er"));
