/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let counter = 0;
  Object.entries(objects).forEach((item, key) => {
    if (objects[key].x === objects[key].y) {
      counter++;
    } else return;
  });

  return counter;
}

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(lengths) {
    this.values = lengths;
  }
  perimeter() {
    return (this.values || []).reduce(
      (item, accelerator) => item + accelerator
    );
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
