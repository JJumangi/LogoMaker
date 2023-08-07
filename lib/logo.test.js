const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

//testing circle
describe("Circle", () => {
  test("should create a red cicle", () => {
    const circle = new Circle();
    circle.makeColor('red');
    const createdLogo = `<circle cx="150" cy="100" r="80" fill="red" />`
    expect(createdLogo).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`)
  });
})

//testing triangle
describe("Triangle", () => {
  test("should create a green triangle", () => {
    const triangle = new Triangle();
    triangle.makeColor('green');
    const createdLogo =  `<polygon points="250, 60 100, 400 400, 400" fill="green" />`
    expect(createdLogo).toEqual(`<polygon points="250, 60 100, 400 400, 400" fill="green" />`)
  });
})

//testing square
describe("Square", () => {
  test("should create a blue square", () => {
    const square = new Square();
    square.makeColor('blue');
    const createdLogo =  `<rect x="60" y="60" width="120" height="120" fill="blue" />`
    expect(createdLogo).toEqual( `<rect x="60" y="60" width="120" height="120" fill="blue" />`)
  });
})
