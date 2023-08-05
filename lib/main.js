const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");
const SVG = require('./svg');


class Main{
  run(){
    return inquirer
    .prompt([
      {
        name: "text",
        type: "input",
        message: "Please enter no more than 3 letters for your logo",
      },
      {
        name: "textColor",
        type: "input",
        message: "What color would you like your text to be?",
      },
      { name: "shapeClass",
      type: "list",
      choices:["square", "circle", "triangle"],
      },
      {
      name: "shapeColor",
      type: "input",
      message: "What color would you like your shape to be?",
      }
])
.then(({text, textColor, shapeClass, shapeColor}) => {
  let logo;
  switch (shapeClass) {
    case "square":
    logo = new Square();
    break;

    case "circle":
    logo = new Circle();
    break;

    default:
      logo = new Triangle();
      break;
  }
 
  logo.makeColor(shapeColor);
  const svg = new SVG();
  svg.makeText(text, textColor);
  svg.makeShape(logo);
  return writeFile('logo.svg', svg.render());
})
.then(() => {
  console.log("Success! Logo generated!");
})
.catch((err) => {
console.log(err);
console.log("Retry, there was a mistake.");
  });
}}


module.exports = Main;