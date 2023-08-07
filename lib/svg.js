//svg conscructor
class SVG{
  constructor(){
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
   return `<svg width= "200" height= "250"xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  }

  makeShape(logo) {
    this.shapeElement = logo.render();
  }


  makeText(message, color) {
    this.textElement = `<text fill="${color}">${message}</text>`;
  }
}
module.exports = SVG;