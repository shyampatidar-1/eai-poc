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
import { addStaff, getStaffById, staffList, updateStaff } from "../../hooks/services/api-services";
import { API_RESPONSE } from "../../utils/app-constants";
import { decryptAEStoJSON, toastEmitter } from "../../utils/utilities";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const AddStaff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState("password");
  const { value } = useSelector((state) => state?.loggedUser);
  const userData = decryptAEStoJSON(value);
  console.log("userData>>>", userData?.userDetails?.userId);
  const [payload, setPayload] = useState({
    adminId: 0,
    userName: "",
    password: "",
    roleId: 0,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const checkFormType = location?.state?.formType || "add";
  const staffId = location?.state?.staffId;
  console.log("staffId>>>", staffId);

  const pageAction =
    checkFormType === "add"
      ? "Add"
      : checkFormType === "edit"
        ? "Edit"
        : "View";

  const handleDataBack = () => {
    setPayload({
      adminId: 0,
      userName: "",
      password: "",
      roleId: 0,
    });
    navigate(ROUTES.STAFF);
  };
  const roleliste = [
    { label: "Admin", value: 1 },
    { label: "Receptionist", value: 2 },
    { label: "Therapist", value: 3 },
  ];

  const handleSelectRole = (e) => {
    const selectedValue = parseInt(e.target.value);
    setPayload((prev) => ({ ...prev, roleId: selectedValue }));
  };

  // get staff bu id
  const fetchStaffById = async (staffId) => {
    try {
      const response = await getStaffById(staffId);
      if (response.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        let rowData = response?.data?.data;
        setPayload({
          adminId: rowData?.adminId,
          userName: rowData?.userName,
          roleId: rowData?.roleId,
        });
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    }
  };
  useEffect(() => {
    if (staffId) {
      fetchStaffById(staffId);
    }
  }, [staffId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (payload.userName.trim() === "") {
      return toastEmitter("error", "Username is mandatory!");
    }
    if (checkFormType === "add") {
      if (payload.password.trim() === "") {
        return toastEmitter("error", "Password is mandatory!");
      }
    }
    setIsLoading(true);
    try {
      const response = await (checkFormType === "add" ? addStaff(payload) : updateStaff(payload));
      console.log("RESPONSE ->", response);
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      }
      if (response.data?.status === 200) {
        navigate(ROUTES.STAFF);
      }
    } catch (error) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    } finally {
      setIsLoading(false);
    }
  };

  // role list

  // role list fetch
  const [rolelist, setRoleList] = useState([]);
  const fetchRoleData = async () => {
    const rolePayload = {
      pageIndex: 0,
      pageSize: 0,
      searchBy: "",
      sortingOrder: "desc",
      sortBy: "",
      status: 0,
      parentRoleId: 0,
    }
    try {
      const response = await staffList(rolePayload);
      if (response?.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
        setRoleList([]);
      } else {
        setRoleList(response?.data?.data);
      }
    } catch (err) {
      // if (isFirstRender.current) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      // }
    } finally {

      // isFirstRender.current = false; // Toast ek baar dikhane ke baad disable kar diya
    }
  };

  useEffect(() => {
    fetchRoleData();
  }, []);


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
              {isLoading && <Spinner animation="border" size="sm" className='me-2' />}
              {pageAction} Staff
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
