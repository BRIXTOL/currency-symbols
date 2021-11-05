## @brixtol/currency-symbols

Currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) 3 letter code mappings to Currency symbol. used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with currency conversion and presentation locales.

### Size

**Minified**: 1.52 KB <br>
**Gzipped**: 976 B

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

// Currency code SEK (Krona)
const sek = getCurrencySymbol("SEK"); // Kr

// Currency code EUR (Euros)
const eur = getCurrencySymbol("eur"); // €

// Currency code USD (Dollar)
const usd = getCurrencySymbol("uSd"); // $
```

The module also exposes the raw mappings and interface on the export. The mappings object is provided **read only** using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). The raw mappings are annotated with JSDoc comments so when using an editor that supports intellisense (ie: vscode) you will receive the country and currency name in completions and hovers.

```javascript
import { CurrencySymbols, ICurrencySymbols } from "@brixtol/currency-symbols";

// Mapping Object

CurrencySymbols.SEK; // kr
CurrencySymbols.EUR; // €
CurrencySymbols.RUB; // ₽
CurrencySymbols.USD; // $

// Interface

ICurrencySymbols.SEK; // kr
ICurrencySymbols.EUR; // €
ICurrencySymbols.RUB; // ₽
ICurrencySymbols.USD; // $
```

> The interface is identical to the mapping.

### Crypto Mappings

The module supports 4 crypto currency mappings. Only cryptos that have alt-codes are supported, please submit a PR if any are missing.

- BTC (Bitcoin)
- ETH (Ethereum)
- LTL (Litecoin)
- XBT (Bitcoin)

### Related

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

Country code to country name (English) mappings:

- [@brixtol/country-names](https://github.com/brixtol/country-names)

Currency Symbol placements (use with [currency.js](https://github.com/scurker/))

- [@brixtol/currency-placements](https://github.com/brixtol/currency-placements)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
