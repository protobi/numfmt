/* eslint-disable no-loss-of-precision, no-irregular-whitespace */
import test from './utils.js';

test('Exponent detection', t => {
  t.format('0E+00', 95000000, '1E+08');
  t.format('0E+00', 96000000, '1E+08');
  t.format('0E+00', 97000000, '1E+08');
  t.format('0E+00', 98000000, '1E+08');
  t.format('0E+00', 99000000, '1E+08');
  t.format('0E+00', 100000000, '1E+08');
  t.format('0E+00', 110000000, '1E+08');
  t.format('0E+00', 120000000, '1E+08');
  t.format('0E+00', 130000000, '1E+08');
  t.format('0E+00', 140000000, '1E+08');
  t.format('0E+00', 199999999, '2E+08');
  t.format('0E+00', 899999999, '9E+08');
  t.format('0E+00', 990000000, '1E+09');
  t.format('0E+00', 999000000, '1E+09');
  t.format('0E+00', 999900000, '1E+09');
  t.format('0E+00', 999990000, '1E+09');
  t.format('0.0E+00', 95000000, '9.5E+07');
  t.format('0.0E+00', 96000000, '9.6E+07');
  t.format('0.0E+00', 97000000, '9.7E+07');
  t.format('0.0E+00', 98000000, '9.8E+07');
  t.format('0.0E+00', 99000000, '9.9E+07');
  t.format('0.0E+00', 100000000, '1.0E+08');
  t.format('0.0E+00', 110000000, '1.1E+08');
  t.format('0.0E+00', 120000000, '1.2E+08');
  t.format('0.0E+00', 130000000, '1.3E+08');
  t.format('0.0E+00', 140000000, '1.4E+08');
  t.format('0.0E+00', 199999999, '2.0E+08');
  t.format('0.0E+00', 899999999, '9.0E+08');
  t.format('0.0E+00', 990000000, '9.9E+08');
  t.format('0.0E+00', 999000000, '1.0E+09');
  t.format('0.0E+00', 999900000, '1.0E+09');
  t.format('0.0E+00', 999990000, '1.0E+09');
  t.format('0.00E+00', 95000000, '9.50E+07');
  t.format('0.00E+00', 96000000, '9.60E+07');
  t.format('0.00E+00', 97000000, '9.70E+07');
  t.format('0.00E+00', 98000000, '9.80E+07');
  t.format('0.00E+00', 99000000, '9.90E+07');
  t.format('0.00E+00', 100000000, '1.00E+08');
  t.format('0.00E+00', 110000000, '1.10E+08');
  t.format('0.00E+00', 120000000, '1.20E+08');
  t.format('0.00E+00', 130000000, '1.30E+08');
  t.format('0.00E+00', 140000000, '1.40E+08');
  t.format('0.00E+00', 199999999, '2.00E+08');
  t.format('0.00E+00', 899999999, '9.00E+08');
  t.format('0.00E+00', 990000000, '9.90E+08');
  t.format('0.00E+00', 999000000, '9.99E+08');
  t.format('0.00E+00', 999900000, '1.00E+09');
  t.format('0.00E+00', 999990000, '1.00E+09');
  t.format('0.000E+00', 95000000, '9.500E+07');
  t.format('0.000E+00', 96000000, '9.600E+07');
  t.format('0.000E+00', 97000000, '9.700E+07');
  t.format('0.000E+00', 98000000, '9.800E+07');
  t.format('0.000E+00', 99000000, '9.900E+07');
  t.format('0.000E+00', 100000000, '1.000E+08');
  t.format('0.000E+00', 110000000, '1.100E+08');
  t.format('0.000E+00', 120000000, '1.200E+08');
  t.format('0.000E+00', 130000000, '1.300E+08');
  t.format('0.000E+00', 140000000, '1.400E+08');
  t.format('0.000E+00', 199999999, '2.000E+08');
  t.format('0.000E+00', 899999999, '9.000E+08');
  t.format('0.000E+00', 990000000, '9.900E+08');
  t.format('0.000E+00', 999000000, '9.990E+08');
  t.format('0.000E+00', 999900000, '9.999E+08');
  t.format('0.000E+00', 999990000, '1.000E+09');
  t.end();
});

