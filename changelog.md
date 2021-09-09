# Changelog

### 1.1.1 - 10/09/2021

Replaced development rollup dependencies to use [@brixtol/rollup-config](https://github.com/BRIXTOL/rollup-config)

### 1.1.0 - 23/08/21

This version exposes the object mappings to the export so users can use them opposed to relying on the matching function. The object mapping have been annotated with JSDoc comments which inform upon the country and name of each currency. Some currencies have been removed from the mappings which are listed below in symbol updates.

#### Symbol Updates

- Removed `GHC` (Old Ghanaian Cedi) which is now `GHS`
- Removed `EEK` (Estonian Kroon) which now uses `EUR`
- Removed `LTL` (Lithuanian Litas) which was replaced in 2015 by the Euro
- Removed `ZWD` (Zimbabwe Dollar) which using ISO code of `ZWL` (currently)

#### Breakdown

- Renamed interface export to `ICurrencySymbol`
- Provided JSDoc annotations for all currencies which inform upon country and currency name
- Expose the object mapping on export, available on `CurrencySymbols`
- Improved and aligned rollup build config
- Cleaned up working directory
- Updated readme and examples
- Added [@brixtol/eslint-config](https://github.com/BRIXTOL/eslint-config) to development dependencies.
- Added [@brixtol/prettier-config](https://github.com/BRIXTOL/prettier-config) to development dependencies.

### 1.0.0 - 22/08/2021

First major version, ships with a **breaking change**. The default export is no longer supported as this module now uses a named export.

#### Named export

```js
import { getCurrencySymbol } from '@brixtol/currency-symbols';

const currency = getCurrencySymbol('SE'); // kr
```

#### Breakdown

- No longer support default exports, project now uses named export approach.
- Convert module to TypeScript
- Updated development dependencies
- Provided interface of currency mappings, available on `ICurrencies`

### 0.1.3 - 19/10/2020

- Updated Documentation

### 0.1.1 > 0.1.2 - 09/09/2020

- Various adaptations for multiple registry supports

### 0.1.0

##### 09/09/2020

- Initial Release
