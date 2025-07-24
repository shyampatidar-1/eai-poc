import { useEffect, useRef, useState } from "react";
import TableHeading from "../../components/comman/table-heading";
import { toastEmitter } from "../../utils/utilities";
import { addPasswordPolicy, deletePasswordPolicy, getPasswordPolicy, updatePasswordPolicy } from "../../hooks/services/api-services";
import { API_RESPONSE } from "../../utils/app-constants";
import { TableWithNoData } from "../../components/snippets/template-blocks";
import Spinner from 'react-bootstrap/Spinner';

const PasswordPolicy = () => {
  const [isEdit, setIsEdit] = useState("add");
  const [isLoading, setIsLoading] = useState(false);
  const [policies, setPolicies] = useState([])
  const [tablePayload, setTablePayload] = useState({
    "pageIndex": 0,
    "pageSize": 10,
    "sortBy": "",
    "searchBy": "",
    "sortingOrder": ""
  })
  // const policies = [
  //   {
  //     id: 1,
  //     name: "Policy 16072025",
  //     minLength: 8,
  //     uppercase: true,
  //     lowercase: true,
  //     specialChar: true,
  //     number: true,
  //     expireDays: 5,
  //     warningDays: 1,
  //     maxInvalidAttempts: 5,
  //     lockoutDuration: "5 mins",
  //     passwordHistory: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "FinalTest",
  //     minLength: 8,
  //     uppercase: true,
  //     lowercase: true,
  //     specialChar: true,
  //     number: true,
  //     expireDays: 60,
  //     warningDays: 10,
  //     maxInvalidAttempts: 3,
  //     lockoutDuration: "7 mins",
  //     passwordHistory: 2,
  //   },
  //   {
  //     id: 3,
  //     name: "policy-007",
  //     minLength: 8,
  //     uppercase: true,
  //     lowercase: true,
  //     specialChar: true,
  //     number: true,
  //     expireDays: 90,
  //     warningDays: 10,
  //     maxInvalidAttempts: 5,
  //     lockoutDuration: "3 mins",
  //     passwordHistory: 5,
  //   },
  // ];

  const [payload, setPayload] = useState({
    policyId: 0,
    passwordPolicyName: "",
    minimumLength: "",
    requireUppercase: "",
    requireLowercase: "",
    requireSpecialchar: "",
    requireNumber: "",
    passwordExpireInDays: "",
    passwordExpireWarningInDays: "",
    maxInvalidLogin: "",
    lockoutDuration: "",
    passwordInHistory: "",
    createdAt: new Date().toISOString(),
  });

  // const data = {
  //   policyId: 0,
  //   minimumLength: 0,
  //   requireUppercase: true,
  //   requireLowercase: true,
  //   requireNumber: true,
  //   requireSpecialchar: true,
  //   passwordExpireInDays: 0,
  //   passwordExpireWarningInDays: "string",
  //   maxInvalidLogin: 0,
  //   lockoutDuration: "string",
  //   passwordInHistory: "string",
  //   createdAt: "2025-07-23T10:43:52.634Z",
  //   passwordPolicyName: "string",
  // };

  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  const handleOpen = (addedit) => {
    setIsEdit(addedit)
    modalInstanceRef.current = new window.bootstrap.Modal(modalRef.current);
    modalInstanceRef.current.show();
  };

  const handleClose = () => {
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    let parsedValue = value;
    if (value === "true" || value === "false") {
      parsedValue = JSON.parse(value);
    }
    if (
      ["minimumLength", "passwordExpireInDays", "maxInvalidLogin"].includes(
        name
      )
    ) {
      parsedValue = Number(value);
    }
    setPayload((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleClearPayload = () => {
    setPayload({
      policyId: 0,
      passwordPolicyName: "",
      minimumLength: "",
      requireUppercase: "",
      requireLowercase: "",
      requireSpecialchar: "",
      requireNumber: "",
      passwordExpireInDays: "",
      passwordExpireWarningInDays: "",
      maxInvalidLogin: "",
      lockoutDuration: "",
      passwordInHistory: "",
      createdAt: new Date().toISOString(),
    })
  }

  const handleSubmit = async () => {
    console.log("PAYLOAD ->", payload)
    if (payload.passwordPolicyName.trim() === "") {
      return toastEmitter("error", "Policy name field is mandatory!");
    }
    if (isNaN(payload.minimumLength) || payload.minimumLength === "") {
      return toastEmitter("error", "Minimum length field is mandatory!");
    }
    if (
      payload.requireUppercase === "Select" ||
      payload.requireUppercase === ""
    ) {
      return toastEmitter("error", "Uppercase field is mandatory!");
    }
    if (
      payload.requireLowercase === "Select" ||
      payload.requireLowercase === ""
    ) {
      return toastEmitter("error", "Lowercase field is mandatory!");
    }
    if (
      payload.requireSpecialchar === "Select" ||
      payload.requireSpecialchar === ""
    ) {
      return toastEmitter("error", "Specialchar field is mandatory!");
    }
    if (payload.requireNumber === "Select" || payload.requireNumber === "") {
      return toastEmitter("error", "Number field is mandatory!");
    }
    if (payload.passwordExpireInDays === "") {
      return toastEmitter("error", "expire (in days) field is mandatory!");
    }
    if (payload.passwordExpireWarningInDays === "") {
      return toastEmitter(
        "error",
        "Password expiration warning (in days) field is mandatory!"
      );
    }
    if (payload.maxInvalidLogin === "") {
      return toastEmitter(
        "error",
        "Maximum invalid login attempt aield is mandatory!"
      );
    }
    if (payload.lockoutDuration === "") {
      return toastEmitter(
        "error",
        "Lockout duration (in minutes) field is mandatory!"
      );
    }
    if (payload.passwordInHistory === "") {
      return toastEmitter("error", "Password in history field is mandatory!");
    }

    setIsLoading(true)
    try {
      const response = await (isEdit === "add" ? addPasswordPolicy(payload) : updatePasswordPolicy(payload));
      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      }
      if (response.data?.status === 200) {

        toastEmitter("success", response?.data?.message);
        handleClearPayload()
        handleClose()
        passwordPolicyList()
      }
    } catch (error) {
      console.log("CATCH");
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    } finally {
      setIsLoading(false);
    }



    // try {
    //   const response = await addPasswordPolicy(updatedPayload);
    //   console.log('RESPONSE ->', response)
    //   if (response.data.status === 200) {
    //     setPayload({
    //       PasswordPolicyName: "",
    //       minimumLength: "",
    //       requireUppercase: "",
    //       requireLowercase: "",
    //       requireSpecialchar: "",
    //       requireNumber: "",
    //       passwordExpireInDays: "",
    //       passwordExpireWarningInDays: "",
    //       maxInvalidLogin: "",
    //       lockoutDuration: "",
    //       passwordInHistory: ""
    //     })
    //   }
    // } catch (error) {

    // }

    // addPasswordPolicy(updatedPayload).then(response => {
    //   console.log("RESPONSE ->", response)
    // }).catch(error => {
    //   console.log("ERROR ->", error)
    // })
  };

  const passwordPolicyList = async () => {
    // setIsLoading(true);
    try {
      const response = await getPasswordPolicy(tablePayload)
      // console.log("RESPONSE ->", response);
      if (response.data?.status !== 200) {
        // toastEmitter("error", response?.data?.message);
        setPolicies([])
      }
      if (response.data?.status === 200) {
        console.log("response policy ->", response?.data?.data?.content)
        setPolicies(response?.data?.data?.content)
      }
    } catch (error) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    }
    finally {
      setIsLoading(false)
    }

  }

  const handleDelete = async (id) => {
    try {
      const response = await deletePasswordPolicy(id);

      if (response.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      }
      if (response.data?.status === 200) {
        passwordPolicyList()
        toastEmitter("success", response?.data?.message);

      }

    } catch (error) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    }
  }

  const handleClickEdit = (index) => {

    setPayload(policies.filter((policy, i) => i === index)[0])
    handleOpen("edit")
  }



  useEffect(() => {
    passwordPolicyList()
  }, [])

  console.log("POLICIES ->", policies)

  return (
    <>
      {/* <div className="container mt-5"> */}
      <div className="main_datatable">
        <TableHeading
          title="Password Policy"
          showsearchinput={false}
          data="Policy"
          showbutton={true}
          addButtonClick={() => { handleOpen("add") }}
        />
        <div className="row">
          {policies.length > 0 ?
            (policies?.map((policy, index) => (
              <div className="col-md-4 mb-4" key={policy.policyId}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Policy #{index + 1}</h5>
                    {/* <p>Policy Name: <span>{policy.name}</span></p> */}

                    <ul className="list-unstyled small mb-1">
                      <li>
                        <strong className="fw-500">Policy Name:</strong>{" "}
                        {policy.passwordPolicyName}
                      </li>
                      <li>
                        <strong className="fw-500">Min Length:</strong>{" "}
                        {policy.minimumLength}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Uppercase:</strong>{" "}
                        {policy.requireUppercase ? "true" : "false"}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Lowercase:</strong>{" "}
                        {policy.requireLowercase ? "true" : "false"}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Special Char:</strong>{" "}
                        {policy.requireSpecialchar ? "true" : "false"}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Number:</strong>{" "}
                        {policy.requireNumber ? "true" : "false"}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Expire (Days):</strong>{" "}
                        {policy.passwordExpireInDays}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Warning (Days):</strong>{" "}
                        {policy.passwordExpireWarningInDays}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">
                          Max Invalid Attempts:
                        </strong>{" "}
                        {policy.maxInvalidLogin}

                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Lockout Duration:</strong>{" "}
                        {policy.lockoutDuration}
                      </li>
                      <li>
                        {" "}
                        <strong className="fw-500">Password History:</strong>{" "}
                        {policy.passwordInHistory}
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => { handleClickEdit(index) }}
                      >
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => { handleDelete(policy.policyId) }}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )))
            :
            (
              <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                <div className="text-center">
                  < TableWithNoData />


                </div>
              </div>
            )
          }

        </div>

        {/* <div className="modal fade" id="passwordPolicyModal" tabIndex="-1" aria-labelledby="passwordPolicyModalLabel" aria-hidden="true"> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref={modalRef}
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="passwordPolicyModalLabel">
                  Password Policy {isEdit === "add" ? "Add" : "Edit"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form>
                  <h6>
                    <strong>Enforcement</strong>
                  </h6>

                  <div className="">
                    <label className="form-label">Policy Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="passwordPolicyName"
                      value={payload.passwordPolicyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 ">
                      <label className="form-label">Minimum Length</label>
                      <select
                        className="form-select"
                        name="minimumLength"
                        value={payload.minimumLength}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        {[...Array(21).keys()].slice(1).map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6 ">
                      <label className="form-label">Require Uppercase</label>
                      <select
                        className="form-select"
                        name="requireUppercase"
                        value={payload.requireUppercase}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                    <div className="col-md-6 ">
                      <label className="form-label">Require Lowercase</label>
                      <select
                        className="form-select"
                        name="requireLowercase"
                        value={payload.requireLowercase}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                    <div className="col-md-6 ">
                      <label className="form-label">Require SpecialChar</label>
                      <select
                        className="form-select"
                        name="requireSpecialchar"
                        value={payload.requireSpecialchar}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                    <div className="col-md-6 ">
                      <label className="form-label">Require Number</label>
                      <select
                        className="form-select"
                        name="requireNumber"
                        value={payload.requireNumber}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                    <div className="col-md-6 ">
                      <label className="form-label">Expire (in Days)</label>
                      <input
                        type="number"
                        className="form-control"
                        name="passwordExpireInDays"
                        min={1}
                        value={payload.passwordExpireInDays}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="form-label">
                      Password Expiration Warning (in Days)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="passwordExpireWarningInDays"
                      min={1}
                      value={payload.passwordExpireWarningInDays}
                      onChange={handleChange}
                    />
                  </div>

                  <h6 className="mt-3">
                    <strong>History Requirement</strong>
                  </h6>

                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label">
                        Maximum Invalid Login Attempt
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        name="maxInvalidLogin"
                        value={payload.maxInvalidLogin}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        Lockout Duration (in Minutes)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        name="lockoutDuration"
                        value={payload.lockoutDuration}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Password in History</label>
                      <input
                        type="number"
                        className="form-control"
                        min={1}
                        name="passwordInHistory"
                        value={payload.passwordInHistory}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    handleClearPayload()
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  {" "}
                  {isLoading && (
                    <Spinner animation="border" size="sm" className='me-2' />
                  )}
                  {isEdit === "add" ? "Add" : "Edit"} Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordPolicy;
