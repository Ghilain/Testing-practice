const reverseString = require("./reverse-string")

test('Reverse "abcdef" --> "fedcba"', () => {
  expect(reverseString('abcdef'))
    .toBe('fedcba');
});

test('Reverse "def_0 ghi" --> "ihg 0_fed"', () => {
  expect(reverseString('def_0 ghi'))
    .toBe('ihg 0_fed');
});