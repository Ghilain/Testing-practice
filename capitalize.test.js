const capitalize = require('./capitalize');

test('Capitalize the first letter', () => {
  expect(capitalize('understand'))
    .toBe('Understand');
});