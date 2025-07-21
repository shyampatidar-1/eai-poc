import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { resetPassword } from "../../hooks/services/api-services";
import { toastEmitter, validateRegex } from "../../utils/utilities";
import { PasswordRegex } from "../../utils/regexValidation";
import {
  ARROW_ICON,
  EYE_CLOSE,
  EYE_OPEN,
} from "../../utils/aap-image-constant";

import INPUTFIELD from "../../components/comman/input";
import Button from "../../components/comman/button";

const NewPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const [payload, setPayload] = useState({
    token: "",
    newPassword: "",
    confirmPassword: "",
  });
  let resetToken = window.location.pathname?.slice(24);

  useEffect(() => {
    if (resetToken) {
      setPayload((prevPayload) => ({ ...prevPayload, token: resetToken }));
    }
  }, [resetToken]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (payload.newPassword.trim() === "") {
      return toastEmitter("error", "New password is mandatory!");
    }
    if (payload.confirmPassword.trim() === "") {
      return toastEmitter("error", " Confirm password is mandatory!");
    }
    if (!validateRegex(payload.newPassword, PasswordRegex)) {
      return toastEmitter(
        "error",
        "Password should be a combination  8  characters which include altleast one special character , special symbol , capital letter and number"
      );
    }
    if (!validateRegex(payload.confirmPassword, PasswordRegex)) {
      return toastEmitter(
        "error",
        " Confirm password should be a combination  8  characters which include altleast one special character , special symbol , capital letter and number"
      );
    }
    if (payload.newPassword !== payload.confirmPassword) {
      return toastEmitter(
        "error",
        "New password and confirm password not match!"
      );
    }
    setIsLoading(true);

    resetPassword(payload)
      .then(function (response) {
        if (response?.data?.status !== 200) {
          toastEmitter("error", response?.data?.message);
        }

        if (response.data?.status === 200) {
          toastEmitter("success", response?.data?.message);
        }
        return setIsLoading(false);
      })
      .catch(function (err) {
        return setIsLoading(false);
      });
  };
  const handleNewPasswordChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.vale });
  };
  return (
    <>
      <div className="form-group">
        <div className="login-welcome">
          <h5>Set new password!</h5>
          <p className="form-subtitle">
            Must be at least 8 characters and alphanumeric.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <INPUTFIELD
              className="border-radius_input"
              type={isPwdVisible}
              value={payload.password}
              name="password"
              placeHolder="Enter your password"
              handleChange={handleNewPasswordChange}
              showRightIcon={true}
              labelName="Password"
              rightIconSrc={isPwdVisible === "password" ? EYE_CLOSE : EYE_OPEN} // This should toggle correctly
              onRightIconClick={() =>
                setIsPwdVisible(
                  isPwdVisible === "password" ? "text" : "password"
                )
              }
            />
          </div>
          <div className="mb-3">
            <INPUTFIELD
              className="border-radius_input"
              type={isPwdVisible}
              value={payload.confirmPassword}
              name="confirmPassword"
              placeHolder="Enter Confirm Password"
              handleChange={handleNewPasswordChange}
              showRightIcon={true}
              labelName="Confirm Password"
              showAsterisk={false}
              rightIconSrc={isPwdVisible === "password" ? EYE_CLOSE : EYE_OPEN} // This should toggle correctly
              onRightIconClick={() =>
                setIsPwdVisible(
                  isPwdVisible === "password" ? "text" : "password"
                )
              }
            />
          </div>
          <Button className="btn btn-primary btn-lg w-100 border-radius_input fw-600 fs-16"
            label="Reset Password"
            type="submit"
            icon={ARROW_ICON}
            isLoading={isLoading}
          />
        </form>
        <Link to={ROUTES?.LOGIN} style={{ textDecoration: "none" }}>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <i className="fa fa-long-arrow-left text-dark me-2"></i>
            <h6 className="pl-2 mb-0 text-dark fw-600">
              Back to <span className="text-primary">log in</span>{" "}
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewPassword;
