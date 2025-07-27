// import React from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// // import './App.css'; // External CSS
// Chart.register(...registerables);

// const Dashboard = () => {
//   const liveChartData = {
//     labels: ['Today', '1 Day', '2 Day', '3 Day', '4 Day', '5 Day'],
//     datasets: [{
//       label: 'Live Processes',
//       data: [4, 7, 10, 12, 9, 11],
//       borderColor: '#0d6efd',
//       fill: false,
//     }]
//   };

//   const runCompleteData = {
//     labels: ['Today', '1hr', '2hr', '3hr'],
//     datasets: [
//       { label: 'Running', backgroundColor: '#0d6efd', data: [5, 3, 4, 6] },
//       { label: 'Completed', backgroundColor: '#6c757d', data: [3, 6, 5, 4] }
//     ]
//   };

//   const alertsData = {
//     labels: ['Today', '1 AM', '2 AM', '3 AM'],
//     datasets: [{
//       label: 'Alerts',
//       data: [0, 2, 1, 3],
//       backgroundColor: '#0d6efd'
//     }]
//   };

//   return (

//     <div className="">
//       <div className="row g-3">
//         {['Total Integrations: 84', 'Avg Latency: 120 ms', 'SLA Breaches: 5', 'System Error Rate: 1.3%', 'Longest Running: 3.4 hrs'].map((text, i) => (
//           <div key={i} className={`col-md-${i > 2 ? 3 : 2}`}>
//             {/* <div key={i} className={`col-md-auto`}> */}
//             <div className="card p-3">
//               <div className="card-title">{text.split(':')[0]}</div>
//               <div className="metric">{text.split(':')[1]}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="row g-3 mt-2">
//         <div className="col-md-4"><div className="card p-3"><div className="card-title">Live Process Tracker</div><Line data={liveChartData} /></div></div>
//         <div className="col-md-4"><div className="card p-3">
//           <div className="card-title">Top Failing Integrations</div>
//           <table className="table table-sm mb-0">
//             <thead><tr><th>Integration</th><th>Failures</th><th>Cause</th></tr></thead>
//             <tbody>
//               <tr><td>Integration A</td><td>12 min (13 ms)</td><td>Transaction Error</td></tr>
//               <tr><td>Integration B</td><td>12 min (3.2 ms)</td><td>Timeout</td></tr>
//               <tr><td>Integration C</td><td>2 min (5.4 ms)</td><td>Timeout</td></tr>
//               <tr><td>Integration E</td><td>3 min (1.2 ms)</td><td>Transaction Error</td></tr>
//             </tbody>
//           </table>
//         </div></div>
//         <div className="col-md-4"><div className="card p-3">   <div class="card-title d-flex justify-content-between">
//           Node Health <span class="text-muted small">Auto Update</span>
//         </div>
//           <ul className="list-unstyled mb-0">
//             {['Application Server', 'Database', 'Kafka', 'API Gateway'].map((s, i) => (
//               <li key={i}><span className="dot green"></span>{s}</li>
//             ))}
//           </ul>
//         </div></div>
//       </div>

