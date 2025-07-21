import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/common/input";
import PhoneInput from "react-phone-input-2";
import {
  CLINIC_ICON,
  EDIT_ICON,
  EDIT_PROFILE_ICON,
  EMAIL_ICON,
  EXPERIANCE_ICON,
  FILEUPLOAD_ICON,
  LOCATION_ICON,
  PDF_IMG,
  PROFILE_IMG,
  RIGHTARROW_IMG,
} from "../../utils/aap-image-constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fileDownload, handleFormInput } from "../../utils/form-utils";
import TextArea from "../../components/common/text-area";
import {
  allowedSizes,
  decryptAEStoJSON,
  encryptJSONtoAES,
  toastEmitter,
  validateRegex,
} from "../../utils/utilities";
import {
  getCLinicById,
  PostAddStaff,
  postFileUpload,
  registerClinic,
} from "../../hooks/services/api-services";
import { API_RESPONSE } from "../../utils/app-constants";
import Button from "../../components/common/button";
import { alphanumericHypenRegex, EmailRegex, NoLeadingSpaceRegex } from "../../utils/regexValidation";

import { API_URL } from "../../utils/url-constants";
import BreadCrum from "../../components/common/BreadCrum";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { setLoggedUserReducer } from "../../hooks/redux/slice/logged-user";

