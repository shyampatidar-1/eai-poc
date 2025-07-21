import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { toastEmitter, validateRegex } from "../../utils/utilities";
import { EmailRegex } from "../../utils/regexValidation";
import { ARROW_ICON, EMAIL_ICON } from "../../utils/aap-image-constant";

import { forgotPassword } from "../../hooks/services/api-services";
import { handleFormInput } from "../../utils/form-utils";
import INPUTFIELD from "../../components/comman/input";
import Button from "../../components/comman/button";

const ForgotPassword = () => {
  const [formError, setFormError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [payload, setPayload] = useState({
    email: "",
    userType: "CLINIC",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (payload?.email === "" || payload?.email?.length === 0) {
      return toastEmitter("error", "Email is mandatory!");
    }
    if (!validateRegex(payload?.email, EmailRegex)) {
      return toastEmitter("error", "Email is invalid!");
    }
    setIsLoading(true);
    try {
      const response = await forgotPassword(payload);
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        toastEmitter("success", "A link has been sent to your email address");
        setPayload({ ...payload, email: "" });
      }
      return setIsLoading(false);
    } catch (err) {
      return setIsLoading(false);
    }
  };
  return (
    <>
      <div className="form-group">
        <div className="login-welcome">
          <h5 className="text-primary fw-bolder mb-1">
            Forgot password!
          </h5>
          <p>No worries, we'll send you reset instructions.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <INPUTFIELD
              className="border-radius_input"
              type="text"
              value={payload.email}
              name="email"
              placeHolder="Enter your email"
              handleChange={(e) => setPayload(handleFormInput(e, payload))}
              error={formError?.email}
              showIcon={true}
              iconsrc={EMAIL_ICON}
              labelName="Email Address"
            />
          </div>

          <Button
            className="btn btn-primary btn-lg w-100 border-radius_input fw-600 fs-16"
            label="Forgot Password"
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

export default ForgotPassword;
