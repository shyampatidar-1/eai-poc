import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getCountrybytype,
  postFileUpload,
  registerClinic,
} from "../../hooks/services/api-services";
import {
  allowedSizes,
  toastEmitter,
  validateRegex,
} from "../../utils/utilities";
import { API_RESPONSE } from "../../utils/app-constants";
import {
  ErrorMsg,
  handleFormCheckbox,
  handleFormInput,
  hasValidationErrors,
} from "../../utils/form-utils";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { EmailRegex, PasswordRegex } from "../../utils/regexValidation";
import {
  LOCATION_ICON,
  FILEUPLOAD_ICON,
  CLINIC_ICON,
  EYE_CLOSE,
  ARROW_ICON,
  EMAIL_ICON,
  EYE_OPEN,
  RIGHTARROW_IMG,
} from "../../utils/aap-image-constant";
import Input from "../../components/common/input";
import DropDown from "../../components/common/dropdown";
import Button from "../../components/common/button";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
// import Modal from "../../components/common/Model";
const Register = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const imgRef = useRef();
  const [formError, setFormError] = useState({});
  const [isUploadFileLoading, setIsUploadFileLoading] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [payload, setPayload] = useState({
    id: 0,
    clinicName: "",
    password: "",
    email: "",
    mobileNo: "",
    document: "",
    description: "",
    languageType: i18n.language,
    country: "",
    address: "",
    termAccepted: false,
    profile: "",
    location: "",
    experience: "",
    code: "",
  });

  const addbuttonClick = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (payload?.clinicName?.trim() === "") {
      return toastEmitter("error", "Clinic name is mandatory!");
    }
    if (payload?.mobileNo?.trim() === "") {
      return toastEmitter("error", "Mobile no is mandatory!");
    }
    if (payload?.email?.trim() === "") {
      return toastEmitter("error", "Email is mandatory!");
    }
    if (!validateRegex(payload.email, EmailRegex)) {
      return toastEmitter("error", "Email is invalid!");
    }
    if (payload?.password?.trim() === "") {
      return toastEmitter("error", "Password is mandatory!");
    }
    if (!validateRegex(payload.password, PasswordRegex)) {
      return toastEmitter(
        "error",
        "password should be a combination  8  characters which include altleast one special character , special symbol , capital letter and number"
      );
    }
    if (payload?.country?.trim() === "") {
      return toastEmitter("error", "Country is mandatory!");
    }
    if (payload?.address?.trim() === "") {
      return toastEmitter("error", "Address is mandatory!");
    }
    if (payload?.document?.trim() === "") {
      return toastEmitter("error", "Document is mandatory!");
    }
    if (!payload.termAccepted) {
      return toastEmitter("error", "Please accept the terms and conditions");
    }
    if (hasValidationErrors(formError)) {
      toastEmitter("error", "Please correct the errors before submitting.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await registerClinic(payload);
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        addbuttonClick.current.click();
        navigate(ROUTES?.LOGIN);
        setPayload({
          id: 0,
          clinicName: "",
          password: "",
          email: "",
          mobileNo: "",
          document: "",
          description: "",
          languageType: "",
          country: "",
          address: "",
          termAccepted: false,
          profile: "",
          location: "",
          experience: "",
          code: "",
        });
      }
      return setIsLoading(false);
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      return setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleNumber = (value, countryData) => {
    const dialCode = countryData?.dialCode || ""; // e.g., "33"
    const countryName = countryData?.name || ""; // e.g., "France"

    // Remove all non-digit characters
    let cleanedValue = value.replace(/\D/g, "");

    // Remove the dial code from the start
    if (cleanedValue.startsWith(dialCode)) {
      cleanedValue = cleanedValue.slice(dialCode.length);
    }

    setPayload((prev) => ({
      ...prev,
      mobileNo: cleanedValue,
      country: countryName,
      code: `+${dialCode}`,
    }));
  };

  const handleFileUpload = (e) => {
    const val = e.target.files?.[0];
    setFile(val?.name);
    if (!val) {
      toastEmitter("error", "No file selected.");
      return;
    }
    if (val.size > allowedSizes) {
      toastEmitter("error", "File size should not exceed 5MB.");
      imgRef.current.value = null;
      return false;
    }

    setIsUploadFileLoading(true);
    const fileData = new FormData();
    fileData.append("file", val);
    postFileUpload(fileData)
      .then(function (response) {
        if (response?.data?.status !== 200) {
          toastEmitter("error", response?.data?.message);
        }
        if (response?.data?.status === 200) {
          setPayload({ ...payload, document: response?.data?.data });
          toastEmitter("success", response?.data?.message);
        }
        return setIsUploadFileLoading(false);
      })
      .catch(function (err) {
        toastEmitter("error", API_RESPONSE?.MESSAGE_503);
        return setIsUploadFileLoading(false);
      });
  };

  const [countryList, setCountrylist] = useState([]);
  const fetchCountrydata = async (language) => {
    try {
      const response = await getCountrybytype(language);
      if (response?.data?.status === 200) {
        const formattedList = response?.data?.data?.map((item) => ({
          value: item.name,
          label: item.name,
        }));
        setCountrylist(formattedList);
      } else {
        toastEmitter("error", "Failed to fetch Country");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCountrydata(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <form onSubmit={handleSubmit} className="py-1">
        <div className="login-welcome">
          <h3 className="text-primary fw-bolder">{t("Register")}</h3>
          <p className="text-dark fw-bolder mt-2">
            {t("Already Have An Account?")}
            <Link to={ROUTES?.LOGIN} style={{ textDecoration: "none" }}>
              <span className=" text-primary cursor-pointer">
                {" "}
                {t("Login")}
              </span>
            </Link>
          </p>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              className="border-radius_input"
              type="text"
              value={payload.clinicName}
              name="clinicName"
              placeHolder={t("Enter clinic name")}
              handleChange={(e) =>
                setPayload(handleFormInput(e, payload, formError, setFormError))
              }
              error={formError?.clinicName}
              showIcon={true}
              iconsrc={CLINIC_ICON}
              labelName="Clinic Name"
            />
            <ErrorMsg error={formError?.clinicName} />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="username">
              {t("Mobile Number")} <span className="text-danger">*</span>
            </label>
            <div
              className={`${i18n.language === "ar" ? "arabicnumber" : "numberinput"
                }`}
            >
              <PhoneInput
                country={"fr"}
                value={payload.code + payload.mobileNo}
                a
                enableSearch={true}
                countryCodeEditable={false}
                onChange={(value, country) => handleNumber(value, country)}
                onlyCountries={["sa", "de", "fr", "ae"]}
                inputProps={{
                  name: "mobileNo",
                  required: true,
                  className: `form-control w-100 border-radius_input ${i18n.language === "ar" ? "arabaicuserdisabled" : ""
                    }`,
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Input
              className="border-radius_input"
              type="text"
              value={payload.email}
              name="email"
              placeHolder="Enter your email"
              handleChange={(e) =>
                setPayload(handleFormInput(e, payload, formError, setFormError))
              }
              error={formError?.email}
              showIcon={true}
              iconsrc={EMAIL_ICON}
              labelName="Email"
            />
            <ErrorMsg error={formError?.email} />
          </div>
          <div className="col-12 col-md-6">
            <Input
              className="border-radius_input"
              type={isPwdVisible}
              value={payload.password}
              name="password"
              labelName="Password"
              placeHolder="Enter your password"
              handleChange={(e) =>
                setPayload(handleFormInput(e, payload, formError, setFormError))
              }
              error={formError?.password}
              showRightIcon={true}
              iconsrc={EMAIL_ICON}
              rightIconSrc={isPwdVisible === "password" ? EYE_CLOSE : EYE_OPEN}
              onRightIconClick={() =>
                setIsPwdVisible(
                  isPwdVisible === "password" ? "text" : "password"
                )
              }
            />
          </div>
          <ErrorMsg error={formError?.password} className="" />
          <div className="col-12 col-lg-4">
            <DropDown
              className="border-radius_input "
              labelName="Select Country"
              name="country"
              options={countryList}
              value={payload?.country}
              showastrict={true}
              handleSelect={(e) =>
                setPayload(handleFormInput(e, payload, formError, setFormError))
              }
              disabled={true}
            />
          </div>
          <div className="col-12 col-lg-8">
            <Input
              className="border-radius_input"
              type="text"
              value={payload.address}
              name="address"
              placeHolder="Enter your address"
              handleChange={(e) => setPayload(handleFormInput(e, payload))}
              error={formError?.address}
              showIcon={true}
              iconsrc={LOCATION_ICON}
              labelName="Address"
            />
          </div>
          <div className="col-12 ">
            <label htmlFor="">
              {t("Document Upload")} <span className=" text-danger">*</span>
            </label>
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  handleFileUpload({ target: { files: [file] } });
                }
              }}
              className={`w-100 border-1 border-radius_input text-center py-1 mt-0 ${isDragging ? "bg-light border-primary" : ""
                } ${file ? "bg-light" : ""}`}
              style={{ borderStyle: "dashed", cursor: "pointer" }}
            >
              <input
                ref={imgRef}
                type="file"
                className="d-none"
                id="fileInput"
                accept=".pdf, .doc, .docx"
                onChange={handleFileUpload}
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                {isUploadFileLoading && (
                  <i className="fa fa-spinner fa-spin me-2 text-primary"></i>
                )}
                <img src={FILEUPLOAD_ICON} alt="file_image" />
                <span
                  className={` text-muted fw-400 ${i18n.language === "ar" ? "me-2" : "ms-2"
                    }`}
                >
                  {file === null ? t("Upload Document or Drag Here") : file}
                </span>
              </label>
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              name="termAccepted"
              type="checkbox"
              className="form-check-input"
              checked={payload.termAccepted}
              onChange={(e) => setPayload(handleFormCheckbox(e, payload))}
            />
            <label className="form-check-label my-0">
              {t("I accept")}
              <Link to={ROUTES?.TERMSANDCONDITION}>
                {" "}
                {t("terms & conditions")}
              </Link>{" "}
              {t("an")}{" "}
              <Link to={ROUTES?.PRIVACYPOLICY}> {t("privacy policy")}</Link>
            </label>
          </div>
        </div>
        <div className="my-3">
          <Button
            className="btn btn-primary btn-lg w-100 border-radius_input fw-600 fs-16"
            label="Register"
            type="submit"
            icon={ARROW_ICON}
            isLoading={isLoading}
          />
        </div>
      </form>
      {/* <Modal
        modalId="register"
        heading="Request Sent Successfully"
        modalClick={addbuttonClick}
        iconsrc={RIGHTARROW_IMG}
        paragraph="Your registration request has been submitted to the admin. You will be notified shortly at your registered email address."
      /> */}
    </>
  );
};

export default Register;
