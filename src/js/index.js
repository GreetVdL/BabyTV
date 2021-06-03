import "../css/style.scss";
import { Circle, randomRange } from "./components/circle.js";

const holder = document.querySelector("#container");
const button = document.querySelector("#button");

const amountCircles = 100;

const promises = [];
const allCircles = [];

// Animation plays on button click
button.addEventListener("click", () => {
  // Button disappears and  allCircles array is being emptied
  button.style.display = "none";
  allCircles.length = 0;
  console.log(allCircles);

  // Draw all circles
  for (let i = 1; i <= amountCircles; i++) {
    // Generate random values
    const diameter = randomRange(50, 250);
    const x = Math.round(
      (document.body.offsetWidth - diameter) * Math.random()
    );
    const y = Math.round(
      (document.body.offsetHeight - diameter) * Math.random()
    );

    // Draw circle
    promises.push(
      new Promise((resolve) => {
        setTimeout(() => {
          allCircles.push(new Circle(diameter, x, y, holder));
          resolve();
        }, 200 * i);
      })
    );
  }

  // When all circles are drawn, they turn pink and disappear and the "play" button appears again
  async function finish() {
    await Promise.all(promises);
    allCircles.forEach((circle) => {
      circle.htmlRef.style.backgroundColor = "#F8C6E7";
      circle.htmlRef.style.border = "3px solid #F8C6E7";
    });
    setTimeout(() => {
      allCircles.forEach((circle) => circle.clear());
    }, 2000);

    setTimeout(() => {
      button.style.display = "block";
    }, 2000);
  }

  finish();
});
