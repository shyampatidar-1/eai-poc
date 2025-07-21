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



const QueueManagement = () => (
  <>
    <div className='main_datatable'>
      <div className='d-flex justify-content-between'>
        <h5 className="fs-3 fw-600 ">Enterprise Queue Management</h5>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
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

      {/* MAINCONTENT */}
      {/* <div className='row'>
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
      </div> */}
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="shadow-sm p-1 bg-white rounded h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex ">
                    <div style={{ width: '12px', height: '12px' }} className="bg-primary rounded-circle"></div>
                    <div style={{ width: '12px', height: '12px' }} className="bg-secondary rounded-circle"></div>
                  </div>
                  <p className="m-0 fs-6 fw-bolder">Core.Commands.User</p>
                  <button className="btn btn-success btn-sm   p-1">Command</button>
                </div>

                <div className="row text-center">
                  <div className="col-4 mb-3">
                    <h6>4.12K</h6>
                    <small>Messages</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>4.11K</h6>
                    <small>Messages</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>10</h6>
                    <small>Pending</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>0.2%</h6>
                    <small>Error</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>2</h6>
                    <small>Retries</small>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>2</h6>
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
export default QueueManagement;