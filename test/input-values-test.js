import test from 'tape';
import fmt from '../lib';

test('Misc input:', t => {
  t.is(fmt('0')(undefined), '');
  t.is(fmt('0')(null), '');
  t.is(fmt('0')(NaN), 'NaN');
  t.is(fmt('0')(Infinity), '∞');
  t.is(fmt('0')(-Infinity), '-∞');
  t.is(fmt('0')(true), 'TRUE');
  t.is(fmt('0')(false), 'FALSE');
  t.end();
});

test('Date object as a value:', t => {
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0)), '0.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 1)), '1.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 2)), '2.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 3)), '3.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 4)), '4.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 5)), '5.');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 20)), '20.');
  t.is(fmt('0.######')(new Date(1900, 2 - 1, 1)), '32.');
  t.is(fmt('0.######')(new Date(1900, 2 - 1, 28)), '59.', 'new Date(1900, 2 - 1, 28, 0, 0, 0)');
  // 1900-02-29 (serial number 60) is a date that only exists in Excel
  t.is(fmt('0.######')(new Date(1900, 3 - 1, 1)), '61.', 'new Date(1900, 3 - 1, 1, 0, 0, 0)');
  t.is(fmt('0.######')(new Date(1900, 3 - 1, 2)), '62.', 'new Date(1900, 3 - 1, 2, 0, 0, 0)');
  t.is(fmt('0.######')(new Date(1900, 3 - 1, 3)), '63.', 'new Date(1900, 3 - 1, 3, 0, 0, 0)');
  t.is(fmt('0.######')(new Date(2000, 10 - 1, 10)), '36809.');
  t.is(fmt('0.######')(new Date(2100, 10 - 1, 30)), '73353.');
  t.is(fmt('0.######')(new Date(2004, 2 - 1, 29)), '38046.');
  t.is(fmt('0.######')(new Date(2020, 2 - 1, 29)), '43890.');
  t.is(fmt('0.######')(new Date(2000, 5 - 1, 9, 1, 0, 0)), '36655.041667');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 1, 0, 0)), '0.041667');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 0, 1, 0)), '0.000694');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 0, 0, 1)), '0.000012');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 23, 0, 0)), '0.958333');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 0, 59, 0)), '0.040972');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 0, 0, 59)), '0.000683');
  t.is(fmt('0.######')(new Date(1900, 1 - 1, 0, 23, 59, 59)), '0.999988');
  t.is(fmt('0.######')(new Date(1909, 1 - 1, 2, 3, 4, 5)), '3290.127836');
  t.end();
});
