const stringLength = require('./string-length');

test('Count the length of the input string', () => {
  expect(stringLength('123456'))
    .toBe(6);
});

test('Invalid if string is less than 1 char long', () => {
  expect(() => stringLength(''))
    .toThrow();
});

test('Invalid if string is more than 10 chars long', () => {
  expect(() => stringLength('this one is 21 char long'))
    .toThrow(Error);
});