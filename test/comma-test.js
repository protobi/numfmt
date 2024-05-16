/* eslint-disable no-irregular-whitespace */
import test from './utils.js';

test('Correct handling of the comma operator', t => {
  t.format('0,', 1234567.89, '1235');
  t.format('0,,', 1234567.89, '1');
  t.format('0,,,', 1234567.89, '0');
  t.format('0,0', 1234567.89, '1,234,568');
  t.format('0,00', 1234567.89, '1,234,568');
  t.format('0,000', 1234567.89, '1,234,568');
  t.format('0,0,0', 1234567.89, '1,234,568');
  t.format('0,,0', 1234567.89, '1,234,568');
  t.format('0,,,0', 1234567.89, '1,234,568');
  t.format('0,x', 1234567.89, '1235x');
  t.format('0,x,', 1234567.89, '1235x,');
  t.format('0x,', 1234567.89, '1234568x,');
  t.format('0,,x', 1234567.89, '1x');
  t.format('0,x0', 1234567.89, '123456x8');
  t.format('0 , 0', 1234567.89, '123456 , 8');
  t.format('0, ,0', 1234567.89, '123456 ,8');
  t.format('0.,', 1234567.89, '1235.');
  t.format('0.0,', 1234567.89, '1234.6');
  t.format('0.0,0', 1234567.89, '1234567.89');
  t.format('0,0 0/0', 1234567.89, '1,234,567 8/9');
  t.format('0,0,,0', 1234567.89, '1,234,568');
  t.format('0.0,0,', 1234567.89, '1234.57');
  t.format('0.0 , 0 ,', 1234567.89, '1234567.8 , 9 ,');
  t.format('0 ,', 1234567.89, '1234568 ,');
  t.format('0x,', 1234567.89, '1234568x,');
  t.format('0 ,', 1234567.89, '1234568 ,');
  t.format('0 ,,', 1234567.89, '1234568 ,');
  t.format('0x,', 1234567.89, '1234568x,');
  t.format('x,0', 1234567.89, 'x,1234568');

  // Still unsolved by the formatter: digit interplay with 0#?
  t.format('01,', 1234567.89, '12351');
  t.format('09,', 1234567.89, '12359');
  // t.format('01,0', 1234567.89, '1,234,5618');
  // t.format('09,0', 1234567.89, '1,234,5698');
  // t.format('0, 9', 1234567.89, '1234568 9');

  t.formatInvalid('0,0/0');
  t.formatInvalid('0/0,0');
  // t.formatInvalid('0 0/0,'); "1234 4/7" gets emitted, same as Sheets

  t.end();
});
