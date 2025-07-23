import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../hooks/services/api-services";
import {
  decryptAEStoString,
  encryptJSONtoAES,
  encryptStringtoAES,
  toastEmitter,
  validateRegex,
} from "../../utils/utilities";
import { setAccessTokenReducer } from "../../hooks/redux/slice/access-token";
import { setLoggedUserReducer } from "../../hooks/redux/slice/logged-user";
import { API_RESPONSE } from "../../utils/app-constants";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { EmailRegex, PasswordRegex } from "../../utils/regexValidation";
import {
  EYE_OPEN,
  EMAIL_ICON,
  EYE_CLOSE,
  ARROW_ICON,
} from "../../utils/aap-image-constant";

import { ErrorMsg, handleFormInput } from "../../utils/form-utils";

import { setPermissionReducer } from "../../hooks/redux/slice/permission";
import INPUTFIELD from "../../components/comman/input";
import Button from "../../components/comman/button";

const Login = () => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState({});
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const addbuttonClick = useRef();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedEmail = decryptAEStoString(localStorage.getItem("email"));
    const savedPassword = decryptAEStoString(localStorage.getItem("password"));
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";
    if (savedRememberMe) {
      setPayload({
        ...payload,
        email: savedEmail,
        password: savedPassword,
        // languageType: i18n.language,
      });
      setRememberMe(true);

    }

  }, []);

  const handleSubmit = (e) => {
    console.log("PAYLOAD ->", payload)

    e.preventDefault();

    if (payload.email.trim() === "") {

      return toastEmitter("error", "Email is mandatory!");
    }
    if (payload.password.trim() === "") {
      return toastEmitter("error", "Password is mandatory!");
    }
    // if (!validateRegex(payload.email, EmailRegex)) {
    //   return toastEmitter("error", "Email is invalid!");
    // }
    // if (!validateRegex(payload.password, PasswordRegex)) {
    //   return toastEmitter(
    //     "error",
    //     "password should be a combination  8  characters which include altleast one special character , special symbol , capital letter and number"
    //   );
    // }
    dispatch(
      setAccessTokenReducer(
        encryptStringtoAES((payload.email + payload.password).trim())
      )
    );
    // setIsLoading (true);
    // signIn(payload)
    //   .then(function (response) {
    //     if (response.data?.status !== 200) {
    //       toastEmitter("error", response?.data?.message);
    //     }
    //     if (response.data?.status === 200) {
    //       dispatch(
    //         setAccessTokenReducer(
    //           encryptStringtoAES(response?.data?.data?.token)
    //         )
    //       );
    //       dispatch(
    //         setLoggedUserReducer(encryptJSONtoAES(response?.data?.data))
    //       );
    //       dispatch(
    //         setPermissionReducer(
    //           encryptJSONtoAES(
    //             response?.data?.data?.adminResponsePayload?.roleResponsePayload
    //               ?.roleModuleMappingResponseList
    //           )
    //         )
    //       );
    //       addbuttonClick.current.click();
    //       setPayload({
    //         email: "",
    //         password: "",
    //         userType: "CLINIC",
    //         deviceToken: "",
    //         deviceType: "web",
    //         languageType: i18n.language
    //       });
    //     }
    //     return setIsLoading(false);
    //   })
    //   .catch(function (err) {
    //     toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    //     return setIsLoading(false);
    //   });

  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-welcome">
            <h3 className="text-primary fw-bolder my-3  ">Login</h3>
            {/* <p className="text-dark fw-bolder">
              New to Medicine?
              <Link to={ROUTES?.REGISTER} style={{ textDecoration: "none" }}>
                <span className=" text-primary cursor-pointer">
                  {" "}
                  Register
                </span>
              </Link>
            </p> */}
          </div>
          <div className="mb-2">
            <INPUTFIELD
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
          <div>
            <INPUTFIELD
              className="border-radius_input"
              type={isPwdVisible}
              value={payload.password}
              name="password"
              placeHolder="Enter your password"
              handleChange={(e) =>
                setPayload(handleFormInput(e, payload, formError, setFormError))
              }
              error={formError?.password}
              labelName="Password"
              showRightIcon={true}
              rightIconSrc={isPwdVisible === "password" ? EYE_CLOSE : EYE_OPEN}
              onRightIconClick={() =>
                setIsPwdVisible(isPwdVisible === "password" ? "text" : "password")
              }
            />
            <ErrorMsg error={formError?.password} />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 ">
            {/* <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Check1"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="my-0" htmlFor="exampleCheck1">
                {t("Remember me")}
              </label>
            </div> */}
            <label className="my-0">
              <Link to={ROUTES?.FORGOT_PASSWORD}>Forgot password?</Link>
            </label>
          </div>

          <div className="mt-3">
            <Button
              className="btn btn-primary btn-lg w-100 border-radius_input fw-600 fs-16"
              label="Login"
              type="submit"
              icon={ARROW_ICON}
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>

      {/* <Modal
        modalId="login"
        heading={t("Login Successfully")}
        modalClick={addbuttonClick}
        iconsrc={RIGHTARROW_IMG}
      /> */}
    </>
  );
};

export default Login;
