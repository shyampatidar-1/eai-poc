import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableHeading from "../../components/comman/table-heading";
import { ROUTES } from "../../hooks/routes/routes-constant";
import { ROLE_EDIT_ICON, ROLE_VIEW_ICON } from "../../utils/aap-image-constant";
import TableLayout from "../../components/layout/table-layout";

const Role = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isFirstRender = useRef(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [pending, setPending] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState();
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState("");
    const [totalRows, setTotalRows] = useState(0);
    const [rowData, setRowData] = useState([
        {
            id: 1,
            roleName: "Admin",
            status: "Active",
        },
        {
            id: 2,
            roleName: "Editor",
            status: "Inactive",
        },
        {
            id: 3,
            roleName: "Viewer",
            status: "Active",
        },
    ]);

    const handleAdd = () => {
        navigate(`${ROUTES.ROLE}/add`, {
            state: { formType: "add" },
        });
    };
    const handleEdit = () => {
        navigate(`${ROUTES.ROLE}/edit`, {
            state: { formType: "edit" },
        });
    };
    const handleView = () => {
        navigate(`${ROUTES.ROLE}/view`, {
            state: { formType: "view" },
        });
    };

    const tableColumnsRole = [
        {
            name: "S.No",
            width: "100px",
            selector: (row, index) => index + 1,
        },

        {
            name: "Role Name",
            selector: (row) => row.roleName,
            sortable: true,
        },
        {
            code: "status",
            sortable: true,
            name: "Status",
            selector: (row) => row?.status,
            //             cell: (row) => (

            //                 <div
            //                     className={`d-flex align-items-center gap-1 px-2 py-1 rounded-4 cursor-pointer
            //     ${row.status === 1
            //                             ? "bg-green-normal color-green-bold"
            //                             : "bg-gray-normal color-gray-bold"
            //                         }
            //     ${permissionAccess?.moduleAction === 0 ? "disabled-style" : ""}
            //   `}
            //                     onClick={(e) => {
            //                         if (permissionAccess?.moduleAction !== 0) {
            //                             handleRoleStatus(row?.id, row?.status === 1 ? 0 : 1);
            //                         }
            //                     }}
            //                 >
            //                     <div
            //                         className={`rounded-circle ${row?.status === 1 ? "bg-green-bold" : "bg-gray-bold"
            //                             }`}
            //                         style={{ width: "10px", height: "10px" }}
            //                     ></div>
            //                     <p className="m-0 fs-14 fw-normal">
            //                         {row?.status === 1 ? t("Active") : t("Inactive")}
            //                     </p>
            //                 </div>
            //             ),
        },
        {
            name: "Action",
            width: "150px",
            cell: (row) =>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="me-2 cursor-pointer">
                        <img src={ROLE_EDIT_ICON} alt="Edit" onClick={handleEdit} />
                    </div>

                    <div className='me-2 cursor-pointer' onClick={handleView}>
                        <img src={ROLE_VIEW_ICON} alt="View" />
                    </div>
                </div>

        },
    ];

    return (
        <div className="main_datatable">
            <div className="">
                <TableHeading
                    title="Role"
                    searchValue={searchTerm}
                    setSearchValue={setSearchTerm}
                    data="Role"
                    showbutton={true}
                    addButtonClick={handleAdd}
                />

                <div className="table-wrapper">
                    <TableLayout
                        _tblColumns={tableColumnsRole}
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
