'use strict';

/*
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }

  hex() {
    return (
      '#' +
      ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
        .toString(16)
        .slice(1)
    );
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgb(${this.innerRGB()}, ${a})`;
  }

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s},${l})`;
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  fulllySaturated() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const white = new Color(255, 255, 255, 'white');
const black = new Color(0, 0, 0, 'black');
const red = new Color(255, 0, 0, 'red');
const yellow = new Color(255, 255, 0, 'yellow');
const green = new Color(0, 255, 0, 'green');
const cyan = new Color(0, 255, 255, 'cyan');
const blue = new Color(0, 0, 255, 'blue');
const violet = new Color(255, 0, 255, 'violet');

console.log(
  white.hsl(),
  black.hsl(),
  red.hsl(),
  yellow.hsl(),
  green.hsl(),
  cyan.hsl(),
  blue.hsl(),
  violet.hsl()
);
*/
