const Connectors = () => {
  return (
    <>
      <div className="">
        <div className="row">
          {/* Main Content */}
          <div className="col-md-12 ">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Connectors</h3>
              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Create</button>
            </div>

            <table className="table table-bordered table-hover bg-white">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Endpoint</th>
                  <th>Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JDBC Connector</td>
                  <td>Database</td>
                  <td><span className="badge bg-success">Connected</span></td>
                  <td>jdbc:/.../mydb</td>
                  <td><strong>JDBC</strong></td>
                </tr>
                <tr>
                  <td>Salesforce Connector</td>
                  <td>Application</td>
                  <td><span className="badge bg-success">Connected</span></td>
                  <td>https://.../api</td>
                  <td><strong>SOAP</strong></td>
                </tr>
                <tr>
                  <td>FTP Connector</td>
                  <td>File</td>
                  <td><span className="badge bg-success">Connected</span></td>
                  <td>ftp://.../data</td>
                  <td><strong>FTP</strong></td>
                </tr>
                <tr>
                  <td>HTTP Connector</td>
                  <td>Web Service</td>
                  <td><span className="badge bg-danger">Disconnected</span></td>
                  <td>http://.../api</td>
                  <td><strong>HTTP</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Workflow</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <form>

                <div class="mb-3">
                  <label for="workflowName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="workflowName" placeholder="Enter workflow name" />
                </div>


                <div class="mb-3">
                  <label for="workflowDescription" class="form-label">Description</label>
                  <textarea class="form-control" id="workflowDescription" rows="3" placeholder="Enter workflow description"></textarea>
                </div>


                <div class="mb-3">
                  <label class="form-label">Design a Workflow</label>
                  <div class="border border-dashed rounded d-flex align-items-center justify-content-center py-4" style={{ "cursor": "pointer" }}>
                    <div class="text-center text-primary">
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