test('Exponent detection', t => {
  t.format('0.E+00', 9, '9.E+00');
  t.format('0.E+00', 9.49999, '9.E+00');
  t.format('0.E+00', 9.59999, '1.E+01');
  t.format('0.E+00', 9.69999, '1.E+01');
  t.format('0.E+00', 10, '1.E+01');
  t.format('0.E+00', 90, '9.E+01');
  t.format('0.E+00', 94.9999, '9.E+01');
  t.format('0.E+00', 95.9999, '1.E+02');
  t.format('0.E+00', 96.9999, '1.E+02');
  t.format('0.E+00', 100, '1.E+02');
  t.format('0.E+00', 900, '9.E+02');
  t.format('0.E+00', 949.999, '9.E+02');
  t.format('0.E+00', 959.999, '1.E+03');
  t.format('0.E+00', 969.999, '1.E+03');
  t.format('0.E+00', 1000, '1.E+03');
  t.format('0.E+00', 9000, '9.E+03');
  t.format('0.E+00', 9499.99, '9.E+03');
  t.format('0.E+00', 9599.99, '1.E+04');
  t.format('0.E+00', 9699.99, '1.E+04');
  t.format('0.E+00', 10000, '1.E+04');
  t.format('0.E+00', 90000, '9.E+04');
  t.format('0.E+00', 94999.9, '9.E+04');
  t.format('0.E+00', 95999.9, '1.E+05');
  t.format('0.E+00', 96999.9, '1.E+05');
  t.format('0.E+00', 100000, '1.E+05');
  t.format('0.0E+00', 9, '9.0E+00');
  t.format('0.0E+00', 9.49999, '9.5E+00');
  t.format('0.0E+00', 9.59999, '9.6E+00');
  t.format('0.0E+00', 9.69999, '9.7E+00');
  t.format('0.0E+00', 10, '1.0E+01');
  t.format('0.0E+00', 90, '9.0E+01');
  t.format('0.0E+00', 94.9999, '9.5E+01');
  t.format('0.0E+00', 95.9999, '9.6E+01');
  t.format('0.0E+00', 96.9999, '9.7E+01');
  t.format('0.0E+00', 100, '1.0E+02');
  t.format('0.0E+00', 900, '9.0E+02');
  t.format('0.0E+00', 949.999, '9.5E+02');
  t.format('0.0E+00', 959.999, '9.6E+02');
  t.format('0.0E+00', 969.999, '9.7E+02');
  t.format('0.0E+00', 1000, '1.0E+03');
  t.format('0.0E+00', 9000, '9.0E+03');
  t.format('0.0E+00', 9499.99, '9.5E+03');
  t.format('0.0E+00', 9599.99, '9.6E+03');
  t.format('0.0E+00', 9699.99, '9.7E+03');
  t.format('0.0E+00', 10000, '1.0E+04');
  t.format('0.0E+00', 90000, '9.0E+04');
  t.format('0.0E+00', 94999.9, '9.5E+04');
  t.format('0.0E+00', 95999.9, '9.6E+04');
  t.format('0.0E+00', 96999.9, '9.7E+04');
  t.format('0.0E+00', 100000, '1.0E+05');
  t.format('0.00E+00', 9, '9.00E+00');
  t.format('0.00E+00', 9.49999, '9.50E+00');
  t.format('0.00E+00', 9.59999, '9.60E+00');
  t.format('0.00E+00', 9.69999, '9.70E+00');
  t.format('0.00E+00', 10, '1.00E+01');
  t.format('0.00E+00', 90, '9.00E+01');
  t.format('0.00E+00', 94.9999, '9.50E+01');
  t.format('0.00E+00', 95.9999, '9.60E+01');
  t.format('0.00E+00', 96.9999, '9.70E+01');
  t.format('0.00E+00', 100, '1.00E+02');
  t.format('0.00E+00', 900, '9.00E+02');
  t.format('0.00E+00', 949.999, '9.50E+02');
  t.format('0.00E+00', 959.999, '9.60E+02');
  t.format('0.00E+00', 969.999, '9.70E+02');
  t.format('0.00E+00', 1000, '1.00E+03');
  t.format('0.00E+00', 9000, '9.00E+03');
  t.format('0.00E+00', 9499.99, '9.50E+03');
  t.format('0.00E+00', 9599.99, '9.60E+03');
  t.format('0.00E+00', 9699.99, '9.70E+03');
  t.format('0.00E+00', 10000, '1.00E+04');
  t.format('0.00E+00', 90000, '9.00E+04');
  t.format('0.00E+00', 94999.9, '9.50E+04');
  t.format('0.00E+00', 95999.9, '9.60E+04');
  t.format('0.00E+00', 96999.9, '9.70E+04');
  t.format('0.00E+00', 100000, '1.00E+05');
  t.format('00.E+00', 9, '09.E+00');
  t.format('00.E+00', 9.49999, '09.E+00');
  t.format('00.E+00', 9.59999, '10.E+00');
  t.format('00.E+00', 9.69999, '10.E+00');
  t.format('00.E+00', 10, '10.E+00');
  t.format('00.E+00', 90, '90.E+00');
  t.format('00.E+00', 94.9999, '95.E+00');
  t.format('00.E+00', 95.9999, '96.E+00');
  t.format('00.E+00', 96.9999, '97.E+00');
  t.format('00.E+00', 100, '01.E+02');
  t.format('00.E+00', 900, '09.E+02');
  t.format('00.E+00', 949.999, '09.E+02');
  t.format('00.E+00', 959.999, '10.E+02');
  t.format('00.E+00', 969.999, '10.E+02');
  t.format('00.E+00', 1000, '10.E+02');
  t.format('00.E+00', 9000, '90.E+02');
  t.format('00.E+00', 9499.99, '95.E+02');
  t.format('00.E+00', 9599.99, '96.E+02');
  t.format('00.E+00', 9699.99, '97.E+02');
  t.format('00.E+00', 10000, '01.E+04');
  t.format('00.E+00', 90000, '09.E+04');
  t.format('00.E+00', 94999.9, '09.E+04');
  t.format('00.E+00', 95999.9, '10.E+04');
  t.format('00.E+00', 96999.9, '10.E+04');
  t.format('00.E+00', 100000, '10.E+04');
  t.format('00.0E+00', 9, '09.0E+00');
  t.format('00.0E+00', 9.49999, '09.5E+00');
  t.format('00.0E+00', 9.59999, '09.6E+00');
  t.format('00.0E+00', 9.69999, '09.7E+00');
  t.format('00.0E+00', 10, '10.0E+00');
  t.format('00.0E+00', 90, '90.0E+00');
  t.format('00.0E+00', 94.9999, '95.0E+00');
  t.format('00.0E+00', 95.9999, '96.0E+00');
  t.format('00.0E+00', 96.9999, '97.0E+00');
  t.format('00.0E+00', 100, '01.0E+02');
  t.format('00.0E+00', 900, '09.0E+02');
  t.format('00.0E+00', 949.999, '09.5E+02');
  t.format('00.0E+00', 959.999, '09.6E+02');
  t.format('00.0E+00', 969.999, '09.7E+02');
  t.format('00.0E+00', 1000, '10.0E+02');
  t.format('00.0E+00', 9000, '90.0E+02');
  t.format('00.0E+00', 9499.99, '95.0E+02');
  t.format('00.0E+00', 9599.99, '96.0E+02');
  t.format('00.0E+00', 9699.99, '97.0E+02');
  t.format('00.0E+00', 10000, '01.0E+04');
  t.format('00.0E+00', 90000, '09.0E+04');
  t.format('00.0E+00', 94999.9, '09.5E+04');
  t.format('00.0E+00', 95999.9, '09.6E+04');
  t.format('00.0E+00', 96999.9, '09.7E+04');
  t.format('00.0E+00', 100000, '10.0E+04');
  t.format('00.00E+00', 9, '09.00E+00');
  t.format('00.00E+00', 9.49999, '09.50E+00');
  t.format('00.00E+00', 9.59999, '09.60E+00');
  t.format('00.00E+00', 9.69999, '09.70E+00');
  t.format('00.00E+00', 10, '10.00E+00');
  t.format('00.00E+00', 90, '90.00E+00');
  t.format('00.00E+00', 94.9999, '95.00E+00');
  t.format('00.00E+00', 95.9999, '96.00E+00');
  t.format('00.00E+00', 96.9999, '97.00E+00');
  t.format('00.00E+00', 100, '01.00E+02');
  t.format('00.00E+00', 900, '09.00E+02');
  t.format('00.00E+00', 949.999, '09.50E+02');
  t.format('00.00E+00', 959.999, '09.60E+02');
  t.format('00.00E+00', 969.999, '09.70E+02');
  t.format('00.00E+00', 1000, '10.00E+02');
  t.format('00.00E+00', 9000, '90.00E+02');
  t.format('00.00E+00', 9499.99, '95.00E+02');
  t.format('00.00E+00', 9599.99, '96.00E+02');
  t.format('00.00E+00', 9699.99, '97.00E+02');
  t.format('00.00E+00', 10000, '01.00E+04');
  t.format('00.00E+00', 90000, '09.00E+04');
  t.format('00.00E+00', 94999.9, '09.50E+04');
  t.format('00.00E+00', 95999.9, '09.60E+04');
  t.format('00.00E+00', 96999.9, '09.70E+04');
  t.format('00.00E+00', 100000, '10.00E+04');
  t.format('000.E+00', 9, '009.E+00');
  t.format('000.E+00', 9.49999, '009.E+00');
  t.format('000.E+00', 9.59999, '010.E+00');
  t.format('000.E+00', 9.69999, '010.E+00');
  t.format('000.E+00', 10, '010.E+00');
  t.format('000.E+00', 90, '090.E+00');
  t.format('000.E+00', 94.9999, '095.E+00');
  t.format('000.E+00', 95.9999, '096.E+00');
  t.format('000.E+00', 96.9999, '097.E+00');
  t.format('000.E+00', 100, '100.E+00');
  t.format('000.E+00', 900, '900.E+00');
  t.format('000.E+00', 949.999, '950.E+00');
  t.format('000.E+00', 959.999, '960.E+00');
  t.format('000.E+00', 969.999, '970.E+00');
  t.format('000.E+00', 1000, '001.E+03');
  t.format('000.E+00', 9000, '009.E+03');
  t.format('000.E+00', 9499.99, '009.E+03');
  t.format('000.E+00', 9599.99, '010.E+03');
  t.format('000.E+00', 9699.99, '010.E+03');
  t.format('000.E+00', 10000, '010.E+03');
  t.format('000.E+00', 90000, '090.E+03');
  t.format('000.E+00', 94999.9, '095.E+03');
  t.format('000.E+00', 95999.9, '096.E+03');
  t.format('000.E+00', 96999.9, '097.E+03');
  t.format('000.E+00', 100000, '100.E+03');
  t.format('000.0E+00', 9, '009.0E+00');
  t.format('000.0E+00', 9.49999, '009.5E+00');
  t.format('000.0E+00', 9.59999, '009.6E+00');
  t.format('000.0E+00', 9.69999, '009.7E+00');
  t.format('000.0E+00', 10, '010.0E+00');
  t.format('000.0E+00', 90, '090.0E+00');
  t.format('000.0E+00', 94.9999, '095.0E+00');
  t.format('000.0E+00', 95.9999, '096.0E+00');
  t.format('000.0E+00', 96.9999, '097.0E+00');
  t.format('000.0E+00', 100, '100.0E+00');
  t.format('000.0E+00', 900, '900.0E+00');
  t.format('000.0E+00', 949.999, '950.0E+00');
  t.format('000.0E+00', 959.999, '960.0E+00');
  t.format('000.0E+00', 969.999, '970.0E+00');
  t.format('000.0E+00', 1000, '001.0E+03');
  t.format('000.0E+00', 9000, '009.0E+03');
  t.format('000.0E+00', 9499.99, '009.5E+03');
  t.format('000.0E+00', 9599.99, '009.6E+03');
  t.format('000.0E+00', 9699.99, '009.7E+03');
  t.format('000.0E+00', 10000, '010.0E+03');
  t.format('000.0E+00', 90000, '090.0E+03');
  t.format('000.0E+00', 94999.9, '095.0E+03');
  t.format('000.0E+00', 95999.9, '096.0E+03');
  t.format('000.0E+00', 96999.9, '097.0E+03');
  t.format('000.0E+00', 100000, '100.0E+03');
  t.format('000.00E+00', 9, '009.00E+00');
  t.format('000.00E+00', 9.49999, '009.50E+00');
  t.format('000.00E+00', 9.59999, '009.60E+00');
  t.format('000.00E+00', 9.69999, '009.70E+00');
  t.format('000.00E+00', 10, '010.00E+00');
  t.format('000.00E+00', 90, '090.00E+00');
  t.format('000.00E+00', 94.9999, '095.00E+00');
  t.format('000.00E+00', 95.9999, '096.00E+00');
  t.format('000.00E+00', 96.9999, '097.00E+00');
  t.format('000.00E+00', 100, '100.00E+00');
  t.format('000.00E+00', 900, '900.00E+00');
  t.format('000.00E+00', 949.999, '950.00E+00');
  t.format('000.00E+00', 959.999, '960.00E+00');
  t.format('000.00E+00', 969.999, '970.00E+00');
  t.format('000.00E+00', 1000, '001.00E+03');
  t.format('000.00E+00', 9000, '009.00E+03');
  t.format('000.00E+00', 9499.99, '009.50E+03');
  t.format('000.00E+00', 9599.99, '009.60E+03');
  t.format('000.00E+00', 9699.99, '009.70E+03');
  t.format('000.00E+00', 10000, '010.00E+03');
  t.format('000.00E+00', 90000, '090.00E+03');
  t.format('000.00E+00', 94999.9, '095.00E+03');
  t.format('000.00E+00', 95999.9, '096.00E+03');
  t.format('000.00E+00', 96999.9, '097.00E+03');
  t.format('000.00E+00', 100000, '100.00E+03');

  t.end();
});

