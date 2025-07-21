export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PhoneNumberRegex = /^[4-9]\d{9}$/;

export const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+.\-]).{8,}$/;

export const LinkValidationRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

export const alphaletter = /^(?! )[a-zA-Z\u0900-\u097F]+(?: [a-zA-Z\u0900-\u097F]+)*$/;

export const alphaLetterWithnoSpaces =
  /^[a-zA-Z]+$|^[\u0900-\u097F]+$/;
export const alphaletterwithApostrophe =
  /^(?!\s)([a-zA-Z]+(?:[' ]?[a-zA-Z]+)*|[\u0900-\u097F ]+)$/;

export const noWhiteSpace = /^(?!\s)/;
export const alphaLetterWithHypen =
  /^(?!\s)([ a-zA-Z\-_']+)$|^(?!\s)([\u0900-\u097F \-_']+)$/;
export const alphaWoutSpeChar = /^(?!\s)([ a-zA-Z\u0900-\u097F\-_']+\s?)*$/;

export const alphaWoutSpeCharCommaWithAndHypen =
  /^([a-zA-Z,_\-']+\s?)*$/;

export const alphaWithAndOperator =
  /^(?!\s)[ .,&a-zA-Z,\-]+$|^(?!\s)[ .&\u0900-\u097F,\-]+$/;


export const alphaNumericletter =
  /^(?!\s)[0-9\-_']*[a-zA-Z ]*$/;

export const alphaNumericLetterWithNoSpecialCharacter =
  /^(?!\s)[a-zA-Z0-9 ]*$/;

export const IBANRegex = /^[A-Z0-9]{15,34}$/;

export const REGEX = {
  alphaNumericOnly: /^[a-zA-Z0-9]+$/,
  charLevelAlphaNumeric: /^[a-zA-Z0-9]$/,
};

export const NumWoutSpeChar = /^([0-9\-_']+\s?)*$/;
export const alphaWithCompulsaryNumberRexExp =
  /^(?!\s)((?=.*[A-Za-z])(?=.*\d)[A-Za-z\d,_'\s]+|[\u0900-\u097F ]+)$/;

export const alphaNumericWithNumberRexExp = /^[A-Za-z\d]+(\.\d+)?$/;

export const pinCodeRegExp = /^\d{6}$/;

export const MultiSixDigitRegex = /^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/;

export const stdCodeRegExp = /^.{3,}$/;

export const aadhaarRegExp = /^\d{12}$/;

export const panRegExp = /^[A-Z]{5}\d{4}[A-Z]$/;


export const NumberWithDecimalRegex = /^\d+(\.\d+)?$/;
export const NumberRegex = /^\d*$/;

export const DecimalNumberRegex = /^[1-9]\d*(\.\d+)?$/;

export const alphanumericHypenRegex =
  /^[a-z0-9]+([-\s][a-z0-9]+)*$|^(?!\s)([\u0900-\u097F ,\-]+)*$/i;
export const alphaWoutSpeCharComma = /^(?!\s)([ A-Za-z\u0900-\u097F,_']+\s?)*$/;

export const latValidation = /^[-+]?((90(\.0{1,6})?)|([1-8]?\d(\.\d{1,6})?))$/;

export const longValidation =
  /^[-+]?((180(\.0{1,6})?)|((1[0-7]\d|[1-9]?\d)(\.\d{1,6})?))$/;

export const RatingRegex = /^[1-5]$/;

export const NumericRange1to100Regex = /^([1-9]?\d|100)$/;

export const NumericTempRangeRegex =
  /^(-10|-[1-9]|[0-5]?\d|60)\s?-\s?(-10|-[1-9]|[0-5]?\d|60)$/;
export const HexRegex = /^#[a-fA-F0-9]{6}$/;

export const NoLeadingSpaceRegex = /^\S.*$/;
