import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
// import './App.css'; // External CSS
Chart.register(...registerables);

const Dashboard = () => {
  const liveChartData = {
    labels: ['Today', '1 Day', '2 Day', '3 Day', '4 Day', '5 Day'],
    datasets: [{
      label: 'Live Processes',
      data: [4, 7, 10, 12, 9, 11],
      borderColor: '#0d6efd',
      fill: false,
    }]
  };

  const runCompleteData = {
    labels: ['Today', '1hr', '2hr', '3hr'],
    datasets: [
      { label: 'Running', backgroundColor: '#0d6efd', data: [5, 3, 4, 6] },
      { label: 'Completed', backgroundColor: '#6c757d', data: [3, 6, 5, 4] }
    ]
  };

  const alertsData = {
    labels: ['Today', '1 AM', '2 AM', '3 AM'],
    datasets: [{
      label: 'Alerts',
      data: [0, 2, 1, 3],
      backgroundColor: '#0d6efd'
    }]
  };

  return (
    <>
      <div className="">
        <div className="row g-3">
          {['Total Integrations: 84', 'Avg Latency: 120 ms', 'SLA Breaches: 5', 'System Error Rate: 1.3%', 'Longest Running: 3.4 hrs'].map((text, i) => (
            <div key={i} className={`col-md-${i > 2 ? 3 : 2}`}>
              {/* <div key={i} className={`col-md-auto`}> */}
              <div className="card p-3">
                <div className="card-title">{text.split(':')[0]}</div>
                <div className="metric">{text.split(':')[1]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mt-2">
          <div className="col-md-4"><div className="card p-3"><div className="card-title">Live Process Tracker</div><Line data={liveChartData} /></div></div>
          <div className="col-md-4"><div className="card p-3">
            <div className="card-title">Top Failing Integrations</div>
            <table className="table table-sm mb-0">
              <thead><tr><th>Integration</th><th>Failures</th><th>Cause</th></tr></thead>
              <tbody>
                <tr><td>Integration A</td><td>12 min (13 ms)</td><td>Transaction Error</td></tr>
                <tr><td>Integration B</td><td>12 min (3.2 ms)</td><td>Timeout</td></tr>
                <tr><td>Integration C</td><td>2 min (5.4 ms)</td><td>Timeout</td></tr>
                <tr><td>Integration E</td><td>3 min (1.2 ms)</td><td>Transaction Error</td></tr>
              </tbody>
            </table>
          </div></div>
          <div className="col-md-4"><div className="card p-3">   <div class="card-title d-flex justify-content-between">
            Node Health <span class="text-muted small">Auto Update</span>
          </div>
            <ul className="list-unstyled mb-0">
              {['Application Server', 'Database', 'Kafka', 'API Gateway'].map((s, i) => (
                <li key={i}><span className="dot green"></span>{s}</li>
              ))}
            </ul>
          </div></div>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-md-4"><div className="card p-3"><div className="card-title">Running vs Completed</div><Bar data={runCompleteData} /></div></div>
          <div className="col-md-4"><div className="card p-3"><div className="card-title">Alerts Over Time</div><Bar data={alertsData} /></div></div>
          <div className="col-md-4"><div className="card p-3 text-center"><div className="card-title">SLA Compliance</div><h1 className="text-primary">96%</h1></div></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
