class Shape {
  constructor() {
    this.color = "";
  }
  makeColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="60" y="60" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = Square;