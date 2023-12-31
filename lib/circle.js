class Shape {
  constructor() {
    this.color = "";
  }
  makeColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

module.exports = Circle;