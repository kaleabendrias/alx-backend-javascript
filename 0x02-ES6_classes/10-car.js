const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  get brand() {
    return this[carBrand];
  }

  get motor() {
    return this[carMotor];
  }

  get color() {
    return this[carColor];
  }

  cloneCar() {
    const clonedCar = new Car();
    const symbols = Object.getOwnPropertySymbols(this);

    symbols.forEach((symbol) => {
      const descriptor = Object.getOwnPropertyDescriptor(this, symbol);
      Object.defineProperty(clonedCar, symbol, descriptor);
    });

    return clonedCar;
  }
}
