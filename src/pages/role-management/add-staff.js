import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EYE_CLOSE, EYE_OPEN } from "../../utils/aap-image-constant";
import BreadCrum from "../../components/comman/breadcrum";
import Input from "../../components/comman/input";
import Button from "../../components/comman/button";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { handleFormInput } from "../../utils/form-utils";
import DropDown from "../../components/comman/dropdown";
import INPUTFIELD from "../../components/comman/input";

const AddStaff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const [payload, setPayload] = useState({
    id: 0,
    userName: "",
    email: "",
    roleId: 0,
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const checkFormType = location?.state?.formType || "add";

  const pageAction =
    checkFormType === "add"
      ? "Add"
      : checkFormType === "edit"
        ? "Edit"
        : "View";

  const handleDataBack = () => {
    setPayload({
      id: 0,
      userName: "",
      email: "",
      roleId: 0,
      clinicId: 0,
      password: "",
      mobileNo: "",
      profile: "",
    });
    navigate(ROUTES.STAFF);
  };
  const rolelist = [
    { label: "Admin", value: 1 },
    { label: "Receptionist", value: 2 },
    { label: "Therapist", value: 3 },
  ];


  const handleSelectRole = (e) => {
    const selectedValue = parseInt(e.target.value);
    setPayload((prev) => ({ ...prev, roleId: selectedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("Submitted payload:", payload);
      setIsLoading(false);
      navigate(ROUTES.STAFF, {
        state: { activeTab: "staff" },
      });
    }, 1000);
  };
  return (
    <div className="main_datatable my-lg-3 mt-1">
      <form onSubmit={handleSubmit}>
        <div className="add_doctor card p-3 border border-radius_input mb-3">
          <BreadCrum
            firstData="Role Management"
            iconshow1={true}
            secondData={`${pageAction} Staff`}
            onFirstDataClick={handleDataBack}
          />

          <div className="row">
            <div className="col-md-6 mb-2">
              <INPUTFIELD
                className="border-radius_input"
                type="text"
                value={payload.userName}
                disabled={checkFormType === "view"}
                name="userName"
                placeHolder="Enter user name"
                handleChange={(e) => setPayload(handleFormInput(e, payload))}
                labelName="Staff Name"
              />
            </div>

            {/* <div className="col-md-6 mb-2">
              <INPUTFIELD
                className="border-radius_input"
                type="email"
                value={payload.email}
                disabled={checkFormType === "view"}
                name="email"
                placeHolder="Enter email"
                handleChange={(e) => setPayload(handleFormInput(e, payload))}
                labelName="Staff Email"
              />
            </div> */}
            <div className="col-md-6 mb-2">
              <DropDown
                labelName="Select Role"
                name="roleId"
                options={rolelist}
                value={payload.roleId}
                handleSelect={handleSelectRole}
                showastrict={true}
                className="border-radius_input"
                disabled={checkFormType === "view"}
              />
            </div>


            {checkFormType === "add" && (
              <div className="col-md-6 mb-2">
                <INPUTFIELD
                  className="border-radius_input"
                  type={isPwdVisible}
                  value={payload.password}
                  name="password"
                  placeHolder="Enter your password"
                  handleChange={(e) => setPayload(handleFormInput(e, payload))}
                  labelName="Password"
                  showRightIcon={true}
                  disabled={checkFormType === "view"}
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
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <Button
            type="button"
            className="px-4 py-2 rounded border-0 cancelbtn mb-2 me-3"
            label="Cancel"
            onClick={handleDataBack}
          />

          {checkFormType !== "view" && (
            <button
              type="submit"
              className="px-4 py-2 rounded border-0 text-white btn-primary mb-2"
              disabled={isLoading}
            >
              {isLoading && <i className="fa fa-spinner fa-spin me-2"></i>}
              {pageAction} Staff
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
