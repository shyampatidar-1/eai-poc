import moment from "moment";
import { alphaletter, alphaLetterWithnoSpaces, alphaNumericLetterWithNoSpecialCharacter, EmailRegex, IBANRegex, NumberRegex, PasswordRegex, PhoneNumberRegex } from "./regexValidation";

export const handleFormInput = (e, payload, formError = null, setFormError = null) => {
  const { name, value } = e.target;
  if (!name || name.trim() === "") return payload;

  // Perform validation ONLY if formError and setFormError are provided
  if (validationConfig[name] && formError && setFormError) {
    const { regex, message } = validationConfig[name];
    checkValidation(value, name, message, regex, formError, setFormError);
  }

  return {
    ...payload,
    [name]: value,
  };
};
export const handleFormNumericInput = (e, payload) => {
  return { ...payload, [e.target.name]: parseInt(e.target.value) };
}
export const handleFormRadio = (e, payload) => {
  return { ...payload, [e.target.name]: parseInt(e.target.value) };
}

export const handleFormCheckbox = (e, payload) => {
  return { ...payload, [e.target.name]: e.target.checked ? true : false };
}
export const handleDateChange = (e, payload) => {
  return { ...payload, [e.target.name]: moment(e.target.value).format("DD-MM-YYYY") };
};

export const handleTimeChange = (e, payload) => {
  return { ...payload, [e.target.name]: parseInt(e.target.value) };
};
export const handleFormMultiSelect = (e, payload) => {
  let options = e.target.options,
    value = [];
  for (let i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      value.push(parseInt(options[i].value));
    }
  }
  return { ...payload, [e.target.name]: value };
};


export const onInputChange = (input) => {
  let { value, maxLength } = input.target;
  if (value.length > maxLength) {
    input.target.value = value.slice(0, maxLength);
  }
};
export const convertTimeToAmPm = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${formattedMinutes} ${period}`;
};
export const convertAppointmentTimeToAMPM = (startTime, endTime) => {
  function toAMPM(time) {
    const [hour, minute] = time?.split(':');
    const h = parseInt(hour);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const adjustedHour = h % 12 || 12;
    return `${adjustedHour}:${minute} ${ampm}`;
  }
  return `${startTime && toAMPM(startTime)} - ${endTime && toAMPM(endTime)}`;
}
export const handleDateFormate = (row) => {
  const date = new Date(row);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
export const convertToInputDateFormat = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return `${year}-${month}-${day}`;
}
// utils/phone-utils.js

export const formatPhoneNumber = (code, mobileNo, separator = " ") => {
  const cleanCode = code?.replace(/^\++/, '+') || '';
  const cleanNumber = mobileNo
    ?.replace(/^\+/, '')   // Remove leading +
    ?.replace(/^0+/, '')   // Remove leading zeros
    || '';
  return `${cleanCode}${separator}${cleanNumber}`;
};


export const getFileExtension = (filename) => filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
export const fileDownload = (imageUrl) => {
  window.open(imageUrl, "_blank");
};

export const ErrorMessage = {
  Name: "Name is mandatory",
  FirstName: "First name is mandatory",
  LastName: "Last name is mandatory",
  Email: "Email is mandatory",
  Password: "Password is mandatory",
  ConfirmPassword: "Confirm password is mandatory",
  PhoneNumber: "Phone number is mandatory",
  MobileNumber: "Mobile number is mandatory",
  UserId: "User ID is mandatory",
  Captcha: "Captcha is mandatory",
  MatchPassword: "Password and confirm password do not match",
  ApplicationCategory: "Application category is mandatory",
  ApplicationSubCategory: "Application sub-category is mandatory",
  Number: "Number is mandatory",
  Valid: {
    FirstName: "First name is invalid",
    LastName: "Last name is invalid",
    Name: "Name is invalid",
    RoleName: "Role name is invalid",
    Email: "Email is invalid",
    Password: "Password is invalid",
    ConfirmPassword: "Confirm password is invalid",
    PhoneNumber: "Phone number is invalid",
    MobileNumber: "Mobile number is invalid",
    AlternateNumber: "Alternate number is invalid",
    UserId: "User ID is invalid",
    Captcha: "Captcha is invalid",
    Number: "Number is invalid",
  },

  Invalid: {
    Formate: "Format is not valid", // Optional: change "Formate" to "Format" as key too
  }
};


export const checkValidation = (
  value,
  fieldName,
  errorMessage,
  regex,
  formError,
  setFormError
) => {
  const updatedError = { ...formError };
  const statusName = `${fieldName}Status`;

  if (value && !value.match(regex)) {
    // If value is not empty and fails regex
    updatedError[fieldName] = errorMessage;
    updatedError[statusName] = true;
  } else {
    // Common block for both empty or valid cases
    updatedError[fieldName] = "";
    updatedError[statusName] = false;
  }

  setFormError(updatedError);
};


export const ErrorMsg = ({ error }) => {
  let errMsg = error ? error : "";
  let formatMsg =
    errMsg &&
    (errMsg.charAt(0).toUpperCase() + errMsg.slice(1))
      .replace(/[A-Z]/g, " $&")
      .trim();
  return (
    <div className="error-message-style text-danger fs-13" >
      {formatMsg}
    </div>
  );
};

export const hasValidationErrors = (formError) => {
  return Object.values(formError).some((err) => err !== "" && err !== false);
};

// countryCurrencyMapper.js
export const countryCurrencyMap = {
  "SAUDI ARABIA": "﷼",           // Saudi Riyal
  "FRANCE": "€",                 // Euro
  "UNITED ARAB  EMIRATES": "د.إ", // UAE Dirham
  "GERMANY": "€",                // Euro
  "UNITED KINGDOM": "£"          // Pound Sterling
};

// Optional: Get currency symbol by country name with fallback
export const getCurrencySymbol = (countryName) => {
  return countryCurrencyMap[countryName?.toUpperCase()] || "$"; // default fallback
};

export const restrictInputByRegex = (regex) => {
  return (e) => {
    if (!regex.test(e.data)) {
      e.preventDefault();
    }
  };
};

const validationConfig = {
  firstName: { regex: alphaLetterWithnoSpaces, message: ErrorMessage.Valid.FirstName },
  lastName: { regex: alphaLetterWithnoSpaces, message: ErrorMessage.Valid.LastName },
  clinicName: { regex: alphaletter, message: ErrorMessage.Valid.Name },
  email: { regex: EmailRegex, message: ErrorMessage.Valid.Email },
  mobileNumber: { regex: PhoneNumberRegex, message: ErrorMessage.Valid.MobileNumber },
  experiance: { regex: NumberRegex, message: ErrorMessage.Valid.Number },
  bankName: { regex: alphaletter, message: ErrorMessage.Valid.Name },
  swiftBicCode: { regex: alphaNumericLetterWithNoSpecialCharacter, message: ErrorMessage.Valid.Number },
  nationalId: { regex: alphaNumericLetterWithNoSpecialCharacter, message: ErrorMessage.Valid.Number },
  sirenNo: { regex: alphaNumericLetterWithNoSpecialCharacter, message: ErrorMessage.Valid.Number },
  iban: {
  regex: IBANRegex,
  message: "Iban must be between 15 and 34 characters, containing only uppercase letters and numbers.",
},
password: { regex: PasswordRegex, 
  message:"Password must be at least 8 characters, including one uppercase letter, one number, and one special character.",
 }

};



