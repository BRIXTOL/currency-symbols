import test from 'ava';
import { getCurrencySymbol } from '../package/index';

test('Currency code symbols', (t) => {

  t.is(getCurrencySymbol('sEK'), 'kr');
  t.is(getCurrencySymbol('eur'), '€');
  t.is(getCurrencySymbol('USD'), '$');
  t.is(getCurrencySymbol('AuD'), '$');

  t.pass();

});

test('Currency code in uppercase to symbol', (t) => {

  t.is(getCurrencySymbol('SEK'), 'kr');
  t.is(getCurrencySymbol('EUR'), '€');
  t.is(getCurrencySymbol('USD'), '$');
  t.is(getCurrencySymbol('AUD'), '$');

  t.pass();

});

test('Currency code in lowercase to symbol', (t) => {

  t.is(getCurrencySymbol('sek'), 'kr');
  t.is(getCurrencySymbol('eur'), '€');
  t.is(getCurrencySymbol('usd'), '$');
  t.is(getCurrencySymbol('aud'), '$');

  t.pass();

});

test('Exposed currency symbols export mapping object', (t) => {

  t.is(getCurrencySymbol('sek'), 'kr');
  t.is(getCurrencySymbol('eur'), '€');
  t.is(getCurrencySymbol('usd'), '$');
  t.is(getCurrencySymbol('aud'), '$');

  t.pass();

});
