import "../css/style.scss";

import { Circle, randomRange } from "./components/circle.js";

const holder = document.querySelector("#container");

const amountCircles = 100;

const promises = [];
const allCircles = [];

for (let i = 1; i <= amountCircles; i++) {
  // Generate random values
  const diameter = randomRange(50, 250);
  const x = Math.round((document.body.offsetWidth - diameter) * Math.random());
  const y = Math.round((document.body.offsetHeight - diameter) * Math.random());

  // Draw circle
  promises.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        allCircles.push(new Circle(diameter, x, y, holder));
        resolve();
      }, 200 * i);
    })
  );
}

async function pinkify() {
  await Promise.all(promises);
  allCircles.forEach((circle) => {
    circle.htmlRef.style.backgroundColor = "#F192D2";
  });
  setTimeout(() => {
    allCircles.forEach((circle) => circle.clear());
  }, 2000);
}

pinkify();
