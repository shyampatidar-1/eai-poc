import { useState } from "react";
import TableLayout from "../../components/layout/table-layout";


const MessageTracker = () => {
  const [pending, setPending] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState();
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const messageRows = [
    {
      id: 'a8f8e172',
      flow: 'Order Processing',
      source: 'CRM System',
      target: 'ERP System',
      protocol: 'HTTP',
      status: 'Success',
      duration: 1521
    },
    {
      id: 'd4e5a128',
      flow: 'User Sync',
      source: 'ERP System',
      target: 'Order Management',
      protocol: 'JMS',
      status: 'Failure',
      duration: 1273
    },
    {
      id: 'c583a157',
      flow: 'Payment Processing',
      source: 'User Database',
      target: 'User Database',
      protocol: 'HTTP',
      status: 'Success',
      duration: 1210
    },
    {
      id: 'd4e5a128',
      flow: 'User Sync',
      source: 'ERP System',
      target: 'Order Management',
      protocol: 'JMS',
      status: 'Failure',
      duration: 1273
    },
    {
      id: 'c583a157',
      flow: 'Payment Processing',
      source: 'User Database',
      target: 'User Database',
      protocol: 'HTTP',
      status: 'Success',
      duration: 1210
    },
  ];
  const tableColumnsRole = [
    // {
    //   name: 'Sr. No.',
    //   selector: (row, index) => index + 1,
    //   width: '100px',
    // },
    {
      name: 'Message ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Integration Flow',
      selector: row => row.flow,
      sortable: true,
    },
    {
      name: 'Source App',
      selector: row => row.source,

    },
    {
      name: 'Target App',
      selector: row => row.target,
    },
    {
      name: 'Protocol',
      width: "100px",
      selector: row => row.protocol,
    },
    {
      name: 'Status',
      selector: row => <p className={`rounded-2 px-2 text-white  mb-0 ${row?.status === "Success" ? "bg-success" : "bg-danger"}`}>{row.status}</p>,
    },
    {
      name: 'Duration (ms)',
      selector: row => row.duration,
    },
  ];
  return (
    <>
      <div className="main_datatable">
        <h5 className="fs-3 fw-600 mb-3">Message Tracker</h5>

        <div class="mb-3">
          <div class="row g-3 align-items-end">
            <div class="col-md">
              <label for="integration" class="form-label fs-14">Integration</label>
              <select class="form-select" id="integration">
                <option selected>All</option>
              </select>
            </div>
            <div class="col-md">
              <label for="source" class="form-label fs-14">Source</label>
              <select class="form-select" id="source">
                <option selected>All</option>
              </select>
            </div>
            <div class="col-md">
              <label for="target" class="form-label fs-14">Target</label>
              <select class="form-select" id="target">
                <option selected>All</option>
              </select>
            </div>
            <div class="col-md">
              <label for="protocol" class="form-label fs-14">Protocol</label>
              <select class="form-select" id="protocol">
                <option selected>Last 24 Hours</option>
              </select>
            </div>
            <div class="col-md">
              <label for="status" class="form-label fs-14">Status</label>
              <select class="form-select" id="status">
                <option selected>Last 24 Hours</option>
              </select>
            </div>
            <div class="col-md-auto">
              <button class="btn btn-primary w-100">Apply Filters</button>
            </div>
          </div>
        </div>



        {/* Side Panel */}
        <div className="row">
          <div className="col-md-8">
            <TableLayout
              _tblColumns={tableColumnsRole}
              _rowData={messageRows}
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
          <div className="col-md-4">
            <div class="bg-white rounded shadow-sm p-3 mb-4">
              <div class="d-flex justify-content-between align-items-center mb-3 gap-2">
                <div class="bg-primary text-white text-center  p-2  rounded fs-13" >
                  Source<br />App
                </div>
                <div class="text-primary fs-14">→</div>
                <div class="bg-primary text-white text-center  p-2 rounded fs-13" >
                  Integration<br />Flow
                </div>
                <div class="text-primary fs-14">→</div>
                <div class="bg-primary text-white text-center p-2 rounded fs-13" >
                  Target<br />App
                </div>
              </div>
              <p class="mb-1 fs-14"><strong className="fw-500"> Status:</strong> <span class="text-success fw-semibold">Success</span></p>
              <p class="mb-1 fs-14"><strong className="fw-500">Start:</strong> 04/03/2024 11:30 AM</p>
              <p class="mb-0 fs-14"><strong className="fw-500">End:</strong> 04/03/2024 11:30 AM</p>
            </div>

            <div class="bg-white rounded shadow-sm p-3 mb-4">
              <h6 class="fw-semibold mb-3">Message Flow</h6>
              <div class="d-flex justify-content-between align-items-center mb-3 gap-2">
                <div class="bg-primary text-white text-center  p-2  rounded fs-13" >
                  Source<br />App
                </div>
                <div class="text-primary fs-14">→</div>
                <div class="bg-primary text-white text-center  p-2 rounded fs-13" >
                  Integration<br />Flow
                </div>
                <div class="text-primary fs-14">→</div>
                <div class="bg-primary text-white text-center p-2 rounded fs-13" >
                  Target<br />App
                </div>
              </div>
              <p class="mb-1 fs-14"><strong className="fw-500"> Status:</strong> <span class="text-success fw-semibold">Success</span></p>
              <p class="mb-1 fs-14"><strong className="fw-500">Start:</strong> 04/03/2024 11:30 AM</p>
              <p class="mb-0 fs-14"><strong className="fw-500">End:</strong> 04/03/2024 11:30 AM</p>
            </div>


          </div>
        </div>
      </div >
    </>
  );
};

export default MessageTracker;
