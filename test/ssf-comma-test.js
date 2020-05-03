// tests converted from SSF
import test from 'tape';
import fmt from '../lib';

test('Exponential: #.0000,,,', t => {
  const _f = fmt('#.0000,,,');
  t.is(_f(0.99), '.0000');
  t.is(_f(1.2345), '.0000');
  t.is(_f(12.345), '.0000');
  t.is(_f(123.456), '.0000');
  t.is(_f(1234), '.0000');
  t.is(_f(12345), '.0000');
  t.is(_f(123456), '.0001');
  t.is(_f(1234567), '.0012');
  t.is(_f(12345678), '.0123');
  t.is(_f(123456789), '.1235');
  t.is(_f(1234567890), '1.2346');
  t.is(_f(12345678901), '12.3457');
  t.is(_f(123456789012), '123.4568');
  t.is(_f(4321), '.0000');
  t.is(_f(4321234), '.0043');
  t.end();
});

test('Exponential: #.0000,,', t => {
  const _f = fmt('#.0000,,');
  t.is(_f(0.99), '.0000');
  t.is(_f(1.2345), '.0000');
  t.is(_f(12.345), '.0000');
  t.is(_f(123.456), '.0001');
  t.is(_f(1234), '.0012');
  t.is(_f(12345), '.0123');
  t.is(_f(123456), '.1235');
  t.is(_f(1234567), '1.2346');
  t.is(_f(12345678), '12.3457');
  t.is(_f(123456789), '123.4568');
  t.is(_f(1234567890), '1234.5679');
  t.is(_f(12345678901), '12345.6789');
  t.is(_f(123456789012), '123456.7890');
  t.is(_f(4321), '.0043');
  t.is(_f(4321234), '4.3212');
  t.end();
});

test('Exponential: #.0000,', t => {
  const _f = fmt('#.0000,');
  t.is(_f(0.99), '.0010');
  t.is(_f(1.2345), '.0012');
  t.is(_f(12.345), '.0123');
  t.is(_f(123.456), '.1235');
  t.is(_f(1234), '1.2340');
  t.is(_f(12345), '12.3450');
  t.is(_f(123456), '123.4560');
  t.is(_f(1234567), '1234.5670');
  t.is(_f(12345678), '12345.6780');
  t.is(_f(123456789), '123456.7890');
  t.is(_f(1234567890), '1234567.8900');
  t.is(_f(12345678901), '12345678.9010');
  t.is(_f(123456789012), '123456789.0120');
  t.is(_f(4321), '4.3210');
  t.is(_f(4321234), '4321.2340');
  t.end();
});

test('Exponential: #,##0.0', t => {
  const _f = fmt('#,##0.0');
  t.is(_f(0.99), '1.0');
  t.is(_f(1.2345), '1.2');
  t.is(_f(12.345), '12.3');
  t.is(_f(123.456), '123.5');
  t.is(_f(1234), '1,234.0');
  t.is(_f(12345), '12,345.0');
  t.is(_f(123456), '123,456.0');
  t.is(_f(1234567), '1,234,567.0');
  t.is(_f(12345678), '12,345,678.0');
  t.is(_f(123456789), '123,456,789.0');
  t.is(_f(1234567890), '1,234,567,890.0');
  t.is(_f(12345678901), '12,345,678,901.0');
  t.is(_f(123456789012), '123,456,789,012.0');
  t.is(_f(4321), '4,321.0');
  t.is(_f(4321234), '4,321,234.0');
  t.end();
});

test('Exponential: ###,##0', t => {
  const _f = fmt('###,##0');
  t.is(_f(0.99), '1');
  t.is(_f(1.2345), '1');
  t.is(_f(12.345), '12');
  t.is(_f(123.456), '123');
  t.is(_f(1234), '1,234');
  t.is(_f(12345), '12,345');
  t.is(_f(123456), '123,456');
  t.is(_f(1234567), '1,234,567');
  t.is(_f(12345678), '12,345,678');
  t.is(_f(123456789), '123,456,789');
  t.is(_f(1234567890), '1,234,567,890');
  t.is(_f(12345678901), '12,345,678,901');
  t.is(_f(123456789012), '123,456,789,012');
  t.is(_f(4321), '4,321');
  t.is(_f(4321234), '4,321,234');
  t.end();
});

test('Exponential: ###,###', t => {
  const _f = fmt('###,###');
  t.is(_f(0.99), '1');
  t.is(_f(1.2345), '1');
  t.is(_f(12.345), '12');
  t.is(_f(123.456), '123');
  t.is(_f(1234), '1,234');
  t.is(_f(12345), '12,345');
  t.is(_f(123456), '123,456');
  t.is(_f(1234567), '1,234,567');
  t.is(_f(12345678), '12,345,678');
  t.is(_f(123456789), '123,456,789');
  t.is(_f(1234567890), '1,234,567,890');
  t.is(_f(12345678901), '12,345,678,901');
  t.is(_f(123456789012), '123,456,789,012');
  t.is(_f(4321), '4,321');
  t.is(_f(4321234), '4,321,234');
  t.end();
});

test('Exponential: #,###.00', t => {
  const _f = fmt('#,###.00');
  t.is(_f(0.99), '.99');
  t.is(_f(1.2345), '1.23');
  t.is(_f(12.345), '12.35');
  t.is(_f(123.456), '123.46');
  t.is(_f(1234), '1,234.00');
  t.is(_f(12345), '12,345.00');
  t.is(_f(123456), '123,456.00');
  t.is(_f(1234567), '1,234,567.00');
  t.is(_f(12345678), '12,345,678.00');
  t.is(_f(123456789), '123,456,789.00');
  t.is(_f(1234567890), '1,234,567,890.00');
  t.is(_f(12345678901), '12,345,678,901.00');
  t.is(_f(123456789012), '123,456,789,012.00');
  t.is(_f(4321), '4,321.00');
  t.is(_f(4321234), '4,321,234.00');
  t.end();
});
