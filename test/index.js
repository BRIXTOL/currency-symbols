import test from 'ava'
import currency from '../package/currency-symbols.es'

test('Currency code', t => {

  t.is(currency('sEK'), 'kr')
  t.is(currency('eur'), '€')
  t.is(currency('USD'), '$')
  t.is(currency('AuD'), '$')

  t.pass()

})

test('Currency code in uppercase', t => {

  t.is(currency('SEK'), 'kr')
  t.is(currency('EUR'), '€')
  t.is(currency('USD'), '$')
  t.is(currency('AUD'), '$')

  t.pass()

})

test('Currency code in lowercase', t => {

  t.is(currency('sek'), 'kr')
  t.is(currency('eur'), '€')
  t.is(currency('usd'), '$')
  t.is(currency('aud'), '$')

  t.pass()

})
