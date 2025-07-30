const QueueManagement = () => {
  const queueCardsData = [
    {
      queueName: "OMS",
      type: "Command",
      typeColor: "btn-info",
      messagesTitle: "Messages",
      messages: 4120,
      outTitle: "Out",
      out: 4110,
      pendingTitle: "Pending",
      pending: 10,
      errorTitle: "Error",
      error: "0.2%",
      retriesTitle: "Retries",
      failed: "Failed",
      retries: 2,
      graph: 2,
      actions: [
        { label: "Pause", color: "btn-warning" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    },
    {
      queueName: "SALESFORCE",
      type: "Event",
      typeColor: "btn-success",
      messagesTitle: "Messages",
      messages: 7290,
      outTitle: "Out",
      out: 7280,
      pendingTitle: "Pending",
      pending: 15,
      errorTitle: "Error",
      error: "0%",
      retriesTitle: "Retries",
      failed: "Failed",
      retries: 0,
      graph: 0,
      actions: [
        { label: "Pause", color: "btn-warning" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    },
    {
      queueName: "SAP",
      type: "DLQ",
      typeColor: "btn-danger",
      messagesTitle: "Messages",
      messages: 1160,
      outTitle: "DL3 Out",
      out: 850,
      pendingTitle: "Retries",
      pending: 22,
      errorTitle: "Pause",
      error: "1.1%",
      retriesTitle: "Purge",
      failed: "Failed",
      retries: 5,
      graph: 5,
      actions: [
        { label: "Pause", color: "btn-warning" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    },
    {
      queueName: "LOYALTY SYSTEM",
      type: "Retry",
      typeColor: "btn-warning",
      messagesTitle: "Messages",
      messages: 872,
      outTitle: "Out",
      out: 850,
      pendingTitle: "Rendies",
      pending: 22,
      errorTitle: "Pause",
      error: "1.1%",
      retriesTitle: "Purge",
      failed: "Failed",
      retries: 22,
      graph: 22,
      actions: [
        { label: "Pause", color: "btn-warning" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    },
    {
      queueName: "NETACT",
      type: "DLQ",
      typeColor: "btn-danger",
      messagesTitle: "Messages",
      messages: 156,
      outTitle: "Out",
      out: 10,
      pendingTitle: "Pending",
      pending: 146,
      errorTitle: "Errors",
      error: "5.3%",
      retriesTitle: "DL3 Count",
      failed: "Failed",
      retries: 5,
      graph: 5,
      actions: [
        { label: "Pause", color: "btn-warning" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    },
    {
      queueName: "SAM",
      type: "ST",
      typeColor: "btn-secondary",
      messagesTitle: "Messages",
      messages: 590,
      outTitle: "Out",
      out: 590,
      pendingTitle: "Pending",
      pending: 0,
      errorTitle: "Retries",
      error: "0%",
      retriesTitle: "Retries",
      failed: "Failed",
      retries: 0,
      graph: 0,
      actions: [
        { label: "Route", color: "btn-success" },
        { label: "Purge", color: "btn-danger" },
        { label: "Reprocess", color: "btn-primary" }
      ]
    }
  ];


  return (<>
    <div className='main_datatable'>
      <div className='d-flex justify-content-between'>
        <h5 className="fs-3 fw-600 ">Queue Management</h5>
      </div>

      <div className="row gx-4 my-3">
        <div className="col-4">
          <div className="input-group mb-0">
            <span className="input-group-text" id="basic-addon1" style={{ background: "white !important" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by queue name..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="d-flex col-8 gap-2">
          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
              </svg>
              <span className="ms-1 fs-13">Pause</span>
            </button>
          </div>

          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
              <span className="ms-2 fs-13">Route Test</span>
            </button>
          </div>

          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
              <span className="ms-2 fs-13">Enqueue</span>
            </button>
          </div>

          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
              <span className="ms-2 fs-13">Refresh</span>
            </button>
          </div>

          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
              </svg>
            </button>
          </div>
          <div className="">
            <button className="btn border border-1 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-2'>
          <select class="form-select fs-13" aria-label="Default select example">
            <option selected>Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='col-2'>
          <select class="form-select fs-13" aria-label="Default select example">
            <option selected>Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='col-2'>
          <select class="form-select fs-13" aria-label="Default select example">
            <option selected>Status</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='col-2'>
          <select class="form-select fs-13" aria-label="Default select example">
            <option selected>Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> <div className='col-2'>
          <select class="form-select fs-13" aria-label="Default select example">
            <option selected>Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>


      <div className="row">
        {queueCardsData.map((queueData, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="shadow-sm p-1 bg-white rounded h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex ">
                    <div style={{ width: '12px', height: '12px' }} className="bg-primary rounded-circle"></div>
                    <div style={{ width: '12px', height: '12px' }} className="bg-secondary rounded-circle"></div>
                  </div>
                  <p className="m-0 fs-6 fw-bolder">{queueData.queueName}</p>
                  {/* <button className={`btn  btn-sm   p-1 ${queueData.typeColor}`}>{queueData.type}</button> */}
                </div>
                <div className="row text-center">
                  <div className="col-4 mb-3">
                    <h6>{queueData.messages}</h6>
                    <small>{queueData.messagesTitle}</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>{queueData.out}</h6>
                    <small>{queueData.outTitle}</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>{queueData.pending}</h6>
                    <small>{queueData.pendingTitle}</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>{queueData.error}</h6>
                    <small>{queueData.errorTitle}</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>{queueData.retries}</h6>
                    <small>{queueData.retriesTitle}</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>{queueData.graph}</h6>
                    <small>{queueData.failed}</small>
                    <small>&nbsp;</small>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between ">
                <button className="btn btn-light btn-sm">Pause</button>
                <button className="btn btn-light btn-sm">Purge</button>
                <button className="btn btn-light btn-sm">Reprocess</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div >
  </>)
}
export default QueueManagement;