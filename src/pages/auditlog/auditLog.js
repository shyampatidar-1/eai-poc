import React, { useState, useEffect, useRef } from "react";
import TableLayout from "../../components/layout/table-layout";
import { DEFAULT_PAGE_LENGTH } from "../../utils/app-constants";
import { getAuditLog } from "../../hooks/services/api-services";
import { toastEmitter } from "../../utils/utilities";

const AuditLog = () => {
  const [rowData, setRowData] = useState([]);
  const [pending, setPending] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_LENGTH);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("desc");
  // const [payload, setPayload] = useState({
  //   pageIndex: page || 0,
  //   pageSize: pageSize || DEFAULT_PAGE_LENGTH,
  //   sortBy: sortColumn || "id",
  //   searchBy: "",
  //   sortingOrder: sortDirection || "desc",
  //   fromDate: "",
  //   toDate: "",
  // });
  const payload = {
    pageIndex: page || 0,
    pageSize: pageSize || DEFAULT_PAGE_LENGTH,
    sortBy: sortColumn || "id",
    searchBy: "",
    sortingOrder: sortDirection || "desc",
    fromDate: "",
    toDate: "",
  }
  console.log("page>>", page)
  const [filterValues, setFilterValues] = useState({
    user: "",
    action: "",
    description: "",
    ipaddress: "",
    fromDate: "",
    toDate: "",
  });

  const handleReset = () => {
    setFilterValues({
      user: "",
      action: "",
      description: "",
      ipaddress: "",
      fromDate: "",
      toDate: "",
    });
  };

  const filterModalRef = useRef();

  const handleChange = (e) => {
    console.log("handle change");
    const { name, value } = e.target;
    setFilterValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const tableColumnsRole = [
    {
      name: "Sr. No.",
      selector: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "Timestamp",
      selector: (row) => row.creationDate,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "User",
      selector: (row) => row.userName,
    },
    {
      name: "IP Address",
      // selector: (row) => row.ip,
      selector: (row) => "192.168.1.2",
    },
  ];

  const handleExport = () => {
    alert("Export button clicked — add export logic here");
  };

  const openFilterModal = () => {
    const modal = new window.bootstrap.Modal(filterModalRef.current);
    modal.show();
  };

  const handleApplyFilter = () => {
    // setPage(1);
    // const modal = window.bootstrap.Modal.getInstance(filterModalRef.current);
    // modal.hide();
    console.log("PAYLAOD ->", filterValues);
  };

  const fetchAuditLogData = async () => {
    try {
      const response = await getAuditLog(payload);

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
    fetchAuditLogData();
  }, [page, pageSize, searchTerm, sortColumn, sortDirection]);

  return (
    <div className="main_datatable">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fs-3 fw-600 ">Audit Logs</h5>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={openFilterModal}
          >
            Filter
          </button>
          <button className="btn btn-outline-secondary" onClick={handleExport}>
            Export
          </button>
        </div>
      </div>

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

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
        ref={filterModalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                Apply Filter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="">
                <label htmlFor="filterUser" className="form-label">
                  User
                </label>
                <input
                  name="user"
                  type="text"
                  className="form-control"
                  id="filterUser"
                  value={filterValues.user}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="filterAction" className="form-label">
                  Action
                </label>
                <input
                  name="action"
                  type="text"
                  className="form-control"
                  id="filterAction"
                  value={filterValues.action}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="filterDescription" className="form-label">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  id="filterDescription"
                  value={filterValues.description}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="filterIpAddress" className="form-label">
                  IP Address
                </label>
                <input
                  name="ipaddress"
                  type="text"
                  className="form-control"
                  id="filterIpAddress"
                  value={filterValues.ipaddress}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="filterFromDate" className="form-label">
                  From Date
                </label>
                <input
                  name="fromDate"
                  type="date"
                  className="form-control"
                  id="filterFromDate"
                  value={filterValues.fromDate}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="filterToDate" className="form-label">
                  To Date
                </label>
                <input
                  name="toDate"
                  type="date"
                  className="form-control"
                  id="filterToDate"
                  value={filterValues.toDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleApplyFilter}
              >
                Apply Filter
              </button>
              {/* data-bs-dismiss="modal" */}
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={handleReset}
              >
                Reset Filter{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
