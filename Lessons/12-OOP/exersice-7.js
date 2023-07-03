'use strict';
/*
function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(rgb(35, 255, 150));
console.log(hex(35, 255, 150));
console.log(rgb(255, 255, 255));
console.log(hex(255, 255, 255));
*/

/*
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function(a=1.0){
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b}, ${a})`;
  
}

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

console.log(color1.hex(), color1.rgb(), color2.hex(), color2.rgb());
*/

/*
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
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
}

const tomato = new Color(255, 67, 89, 'tomato');

console.log(tomato, tomato.rgb(), tomato.hex(), tomato.rgba(0.4));
*/
