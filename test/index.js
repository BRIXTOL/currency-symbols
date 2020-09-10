import test from 'ava'
import currency from '../package/currency-codes.es'

test('Country code', t => {

  t.is(currency('SE'), 'SEK')
  t.is(currency('Nl'), 'EUR')
  t.is(currency('dE'), 'EUR')
  t.is(currency('us'), 'USD')
  t.is(currency('AU'), 'AUD')

  t.pass()

})

test('Country code in uppercase', t => {

  t.is(currency('SE'), 'SEK')
  t.is(currency('NL'), 'EUR')
  t.is(currency('DE'), 'EUR')
  t.is(currency('US'), 'USD')
  t.is(currency('AU'), 'AUD')

  t.pass()

})

test('Country code in lowercase', t => {

  t.is(currency('se'), 'SEK')
  t.is(currency('nl'), 'EUR')
  t.is(currency('de'), 'EUR')
  t.is(currency('us'), 'USD')
  t.is(currency('au'), 'AUD')

  t.pass()

})