const MyProfile = () => {
  const { t, i18n } = useTranslation();
  const [userbtndisable, setuserbtndisable] = useState(true);
  const dispatch = useDispatch();
  const [isUploadFileLoading, setIsUploadFileLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef();
  const addbuttonClick = useRef();
  const navigate = useNavigate();
  const { value } = useSelector((state) => state?.loggedUser);
  const userData = decryptAEStoJSON(value);
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
    termAccepted: true,
    profile: "",
    experience: "",
    location: "",
    code: ""
  });


  const getClinicById = async () => {

    try {

      const response = await getCLinicById(userData?.id, userData?.loginClinicType ? 0 : userData?.adminResponsePayload?.id, i18n.language);
      if (response.status !== 200) {
      } else {
        let res = response?.data?.data;
        setPayload({
          id: res.id,
          clinicName: res.clinicName,
          password: "",
          email: res.email,
          mobileNo: res.mobileNo,
          document: res.document,
          description: res.description,
          languageType: res.languageType,
          country: res.country,
          address: res.address,
          termAccepted: res.termAccepted,
          profile: res.profile,
          experience: res.experience,
          code: `+${res.code?.replace(/\D/g, "")}`,
        });
        dispatch(setLoggedUserReducer(encryptJSONtoAES(response?.data?.data)));
      }
      return;
    } catch (err) {
      toastEmitter("error", API_RESPONSE.MESSAGE_503);
      return;
    }
  };
  useEffect(() => {
    getClinicById();
  }, [userData?.id]);

  const handleFileUpload = (e) => {
    const val = e?.target?.files?.[0] || e?.dataTransfer?.files?.[0];
    const inputName = e?.target?.name || "document";


    if (e.target.name === "document") {
      setFile(val?.name);
    }
    setIsUploadFileLoading(true);
    if (inputName === "document") {
      setFile(val?.name);
    }
    if (!val) {
      toastEmitter("error", "No file selected.");
      return;
    }
    if (val.size > allowedSizes) {
      toastEmitter("error", "File size should not exceed 5MB.");
      setFile("");
      if (imgRef.current) imgRef.current.value = null;
      setIsUploadFileLoading(false);
      return false;
    }
    const fileData = new FormData();
    fileData.append("file", val);
    postFileUpload(fileData)
      .then(function (response) {
        if (response?.data?.status !== 200) {
          toastEmitter("error", response?.data?.message);
        }
        if (response?.data?.status === 200) {
          if (e.target.name === "document") {
            setPayload({ ...payload, document: response?.data?.data });
          } else if (e.target.name === "profile") {
            if (userData?.loginClinicType) {
              setPayload({ ...payload, profile: response?.data?.data });
            } else {
              setStaffPayload({ ...staffPayload, profile: response?.data?.data });
            }
          }
          toastEmitter("success", response?.data?.message);
        }
      })
      .catch(function (err) {
        toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      })
      .finally(() => {
        setIsUploadFileLoading(false);
      });
  };
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

    if (payload?.country?.trim() === "") {
      return toastEmitter("error", "Country is mandatory!");
    }
    if (payload?.experience?.trim() === "") {
      return toastEmitter("error", "experiance is mandatory!");
    }
    if (payload?.address?.trim() === "") {
      return toastEmitter("error", "Address is mandatory!");
    }

    if (payload?.document?.trim() === "") {
      return toastEmitter("error", "Document is mandatory!");
    }

    if (!payload.termAccepted) {
      return toastEmitter("error", "Please accept the term and condition");
    }
    if (payload?.profile?.trim() === "") {
      return toastEmitter("error", "Profile is mandatory!");
    }
    setIsLoading(true);
    try {
      const response = await registerClinic(payload);
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        getClinicById()
        addbuttonClick.current.click();
        setuserbtndisable(true);
      }
      return setIsLoading(false);
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      return setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDataBack = () => {
    navigate(ROUTES.DASHBOARD);
  };
  const dialCodeToISO = {
    "49": "de",
    "33": "fr",
    "966": "sa",
    "971": "ae",
  };

  const cleanedDialCode = userData?.code?.replace(/\D/g, ''); // handles "+++++33" -> "33"
  const selectedCountryISO = dialCodeToISO[cleanedDialCode] || 'ae';


  const handleNumber = (value, countryData) => {
    const dialCode = countryData?.dialCode?.replace(/\D/g, "") || ""; // Ensures only digits
    const countryName = countryData?.name || "";

    let cleanedValue = value.replace(/\D/g, ""); // Remove non-digits from full value

    // Remove dialCode from cleanedValue if it exists at start
    if (cleanedValue.startsWith(dialCode)) {
      cleanedValue = cleanedValue.slice(dialCode.length);
    }

    setPayload((prev) => ({
      ...prev,
      mobileNo: cleanedValue,
      code: `+${dialCode}`,  // Only one + added
      country: countryName,
    }));
  };

  // staff profile update code 
  const [staffPayload, setStaffPayload] = useState({
    id: userData?.adminResponsePayload?.id,
    userName: userData?.adminResponsePayload?.userName,
    email: userData?.adminResponsePayload?.email,
    roleId: userData?.adminResponsePayload?.roleResponsePayload?.id,
    clinicId: userData?.id,
    password: "",
    mobileNo: userData?.adminResponsePayload?.mobileNo,
    profile: userData?.adminResponsePayload?.profile,
    languageType: i18n.language
  });

  const handleStaffNumber = (value, country) => {
    const dialCode = country?.dialCode || "";
    let cleanedValue = value.replace(/\D/g, "");
    if (cleanedValue.startsWith(dialCode)) {
      cleanedValue = cleanedValue.slice(dialCode.length);
    }
    setStaffPayload((prev) => ({
      ...prev,
      mobileNo: cleanedValue,
    }));
  };


  const handleStaffSubmit = async (e) => {
    e.preventDefault();

    if (
      !NoLeadingSpaceRegex.test(staffPayload?.userName) ||
      staffPayload?.userName?.trim() === "" ||
      !alphanumericHypenRegex?.test(staffPayload?.userName)
    ) {
      return toastEmitter(
        "error",
        "Please enter a valid staff name (No leading spaces, cannot be empty, only alphanumeric & hyphen allowed)."
      );
    }
    if (staffPayload?.email?.trim() === "") {
      return toastEmitter(
        "error",
        "Please enter a  email ( cannot be empty)."
      );
    }
    if (staffPayload.roleId === 0) {
      return toastEmitter("error", "Role name is mandatory!");
    }

    setIsLoading(true);
    try {
      const response = await PostAddStaff(staffPayload);
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        addbuttonClick.current.click();
        setuserbtndisable(true);
      }
      return setIsLoading(false);
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      return setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {userData?.loginClinicType ?
        <form onSubmit={handleSubmit}>
          <div className="main_datatable mt-lg-3 mt-2 bank_tabs">
            <BreadCrum
              firstData={t("Dashboard")}
              iconshow1={true}
              secondData={t("My Profile")}
              onFirstDataClick={handleDataBack}
            />
            <div className="user_profile_intro">
              <div className="user_data">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <div className="profile-img-div">
                      <img
                        src={payload?.profile ? `${API_URL?.ServerURL}${payload?.profile}` : PROFILE_IMG}
                        className="profileimg  mb-3"
                        alt="PROFILE_IMG"
                      />
                    </div>
                    <div className="">
                      <label>
                        <img
                          src={EDIT_PROFILE_ICON}
                          className={`mb-3 cursor-pointer  ${i18n.language === "ar" ? "profile-iconar" : "profile-icon "}`}
                          type="button"
                          alt="WHITEBGDOWNARROW_IMG"
                        />
                        <input
                          className="form-control d-none"
                          type="file"
                          name="profile"
                          ref={imgRef}
                          id="imgFileUpload"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e)}
                          disabled={userbtndisable}
                        />
                      </label>
                    </div>
                  </div>
                  {userbtndisable && (
                    <div>
                      <button
                        type="button"
                        className=" px-3 py-2 rounded border-0 text-white submitbtn"
                        onClick={() => setuserbtndisable(false)}
                      >
                        {" "}
                        {t("Edit")} <span><img src={EDIT_ICON} alt="" className={`plusicon ms-1 ${i18n.language === "ar" ? "me-2" : "ms-2"}`} /></span>
                      </button>
                    </div>
                  )}
                </div>
                <div className="row mb-2">
                  <div className="col-12 col-md-6">
                    <Input
                      className="border-radius_input"
                      type="text"
                      value={payload.clinicName}
                      name="clinicName"
                      placeHolder="Enter Clinic Name"
                      handleChange={(e) =>
                        setPayload(handleFormInput(e, payload))
                      }
                      showIcon={true}
                      iconsrc={CLINIC_ICON}
                      labelName="Clinic Name"
                      disabled={userbtndisable}
                    />
                  </div>

                  <div className="col-12 col-md-6">

                    <label htmlFor="username">
                      {t("Mobile Number")} <span className=" text-danger">*</span>
                    </label>
                    <div className={` ${userbtndisable ? "userdisabled" : ""} ${i18n.language === "ar" ? "arabicnumber" : "numberinput"
                      }`}>
                      <PhoneInput
                        country={selectedCountryISO}
                        value={payload.code + payload.mobileNo}
                        countryCodeEditable={false}
                        onlyCountries={[selectedCountryISO]}
                        onChange={(value, country) => handleNumber(value, country)}
                        enableSearch={false}
                        disableDropdown={true}
                        disabled={userbtndisable}
                        inputProps={{
                          name: "mobileNo",
                          className: `form-control w-100 border-radius_input ${userbtndisable ? "userdisabled" : ""
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
                      placeHolder="Enter Email"
                      handleChange={(e) =>
                        setPayload(handleFormInput(e, payload))
                      }
                      showIcon={true}
                      iconsrc={EMAIL_ICON}
                      labelName="Email"
                      disabled={true}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Input
                      className="border-radius_input"
                      type="number"
                      value={payload.experience}
                      name="experience"
                      placeHolder="Enter Experience"
                      handleChange={(e) =>
                        setPayload(handleFormInput(e, payload))
                      }
                      showIcon={true}
                      iconsrc={EXPERIANCE_ICON}
                      labelName="Experience"
                      disabled={userbtndisable}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Input
                      className="border-radius_input"
                      type="text"
                      value={payload.address}
                      name="address"
                      placeHolder="Enter Your Address"
                      handleChange={(e) => setPayload(handleFormInput(e, payload))}
                      showIcon={true}
                      iconsrc={LOCATION_ICON}
                      labelName="Address"
                      disabled={userbtndisable}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row align-items-center">
                      <div className="col-11">
                        <label className="">
                          {t("Document Upload")} <span className="text-danger">*</span>
                        </label>

                        <div
                          onDragOver={(e) => {
                            if (userbtndisable) return;
                            e.preventDefault();
                            e.stopPropagation();
                            setIsDragging(true);
                          }}
                          onDragLeave={(e) => {
                            if (userbtndisable) return;
                            e.preventDefault();
                            e.stopPropagation();
                            setIsDragging(false);
                          }}
                          onDrop={(e) => {
                            if (userbtndisable) return;
                            e.preventDefault();
                            e.stopPropagation();
                            setIsDragging(false);
                            const droppedFile = e.dataTransfer.files?.[0];
                            if (droppedFile) {
                              handleFileUpload({ target: { files: [droppedFile], name: "document" } });
                            }
                          }}
                          className={`w-100 border border-1 border-radius_input text-center  form-control  mt-0 ${isDragging ? "bg-light border-primary" : ""} ${userbtndisable ? "userdisabled" : ""
                            } ${file ? "bg-light" : ""}`}
                          style={{
                            borderStyle: "dashed",
                            cursor: userbtndisable ? "not-allowed" : "pointer",
                            pointerEvents: userbtndisable ? "none" : "auto",
                          }}
                        >
                          <input
                            ref={imgRef}
                            type="file"
                            id="fileInput"
                            className="d-none form-control  border-radius_input "
                            accept=".pdf, .doc, .docx"
                            onChange={handleFileUpload}
                            name="document"
                            disabled={userbtndisable}
                          />

                          <label htmlFor="fileInput" className="cursor-pointer m-0 d-block">
                            {isUploadFileLoading && (
                              <i className="fa fa-spinner fa-spin me-2 text-primary"></i>
                            )}
                            <img src={FILEUPLOAD_ICON} alt="Upload Icon" />
                            <span className={`text-muted fw-400 ${i18n.language === "ar" ? "me-2" : "ms-2"}`}>
                              {file === null ? t("Upload Document or Drag Here") : file}
                            </span>
                          </label>
                        </div>
                      </div>

                      {payload?.document && (
                        <div className="col-1 ps-0 ">
                          <img
                            src={PDF_IMG}
                            className="cursor-pointer"
                            alt="PROFILE_IMG"
                            onClick={() => fileDownload(`${API_URL?.ServerURL}${payload?.document}`)}
                            width="32px"
                            height="32px"
                            style={{ marginTop: "38px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 ">
                    <TextArea
                      className="border-radius_input"
                      type="text"
                      value={payload.description}
                      name="description"
                      placeholder="Enter Description"
                      handleChange={(e) =>
                        setPayload(handleFormInput(e, payload))
                      }
                      showIcon={true}
                      iconsrc={CLINIC_ICON}
                      labelName={t("Description")}
                      disabled={userbtndisable}
                      showastrict={true}
                    />
                  </div>
                </div>
                {!userbtndisable && (
                  <div className="d-flex justify-content-center mt-4">
                    <Button
                      type="button"
                      className={`px-5 py-2 rounded border-0  cancelbtn ${i18n.language === 'ar' ? "ms-2" : "me-2"}`}
                      label="Cancel"
                      onClick={() => setuserbtndisable(true)}
                    />
                    <Button
                      type="submit"
                      className=" px-5 py-2 rounded border-0 text-white submitbtn"
                      label={t("Save Changes")}
                      isLoading={isLoading}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </form> :
        <form >
          <div className="main_datatable my-lg-3 mt-2 ">
            <div className=" add_doctor card p-3 border border-radius_input">

              <BreadCrum
                firstData={t("Dashboard")}
                iconshow1={true}
                secondData={t("My Profile")}
                onFirstDataClick={handleDataBack}
              />
              <div className="user_profile_intro">
                <div className="user_data">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex justify-content-center align-items-center position-relative">
                      <div className="profile-img-div">
                        <img
                          src={staffPayload?.profile ? `${API_URL?.ServerURL}${staffPayload?.profile}` : PROFILE_IMG}
                          className="profileimg  mb-3"
                          alt="PROFILE_IMG"
                        />
                      </div>
                      <div className="">
                        <label>
                          <img
                            src={EDIT_PROFILE_ICON}
                            className={`mb-3 cursor-pointer ${i18n.language === "ar" ? "profile-iconar" : "profile-icon"}`}
                            type="button"
                            alt="WHITEBGDOWNARROW_IMG"
                          />
                          <input
                            className="form-control d-none"
                            type="file"
                            name="profile"
                            ref={imgRef}
                            id="imgFileUpload"
                            onChange={(e) => handleFileUpload(e)}
                            disabled={userbtndisable}
                          />
                        </label>
                      </div>
                    </div>
                    {userbtndisable && (
                      <div>
                        <button
                          type="button"
                          className=" px-3 py-2 rounded border-0 text-white submitbtn"
                          onClick={() => setuserbtndisable(false)}
                        >
                          {" "}
                          {t("Edit")} <span><img src={EDIT_ICON} alt="" className="plusicon ms-1" /></span>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <Input
                        className="border-radius_input"
                        type="text"
                        value={staffPayload.userName}
                        disabled={userbtndisable}
                        name="userName"
                        placeHolder="Enter Staff"
                        handleChange={(e) => setStaffPayload(handleFormInput(e, staffPayload))}
                        labelName="Staff Name"
                      />
                    </div>

                    <div className="col-md-6 mb-2">
                      <Input
                        className="border-radius_input"
                        type="text"
                        value={staffPayload.email}
                        disabled={true}
                        name="email"
                        placeHolder="Enter Email"
                        handleChange={(e) => setStaffPayload(handleFormInput(e, staffPayload))}
                        labelName="Staff Email"
                      />
                    </div>
                    <div className="col-12 col-md-6">

                      <label htmlFor="username">
                        {t("Mobile Number")} <span className=" text-danger">*</span>
                      </label>
                      <div className={` ${userbtndisable ? "userdisabled" : ""} ${i18n.language === "ar" ? "numberinput" : ""
                        }`}>
                        <PhoneInput
                          country={selectedCountryISO}
                          value={
                            userbtndisable
                              ? `+${userData?.code?.replace(/\D/g, "")}${staffPayload.mobileNo}` // display mode
                              : staffPayload.mobileNo // edit mode
                          }
                          countryCodeEditable={false}
                          onlyCountries={[selectedCountryISO]}
                          onChange={handleStaffNumber}
                          enableSearch={false}
                          disableDropdown={true}
                          disabled={userbtndisable}
                          inputProps={{
                            name: "mobileNo",
                            className: `form-control w-100 border-radius_input ${userbtndisable ? "userdisabled" : ""
                              }`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {!userbtndisable && (
                  <div className="d-flex flex-wrap  justify-content-center mt-4">
                    <Button
                      type="button"
                      className="px-5 py-2 rounded border-0  cancelbtn me-2 "
                      label="Cancel"
                      onClick={() => setuserbtndisable(true)}
                    />
                    <button
                      type="button"
                      className="px-5 py-2 rounded border-0 text-white submitbtn"
                      disabled={userbtndisable}
                      onClick={(e) => handleStaffSubmit(e)}
                    >
                      {isLoading && <i className="fa fa-spinner fa-spin me-2"></i>}

                      Update Staff
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div >
        </form>

      }
      {/* <Modal
        modalId="profileUpdate"
        heading={userData?.loginClinicType ? "Clinic Profile Updated Successfully" : "Staff Profile Updated Successfully"}
        modalClick={addbuttonClick}
        iconsrc={RIGHTARROW_IMG}
      /> */}
    </>
  );
};

export default MyProfile;
