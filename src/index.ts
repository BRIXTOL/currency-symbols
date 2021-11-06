import { CurrencyCodes } from '@brixtol/currency-codes';
import { LiteralUnion, AnyCase } from '@brixtol/tsutils';

interface ICurrencySymbols {
  /** United Arab Emirates (UAE Dirham) */
  AED: 'د.إ';
  /** Antigua And Barbuda (East Caribbean Dollar) */
  AFN: '؋';
  /** Albania (Lek) */
  ALL: 'L';
  /** Armenia (Armenian Dram) */
  AMD: '֏';
  /** Curacao (Netherlands Antillean Guilder) */
  ANG: 'ƒ';
  /** Angola (Kwanza) */
  AOA: 'Kz';
  /** Argentina (Argentine Peso) */
  ARS: '$';
  /** Australia (Australian Dollar) */
  AUD: '$';
  /** Aruba (Aruban Florin) */
  AWG: 'ƒ';
  /** Azerbaijan (Azerbaijanian Manat) */
  AZN: '₼';
  /** Bosnia And Herzegovina (Convertible Mark) */
  BAM: 'KM';
  /** Barbados (Barbados Dollar) */
  BBD: '$';
  /** Bangladesh (Taka) */
  BDT: '৳';
  /** Bulgaria (Bulgarian Lev) */
  BGN: 'лв.';
  /** Bahrain (Bahraini Dinar) **/
  BHD: '.د.ب';
  /** Burundi (Burundi Franc) */
  BIF: 'FBu';
  /** Bermuda (Bermudian Dollar) */
  BMD: '$';
  /** Bolivia Plurinational State (Mvdol) */
  BND: '$';
  /** Bolivia Plurinational State (Boliviano) */
  BOB: '$b';
  /** Brazil (Brazilian Real) */
  BRL: 'R$';
  /** Bahamas (Bahamian Dollar) **/
  BSD: '$';
  /** Earth (Bitcoin Cyrpto) **/
  BTC: '₿';
  /** Bhutan (Ngultrum) */
  BTN: 'Nu.';
  /** Botswana (Pula) */
  BWP: 'P';
  /** Belarus (Belarussian Ruble) */
  BYR: 'Br';
  /** Belarus (Belarussian Ruble) */
  BYN: 'Br';
  /** Belize (Belize Dollar) */
  BZD: 'BZ$';
  /** Canada (Canadian Dollar) */
  CAD: '$';
  /** Congo The Democratic Republic (Congolese Franc) */
  CDF: 'FC';
  /** Switzerland (Swiss Franc) */
  CHF: 'Fr.';
  /** Chile (Chilean Peso) */
  CLP: '$';
  /** China (Yuan Renminbi) */
  CNY: '¥';
  /** Colombia (Colombian Peso) */
  COP: '$';
  /** Costa Rica (Costa Rican Colon) */
  CRC: '₡';
  /** Cuba (Cuban Convertible Peso) */
  CUC: '$';
  /** Cuba (Cuban Peso) */
  CUP: '₱';
  /** Cabo Verde (Cabo Verde Escudo) */
  CVE: '$';
  /** Czech Republic The (Czech Koruna) */
  CZK: 'Kč';
  /** Djibouti (Djibouti Franc) */
  DJF: 'Fdj';
  /** Denmark (Danish Krone) */
  DKK: 'kr';
  /** Dominican Republic (Dominican Peso) */
  DOP: 'RD$';
  /** Algeria (Algerian Dinar) **/
  DZD: 'دج';
  /** Egypt (Egyptian Pound) */
  EGP: '£';
  /** Eritrea (Nakfa) */
  ERN: 'Nfk';
  /** Ethiopia (Ethiopian Birr) */
  ETB: 'Br';
  /** Earth (Ethereum Cyrpto) **/
  ETH: 'Ξ';
  /** European Union Countries (Euro) **/
  EUR: '€';
  /** Fiji (Fiji Dollar) */
  FJD: '$';
  /** Falkland Islands Malvinas (Falkland Islands Pound) */
  FKP: '£';
  /** United Kingdom Of Great Britain And Northern Ireland (Pound Sterling) */
  GBP: '£';
  /** Georgia (Lari) */
  GEL: '₾';
  /** Guernsey U.K (Pound Sterling) */
  GGP: '£';
  /** Ghana (Ghana Cedi) */
  GHS: 'GH₵';
  /** Gibraltar (Gibraltar Pound) */
  GIP: '£';
  /** Gambia (Dalasi) */
  GMD: 'D';
  /** Guinea (Guinea Franc) */
  GNF: 'FG';
  /** Guatemala (Quetzal) */
  GTQ: 'Q';
  /** Guyana (Guyana Dollar) */
  GYD: '$';
  /** Hong Kong (Hong Kong Dollar) */
  HKD: '$';
  /** Honduras (Lempira) */
  HNL: 'L';
  /** Croatia (Kuna) */
  HRK: 'kn';
  /** Haiti (US Dollar) */
  HTG: 'G';
  /** Hungary (Forint) */
  HUF: 'Ft';
  /** Indonesia (Rupiah) */
  IDR: 'Rp';
  /** Israel (New Israeli Sheqel) */
  ILS: '₪';
  /** Isle of Man (Manx pound) */
  IMP: '£';
  /** India (Indian Rupee) */
  INR: '₹';
  /** Iraq (Iraqi Dinar) */
  IQD: 'ع.د';
  /** Iran Islamic Republic (Iranian Rial) */
  IRR: '﷼';
  /** Iceland (Iceland Krona) */
  ISK: 'kr';
  /** Jersey (Jersery Pound) */
  JEP: '£';
  /** Jamaica (Jamaican Dollar) */
  JMD: 'J$';
  /** Jordan (Jordanian Dinar) */
  JOD: 'JD';
  /** Japan (Yen) */
  JPY: '¥';
  /** Kenya (Kenyan Shilling) */
  KES: 'KSh';
  /** Kazakhstan (Tenge) */
  KGS: 'лв';
  /** Cambodia (Riel) */
  KHR: '៛';
  /** Comoros (Comoro Franc) */
  KMF: 'CF';
  /** North Korea (North Korean Won) */
  KPW: '₩';
  /** South Korea (Won) */
  KRW: '₩';
  /** Kuwait (Kuwaiti Dinar) */
  KWD: 'KD';
  /** Cayman Islands The (Cayman Islands Dollar) */
  KYD: '$';
  /** Kazakhstan (Tenge) */
  KZT: '₸';
  /** Lao Peoples Democratic Republic (Kip) */
  LAK: '₭';
  /** Lebanon (Lebanese Pound) */
  LBP: '£';
  /** Sri Lanka (Sri Lanka Rupee) */
  LKR: '₨';
  /** Liberia (Liberian Dollar) */
  LRD: '$';
  /** Lesotho (Loti) */
  LSL: 'M';
  /** Earth (Litecoin Crypto) */
  LTC: 'Ł';
  /** Libya (Libyan Dinar) */
  LYD: 'LD';
  /** Morocco (Moroccan Dirham) */
  MAD: 'MAD';
  /** Moldova Republic (Moldovan Leu) */
  MDL: 'lei';
  /** Madagascar (Malagasy Ariary) */
  MGA: 'Ar';
  /** Republic Of North Macedonia (Denar) */
  MKD: 'ден';
  /** Myanmar (Kyat) */
  MMK: 'K';
  /** Mongolia (Tugrik) */
  MNT: '₮';
  /** Macao (Pataca) */
  MOP: 'MOP$';
  /** Mauritania (Ouguiya) */
  MRO: 'UM';
  /** Mauritania (Ouguiya) */
  MRU: 'UM';
  /** Mauritius (Mauritius Rupee) */
  MUR: '₨';
  /** Maldives (Rufiyaa) */
  MVR: 'Rf';
  /** Malawi (Kwacha) */
  MWK: 'MK';
  /** Mexico (Mexican Peso) */
  MXN: '$';
  /** Malaysia (Malaysian Ringgit) */
  MYR: 'RM';
  /** Mozambique (Mozambique Metical) */
  MZN: 'MT';
  /** Namibia (Namibia Dollar) */
  NAD: '$';
  /** Nigeria (Naira) */
  NGN: '₦';
  /** Nicaragua (Cordoba Oro) */
  NIO: 'C$';
  /** Norway (Norwegian Krone) */
  NOK: 'kr';
  /** Nepal (Nepalese Rupee) */
  NPR: '₨';
  /** Niue (New Zealand Dollar) */
  NZD: '$';
  /** Oman (Rial Omani) */
  OMR: '﷼';
  /** Panama (Balboa) */
  PAB: 'B/.';
  /** Peru (Nuevo Sol) */
  PEN: 'S/';
  /** Papua New Guinea (Kina) */
  PGK: 'K';
  /** Philippines (Philippine Peso) */
  PHP: '₱';
  /** Pakistan (Pakistan Rupee) */
  PKR: '₨';
  /** Poland (Zloty) */
  PLN: 'zł';
  /** Paraguay (Guarani) */
  PYG: 'Gs';
  /** Qatar (Qatari Rial) */
  QAR: '﷼';
  /** China (Yuan Renminbi) */
  RMB: '￥';
  /** Romania (Romanian Leu) */
  RON: 'L';
  /** Serbia (Serbian Dinar) */
  RSD: 'Дин.';
  /** Russian Federation (Russian Ruble) */
  RUB: '₽';
  /** Rwanda (Rwanda Franc) */
  RWF: 'R₣';
  /** Saudi Arabia (Saudi Riyal) */
  SAR: '﷼';
  /** Solomon Islands (Solomon Islands Dollar) */
  SBD: '$';
  /** Seychelles (Seychelles Rupee) */
  SCR: '₨';
  /** Sudan (Sudanese Pound) */
  SDG: 'ج.س.';
  /** Sweden (Swedish Krona) */
  SEK: 'kr';
  /** Singapore (Singapore Dollar) */
  SGD: '$';
  /** Saint Helena Ascension And Tristan Da Cunha (Saint Helena Pound) */
  SHP: '£';
  /** Sierra Leone (Leone) */
  SLL: 'Le';
  /** Somalia (Somali Shilling) */
  SOS: 'S';
  /** Suriname (Surinam Dollar) */
  SRD: '$';
  /** South Sudan (South Sudanese Pound) */
  SSP: '£';
  /** Sao Tome And Principe (Dobra) */
  STD: 'Db';
  /** Sao Tome And Principe (Dobra) */
  STN: 'Db';
  /** El Salvador (El Salvador Colon) */
  SVC: '$';
  /** Syrian Arab Republic (Syrian Pound) */
  SYP: '£';
  /** Swaziland (Lilangeni) */
  SZL: 'E';
  /** Thailand (Baht) */
  THB: '฿';
  /** Tajikistan (Somoni) */
  TJS: 'SM';
  /** Turkmenistan (Turkmenistan New Manat) */
  TMT: 'T';
  /** Tunisia (Tunisian Dinar) */
  TND: 'د.ت';
  /** Tonga (Pa’anga) */
  TOP: 'T$';
  /** Turkey and Northern Cyprus (Turkish lira) */
  TRL: '₤';
  /** Turkey (Turkish Lira) */
  TRY: '₺';
  /** Trinidad And Tobago (Trinidad and Tobago Dollar) */
  TTD: 'TT$';
  /** Tuvalu (Tuvaluan dollar) */
  TVD: '$';
  /** Taiwan Province Of China (New Taiwan Dollar) */
  TWD: 'NT$';
  /** Tanzania United Republic (Tanzanian Shilling) */
  TZS: 'TSh';
  /** Ukraine (Hryvnia) */
  UAH: '₴';
  /** Uganda (Uganda Shilling) */
  UGX: 'USh';
  /** United States Of America (US Dollar) */
  USD: '$';
  /** Uruguay (Peso Uruguayo) */
  UYU: '$U';
  /** Uzbekistan (Uzbekistan Sum) */
  UZS: 'soʻm';
  /** Venezuela (Bolívar Soberano) */
  VEF: 'Bs';
  /** Viet Nam (Dong) */
  VND: '₫';
  /** Vanuatu (Vatu) */
  VUV: 'VT';
  /** Samoa (Tala) */
  WST: 'WS$';
  /** Central Africa CFA Franc (Céfa) */
  XAF: 'FCFA';
  /** Earth (Bitcoin Crypto) **/
  XBT: '₿';
  /** Eastern Caribbean (Eastern Caribbean Dollar) */
  XCD: '$';
  /** West African CFA Franc  (Céfa) */
  XOF: 'CFA';
  /** French Polynesia (Franc) */
  XPF: '₣';
  /** Yemen (Yemeni Rial) */
  YER: '﷼';
  /** South Africa (Rand) */
  ZAR: 'R';
  /** Zambia (Zambian Kwacha) */
  ZMW: 'ZK';
  /** Zambia (Old) (Zambian Kwacha) */
  ZMK: 'ZK';
  /** Zimbabwe (Zimbabwe Dollar) */
  ZWL: 'Z$';
}

