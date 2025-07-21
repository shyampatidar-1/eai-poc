// const QueueManagement = () => {
//   const queueData = [
//     {
//       title: '🔵 Core.Commands.User',
//       badgeClass: 'badge-command',
//       badgeText: 'Command',
//       metrics: ['4.12k Messages', '4.11k Out', '10 Pending', '0.2% Error', '2 Retries'],
//       buttons: [
//         { label: 'Pause', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     },
//     {
//       title: '🔵 Core.Events.Internal',
//       badgeClass: 'badge-event',
//       badgeText: 'Event',
//       metrics: ['7.29k Messages', '7.28k Out', '15 Pending', '0% Error', '0 Retries'],
//       buttons: [
//         { label: 'Pause', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     },
//     {
//       title: '🔵 Edge.Events.External.Triggered',
//       badgeClass: 'badge-dlq',
//       badgeText: 'DLQ',
//       metrics: ['1.16k Messages', '850 DL3 Out', '22 Retries', '1.1% Pause', '5 Purge'],
//       buttons: [
//         { label: 'Pause', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     },
//     {
//       title: '🔵 Retry.PaymentAuthoriz',
//       badgeClass: 'badge-retry',
//       badgeText: 'Retry',
//       metrics: ['872 Messages', '850 Out', '22 Retries', '1.1% Pause', '22 Purge'],
//       buttons: [
//         { label: 'Pause', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     },
//     {
//       title: '🔴 DLQ.NotificationService',
//       badgeClass: 'badge-dlq',
//       badgeText: 'DLQ',
//       metrics: ['156 Messages', '10 Out', '146 Pending', '5.3% Errors', '5 DL3 Count'],
//       buttons: [
//         { label: 'Pause', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     },
//     {
//       title: '🟢 Schedule.DailyReconciliation',
//       badgeClass: 'badge-status',
//       badgeText: 'ST',
//       metrics: ['590 Messages', '590 Out', '0 Pending', '0% Retries', '0 Errors'],
//       buttons: [
//         { label: 'Route', variant: 'btn-outline-secondary' },
//         { label: 'Purge', variant: 'btn-outline-secondary' },
//         { label: 'Reprocess', variant: 'btn-outline-primary' }
//       ]
//     }
//   ];
//   return (
//     <div className="">
//       <h3 className="mb-4">Enterprise Queue Management</h3>

//       {/* Filters and Buttons */}
//       <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
//         <input type="text" className="form-control me-2" placeholder="Search by queue name..." style={{ maxWidth: '250px' }} />
//         <select className="form-select" style={{ maxWidth: '120px' }}>
//           <option selected>Type</option>
//         </select>
//         <select className="form-select" style={{ maxWidth: '120px' }}>
//           <option selected>Status</option>
//         </select>
//         <select className="form-select" style={{ maxWidth: '120px' }}>
//           <option selected>Any</option>
//         </select>

//         <div className="ms-auto d-flex gap-2 flex-wrap">
//           <button className="btn btn-outline-secondary btn-sm">Pause all</button>
//           <button className="btn btn-outline-secondary btn-sm">Route test</button>
//           <button className="btn btn-outline-secondary btn-sm">Enqueue</button>
//           <button className="btn btn-outline-secondary btn-sm">Refresh</button>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="row g-3">
//         {queueData.map((queue, index) => (
//           <div key={index} className="col-md-4">
//             <div className="queue-card">
//               <div className="d-flex justify-content-between">
//                 <strong>{queue.title}</strong>
//                 <span className={`queue-badge ${queue.badgeClass}`}>{queue.badgeText}</span>
//               </div>
//               <div className="mt-2">
//                 {queue.metrics.map((metric, i) => (
//                   <div key={i} className="card-metric">{metric}</div>
//                 ))}
//               </div>
//               <div className="mt-2">
//                 {queue.buttons.map((btn, i) => (
//                   <button key={i} className={`btn btn-sm ${btn.variant} action-btn`}>{btn.label}</button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer Tabs */}
//       <div className="tab-footer">
//         {['Overview', 'Dead Letter Queue', 'Throughput Metrics', 'Alert Rules', 'Queue Configuration'].map((tab, i) => (
//           <a key={i} href="#" className={i === 0 ? 'active' : ''}>{tab}</a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QueueManagement;