//       <div className="row g-3 mt-2">
//         <div className="col-md-4"><div className="card p-3"><div className="card-title">Running vs Completed</div><Bar data={runCompleteData} /></div></div>
//         <div className="col-md-4"><div className="card p-3"><div className="card-title">Alerts Over Time</div><Bar data={alertsData} /></div></div>
//         <div className="col-md-4"><div className="card p-3 text-center"><div className="card-title">SLA Compliance</div><h1 className="text-primary">96%</h1></div></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const lineChartData = {
    labels: ["1 day", "2 day", "3 days"],
    datasets: [
      {
        label: "Processes",
        data: [9, 12, 10],
        borderColor: "#0d6efd",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["FTP", "ORACLE", "OMS", "REST", "Salesforce"],
    datasets: [
      {
        label: "Running",
        data: [4, 6, 3, 2, 5],
        backgroundColor: "#0d6efd",
      },
      {
        label: "Completed",
        data: [6, 4, 5, 3, 6],
        backgroundColor: "#6c757d",
      },
    ],
  };

  const alertsData = {
    labels: ["FTP", "ORACLE", "OMS"],
    datasets: [
      {
        label: "Alerts",
        data: [1, 2, 3],
        backgroundColor: "#ffc107",
      },
    ],
  };

  const doughnutData = {
    labels: ["In SLA", "Out SLA"],
    datasets: [
      {
        data: [96, 4], // Example values (adjust as needed)
        backgroundColor: ["#198754", "#dc3545"], // Green, Red
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="container-fluid p-4">
      {/* Top Stats */}
      <div className="row g-3 mb-3">
        {[
          ["Total Integrations", 84],
          ["Avg Latency", "120 ms"],
          ["SLA Breaches", 5],
          ["System Error Rate", "1.3 %"],
          ["Longest Running", "3.4 hrs"],
        ].map(([title, value], idx) => (
          <div className="col-6 col-lg" key={idx}>
            <div className="bg-white p-3 rounded-4 shadow-sm">
              <small className="text-muted">{title}</small>
              <h5 className="fw-bold mt-2">{value}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Mid Section */}
      <div className="row g-3 mb-3">
        {/* Live Tracker */}
        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm h-100">
            <h6 className="text-secondary mb-3">Live Process Tracker</h6>
            <Line data={lineChartData} />
          </div>
        </div>

        {/* Top Failing */}
        <div className="col-md-5">
          <div className="bg-white p-3 rounded-4 shadow-sm h-100">
            <h6 className="text-secondary mb-3">Top Failing Integrations</h6>
            <table className="table table-sm table-borderless mb-0">
              <thead>
                <tr className="small text-muted">
                  <th>Integration</th>
                  <th>Failures</th>
                  <th>Cause</th>
                </tr>
              </thead>
              <tbody className="small">
                <tr>
                  <td>OMS</td>
                  <td>12 min ago</td>
                  <td>Transaction Error</td>
                </tr>
                <tr>
                  <td>SAP</td>
                  <td>12 min ago</td>
                  <td>Timeout</td>
                </tr>
                <tr>
                  <td>FTP</td>
                  <td>2 min ago</td>
                  <td>Timeout</td>
                </tr>
                <tr>
                  <td>REST</td>
                  <td>3 min ago</td>
                  <td>Transaction Error</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Node Health */}
        <div className="col-md-3">
          <div className="bg-white p-3 rounded-4 shadow-sm h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="text-secondary mb-0">Node Health</h6>
              <small className="text-muted">Auto Update</small>
            </div>
            <ul className="list-group list-group-flush small">
              {["Application Server", "Database", "Kafka", "API Gateway"].map(
                (item, i) => (
                  <li className="list-group-item border-0 d-flex gap-2 px-0 " key={i}>
                    <span className="text-success">●</span >
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-3">Running vs Completed</h6>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-3">Alerts Over Time</h6>
            <Bar data={alertsData} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm text-center">
            <h6 className="text-secondary mb-3">SLA Compliance</h6>
            <div className="mx-auto" style={{ width: 150 }}>
              <Doughnut data={doughnutData} />
              <div className="fw-bold mt-2">96%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Retry Queue Status</h6>
            <p className="mb-1 small">Retry Queue: Oms</p>
            <p className="small">Recent API Failures: Middleware</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Recent API Failures</h6>
            <p className="mb-1 small">GET /api/data — 18:43</p>
            <p className="small">POST /api/order — 14:32</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Inflight Transactions</h6>
            <p className="mb-1 small">Completed: 49</p>
            <p className="small">Ready: 15</p>
          </div>
        </div>

        {/* <div className="col-md-2">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Maintenance Mode</h6>
            <div className="form-check form-switch mb-2">
              <input className="form-check-input" type="checkbox" checked readOnly />
              <label className="form-check-label">ON</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Disaster Recovery Mode: OFF</label>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-2">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Admin Actions</h6>
            <ul className="small ps-3 mb-0">
              <li>Purge Logs — 32m</li>
              <li>Pause Flow — 18m</li>
              <li>Restart Node — 42m</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="col-md-2">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Scheduled Jobs</h6>
            <p className="small mb-1">Job Name — 18m 35s</p>
            <p className="small">Job Station — 18m 35s</p>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Dashboard;
