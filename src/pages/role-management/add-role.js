import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrum from "../../components/comman/breadcrum";
import Input from "../../components/comman/input";
import Button from "../../components/comman/button";
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
import { ROUTES } from "../../hooks/routes/routes-constant";
import { handleFormInput } from "../../utils/form-utils";

const AddRole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const checkfromType = location?.state?.formType;
  const roleId = location?.state?.roleId;

  const [isLoading, setIsLoading] = useState(false);
  const [modulePermission, setModulePermission] = useState([]);
  const [payload, setPayload] = useState({
    id: 0,
    roleName: "",
    clinicId: 0,
    doctorId: 0,
    roleDescription: "",
    moduleRequestList: [],
    allModuleSelected: false,
  });

  const staticModules = [
    {
      id: 1,
      moduleName: "Dashboard",
      addAction: 0,
      viewAction: 1,
      updateAction: 0,
      deleteAction: 0,
      downloadAction: 0,
      moduleAction: 1,
      selectAll: 0,
    },
    {
      id: 2,
      moduleName: "Staff",
      addAction: 0,
      viewAction: 0,
      updateAction: 0,
      deleteAction: 0,
      downloadAction: 0,
      moduleAction: 0,
      selectAll: 0,
    },
    {
      id: 3,
      moduleName: "Role",
      addAction: 0,
      viewAction: 0,
      updateAction: 0,
      deleteAction: 0,
      downloadAction: 0,
      moduleAction: 0,
      selectAll: 0,
    },
    {
      id: 4,
      moduleName: "Message Tacker",
      addAction: 0,
      viewAction: 0,
      updateAction: 0,
      deleteAction: 0,
      downloadAction: 0,
      moduleAction: 0,
      selectAll: 0,
    },
  ];

  useEffect(() => {
    setModulePermission(staticModules);
  }, []);

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      moduleRequestList: modulePermission,
    }));
  }, [modulePermission]);

  const pageAction =
    checkfromType === "add"
      ? "Add"
      : checkfromType === "edit"
        ? "Edit"
        : "View";

  const handleBack = () => {
    navigate(ROUTES.ROLE);
  };

  const handlePermissionChange = (moduleIndex, type, value) => {
    const updated = modulePermission.map((item, i) =>
      i === moduleIndex ? { ...item, [type]: value ? 1 : 0 } : item
    );
    setModulePermission(updated);
  };

  const handleAllActionSelect = (moduleIndex, value) => {
    const updated = modulePermission.map((item, i) =>
      i === moduleIndex
        ? {
          ...item,
          addAction: value ? 1 : 0,
          viewAction: value ? 1 : 0,
          updateAction: value ? 1 : 0,
          moduleAction: value ? 1 : 0,
          selectAll: value ? 1 : 0,
        }
        : item
    );
    setModulePermission(updated);
  };

  const handleSelectAllModules = (value) => {
    const updated = modulePermission.map((item) => ({
      ...item,
      addAction: value ? 1 : 0,
      viewAction: value ? 1 : 0,
      updateAction: value ? 1 : 0,
      deleteAction: value ? 1 : 0,
      downloadAction: value ? 1 : 0,
      moduleAction: value ? 1 : 0,
      selectAll: value ? 1 : 0,
    }));
    setModulePermission(updated);
  };

  const isAllModulesSelected = modulePermission.every(
    (mod) =>
      mod.addAction === 1 &&
      mod.viewAction === 1 &&
      mod.updateAction === 1 &&
      mod.moduleAction === 1
  );

  return (
    <div className="main_datatable my-lg-3 mt-1">
      <form>
        <div className="card p-3 border border-radius_input mb-3">
          <BreadCrum
            firstData="Role Management"
            iconshow1={true}
            secondData={`${pageAction} Role`}
            onFirstDataClick={handleBack}
          />

          <div className="row">
            <div className="col-md-6 mb-2">
              <Input
                className="border-radius_input"
                type="text"
                value={payload.roleName}
                disabled={checkfromType === "view"}
                name="roleName"
                placeHolder="Enter role"
                handleChange={(e) => setPayload(handleFormInput(e, payload))}
                labelName="Role Name"
              />
            </div>

            <div className="col-sm-12">
              <label className="form-label">
                Role Access Setup <span className="text-danger">*</span>
              </label>
              <div className="table-responsive">
                <table className="table rounded-3">
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          disabled={checkfromType === "view"}
                          checked={isAllModulesSelected}
                          onChange={(e) =>
                            handleSelectAllModules(e.target.checked)
                          }
                        />
                        <label className="ms-2">Select All</label>
                      </th>
                      <th>Permissions</th>
                      <th>Add</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {modulePermission.map((perm, index) => {
                      const allSelected =
                        perm.addAction === 1 &&
                        perm.viewAction === 1 &&
                        perm.updateAction === 1 &&
                        perm.moduleAction === 1;

                      return (
                        <tr key={index}>
                          <td>
                            <input
                              type="checkbox"
                              disabled={checkfromType === "view"}
                              checked={allSelected}
                              onChange={(e) =>
                                handleAllActionSelect(index, e.target.checked)
                              }
                            />
                          </td>
                          <td>{perm.moduleName}</td>

                          <td>
                            {perm.moduleName !== "Dashboard" && (
                              <label>
                                <input
                                  type="checkbox"
                                  className="d-none"
                                  disabled={checkfromType === "view"}
                                  checked={perm.addAction === 1}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      index,
                                      "addAction",
                                      e.target.checked
                                    )
                                  }
                                />
                                <img
                                  src={
                                    perm.addAction === 1
                                      ? BLUEPLUSICON_ICON
                                      : GREYPLUSICON_ICON
                                  }
                                  alt="add"
                                  className="roleicons"
                                />
                              </label>
                            )}
                          </td>

                          <td>
                            <label>
                              <input
                                type="checkbox"
                                className="d-none"
                                disabled={checkfromType === "view"}
                                checked={perm.viewAction === 1}
                                onChange={(e) =>
                                  handlePermissionChange(
                                    index,
                                    "viewAction",
                                    e.target.checked
                                  )
                                }
                              />
                              <img
                                src={
                                  perm.viewAction === 1
                                    ? BLUEEYE_ICONIMG
                                    : GREYEYE_ICONIMG
                                }
                                alt="view"
                                className="roleicons"
                              />
                            </label>
                          </td>

                          <td>
                            {perm.moduleName !== "Dashboard" && (
                              <label>
                                <input
                                  type="checkbox"
                                  className="d-none"
                                  disabled={checkfromType === "view"}
                                  checked={perm.updateAction === 1}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      index,
                                      "updateAction",
                                      e.target.checked
                                    )
                                  }
                                />
                                <img
                                  src={
                                    perm.updateAction === 1
                                      ? BLUEEDIT_ICON
                                      : GREYEDIT_ICON
                                  }
                                  alt="edit"
                                  className="roleicons"
                                />
                              </label>
                            )}
                          </td>

                          <td>
                            {perm.moduleName !== "Dashboard" && (
                              <label>
                                <input
                                  type="checkbox"
                                  className="d-none"
                                  disabled={checkfromType === "view"}
                                  checked={perm.moduleAction === 1}
                                  onChange={(e) =>
                                    handlePermissionChange(
                                      index,
                                      "moduleAction",
                                      e.target.checked
                                    )
                                  }
                                />
                                <img
                                  src={
                                    perm.moduleAction === 1
                                      ? BLUESTATUS
                                      : GREYSTATUS
                                  }
                                  alt="status"
                                  className="roleicons"
                                />
                              </label>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            type="button"
            className="px-5 py-2 rounded border-0 cancelbtn mb-2 me-2"
            label="Cancel"
            onClick={handleBack}
          />
          {checkfromType !== "view" && (
            <button
              type="submit"
              className="px-4 py-2 rounded border-0 text-white btn-primary mb-2"
            >
              {isLoading && <i className="fa fa-spinner fa-spin me-2"></i>}
              {pageAction} Role
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddRole;
