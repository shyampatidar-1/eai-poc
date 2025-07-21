

const MessageTracker = () => {
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
    }
  ];
  return (
    <>
      {/* Top Navigation Bar */}
      {/* <div className="topbar d-flex justify-content-between align-items-center">
        <div>
          <a href="#">Integration Flow</a>
          <a href="#">Partners</a>
          <a href="#">Security</a>
          <div className="dropdown d-inline">
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Admin</a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="">
        <h5 className="">Message Tracker</h5>
        <div className="row">
          {/* Filter + Table */}
          <div className="col-md-9">
            <div className="row g-2 mb-3">
              {['Integration', 'Source', 'Target', 'Protocol', 'Status'].map((label, index) => (
                <div key={index} className="col">
                  <select className="form-select"><option>{label}</option></select>
                </div>
              ))}
              <div className="col-auto">
                <button className="btn btn-primary">Apply Filters</button>
              </div>
            </div>

            <table className="table table-bordered bg-white">
              <thead className="table-light">
                <tr>
                  <th>Message ID</th>
                  <th>Integration Flow</th>
                  <th>Source App</th>
                  <th>Target App</th>
                  <th>Protocol</th>
                  <th>Status</th>
                  <th>Duration (ms)</th>
                </tr>
              </thead>
              <tbody>
                {messageRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.flow}</td>
                    <td>{row.source}</td>
                    <td>{row.target}</td>
                    <td>{row.protocol}</td>
                    <td className={row.status === 'Success' ? 'status-success' : 'status-failure'}>{row.status}</td>
                    <td>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link" href="#">&lt;</a></li>
                {[1, 2, 3, 4, 5].map(num => (
                  <li key={num} className={`page-item ${num === 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#">{num}</a>
                  </li>
                ))}
                <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
              </ul>
            </nav>
          </div>

          {/* Side Panel */}
          <div className="col-md-3">
            {[1, 2].map((_, idx) => (
              <div className="message-flow-box mb-3" key={idx}>
                <div className="mb-2 d-flex justify-content-between">
                  <span className="flow-step fs-6">Source App</span>
                  <span className="flow-step">Integration Flow</span>
                  <span className="flow-step">Target App</span>
                </div>
                <p><strong>Status:</strong> <span className="status-success">Success</span></p>
                <p><strong>Start:</strong> 04/03/2024 11:30 AM</p>
                <p><strong>End:</strong> 04/03/2024 11:30 AM</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageTracker;


