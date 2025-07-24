import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/snippets/template-blocks";

import { toastEmitter, useQuery } from "../../utils/utilities";
import { useEffect, useState } from "react";
import {
  alphanumericHypenRegex,
  NoLeadingSpaceRegex,
} from "../../utils/regexValidation";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { API_RESPONSE } from "../../utils/app-constants";
import {
  BLUEEDIT_ICON,
  BLUEEYE_ICONIMG,
  BLUEPLUSICON_ICON,
  BLUESTATUS,
  GREYEDIT_ICON,
  GREYEYE_ICONIMG,
  GREYPLUSICON_ICON,
  GREYSTATUS,
} from "../../utils/aap-image-constant";
import { handleFormInput } from "../../utils/form-utils";
import {
  addRole,
  getAllModule,
  getByIdRole,
  UpdateRole,
} from "../../hooks/services/api-services";
import { Spinner } from "react-bootstrap";
import BreadCrum from "../../components/comman/breadcrum";
const AddRole = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFormeditDisable, setisFormeditDisable] = useState(false);
  const pageUrlConstant = `${ROUTES?.ROLE}`;
  const [payload, setPayload] = useState({
    roleId: 0,
    roleName: "",
    parentRoleId: 0,
    authoriseNumberOfPerson: 0,
    privilegesReqPojo: [],
  });
  const urlParams = useQuery();
  const location = useLocation();
  const formType = location?.state?.formType;
  const roleId = location?.state?.roleId;
  const metaData = [
    { name: "role management", url: pageUrlConstant },
    { name: "Roles", url: pageUrlConstant },
    {
      name: `${
        formType === "add" ? "Add New" : formType === "edit" ? "Edit" : "View"
      } Roles`,
      url: null,
    },
  ];
  const [modulePermission, setModulePermission] = useState([]);
  const getAdminPermissionModule = async () => {
    try {
      const response = await getAllModule();
      if (response?.status === 200) {
        setModulePermission(response?.data?.data || []);
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE.MESSAGE_503);
    }
  };

  const fetchRoleById = async (roleId) => {
    setIsLoading(true);
    try {
      const roleResponse = await getByIdRole(roleId);
      const moduleResponse = await getAllModule();

      if (roleResponse?.status === 200 && moduleResponse?.status === 200) {
        let roleData = roleResponse?.data?.data || {};

        let allModules = moduleResponse?.data?.data || [];
        // Create map of selected modules from role
        const selectedModuleMap = {};
        (roleData?.moduleResponcePojo || []).forEach((mod) => {
          selectedModuleMap[mod?.moduleId] = mod;
        });
        // Merge module list with existing permission
        const mergedModulePermissions = allModules?.map((module) => {
          const selected = selectedModuleMap[module?.moduleId] || {};
          return {
            moduleId: module.moduleId,
            moduleName: module.moduleName,
            parentModuleName: module.parentModuleName || "",
            moduleCode: module.moduleCode || "",
            isModuleChecked: selected?.isModuleChecked ?? false,
            isCreateChecked: selected?.isCreateChecked ?? false,
            isUpdateChecked: selected?.isUpdateChecked ?? false,
            isDeleteChecked: selected?.isDeleteChecked ?? false,
            isViewChecked: selected?.isViewChecked ?? false,
          };
        });
        setModulePermission(mergedModulePermissions);
        setPayload((prevPayload) => ({
          ...prevPayload,
          roleId: roleData?.roleId || roleId,
          roleName: roleData?.roleName || "",
          parentRoleId: roleData?.parentRoleId,
          authoriseNumberOfPerson: roleData?.authoriseNumberOfPerson,
          privilegesReqPojo: mergedModulePermissions,
        }));
      } else {
        toastEmitter("error", roleResponse?.data?.message);
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE.MESSAGE_503);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateBack = () => {
    navigate(`${ROUTES.ROLE}`);
  };
  useEffect(() => {
    getAdminPermissionModule();
  }, []);
  useEffect(() => {
    if (roleId) {
      fetchRoleById(roleId);
    }
  }, [roleId]);

  const handlePermissionChange = (moduleIndex, permissionType, value) => {
    const newPermission = modulePermission?.map((existingPermission, index) => {
      if (moduleIndex === index) {
        const updatedPermission = {
          ...existingPermission,
          [permissionType]: value ? true : false,
        };

        return updatedPermission;
      }
      return existingPermission;
    });

    setModulePermission(newPermission);
    setisFormeditDisable(true);
  };

  // Ensure Payload Updates after modulePermission Changes
  useEffect(() => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      privilegesReqPojo: modulePermission, // Ensure modulePermission is updated before setting payload
    }));
  }, [modulePermission]);

  const handleAllActionSelect = (moduleIndex, value) => {
    const newPermission = modulePermission?.map((existingPermission, index) => {
      if (moduleIndex === index) {
        return {
          ...existingPermission,
          isCreateChecked: value ? true : false,
          isViewChecked: value ? true : false,
          isUpdateChecked: value ? true : false,
          isDeleteChecked: value ? true : false, //  Added deleteAction
          isModuleChecked: value ? true : false,
        };
      }
      return existingPermission;
    });

    setModulePermission(newPermission);
    setisFormeditDisable(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !NoLeadingSpaceRegex.test(payload?.roleName) ||
      payload?.roleName?.trim() === "" ||
      !alphanumericHypenRegex.test(payload?.roleName)
    ) {
      return toastEmitter(
        "error",
        "Please enter a valid Role Name (No leading spaces, cannot be empty, only alphanumeric & hyphen allowed)."
      );
    }

   

    const selectedModules = payload.privilegesReqPojo.filter(
      (module) =>
        module.isCreateChecked === true ||
        module.isViewChecked === true ||
        module.isUpdateChecked === true ||
        module.isDeleteChecked === true ||
        module.isModuleChecked === true
    );

    if (selectedModules.length === 0) {
      return toastEmitter(
        "error",
        "At least one module permission is mandatory!"
      );
    }

    const updatedPayload = {
      ...payload,
      privilegesReqPojo: selectedModules,
    };
    setIsLoading(true);
    try {
      let response;
      if (formType === "add") {
        response = await addRole(updatedPayload);
      } else {
        response = await UpdateRole(updatedPayload);
      }

      if (response?.data?.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        toastEmitter(
          "success",
          `Role ${formType === "add" ? "added" : "updated"} successfully!`
        );
        navigate(-1);
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE.MESSAGE_503);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAllModules = (value) => {
    const updatedPermissions = modulePermission.map((permission) => ({
      ...permission,
      isCreateChecked: value ? true : false,
      isViewChecked: value ? true : false,
      isUpdateChecked: value ? true : false,
      isDeleteChecked: value ? true : false, //  Added deleteAction
      isModuleChecked: value ? true : false,
    }));

    setModulePermission(updatedPermissions);

    //  Ensure payload updates after state change
    setPayload((prevPayload) => ({
      ...prevPayload,
      privilegesReqPojo: updatedPermissions,
    }));

    setisFormeditDisable(true);
  };

  //  Check if all modules are selected properly
  const isAllModulesSelected = modulePermission.every(
    (permission) =>
      permission.isCreateChecked === true &&
      permission.isViewChecked === true &&
      permission.isUpdateChecked === true &&
      permission.isModuleChecked === true
  );
  const handleDataBack = () => {
    setPayload({
      roleId: 0,
      roleName: "",
      parentRoleId: 0,
      authoriseNumberOfPerson: 0,
      privilegesReqPojo: [],
    });
    navigate(ROUTES.ROLE);
  };
    const pageAction =
    formType === "add"
      ? "Add"
      : formType === "edit"
        ? "Edit"
        : "View";
  return (
    <>
      <div className="main_datatable my-lg-3 mt-1">
        <BreadCrum
          firstData="Role"
          iconshow1={true}
          secondData={`${pageAction} Role`}
          onFirstDataClick={handleDataBack}
        />
        <div className="add_doctor card p-3 border border-radius_input mb-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="">
                    {" "}
                    Role Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="roleName"
                    disabled={formType === "view"}
                    value={payload?.roleName}
                    onChange={(e) =>
                      setPayload(
                        handleFormInput(e, payload, setisFormeditDisable)
                      )
                    }
                    className="form-control"
                    placeholder="Enter Role name"
                    type="text"
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <label className="form-label">
                  Role Access Setup <span className="text-danger">*</span>
                </label>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        {/* <th scope="col" className="text-center">
                                  Select All
                                </th> */}
                        <th
                          scope="col"
                          className="d-flex align-items-start justify-content-start"
                        >
                          <input
                            type="checkbox"
                            disabled={formType === "view"}
                            className="mr-2 mt-1"
                            checked={isAllModulesSelected}
                            onChange={(e) =>
                              handleSelectAllModules(e.target.checked)
                            }
                          />
                          <span className="ms-1"> Select All</span>
                        </th>
                        <th scope="col" className="text-center">
                          Permissions
                        </th>
                        <th scope="col" className="text-center">
                          Add
                        </th>
                        <th scope="col" className="text-center">
                          View
                        </th>
                        <th scope="col" className="text-center">
                          Edit
                        </th>
                        <th scope="col" className="text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {modulePermission?.length > 0 &&
                        modulePermission?.map((permissiondata, index) => {
                          const hitSelectAll = {
                            isCreateChecked: permissiondata?.isCreateChecked,
                            isViewChecked: permissiondata?.isViewChecked,
                            isUpdateChecked: permissiondata?.isUpdateChecked,
                            isModuleChecked: permissiondata?.isModuleChecked,
                          };
                          const checkSelect = Object.values(hitSelectAll).every(
                            (value) => value === true
                          );

                          return (
                            <>
                              <tr className="text-center">
                                <td className="text-start">
                                  <input
                                    id={permissiondata.moduleName + index}
                                    type="checkbox"
                                    checked={
                                      permissiondata.moduleName ===
                                        "Dashboard" &&
                                      permissiondata?.isViewChecked === true
                                        ? true
                                        : checkSelect
                                    }
                                    disabled={formType === "view"}
                                    onChange={(e) =>
                                      handleAllActionSelect(
                                        index,
                                        e.target.checked
                                      )
                                    }
                                  />
                                </td>
                                <td>{permissiondata.moduleName}</td>
                                <td>
                                  {permissiondata.moduleName !==
                                    "Dashboard" && (
                                    <label>
                                      <input
                                        disabled={formType === "view"}
                                        id={permissiondata.moduleName + index}
                                        type="checkbox"
                                        name={permissiondata.moduleName + index}
                                        className="form-check-input d-none"
                                        checked={
                                          permissiondata.isCreateChecked ===
                                          true
                                        }
                                        onChange={(e) =>
                                          handlePermissionChange(
                                            index,
                                            "isCreateChecked",
                                            e.target.checked
                                          )
                                        }
                                      />
                                      <img
                                        src={
                                          permissiondata.isCreateChecked ===
                                          true
                                            ? BLUEPLUSICON_ICON
                                            : GREYPLUSICON_ICON
                                        } // Blue plus icon when active, grey plus when inactive
                                        alt="add-action"
                                        className="roleicons"
                                        style={{
                                          opacity:
                                            formType === "view" ? 0.5 : 1,
                                          pointerEvents:
                                            formType === "view"
                                              ? "none"
                                              : "auto",
                                        }}
                                      />
                                    </label>
                                  )}
                                </td>

                                <td>
                                  <label>
                                    <input
                                      disabled={formType === "view"}
                                      id={permissiondata.moduleName + index}
                                      type="checkbox"
                                      name={permissiondata.moduleName + index}
                                      className="form-check-input d-none"
                                      checked={
                                        permissiondata.isViewChecked === true
                                      }
                                      onChange={(e) =>
                                        handlePermissionChange(
                                          index,
                                          "isViewChecked",
                                          e.target.checked
                                        )
                                      }
                                    />

                                    <img
                                      src={
                                        permissiondata.isViewChecked === true
                                          ? BLUEEYE_ICONIMG
                                          : GREYEYE_ICONIMG
                                      }
                                      alt="view-action"
                                      className="roleicons"
                                      style={{
                                        opacity: formType === "view" ? 0.5 : 1,
                                        pointerEvents:
                                          formType === "view" ? "none" : "auto",
                                      }}
                                    />
                                  </label>
                                </td>
                                <td>
                                  {permissiondata.moduleName !==
                                    "Dashboard" && (
                                    <label>
                                      <input
                                        disabled={formType === "view"}
                                        id={permissiondata.moduleName + index}
                                        className="form-check-input  d-none"
                                        type="checkbox"
                                        checked={
                                          permissiondata.isUpdateChecked ===
                                          true
                                        }
                                        name={permissiondata.moduleName + index}
                                        onChange={(e) =>
                                          handlePermissionChange(
                                            index,
                                            "isUpdateChecked",
                                            e.target.checked
                                          )
                                        }
                                      />
                                      <img
                                        src={
                                          permissiondata.isUpdateChecked ===
                                          true
                                            ? BLUEEDIT_ICON
                                            : GREYEDIT_ICON
                                        }
                                        alt="edit-action"
                                        className="roleicons"
                                        style={{
                                          opacity:
                                            formType === "view" ? 0.5 : 1,
                                          pointerEvents:
                                            formType === "view"
                                              ? "none"
                                              : "auto",
                                        }}
                                      />
                                    </label>
                                  )}
                                </td>

                                <td>
                                  {permissiondata.moduleName !==
                                    "Dashboard" && (
                                    <label>
                                      <input
                                        disabled={formType === "view"}
                                        id={permissiondata.moduleName + index}
                                        type="checkbox"
                                        name={permissiondata.moduleName + index}
                                        className="form-check-input d-none"
                                        checked={
                                          permissiondata.isDeleteChecked ===
                                          true
                                        }
                                        onChange={(e) =>
                                          handlePermissionChange(
                                            index,
                                            "isDeleteChecked",
                                            e.target.checked
                                          )
                                        }
                                      />
                                      <img
                                        src={
                                          permissiondata.isDeleteChecked ===
                                          true
                                            ? BLUESTATUS
                                            : GREYSTATUS
                                        } // Change based on the status
                                        alt="status-action"
                                        className="roleicons"
                                        style={{
                                          opacity:
                                            formType === "view" ? 0.5 : 1,
                                          pointerEvents:
                                            formType === "view"
                                              ? "none"
                                              : "auto",
                                        }}
                                      />
                                    </label>
                                  )}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
              <button
                type="button"
                className="px-4 py-2 rounded border-0 cancelbtn  me-3"
                onClick={() => handleDataBack()}
              >
                Cancel
              </button>
              {formType !== "view" && (
                <button
                  className="px-4 py-2 rounded border-0 text-white btn-primary "
                  type="submit"
                  disabled={
                    formType === "view" ||
                    (formType === "edit" && !isFormeditDisable) ||
                    isLoading
                  }
                >
                  {isLoading && (
                    <Spinner animation="border" size="sm" className="me-2" />
                  )}
                  {formType === "add" ? "Save" : "Update"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddRole;
