class Shape {
  constructor() {
    this.color = "";
  }
  makeColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="250, 60 100, 400 400, 400" fill="${this.color}" />`;
  }
}

module.exports = Triangle;