// import { FaPlay, FaSyncAlt, FaPlus, FaEllipsisH } from 'react-icons/fa';

// const queues = [
//   {
//     title: 'Core.Commands.User',
//     tag: 'Command',
//     messages: '4.12k',
//     out: '4.11k',
//     pending: '10',
//     error: '0.2%',
//     retries: 2,
//     reprocess: 2
//   },
//   {
//     title: 'Core.Events.Internal',
//     tag: 'Event',
//     messages: '7.29k',
//     out: '7.28k',
//     pending: '15',
//     error: '0%',
//     retries: 0,
//     reprocess: 0
//   },
//   {
//     title: 'Edge.Events.External.Triggered',
//     tag: 'DLQ',
//     messages: '1.16k',
//     out: '850',
//     pending: '22',
//     error: '1.1%',
//     retries: 5,
//     reprocess: 5
//   },
//   {
//     title: 'Retry.PaymentAuthoriz',
//     tag: 'Retry',
//     messages: '872',
//     out: '850',
//     pending: '22',
//     error: '1.1%',
//     retries: 22,
//     reprocess: 22
//   },
//   {
//     title: 'DLQ.NotificationService',
//     tag: 'DLQ',
//     messages: '156',
//     out: '10',
//     pending: '146',
//     error: '5.3%',
//     retries: 5,
//     reprocess: 5
//   },
//   {
//     title: 'Schedule.DailyReconciliation',
//     tag: 'st',
//     messages: '590',
//     out: '590',
//     pending: '0',
//     error: '0%',
//     retries: 0,
//     reprocess: 0
//   }
// ];

// const QueueCard = ({ queue }) => (
//   <div className="col-md-6 col-lg-4 mb-4">
//     <div className="card shadow-sm h-100">
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center mb-2">
//           <h5 className="card-title mb-0">{queue.title}</h5>
//           <span className={`badge bg-${queue.tag === 'DLQ' ? 'danger' : queue.tag === 'Retry' ? 'warning' : 'success'} text-uppercase`}>
//             {queue.tag}
//           </span>
//         </div>
//         <div className="d-flex justify-content-between">
//           <div>
//             <div><strong>{queue.messages}</strong> Messages</div>
//             <div><strong>{queue.out}</strong> Out</div>
//           </div>
//           <div>
//             <div><strong>{queue.pending}</strong> Pending</div>
//             <div><strong>{queue.error}</strong> Error</div>
//           </div>
//           <div>
//             <div><strong>{queue.retries}</strong> Retries</div>
//             <div><strong>{queue.reprocess}</strong> Reprocess</div>
//           </div>
//         </div>
//         <div className="d-flex justify-content-between mt-3">
//           <button className="btn btn-outline-secondary btn-sm">Pause</button>
//           <button className="btn btn-outline-danger btn-sm">Purge</button>
//           <button className="btn btn-outline-success btn-sm">Reprocess</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const QueueManagement = () => (
//   <div className="">
//     <h2 className="mb-4">Enterprise Queue Management</h2>

//     <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
//       <input type="text" className="form-control w-auto" placeholder="Search by queue name..." />
//       <select className="form-select w-auto">
//         <option>Type</option>
//         <option>Command</option>
//         <option>Event</option>
//       </select>
//       <select className="form-select w-auto">
//         <option>Status</option>
//         <option>Active</option>
//         <option>Paused</option>
//       </select>
//       <select className="form-select w-auto">
//         <option>Any</option>
//         <option>Retries</option>
//         <option>Pending</option>
//       </select>
//       <button className="btn btn-secondary">Pause all</button>
//       <button className="btn btn-outline-primary"><FaPlay className="me-1" /> Route test</button>
//       <button className="btn btn-outline-success"><FaPlus className="me-1" /> Enqueue</button>
//       <button className="btn btn-outline-dark"><FaSyncAlt className="me-1" /> Refresh</button>
//       <button className="btn btn-outline-secondary"><FaEllipsisH /></button>
//     </div>

