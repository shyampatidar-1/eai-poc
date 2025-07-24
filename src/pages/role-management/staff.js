import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../hooks/routes/routes-constant";

import TableHeading from "../../components/comman/table-heading";
import TableLayout from "../../components/layout/table-layout";
import { ROLE_EDIT_ICON, ROLE_VIEW_ICON } from "../../utils/aap-image-constant";
import { staffList, staffStatus } from "../../hooks/services/api-services";
import { toastEmitter } from "../../utils/utilities";
import { API_RESPONSE, DEFAULT_PAGE_LENGTH } from "../../utils/app-constants";

const Staff = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [pending, setPending] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_LENGTH);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("desc");

  const [rowData, setRowData] = useState([]);

  const handleAdd = () => {
    navigate(`${ROUTES.STAFF}/add`, {
      state: { formType: "add" },
    });
  };
  const handleEdit = (id) => {
    navigate(`${ROUTES.STAFF}/edit`, {
      state: { formType: "edit", staffId: id },

    });
  };
  const handleView = (id) => {
    navigate(`${ROUTES.STAFF}/view`, {
      state: { formType: "view", staffId: id },
    });
  };

  const handleRoleStatus = async (id, status) => {
    try {
      const response = await staffStatus(id, status);
      if (response.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        toastEmitter("success", response?.data?.message);
        fetchStaffData();
      }
    } catch (err) {
      toastEmitter("error", API_RESPONSE?.MESSAGE_503);
    }
  };

  const tableColumnsStaff = [
    {
      name: "Admin Name",
      selector: (row) => row.userName,
      sortable: true,
    },

    {
      name: "Role",
      selector: (row) => row.roleName,
      sortable: true,
    },
    // {
    //   name: "Status",
    //   selector: row => row.status,
    //   sortable: true,
    // },
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
  `}
          onClick={(e) => {
            // if (permissionAccess?.moduleAction !== 0) {
            handleRoleStatus(row?.adminId, row?.status === 1 ? 2 : 1);
            // }
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
      cell: (row) => (
        <div className="d-flex justify-content-between align-items-center">
          <div className="me-2 cursor-pointer">
            <img src={ROLE_EDIT_ICON} alt="Edit" onClick={() => handleEdit(row?.adminId)} />
          </div>

          <div className="me-2 cursor-pointer" onClick={() => handleView(row?.adminId)}>
            <img src={ROLE_VIEW_ICON} alt="View" />
          </div>
        </div>
      ),
    },
    // Add action buttons or more fields if needed
  ];
  const payload = {
    pageIndex: page || 0,
    pageSize: pageSize || DEFAULT_PAGE_LENGTH,
    sortBy: sortColumn || "adminId",
    searchBy: searchTerm,
    sortingOrder: sortDirection || "desc",
    status: 0,
  };

  const fetchStaffData = async () => {
    try {
      const response = await staffList(payload);

      if (response.status !== 200) {
        toastEmitter("error", response?.data?.message);
      } else {
        // Safe fallback with null-item filtering
        const rawList = response?.data?.data?.content || [];
        const totalElements = response?.data?.data?.totalElements || 0;

        setRowData(rawList);
        setTotalRows(totalElements); // or totalElements if you want original count
      }
    } catch (err) {
      toastEmitter("error", "Something went wrong. Please try again later.");
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, [page, pageSize, searchTerm, sortColumn, sortDirection]);

  return (
    <div className="main_datatable">
      <div className="tab-pane fade show active">
        <TableHeading
          title="Staff"
          searchValue={searchTerm}
          setSearchValue={setSearchTerm}
          data="Staff"
          showbutton={true}
          addButtonClick={handleAdd}
        />

        <div className="table-wrapper">
          <TableLayout
            _tblColumns={tableColumnsStaff}
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

export default Staff;
