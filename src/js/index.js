import "../css/style.scss";
import Circle from "./components/circle.js";

const amountCircles = 10;

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
  setTimeout(() => {
    allCircles.forEach((circle) => circle.clear());
  }, 2000);
}

pinkify();
