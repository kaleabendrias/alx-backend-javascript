const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  get _brand() {
    return this[carBrand];
  }

  set _brand(value) {
    this[carBrand] = value;
  }

  get _motor() {
    return this[carMotor];
  }

  set _motor(value) {
    this[carMotor] = value;
  }

  get _color() {
    return this[carColor];
  }

  set _color(value) {
    this[carColor] = value;
  }

  cloneCar() {
    return new this.constructor();
  }
}
