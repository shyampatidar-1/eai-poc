const CreateIntegration = () => {
  return (
    <div>
      {/* Header */}
      <div className="header-bar">
        <h5 className="mb-0">Enterprise AA/Integration</h5>
        <div>
          <button className="btn btn-outline-light btn-sm me-1">Validate</button>
          <button className="btn btn-outline-light btn-sm me-1">Version: 1</button>
          <button className="btn btn-outline-light btn-sm me-1">Fit</button>
          <button className="btn btn-outline-light btn-sm">Deploy</button>
        </div>
      </div>

      <div className="d-flex">
        {/* Sidebar */}
        <div className="content col-md-2">
          <h6>Process Modeller</h6>
          <div className="mb-3">
            <div><strong>BPMN Elements</strong></div>
            {['Start', 'End Event', 'Task', 'Timer', 'Message', 'Gateway', 'Sub-process'].map(btn => (
              <button key={btn} className="btn btn-light btn-sm">{btn}</button>
            ))}
          </div>

          <div className="mb-3">
            <div><strong>Application Connectors</strong></div>
            {['Oracle', 'SAP', 'Salesforce', 'REST', 'FTP'].map(btn => (
              <button key={btn} className="btn btn-light btn-sm">{btn}</button>
            ))}
          </div>

          <div>
            <div><strong>Data Enrichers</strong></div>
            {['Data Mapper', 'Script', 'Transformer'].map(btn => (
              <button key={btn} className="btn btn-light btn-sm">{btn}</button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-7 mt-4">
          <h5 className="mb-3 ms-3">Order Fulfillment</h5>

          <div className="flow-row">
            <div className="step-box">Start</div>
            <div className="arrow-right"></div>
            <div className="step-box">Process Order</div>
            <div className="arrow-right"></div>
            <div className="step-box gateway">Gateway</div>
          </div>

          <div className="row mt-3">
            <div className="col-6 d-flex justify-content-center">
              <div className="column-flow">
                <div className="vertical-line"></div>
                <div className="step-box text-warning border-warning">⏱ 2 hours</div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="column-flow">
                <div className="vertical-line"></div>
                <div className="step-box">Query uvenow</div>
                <div className="arrow-down"></div>
                <div className="step-box">REST</div>
                <div className="arrow-down"></div>
                <div className="step-box">Update Order</div>
                <div className="arrow-down"></div>
                <div className="step-box end">End</div>
              </div>
            </div>
          </div>

          <div className="warning-box">⚠️ Warning: 1</div>
        </div>

        {/* Right Panel */}
        <div className="properties-panel col-md-3">
          <div className="  col-md-11 m-auto">
            <h5>Properties</h5>
            <label className="form-label">Name</label>
            <input className="form-control" defaultValue="Query Inventory" />

            <label className="form-label">Description</label>
            <input className="form-control" defaultValue="Query Inventory status" />

            <label className="form-label">Retry Count</label>
            <input type="number" className="form-control" defaultValue="3" />

            <label className="form-label">Retry Interval (sec)</label>
            <input type="number" className="form-control" defaultValue="60" />

            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label">Retry On Failure</label>
            </div>

            <label className="form-label">Timeout (sec)</label>
            <input type="number" className="form-control" defaultValue="120" />

            <label className="form-label">Headers</label>
            <input type="text" className="form-control mb-1" placeholder="API Key" defaultValue="{{apiToken}}" />

            <label className="form-label">Output Mapping</label>
            <input type="text" className="form-control" placeholder="Map output here" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateIntegration;
