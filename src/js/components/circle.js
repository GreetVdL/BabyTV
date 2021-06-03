import randomColor from "randomcolor";

// helper functions
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// circle class
export default class Circle {
  constructor() {
    this.width = randomRange(50, 250);
    this.x = Math.round(
      (document.body.offsetWidth - this.width) * Math.random()
    );
    this.y = Math.round(
      (document.body.offsetHeight - this.width) * Math.random()
    );
    this.holder = document.querySelector("#container");
    this.htmlRef = this.generateHTML();
    this.applyStyling();
  }
  generateHTML() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
        <div class="circle"></div>
      `
    );
    return this.holder.querySelector(".circle:last-child");
  }
  applyStyling() {
    const styles = {
      width: this.width + "px",
      height: this.width + "px",
      position: "absolute",
      top: this.y + "px",
      left: this.x + "px",
      borderRadius: "50%",
      animationDuration: randomRange(5, 20) + "s",
      backgroundColor: randomColor({
        luminosity: "light",
        format: "hsla", // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
      }),
      border: `3px solid ${randomColor({
        luminosity: "light",
      })}`,
    };
    Object.assign(this.htmlRef.style, styles);
  }
}
