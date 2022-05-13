const Calculator = require("./calculator")

const calc = new Calculator;

describe('Calculator tests:', () => {  
  test('Addition', () => {
    expect(calc.add(1, 1))
      .toBe(2);
  });

  test('Subtraction', () => {
    expect(calc.subtract(0, 1))
      .toBe(-1);
  });
  
  test('Multiplication', () => {
    expect(calc.multiply(2, 9))
      .toBe(18);
  });

  test('Division', () => {
    expect(calc.divide(25, 5))
      .toBe(5);
  });
});