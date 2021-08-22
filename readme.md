## @brixtol/currency-symbols

Currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) 3 letter code mappings to Currency symbol. used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with currency conversion and presentation locales.

### Size

**Minified**: 1.51 KB <br>
**Gzipped**: 937 B

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/currency-symbols
```

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/currency-symbols
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/currency-symbols
```

### Usage

You can pass in a currency code that is lowercase, uppercase or a mixture of both.

```javascript
import { getCurrencySymbol } from "@brixtol/currency-symbols";

// Currency code SEK (Swedish Krona) - Kr
const SEK = getCurrencySymbol("SEK");

// Currency code EUR (Euros) - €
const EUR = getCurrencySymbol("eur");

// ....
```

### Related

Currency Symbol placements (use with [currency.js](https://github.com/scurker/))

- [@brixtol/currency-placements](https://github.com/brixtol/currency-placements)

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

Country code to country name (English) mappings:

- [@brixtol/country-names](https://github.com/brixtol/country-names)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
