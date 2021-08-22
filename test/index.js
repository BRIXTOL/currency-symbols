import test from "ava";
import { getCurrencySymbol } from "../package/index.es";

test("Currency code", (t) => {
  t.is(getCurrencySymbol("sEK"), "kr");
  t.is(getCurrencySymbol("eur"), "€");
  t.is(getCurrencySymbol("USD"), "$");
  t.is(getCurrencySymbol("AuD"), "$");

  t.pass();
});

test("Currency code in uppercase", (t) => {
  t.is(getCurrencySymbol("SEK"), "kr");
  t.is(getCurrencySymbol("EUR"), "€");
  t.is(getCurrencySymbol("USD"), "$");
  t.is(getCurrencySymbol("AUD"), "$");

  t.pass();
});

test("Currency code in lowercase", (t) => {
  t.is(getCurrencySymbol("sek"), "kr");
  t.is(getCurrencySymbol("eur"), "€");
  t.is(getCurrencySymbol("usd"), "$");
  t.is(getCurrencySymbol("aud"), "$");

  t.pass();
});
