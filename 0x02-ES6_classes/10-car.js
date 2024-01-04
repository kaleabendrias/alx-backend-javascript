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

  get _motor() {
    return this[carMotor];
  }

  get _color() {
    return this[carColor];
  }

  cloneCar() {
    return new this.constructor();
  }
}
