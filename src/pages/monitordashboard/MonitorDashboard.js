import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import TableLayout from '../../components/layout/table-layout';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function MonitorDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pending, setPending] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState();
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [totalRows, setTotalRows] = useState(0);
  const lineChartData = {
    labels: ['7:00', '8:00', '9:00', '10:00', '11:00'],
    datasets: [
      {
        label: 'US-East',
        data: [25, 35, 30, 50, 40],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'US-West',
        data: [20, 25, 35, 40, 30],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'EU-Central',
        data: [30, 40, 45, 55, 50],
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  const pieData = {
    labels: ['Transformation', 'API', 'Database', 'Other'],
    datasets: [
      {
        data: [38, 22, 18, 24],
        backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['7:00', '8:00', '9:00', '10:00', '11:00'],
    datasets: [
      {
        data: [95, 96, 98, 97, 99.9],
        fill: true,
        borderColor: '#3B82F6',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const columns = [
    { name: 'Service', selector: row => row.service, sortable: true },
    { name: 'Error', selector: row => row.error, sortable: false, grow: 2 },
    { name: 'Time', selector: row => row.time, sortable: true },
    {
      name: 'Actions',
      width: '200px',
      cell: row => (
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-primary">Reprocess</button>
          <button className="btn btn-sm btn-outline-secondary">Retry</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const data = [
    { service: 'Customer API', error: 'HTTP 500 Internal Server Error', time: '1 min ago' },
    { service: 'Order Processor', error: 'No matching rule found', time: '1 min ago' },
    { service: 'Order Processor', error: 'Timeout connecting to DB', time: '2 min ago' },
    { service: 'Payment Service', error: 'Accessing SQL routing error', time: '2 min ago' },
    { service: 'Payment Service', error: 'Demolitter message turmindn', time: '2 min ago' },
  ];

  return (
    <div className="container" style={{ background: '#f3f4f6', minHeight: '100vh' }}>
      <h4 className="mb-4 fw-semibold">Monitoring Dashboard</h4>
      <div className="row g-3">
        <div className="col-12 col-lg-8 d-flex flex-column gap-3">
          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h5 className="mb-3 text-secondary">Process Health</h5>
            <div className="row g-3">
              {[{ label: 'Total Active', value: '3,562' }, { label: 'Suspended', value: '87' }, { label: 'Successful', value: '12' }, { label: 'Failed', value: '176' }].map((item, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <div className="p-4 bg-light rounded-4">
                    <div className="text-muted">{item.label}</div>
                    <h3 className="fw-bold">{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h6 className="text-secondary mb-3">Errors by Type</h6>
                <div style={{ width: '100%', height: '200px' }}>
                  <Doughnut data={pieData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { boxWidth: 12, padding: 16 } } }, cutout: '70%' }} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h6 className="text-secondary mb-3">Alerts</h6>
                {["Inflight transaction queue at max capacity.", "Integration 'File Processor' failure rate cases threshold.", 'Retry queue experiencing increased log.'].map((alert, index) => (
                  <div key={index} className="border rounded-3 p-3 mb-3">
                    <p className="mb-2 fw-medium">{alert}</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-primary">Mark as Resolved</button>
                      <button className="btn btn-sm btn-outline-secondary">Mute</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 d-flex flex-column gap-3">
          <div className="bg-white p-4 rounded-4 shadow-sm" style={{ height: '300px' }}>
            <h6 className="text-secondary mb-2">Uptime</h6>
            <h3 className="fw-bold text-primary mb-3">99.9%</h3>
            <div style={{ height: '100%' }}>
              <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0 } }, plugins: { legend: { display: false }, tooltip: { enabled: true, backgroundColor: '#3B82F6', titleColor: '#fff', bodyColor: '#fff' } }, scales: { x: { grid: { display: false }, ticks: { color: '#9CA3AF' } }, y: { grid: { display: false }, ticks: { display: false } } }, layout: { padding: { top: 10, right: 10, bottom: 0, left: 0 } } }} />
            </div>
          </div>

          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-2">Alert 1ms</h6>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-sm btn-primary">Mark as Resolved</button>
              <button className="btn btn-sm btn-outline-secondary">Mute</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-3">Load Distribution</h6>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>US-East</span><span className="text-warning">Warning</span><span className="text-danger">Error</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Info</span><span className="text-success">▲ 4</span><span>1 min ago</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Warning</span><span className="text-danger">Error</span><span>1 min ago</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Error</span><span className="text-success">▲ 4</span><span>1 min ago</span>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="bg-white p-4 rounded-4 shadow-sm" style={{ height: '350px' }}>
            <h6 className="text-secondary mb-3">Load Distribution</h6>
            <Line data={lineChartData} options={options} />
            <div className="mt-2 text-muted small d-flex justify-content-center gap-3">
              <span><span className="me-1" style={{ color: '#36A2EB' }}>●</span>US-East</span>
              <span><span className="me-1" style={{ color: '#FF6384' }}>●</span>US-West</span>
              <span><span className="me-1" style={{ color: '#4BC0C0' }}>●</span>EU-Central</span>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h6 className="text-secondary mb-3">Failed Transactions</h6>
            <TableLayout
              _tblColumns={columns}
              _rowData={data}
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
            {/* <DataTable columns={columns} data={data} noHeader pagination responsive highlightOnHover dense /> */}
          </div>
        </div>
      </div>
    </div>
  );
}