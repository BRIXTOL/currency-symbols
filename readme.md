## @brixtol/currency-symbols

Currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) 3 letter code mappings to Currency symbol. used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with currency conversion and presentation locales.

Minified: 1.51 KB <br>
Gzipped: 937 B

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

You can pass in a country code that is lowercase, uppercase or a mixture of both.

```javascript
import symbol from "@brixtol/currency-symbols";

// Currency code SEK (Swedish Krona) - Kr
const SEK = symbol("SEK");

// Currency code EUR (Euros) - €
const EUR = symbol("eur");

// ....
```

### Related

Locale related mappings helpers:

- [@brixtol/locale-mappings](https://github.com/brixtol/locale-mappings)

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
