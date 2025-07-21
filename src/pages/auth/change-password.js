import React, { useEffect, useState } from "react";
import { resetPassword } from "../../hooks/services/api-services";
import { decryptAEStoJSON, decryptAEStoString, toastEmitter, validateRegex } from "../../utils/utilities";
import { PasswordRegex } from "../../utils/regexValidation";
import {
  ARROW_ICON,
  EYE_CLOSE,
  EYE_OPEN,
} from "../../utils/aap-image-constant";

import { useDispatch, useSelector } from "react-redux";
import { handleFormInput } from "../../utils/form-utils";
import BreadCrum from "../../components/common/BreadCrum";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { useNavigate } from "react-router-dom";

import { clearAccessTokenReducer } from "../../hooks/redux/slice/access-token";
import { clearLoggedUserReducer } from "../../hooks/redux/slice/logged-user";
import INPUTFIELD from "../../components/comman/input";
import Button from "../../components/comman/button";

const ChangePassword = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const [isPwdVisible2, setIsPwdVisible2] = useState("password");
  const [isPwdVisible3, setIsPwdVisible3] = useState("password");
  const { value } = useSelector((state) => state?.loggedUser);
  const userData = decryptAEStoJSON(value)
  const rawAccessToken = decryptAEStoString(useSelector((state) => state?.accessToken?.value));
  const [payload, setPayload] = useState({
    email: "",
    oldPassword: "",
    password: "",
    newPassword: "",
    userType: "CLINIC",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (rawAccessToken && userData?.email) {
      setPayload((prevPayload) => ({ ...prevPayload, email: userData?.loginClinicType ? userData?.email : userData?.adminResponsePayload?.email }));
    }
  }, [rawAccessToken, userData?.email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (payload?.oldPassword?.trim() === "") {
      return toastEmitter("error", "Old Password is mandatory!");
    }
    if (payload?.password?.trim() === "") {
      return toastEmitter("error", " Password is mandatory!");
    }
    if (payload?.newPassword?.trim() === "") {
      return toastEmitter("error", "Confirm Password is mandatory!");
    }
    if (payload?.password?.trim().length < 8) {
      return toastEmitter(
        "error",
        "Password should be at least 8 characters long!"
      );
    }
    if (payload?.password !== payload?.newPassword) {
      return toastEmitter(
        "error",
        "New Password and Confirm Password  does not match"
      );
    }
    if (!validateRegex(payload.password, PasswordRegex)) {
      return toastEmitter(
        "error",
        "Password Should Be A Combination Of Special Character, Small Letter, Numeric And Capital Letter!"
      );
    }
    setIsLoading(true);

    resetPassword(payload)
      .then(function (response) {
        if (response?.data?.status !== 200) {
          toastEmitter("error", response?.data?.message);
        }

        if (response.data?.status === 200) {
          toastEmitter("success", "password change Successfully! Please Login Again");
          setPayload({
            ...payload,
            password: "",
            newPassword: "",
            userType: "CLINIC",
            oldPassword: ""
          })
          dispatch(clearAccessTokenReducer());
          dispatch(clearLoggedUserReducer());
          navigate(ROUTES?.LOGIN)
        }
        return setIsLoading(false);
      })
      .catch(function (err) {
        return setIsLoading(false);
      });
  };
  const handleDataBack = () => {
    navigate(ROUTES.DASHBOARD);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main_datatable mt-lg-3 mt-2 ">
          <BreadCrum
            firstData={"Dashboard"}
            iconshow1={true}
            secondData={"Change Password"}
            onFirstDataClick={handleDataBack}
          />
          <div className="user_profile_intro">
            <div className="login-welcome">
              <h5 className="mb-md-0 mb-2">Change Password</h5>
              <p className="form-subtitle">
                Must be at least 8 characters and alphanumeric.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <INPUTFIELD
                  className="border-radius_input"
                  type={isPwdVisible}
                  value={payload.oldPassword}
                  name="oldPassword"
                  placeHolder="Enter your old  password"
                  handleChange={(e) => setPayload(handleFormInput(e, payload))}
                  showRightIcon={true}
                  labelName="Old Password"
                  rightIconSrc={
                    isPwdVisible === "password" ? EYE_CLOSE : EYE_OPEN
                  }
                  onRightIconClick={() =>
                    setIsPwdVisible(
                      isPwdVisible === "password" ? "text" : "password"
                    )
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <INPUTFIELD
                  className="border-radius_input"
                  type={isPwdVisible2}
                  value={payload.password}
                  name="password"
                  placeHolder="Enter your password"
                  handleChange={(e) => setPayload(handleFormInput(e, payload))}
                  showRightIcon={true}
                  labelName="Password"
                  rightIconSrc={
                    isPwdVisible2 === "password" ? EYE_CLOSE : EYE_OPEN
                  }
                  onRightIconClick={() =>
                    setIsPwdVisible2(
                      isPwdVisible2 === "password" ? "text" : "password"
                    )
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <INPUTFIELD
                  className="border-radius_input"
                  type={isPwdVisible3}
                  value={payload.newPassword}
                  name="newPassword"
                  placeHolder={"Enter your confirm password"}
                  handleChange={(e) => setPayload(handleFormInput(e, payload))}
                  showRightIcon={true}
                  labelName={"Confirm Password"}
                  showAsterisk={false}
                  rightIconSrc={
                    isPwdVisible3 === "password" ? EYE_CLOSE : EYE_OPEN
                  } // This should toggle correctly
                  onRightIconClick={() =>
                    setIsPwdVisible3(
                      isPwdVisible3 === "password" ? "text" : "password"
                    )
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Button
                  className="btn btn-primary btn-lg w-100 border-radius_input fw-600 fs-16"
                  label="Reset"
                  type="submit"
                  icon={ARROW_ICON}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
