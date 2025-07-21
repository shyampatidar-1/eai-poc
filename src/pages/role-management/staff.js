import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../hooks/routes/routes-constant';

import TableHeading from '../../components/comman/table-heading';
import TableLayout from '../../components/layout/table-layout';

const Staff = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFirstRender = useRef(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [pending, setPending] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState();
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const [rowData, setRowData] = useState([
    {
      name: "Rohit Patidar",
      email: "rohit@example.com",
      roleName: "Admin",
      status: "Active"
    },
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      roleName: "Doctor",
      status: "Inactive"
    },
    {
      name: "Amit Singh",
      email: "amit@example.com",
      roleName: "Receptionist",
      status: "Active"
    }
  ]);

  const [totalRows, setTotalRows] = useState(3);

  const handleAdd = () => {
    navigate(`${ROUTES.STAFF}/add`, {
      state: { formType: "add" },
    });
  };

  const tableColumnsStaff = [
    {
      name: "Staff Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: row => row.roleName,
      sortable: true,
    },
    {
      name: "Status",
      selector: row => row.status,
      sortable: true,
    },
    // Add action buttons or more fields if needed
  ];


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
