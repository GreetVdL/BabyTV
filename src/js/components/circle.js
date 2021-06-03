import randomColor from "randomcolor";

// helper function
export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// circle class
export class Circle {
  _diameter;
  _x;
  _y;
  _holder;
  _htmlRef;

  constructor(diameter, x, y, holder) {
    this._diameter = diameter;
    this._x = x;
    this._y = y;
    this._holder = holder;
    this._htmlRef = this.generateHTML();
    this.applyStyling();
  }

  get htmlRef() {
    return this._htmlRef;
  }

  clear() {
    this._htmlRef.remove();
  }

  generateHTML() {
    this._holder.insertAdjacentHTML(
      "beforeend",
      `
        <div class="circle"></div>
      `
    );
    return this._holder.querySelector(".circle:last-child");
  }

  applyStyling() {
    const styles = {
      width: this._diameter + "px",
      height: this._diameter + "px",
      position: "absolute",
      top: this._y + "px",
      left: this._x + "px",
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
    Object.assign(this._htmlRef.style, styles);
  }
}
