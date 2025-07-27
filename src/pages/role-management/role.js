import React from "react";
import { useState, useEffect } from "react";
import {
  decryptAEStoJSON,
  getCurrentUser,
  toastEmitter,
} from "../../utils/utilities";
import { Link, useNavigate } from "react-router-dom";
import { RoleStatus, getAllRole, getAllRoles, getRoleStatusActiveinactive } from "../../hooks/services/api-services";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { useSelector } from "react-redux";
import TableLayout from '../../components/layout/table-layout';
import TableHeading from "../../components/comman/table-heading"
import { useRef } from "react";
import { API_RESPONSE, DEFAULT_PAGE_LENGTH } from "../../utils/app-constants";
import { ROLE_EDIT_ICON, ROLE_VIEW_ICON } from "../../utils/aap-image-constant";
const Role = () => {
  const isFirstRender = useRef(true);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate()
  const [rowData, setRowData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_LENGTH);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("roleId");
  const [sortDirection, setSortDirection] = useState("desc");
  const [totalRows, setTotalRows] = useState(0);
  const pageUrlConstant = `${ROUTES?.ROLE_MANAGEMENT_ROLE}/`;
  // const rawPermission = useSelector((state) => state?.loggedUser?.value);
  const { value } = useSelector((state) => state?.loggedUser);
  const userData = decryptAEStoJSON(value);
  // permission code
  const [permissionAccess, setPermissionAccess] = useState();
  const rawPermission = useSelector((state) => state?.permission?.value);
  const permissions = decryptAEStoJSON(rawPermission);
  useEffect(() => {
    const RoleAccessFilterData =
      permissions && permissions?.filter((v) => v.moduleName === "Role");
    setPermissionAccess(RoleAccessFilterData?.[0]);
  }, []);
  // permission code
  const payload = {
    pageIndex: page || 0,
    pageSize: pageSize || DEFAULT_PAGE_LENGTH,
    searchBy: searchTerm,
    sortingOrder: sortDirection || "desc",
    sortBy: "roleId",
    status: 0,
    parentRoleId: 0,

  }
  const handleRoleStatus = async (id, status) => {

    try {
      const response = await getRoleStatusActiveinactive(id, status);
      if (response.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        toastEmitter("success", response?.data?.message);
        fetchData();
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    }
  };

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await getAllRole(payload);

      if (response?.data?.status !== 200) {
        if (isFirstRender.current) {
          toastEmitter("error", response?.data?.message);
        }
        setRowData([]);
      } else {
        if (isFirstRender.current) {
          // toastEmitter("success", response?.data?.message);
        }
        setRowData(response?.data?.data?.content);
        setTotalRows(response?.data?.data?.totalElements);
      }
    } catch (err) {
      if (isFirstRender.current) {
        toastEmitter("error", API_RESPONSE?.MESSAGE_503);
      }
    } finally {
      setPending(false);
      isFirstRender.current = false; // Toast ek baar dikhane ke baad disable kar diya
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, searchTerm, sortColumn, sortDirection]);


  const handleAdd = () => {
    navigate(`${ROUTES.ROLE}/add`, {
      state: { formType: "add" },
    });
  };
  const handleEdit = (roleId) => {
    navigate(`${ROUTES.ROLE}/edit`, {
      state: { formType: "edit", roleId: roleId },
    });
  };
  const handleView = (roleId) => {
    navigate(`${ROUTES.ROLE}/view`, {
      state: { formType: "view", roleId: roleId },
    });
  };

  const tblColumns = [
    {
      code: "S.No",
      name: "S.No",
      omit: false,
      width: "100px",
      sortable: false,
      selector: (row, index) => `${index + 1}.`,
    },
    {
      code: "role_name",
      name: "Role Name",
      width: "250px",
      omit: false,
      selector: (row) => row.roleName,
      sortable: true,
    },




    {
      code: "status",
      sortable: true,
      name: "Status",
      selector: (row) => row?.status,
      cell: (row) => (
        <div
          className={`d-flex align-items-center gap-1 px-2 py-1 rounded-4 cursor-pointer
    ${row.status === 1
              ? "bg-green-normal color-green-bold"
              : "bg-gray-normal color-gray-bold"

            }
             ${!permissionAccess?.isDeleteChecked ? "disabled-style" : ""}
  `}
          onClick={(e) => {
            if (permissionAccess?.isDeleteChecked === true) {
              handleRoleStatus(row?.roleId, row?.status === 1 ? 2 : 1);
            }
          }}
        >
          <div
            className={`rounded-circle ${row?.status === 1 ? "bg-green-bold" : "bg-gray-bold"
              }`}
            style={{ width: "10px", height: "10px" }}
          ></div>
          <p className="m-0 fs-14 fw-normal">
            {row?.status === 1 ? "Active" : "Inactive"}
          </p>
        </div>
      ),
    },
    {
      name: "Action",
      width: "150px",
      cell: (row) => {
        const canEdit =
          userData?.roleList[0]?.roleName !== row?.roleName &&
          permissionAccess?.isUpdateChecked;
        console.log("canEdit>>>wwqe", canEdit);
        const canView = permissionAccess?.isViewChecked;
        return (
          <div className="d-flex justify-content-between align-items-center">
            <div className={`me-2 cursor-pointer ${!canEdit ? "disabled-style" : ""
              } `}
              onClick={() => {
                if (canEdit) handleEdit(row?.roleId);
              }}
              style={!canEdit ? { pointerEvents: "none", opacity: 0.6 } : {}}>
              <img src={ROLE_EDIT_ICON} alt="Edit" />
            </div>
            {/* // <div className="me-2 cursor-pointer " >
              //   <img src={ROLE_EDIT_ICON} alt="Edit" onClick={() => handleEdit(row?.roleId)} />
              // </div> */}

            {/* {!permissionAccess?.isViewChecked &&
              <div className='me-2 cursor-pointer' onClick={() => handleView(row?.roleId)}>
                <img src={ROLE_VIEW_ICON} alt="View" />
              </div>
            } */}
            <div
              className={`me-2 cursor-pointer ${!canView ? "disabled-style" : ""
                }`}
              onClick={() => {
                if (canView) handleView(row?.roleId);
              }}
              style={!canView ? { pointerEvents: "none", opacity: 0.6 } : {}}
            >
              <img src={ROLE_VIEW_ICON} alt="View" />
            </div>
          </div>
        )

      },
    }
  ];

  return (
    <div className="main_datatable">
      <div className="">
        <TableHeading
          title="Role"
          searchValue={searchTerm}
          setSearchValue={setSearchTerm}
          data="Role"
          // showbutton={true}
          showbutton={permissionAccess?.isCreateChecked}
          addButtonClick={handleAdd}
        />

        <div className="table-wrapper">
          <TableLayout
            _tblColumns={tblColumns}
            _rowData={rowData}
            pending={pending}
            pagination={true}
            selectableRows={false}
            setPending={setPending}
            _totalRows={totalRows}
            pageSize={pageSize}
            setPageSize={setPageSize}
            setPage={setPage}
            setSortColumn={setSortColumn}
            setSortDirection={setSortDirection}
          />
        </div>
      </div>
    </div>
  );
};

export default Role;
