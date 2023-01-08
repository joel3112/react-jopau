import {
  truncate as _truncate,
  camelCase as _camelCase,
  kebabCase as _kebabCase,
  capitalize as _capitalize
} from 'lodash-es';

export const truncate = (text: string, limit: number): string => {
  return _truncate(String(text), { length: limit, separator: ' ' });
};

export const toCamelCase = (text: string): string => {
  return _camelCase(String(text));
};

export const toKebabCase = (text: string): string => {
  return _kebabCase(String(text));
};

export const toCapitalize = (text: string): string => {
  return _capitalize(String(text));
};

export const removeSpecialCharacters = (text: string): string => {
  return String(text)
    .replace(/[ÂÀÅÃ]/g, 'A')
    .replace(/[âàåã]/g, 'a')
    .replace(/Ä/g, 'AE')
    .replace(/ä/g, 'ae')
    .replace(/Ç/g, 'C')
    .replace(/ç/g, 'c')
    .replace(/[ÉÊÈË]/g, 'E')
    .replace(/[éêèë]/g, 'e')
    .replace(/[ÓÔÒÕØ]/g, 'O')
    .replace(/[óôòõ]/g, 'o')
    .replace(/Ö/g, 'OE')
    .replace(/ö/g, 'oe')
    .replace(/ñ/, 'n')
    .replace(/Š/g, 'S')
    .replace(/š/g, 's')
    .replace(/ß/g, 'ss')
    .replace(/[ÚÛÙ]/g, 'U')
    .replace(/[úûù]/g, 'u')
    .replace(/Ü/g, 'UE')
    .replace(/ü/g, 'ue')
    .replace(/[ÝŸ]/g, 'Y')
    .replace(/[ýÿ]/g, 'y')
    .replace(/Ž/g, 'Z')
    .replace(/ž/, 'z')
    .replace(/[^a-zA-Z0-9 ]/g, '');
};

export const isUrl = (text: string): boolean => {
  return /^(?:(?:https?|ftp):)?\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*\.[a-z\u00a1-\uffff]{2,})(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    String(text)
  );
};

export const toBackgroundImageUrl = (text: string): string => {
  return text && isUrl(text) ? `url(${String(text)})` : '';
};