const CurrencySymbols: ICurrencySymbols = Object.freeze({
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв.',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: '$b',
  BRL: 'R$',
  BSD: '$',
  BTC: '₿',
  BTN: 'Nu.',
  BWP: 'P',
  BYR: 'Br',
  BYN: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'FC',
  CHF: 'Fr.',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUC: '$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: '$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: '$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: '₸',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: '$',
  LSL: 'M',
  LTC: 'Ł',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'L',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: '$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '$',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: 'soʻm',
  VEF: 'Bs',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: '₿',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZMK: 'ZK',
  ZWL: 'Z$'
});

/**
 * Currency Symbol
 *
 * Extracts the Symbol string from the ICurrencySymbol interface
 * which is use as the Return type reference
 */
export type CurrencySymbol<ISO> = (
  ISO extends CurrencyCodes
  ? ICurrencySymbols[ISO]
  : never
)
/**
 * Get Currency Symbol
 *
 * Requires a 3 Letter (ISO) currency code to be passed
 * and returns the currency symbol of the currency code.
 *
 * > _Accepts either uppercase, lowercase or
 * or a combination of either_
 */
function getCurrencySymbol <ISO extends AnyCase<CurrencyCodes>> (
  code: LiteralUnion<ISO>
): CurrencySymbol<ISO> {

  const symbol = CurrencySymbols[code.toUpperCase()];

  if (!symbol) throw new Error(`"${code}" is an invalid currency code`);

  return symbol;

}

export { ICurrencySymbols, CurrencySymbols, getCurrencySymbol, CurrencyCodes };