test('Exponential 0E+00', t => {
  t.format('0E+00', 1000000000000, '1E+12');
  t.format('0E+00', 999999999999, '1E+12');
  t.format('0E+00', 950000000000, '1E+12');
  t.format('0E+00', 100000000000, '1E+11');
  t.format('0E+00', 95000000000, '1E+11');
  t.format('0E+00', 10000000000, '1E+10');
  t.format('0E+00', 9500000000, '1E+10');
  t.format('0E+00', 1000000000, '1E+09');
  t.format('0E+00', 950000000, '1E+09');
  t.format('0E+00', 100000000, '1E+08');
  t.format('0E+00', 95000000, '1E+08');
  t.format('0E+00', 10000000, '1E+07');
  t.format('0E+00', 9500000, '1E+07');
  t.format('0E+00', 1000000, '1E+06');
  t.format('0E+00', 950000, '1E+06');
  t.format('0E+00', 100000, '1E+05');
  t.format('0E+00', 95000, '1E+05');
  t.format('0E+00', 10000, '1E+04');
  t.format('0E+00', 9500, '1E+04');
  t.format('0E+00', 1000, '1E+03');
  t.format('0E+00', 950, '1E+03');
  t.format('0E+00', 100, '1E+02');
  t.format('0E+00', 95, '1E+02');
  t.format('0E+00', 10, '1E+01');
  t.format('0E+00', 9.5, '1E+01');
  t.format('0E+00', 1.4999999, '1E+00');
  t.format('0E+00', 1, '1E+00');
  t.format('0E+00', 0.95, '1E+00');
  t.format('0E+00', 0.14999999, '1E-01');
  t.format('0E+00', 0.1, '1E-01');
  t.format('0E+00', 0.014999999, '1E-02');
  t.format('0E+00', 0.01, '1E-02');
  t.format('0E+00', 0.0014999999, '1E-03');
  t.format('0E+00', 0.001, '1E-03');
  t.format('0E+00', 0.00014999999, '1E-04');
  t.format('0E+00', 0.0001, '1E-04');
  t.format('0E+00', 0.000014999999, '1E-05');
  t.format('0E+00', 0.00001, '1E-05');
  t.format('0E+00', 0.00000149999999, '1E-06');
  t.format('0E+00', 0.000001, '1E-06');
  t.format('0E+00', 0.00000014999999, '1E-07');
  t.format('0E+00', 0.0000001, '1E-07');
  t.format('0E+00', 0.000000014999999, '1E-08');
  t.format('0E+00', 0.00000001, '1E-08');
  t.format('0E+00', 0.0000000014999999, '1E-09');
  t.format('0E+00', 0.000000001, '1E-09');
  t.format('0E+00', 0.00000000014999999, '1E-10');
  t.format('0E+00', 0.0000000001, '1E-10');
  t.format('0E+00', 0.000000000014999999, '1E-11');
  t.format('0E+00', 0.00000000001, '1E-11');
  t.format('0E+00', 0.0000000000014999999, '1E-12');
  t.format('0E+00', 0.000000000001, '1E-12');
  t.end();
});