//     <div className="row">
//       {queues.map((q, idx) => (
//         <QueueCard key={idx} queue={q} />
//       ))}
//     </div>

//     {/* <ul className="nav nav-tabs mt-4 justify-content-center">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">Overview</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Dead Letter Queue</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Throughput Metrics</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Alert Rules</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Queue Configuration</a>
//       </li>
//     </ul> */}
//   </div>
// );

// export default QueueManagement;


// import { FaPause, FaPlay, FaPlus, FaSyncAlt, FaEllipsisH } from 'react-icons/fa';

// const queues = [
//   {
//     title: 'Core.Commands.User',
//     tag: 'Command',
//     messages: '4.12k',
//     out: '4.11k',
//     pending: '10',
//     error: '0.2%',
//     retries: 2,
//     reprocess: 2
//   },
//   {
//     title: 'Core.Events.Internal',
//     tag: 'Event',
//     messages: '7.29k',
//     out: '7.28k',
//     pending: '15',
//     error: '0%',
//     retries: 0,
//     reprocess: 0
//   },
//   {
//     title: 'Edge.Events.External.Triggered',
//     tag: 'DLQ',
//     messages: '1.16k',
//     out: '850',
//     pending: '22',
//     error: '1.1%',
//     retries: 5,
//     reprocess: 5
//   },
//   {
//     title: 'Retry.PaymentAuthoriz',
//     tag: 'Retry',
//     messages: '872',
//     out: '850',
//     pending: '22',
//     error: '1.1%',
//     retries: 22,
//     reprocess: 22
//   },
//   {
//     title: 'DLQ.NotificationService',
//     tag: 'DLQ',
//     messages: '156',
//     out: '10',
//     pending: '146',
//     error: '5.3%',
//     retries: 5,
//     reprocess: 5
//   },
//   {
//     title: 'Schedule.DailyReconciliation',
//     tag: 'st',
//     messages: '590',
//     out: '590',
//     pending: '0',
//     error: '0%',
//     retries: 0,
//     reprocess: 0
//   }
// ];

// const QueueCard = ({ queue }) => (
//   <div className="col-md-6 col-lg-4 mb-4">
//     <div className="card shadow-sm h-100">
//       <div className="card-body">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <span className="fw-semibold">{queue.title}</span>
//           <span className={`badge bg-${queue.tag === 'DLQ' ? 'danger' : queue.tag === 'Retry' ? 'warning' : 'success'}`}>{queue.tag}</span>
//         </div>
//         <div className="d-flex justify-content-between small">
//           <div>
//             <div><strong>{queue.messages}</strong> Messages</div>
//             <div><strong>{queue.out}</strong> Out</div>
//           </div>
//           <div>
//             <div><strong>{queue.pending}</strong> Pending</div>
//             <div><strong>{queue.error}</strong> Error</div>
//           </div>
//           <div>
//             <div><strong>{queue.retries}</strong> Retries</div>
//             <div><strong>{queue.reprocess}</strong> Reprocess</div>
//           </div>
//         </div>
//         <div className="d-flex justify-content-between mt-3">
//           <button className="btn btn-outline-secondary btn-sm">Pause</button>
//           <button className="btn btn-outline-danger btn-sm">Purge</button>
//           <button className="btn btn-outline-success btn-sm">Reprocess</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const QueueManagement = () => (
//   <div className="">
//     <h2 className="mb-4 fw-bold">Enterprise Queue Management</h2>

//     <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
//       <input type="text" className="form-control form-control-sm w-auto" placeholder="Search by queue name..." />
//       <select className="form-select form-select-sm w-auto">
//         <option>Type</option>
//       </select>
//       <select className="form-select form-select-sm w-auto">
//         <option>Status</option>
//       </select>
//       <select className="form-select form-select-sm w-auto">
//         <option>Any</option>
//       </select>

