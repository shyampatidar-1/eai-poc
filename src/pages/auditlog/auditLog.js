// import React from 'react'
// // import TableLayout from '../../components/layout/table-layout'

// // const auditLog = () => {
// //   return (
// //     <div>
// //       <div className="table-wrapper">
// //         <TableLayout
// //           _tblColumns={tableColumnsRole}
// //           _rowData={rowData}
// //           pending={pending}
// //           pagination={true}
// //           selectableRows={false}
// //           setPending={setPending}
// //           _totalRows={totalRows}
// //           pageSize={pageSize}
// //           setPageSize={setPageSize}
// //           setPage={setPage}
// //           setSortColumn={setSortColumn}
// //           setSortDirection={setSortDirection}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default auditLog

// import { useState, useEffect } from 'react';
// import TableLayout from '../../components/layout/table-layout';

// const AuditLog = () => {
//   const [rowData, setRowData] = useState([]);
//   const [pending, setPending] = useState(true);
//   const [totalRows, setTotalRows] = useState(0);
//   const [pageSize, setPageSize] = useState(10);
//   const [page, setPage] = useState(1);
//   const [sortColumn, setSortColumn] = useState('');
//   const [sortDirection, setSortDirection] = useState('');

//   const tableColumnsRole = [
//     {
//       name: 'Sr. No.',
//       selector: (row, index) => (page - 1) * pageSize + index + 1,
//       width: '100px',
//     },
//     {
//       name: 'Timestamp',
//       selector: row => row.timestamp,
//       sortable: true,
//     },
//     {
//       name: 'Action',
//       selector: row => row.action,
//       sortable: true,
//     },
//     {
//       name: 'Description',
//       selector: row => row.description,
//     },
//     {
//       name: 'User',
//       selector: row => row.user,
//     },
//     {
//       name: 'IP Address',
//       selector: row => row.ip,
//     },
//   ];

//   // Simulate loading
//   useEffect(() => {
//     setPending(true);

//     setTimeout(() => {
//       const data = []; // No data available
//       setRowData(data);
//       setTotalRows(data.length);
//       setPending(false);
//     }, 500); // Simulate API delay
//   }, [page, pageSize, sortColumn, sortDirection]);

//   return (
//     <div className="table-wrapper">
//       <TableLayout
//         _tblColumns={tableColumnsRole}
//         _rowData={rowData}
//         pending={pending}
//         pagination={true}
//         selectableRows={false}
//         setPending={setPending}
//         _totalRows={totalRows}
//         pageSize={pageSize}
//         setPageSize={setPageSize}
//         setPage={setPage}
//         setSortColumn={setSortColumn}
//         setSortDirection={setSortDirection}
//       />
//     </div>
//   );
// };

// export default AuditLog;

import React, { useState, useEffect, useRef } from 'react';
import TableLayout from '../../components/layout/table-layout';

const AuditLog = () => {
  const [rowData, setRowData] = useState([]);
  const [pending, setPending] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const [filterValues, setFilterValues] = useState({
    action: '',
    user: '',
  });

  const filterModalRef = useRef();

  const tableColumnsRole = [
    {
      name: 'Sr. No.',
      selector: (row, index) => (page - 1) * pageSize + index + 1,
      width: '100px',
    },
    {
      name: 'Timestamp',
      selector: row => row.timestamp,
      sortable: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: 'User',
      selector: row => row.user,
    },
    {
      name: 'IP Address',
      selector: row => row.ip,
    },
  ];

  useEffect(() => {
    setPending(true);

    setTimeout(() => {
      // let data = [];

      // Uncomment to test with mock data

      let data = [
        { timestamp: '2025-07-18 10:30 AM', action: 'Login', description: 'User logged in', user: 'admin', ip: '192.168.1.1' },
        { timestamp: '2025-07-18 11:00 AM', action: 'Update', description: 'Policy updated', user: 'superadmin', ip: '192.168.1.2' },
      ];


      if (filterValues.action) {
        data = data.filter(item =>
          item.action.toLowerCase().includes(filterValues.action.toLowerCase())
        );
      }

      if (filterValues.user) {
        data = data.filter(item =>
          item.user.toLowerCase().includes(filterValues.user.toLowerCase())
        );
      }

      setRowData(data);
      setTotalRows(data.length);
      setPending(false);
    }, 500);
  }, [page, pageSize, sortColumn, sortDirection, filterValues]);

  const handleExport = () => {
    alert('Export button clicked — add export logic here');
  };

  const openFilterModal = () => {
    const modal = new window.bootstrap.Modal(filterModalRef.current);
    modal.show();
  };

  const applyFilter = () => {
    setPage(1);
    const modal = window.bootstrap.Modal.getInstance(filterModalRef.current);
    modal.hide();
  };

  return (
    <div className="table-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Audit Logs</h5>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={openFilterModal}>
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
      {/* <div
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
              <h5 className="modal-title" id="filterModalLabel">Filter Logs</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="filterAction" className="form-label">Action</label>
                <input
                  type="text"
                  className="form-control"
                  id="filterAction"
                  value={filterValues.action}
                  onChange={e =>
                    setFilterValues(prev => ({ ...prev, action: e.target.value }))
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="filterUser" className="form-label">User</label>
                <input
                  type="text"
                  className="form-control"
                  id="filterUser"
                  value={filterValues.user}
                  onChange={e =>
                    setFilterValues(prev => ({ ...prev, user: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={applyFilter}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
        ref={filterModalRef}
      >
        <div className="modal-dialog modal-dialog-slideout">
          <div className="modal-content" style={{ minHeight: "100vh", width: "400px", marginLeft: "auto" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">Apply Filter</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="filterAction" className="form-label">Action</label>
                <input
                  type="text"
                  className="form-control"
                  id="filterAction"
                  value={filterValues.action}
                  onChange={e => setFilterValues(prev => ({ ...prev, action: e.target.value }))}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="filterUser" className="form-label">User</label>
                <input
                  type="text"
                  className="form-control"
                  id="filterUser"
                  value={filterValues.user}
                  onChange={e => setFilterValues(prev => ({ ...prev, user: e.target.value }))}
                />
              </div>
              {/* Add more filter fields here if needed */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={applyFilter}>Apply Filter</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AuditLog;