test('Exponential 0.00E+00', t => {
  t.format('0.00E+00', 10000000, '1.00E+07');
  t.format('0.00E+00', 20000000, '2.00E+07');
  t.format('0.00E+00', 30000000, '3.00E+07');
  t.format('0.00E+00', 30010000, '3.00E+07');
  t.format('0.00E+00', 30100000, '3.01E+07');
  t.format('0.00E+00', 31000000, '3.10E+07');
  t.format('0.00E+00', 31680000, '3.17E+07');
  t.format('0.00E+00', 31700000, '3.17E+07');
  t.format('0.00E+00', 32500000, '3.25E+07');
  t.format('0.00E+00', 35000000, '3.50E+07');
  t.format('0.00E+00', 40000000, '4.00E+07');
  t.format('0.00E+00', 50000000, '5.00E+07');
  t.format('0.00E+00', 60000000, '6.00E+07');
  t.format('0.00E+00', 70000000, '7.00E+07');
  t.format('0.00E+00', 80000000, '8.00E+07');
  t.format('0.00E+00', 90000000, '9.00E+07');
  t.end();
});

test('Sign is grouped with digit in output', t => {
  t.format('0 E+ 0', 10000000, '1 E +7');
  t.format('0 E+ 00', 10000000, '1 E +07');
  t.format('0 E- 0', 10000000, '1 E 7');
  t.format('0 E- 0', 0.0000001, '1 E -7');
  t.format('0 E- 00', 0.0000001, '1 E -07');
  t.end();
});

test('Exponent is shifted when integer part is omitted:', t => {
  t.format('.0E+0', 0, '.0E+0');
  t.format('.0E+0', 1, '.1E+1');
  t.format('.0E+0', 10, '.1E+2');
  t.format('.0E+0', 100, '.1E+3');
  t.format('.0E+0', 1000, '.1E+4');
  t.format('.0E+0', 10000, '.1E+5');
  t.format('.0E+0', 100000, '.1E+6');
  t.format('.0E+0', 123456789, '.1E+9');
  t.format('.0E+0', 0.1, '.1E+0');
  t.format('.0E+0', 0.01, '.1E-1');
  t.format('.0E+0', 0.001, '.1E-2');
  t.format('.0E+0', 0.0001, '.1E-3');
  t.format('.0E+0', 0.12345, '.1E+0');
  t.format('.0E+0', 0.012345, '.1E-1');
  t.end();
});
