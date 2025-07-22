import { useRef, useState } from "react";
import TableLayout from "../../components/layout/table-layout";
import TableHeading from "../../components/comman/table-heading";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../hooks/routes/routes-constant";

const Connectors = () => {
  const modalRef = useRef(null);
  const modalInstance = useRef(null); // store modal instance
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState();
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const [rowData, setRowData] = useState([
    {
      id: 1,
      name: 'JDBC Connector',
      type: 'Database',
      status: 'Connected',
      endpoint: 'jdbc:/.../mydb',
      protocol: 'JDBC',
    },
    {
      id: 2,
      name: 'Salesforce Connector',
      type: 'Application',
      status: 'Connected',
      endpoint: 'https://.../api',
      protocol: 'SOAP',
    },
    {
      id: 3,
      name: 'FTP Connector',
      type: 'File',
      status: 'Connected',
      endpoint: 'ftp://.../data',
      protocol: 'FTP',
    },
    {
      id: 4,
      name: 'HTTP Connector',
      type: 'Web Service',
      status: 'Disconnected',
      endpoint: 'http://.../api',
      protocol: 'HTTP',
    }

  ]);

  const tableColumnsRole = [
    {
      name: 'Sr. No.',
      selector: (row, index) => index + 1,
      width: '100px',
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Type',
      selector: row => row.type,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => <p className={`rounded-2 px-2 text-white  mb-0 ${row?.status === "Connected" ? "bg-success" : "bg-danger"}`}>{row.status}</p>,
    },
    {
      name: 'Endpoint',
      selector: row => row.endpoint,
    },
    {
      name: 'Protocol',
      selector: row => row.protocol,
    },
  ];


  const handleAdd = () => {
    modalInstance.current = new window.bootstrap.Modal(modalRef.current);
    modalInstance.current.show();
  };
  const handleClose = () => {
    if (modalInstance.current) {
      modalInstance.current.hide();
    }
  }
  return (
    <>
      <div className="main_datatable">
        <TableHeading
          title="Connectors"
          showsearchinput={false}
          data="Create "
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


      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Workflow</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <form>

                <div class="">
                  <label for="workflowName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="workflowName" placeholder="Enter workflow name" />
                </div>


                <div class="">
                  <label for="workflowDescription" class="form-label">Description</label>
                  <textarea class="form-control" id="workflowDescription" rows="3" placeholder="Enter workflow description"></textarea>
                </div>


                <div class="">
                  <label class="form-label">Design a Workflow</label>
                  <div class="border border-dashed rounded d-flex align-items-center justify-content-center py-4" style={{ "cursor": "pointer" }}>
                    <div class="text-center text-primary" onClick={() => {
                      handleClose()
                      navigate(ROUTES.CREATEINT)
                    }}>
                      <div class="fs-1">+</div>
                      <div>Create a new workflow</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Connectors;