//       <div className="ms-auto d-flex gap-2">
//         <button className="btn btn-sm btn-light"><FaPause className="me-1" /> Pause all</button>
//         <button className="btn btn-sm btn-light"><FaPlay className="me-1" /> Route test</button>
//         <button className="btn btn-sm btn-light"><FaPlus className="me-1" /> Enqueue</button>
//         <button className="btn btn-sm btn-light"><FaSyncAlt className="me-1" /> Refresh</button>
//         <button className="btn btn-sm btn-light"><FaEllipsisH /></button>
//       </div>
//     </div>

//     <div className="row">
//       {queues.map((q, idx) => (
//         <QueueCard key={idx} queue={q} />
//       ))}
//     </div>

//     <ul className="nav nav-tabs mt-4 justify-content-center">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">Overview</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Dead Letter Queue</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Throughput Metrics</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Alert Rules</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Queue Configuration</a>
//       </li>
//     </ul>
//   </div>
// );

// export default QueueManagement;

// const QueueManagement = () => (
//   <div className="">
//     <h2 className="mb-4 fw-bold">Enterprise Queue Management</h2>

//   </div>
// );

// export default QueueManagement;
const QueueManagement = () => (
  <div className='vh-100 bg-white p-3'>
    {/* TOPBAR */}
    <div className='d-flex justify-content-between'>
      <h2>Enterprise Queue Management</h2>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg> */}
    </div>

    <div className="row gx-4 my-3">
      <div className="col-3">
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
      <div className="d-flex col-9 gap-2">
        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
            <span className="ms-1">Pause</span>
          </button>
        </div>

        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
            <span className="ms-2">Route Test</span>
          </button>
        </div>

        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
            <span className="ms-2">Enqueue</span>
          </button>
        </div>

        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <span className="ms-2">Refresh</span>
          </button>
        </div>

        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </button>
        </div>
        <div className="">
          <button className="btn border border-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className='row mb-3'>
      <div className='col-2'>
        <select class="form-select" aria-label="Default select example">
          <option selected>Type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className='col-2'>
        <select class="form-select" aria-label="Default select example">
          <option selected>Any</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className='col-2'>
        <select class="form-select" aria-label="Default select example">
          <option selected>Status</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className='col-2'>
        <select class="form-select" aria-label="Default select example">
          <option selected>Any</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div> <div className='col-2'>
        <select class="form-select" aria-label="Default select example">
          <option selected>Any</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    {/* MAINCONTENT */}
    <div className='row'>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between'>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row'>
            <div className='col-4'>
              <div>
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between'>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row'>
            <div className='col-4'>
              <div>
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between'>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row'>
            <div className='col-4'>
              <div>
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between'>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row'>
            <div className='col-4'>
              <div>
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between'>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row'>
            <div className='col-4'>
              <div>
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
      <div className='col-4 '>
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

          <div className='d-flex justify-content-between '>

            <div className='d-flex'>
              <div style={{ width: '20px', height: "20px" }} className='bg-primary rounded-circle'></div>
              <div style={{ width: '20px', height: "20px" }} className='bg-secondary rounded-circle'></div>
            </div>
            <h5>Core.Commands.User</h5>
            <button className='btn btn-success btn-sm'>Command</button>

          </div>

          <div className='row '>
            <div className='col-4'>
              <div >
                <h4>4.12K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4>4.11K</h4>
                <small>Messages</small>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h4 >10</h4>
                <p ><small>Pending</small></p>
              </div>
            </div>
            <div className='col-4'>

              <div>
                <h4 >0.2%</h4>
                <p ><small>Eruror</small></p>
              </div>

            </div>
            <div className='col-4'>
              <div>
                <h4 >2</h4>
                <p ><small>Retries</small></p>
              </div>
            </div>

            <div className='col-4'>
              <div>
                <h4 >2</h4>
                {/* <p ><small>Retries</small></p> */}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button className='btn btn-light'>Pause</button>
            <button className='btn btn-light'>Purge</button>
            <button className='btn btn-light'>Reprocess</button>
          </div>

        </div>
      </div>
    </div>

  </div >)
export default QueueManagement;