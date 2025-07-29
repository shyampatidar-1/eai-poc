

// import React, { useEffect, useRef } from 'react';
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
// import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

// const CreateIntegration = () => {
//   const canvasRef = useRef(null);
//   const panelRef = useRef(null);
//   const modelerRef = useRef(null);

//   useEffect(() => {
//     const modeler = new BpmnJS({
//       container: canvasRef.current,
//       propertiesPanel: {
//         parent: panelRef.current,
//       },
//       additionalModules: [
//         require('bpmn-js-properties-panel'),
//         require('bpmn-js-properties-panel/lib/provider/camunda'),
//       ],
//       moddleExtensions: {
//         camunda: camundaModdleDescriptor,
//       },
//     });

//     modelerRef.current = modeler;

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//       <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//         xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//         xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
//         id="Definitions_1"
//         targetNamespace="http://bpmn.io/schema/bpmn">

//         <bpmn:process id="Process_1" isExecutable="true" />

//         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//           <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
//         </bpmndi:BPMNDiagram>
//       </bpmn:definitions>`;

//     modeler.importXML(xml).catch(console.error);

//     return () => {
//       modeler.destroy();
//     };
//   }, []);


//   const createElement = async (type, label = '') => {
//     const modeler = modelerRef.current;
//     const elementFactory = modeler.get('elementFactory');
//     const modeling = modeler.get('modeling');
//     const canvas = modeler.get('canvas');

//     const rootElement = canvas.getRootElement();

//     const shape = elementFactory.createShape({ type });

//     const x = Math.floor(Math.random() * 400 + 100);
//     const y = Math.floor(Math.random() * 300 + 100);

//     modeling.createShape(shape, { x, y }, rootElement);

//     if (label) {
//       setTimeout(() => {
//         modeling.updateLabel(shape, label);
//       }, 0);
//     }
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <div className="d-flex flex-grow-1">
//         {/* Left Sidebar */}
//         <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
//           {/* <h6 className="text-muted">Process Modeller</h6> */}

//           <div className="mb-4">
//             <div className="fw-bold mb-2">Process Modeller</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:StartEvent', 'Start')}>Start</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:EndEvent', 'End')}>End</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:Task', 'Task')}>Task</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:ExclusiveGateway', 'Gateway')}>Gateway</button>
//               {/* <button className="btn btn-outline-secondary btn-sm">Sub-process</button> */}
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="fw-bold mb-2">App Connectors</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'REST')}>REST</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'FTP')}>FTP</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'SAP')}>SAP</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'Salesforce')}>Salesforce</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:DataStoreReference', 'Database')}>Database</button>
//             </div>
//           </div>

//           <div>
//             <div className="fw-bold mb-2">Data Enrichers</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-warning btn-sm">Script</button>
//               <button className="btn btn-outline-warning btn-sm">Mapper</button>
//               <button className="btn btn-outline-warning btn-sm">Transformer</button>
//             </div>
//           </div>
//         </div>

//         {/* BPMN Canvas */}
//         <div className="flex-grow-1 position-relative" ref={canvasRef} />

//         {/* Properties Panel */}
//         {/* <div
//           ref={panelRef}
//           className="bg-white border-start p-3"
//           style={{ width: '300px', overflowY: 'auto' }}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default CreateIntegration;

// last code in this file for properties panel

// import React, { useEffect, useRef } from 'react';
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
// import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
// import CustomPropertiesProvider from './CustomPropertiesProvider';



// const CreateIntegration = () => {
//   const canvasRef = useRef(null);
//   const panelRef = useRef(null);
//   const modelerRef = useRef(null);

//   useEffect(() => {
//     const modeler = new BpmnJS({
//       container: canvasRef.current,
//       propertiesPanel: {
//         parent: panelRef.current,
//       },
//       additionalModules: [
//         require('bpmn-js-properties-panel'),
//         require('bpmn-js-properties-panel/lib/provider/camunda'),
//         {
//           __init__: ['customProvider'],
//           customProvider: ['type', CustomPropertiesProvider],
//         }
//       ],
//       moddleExtensions: {
//         camunda: camundaModdleDescriptor,
//       },
//     });

//     modelerRef.current = modeler;

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//       <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//         xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//         xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
//         id="Definitions_1"
//         targetNamespace="http://bpmn.io/schema/bpmn">
//         <bpmn:process id="Process_1" isExecutable="true" />
//         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//           <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
//         </bpmndi:BPMNDiagram>
//       </bpmn:definitions>`;

//     modeler.importXML(xml).catch(console.error);

//     return () => {
//       modeler.destroy();
//     };
//   }, []);

//   const createElement = async (type, label = '', customProps = {}) => {
//     const modeler = modelerRef.current;
//     const elementFactory = modeler.get('elementFactory');
//     const modeling = modeler.get('modeling');
//     const canvas = modeler.get('canvas');
//     const selection = modeler.get('selection');
//     const moddle = modeler.get('moddle');

//     const rootElement = canvas.getRootElement();
//     const idSuffix = Date.now();

//     const businessObject = moddle.create(type, {
//       id: `${type.replace(':', '_')}_${idSuffix}`,
//       name: label
//     });

//     Object.entries(customProps).forEach(([key, value]) => {
//       businessObject[key] = value;
//     });

//     const shape = elementFactory.createShape({
//       type,
//       businessObject,
//     });

//     const x = Math.floor(Math.random() * 400 + 100);
//     const y = Math.floor(Math.random() * 300 + 100);

//     modeling.createShape(shape, { x, y }, rootElement);
//     selection.select(shape);
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <div className="d-flex flex-grow-1">
//         <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
//           <h6 className="text-muted">App Connectors</h6>
//           <button
//             className="btn btn-outline-primary btn-sm"
//             onClick={() => createElement('bpmn:Task', 'REST', { connectorType: 'REST' })}
//           >
//             REST
//           </button>
//         </div>

//         <div className="flex-grow-1 position-relative" ref={canvasRef} />

//         <div
//           ref={panelRef}
//           className="bg-white border-start p-3"
//           style={{ width: '300px', overflowY: 'auto' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CreateIntegration;






// import React, { useEffect, useRef, useState } from 'react';
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
// import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

// const connectorDefaults = {
//   REST: {
//     connectorType: 'API',
//     url: 'https://sap.example.com/employee/job',
//     method: 'GET',
//     headers: [{ key: 'Authorization', value: 'Bearer ---' }],
//     authentication: 'None',
//     retryPolicy: 'Disabled',
//     timeout: 60000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   FTP: {
//     connectorType: 'FTP',
//     url: 'ftp://example.com/data',
//     method: 'PUT',
//     headers: [],
//     authentication: 'Basic',
//     retryPolicy: 'Retry Twice',
//     timeout: 45000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   SAP: {
//     connectorType: 'SAP',
//     url: 'https://sap.example.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Once',
//     timeout: 50000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   Salesforce: {
//     connectorType: 'Salesforce',
//     url: 'https://salesforce.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Twice',
//     timeout: 50000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   Database: {
//     connectorType: 'Database',
//     url: 'jdbc:mysql://localhost:3306/mydb',
//     method: 'Query',
//     headers: [],
//     authentication: 'None',
//     retryPolicy: 'Disabled',
//     timeout: 30000,
//     inputMapping: '',
//     outputMapping: '',
//   }
// };

// const CreateIntegration = () => {
//   const canvasRef = useRef(null);
//   const modelerRef = useRef(null);

//   const [selectedConnectorType, setSelectedConnectorType] = useState('');
//   const [connectorConfig, setConnectorConfig] = useState(null);

//   useEffect(() => {
//     const modeler = new BpmnJS({
//       container: canvasRef.current,
//       additionalModules: [
//         require('bpmn-js-properties-panel'),
//         require('bpmn-js-properties-panel/lib/provider/camunda'),
//       ],
//       moddleExtensions: {
//         camunda: camundaModdleDescriptor,
//       },
//     });

//     modelerRef.current = modeler;

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//       <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//         xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//         xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
//         id="Definitions_1"
//         targetNamespace="http://bpmn.io/schema/bpmn">
//         <bpmn:process id="Process_1" isExecutable="true" />
//         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//           <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
//         </bpmndi:BPMNDiagram>
//       </bpmn:definitions>`;

//     modeler.importXML(xml).catch(console.error);

//     return () => modeler.destroy();
//   }, []);

//   const createElement = async (type, label = '') => {
//     const modeler = modelerRef.current;
//     const elementFactory = modeler.get('elementFactory');
//     const modeling = modeler.get('modeling');
//     const canvas = modeler.get('canvas');
//     const rootElement = canvas.getRootElement();

//     const shape = elementFactory.createShape({ type });
//     const x = Math.floor(Math.random() * 400 + 100);
//     const y = Math.floor(Math.random() * 300 + 100);

//     modeling.createShape(shape, { x, y }, rootElement);

//     if (label) {
//       setTimeout(() => modeling.updateLabel(shape, label), 0);
//     }

//     const defaultValues = connectorDefaults[label];
//     if (defaultValues) {
//       setSelectedConnectorType(label);
//       setConnectorConfig({ ...defaultValues });
//     } else {
//       setSelectedConnectorType('');
//       setConnectorConfig(null);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setConnectorConfig((prev) => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
//           <div className="mb-4">
//             <div className="fw-bold mb-2">Process Modeller</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:StartEvent', 'Start')}>Start</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:EndEvent', 'End')}>End</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:Task', 'Task')}>Task</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:ExclusiveGateway', 'Gateway')}>Gateway</button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="fw-bold mb-2">App Connectors</div>
//             <div className="d-flex flex-wrap gap-2">
//               {['REST', 'FTP', 'SAP', 'Salesforce', 'Database'].map((type) => (
//                 <button key={type} className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', type)}>{type}</button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="fw-bold mb-2">Data Enrichers</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-warning btn-sm">Script</button>
//               <button className="btn btn-outline-warning btn-sm">Mapper</button>
//               <button className="btn btn-outline-warning btn-sm">Transformer</button>
//             </div>
//           </div>
//         </div>

//         {/* Canvas */}
//         <div className="flex-grow-1 position-relative" ref={canvasRef} />

//         {/* Editable Right Panel */}
//         {connectorConfig && (
//           <div className="bg-white border-start p-3" style={{ width: '320px', overflowY: 'auto' }}>
//             <h6 className="fw-bold mb-3">Properties – {selectedConnectorType}</h6>

//             {Object.entries(connectorConfig).map(([key, val]) => (
//               key !== 'headers' ? (
//                 <div className="mb-2" key={key}>
//                   <label className="form-label text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     value={val}
//                     onChange={(e) => handleInputChange(key, e.target.value)}
//                   />
//                 </div>
//               ) : (
//                 <div className="mb-2" key="headers">
//                   <label className="form-label">Headers</label>
//                   {val.length === 0 && <div className="text-muted small">No headers</div>}
//                   {val.map((h, i) => (
//                     <div className="d-flex gap-1 mb-1" key={i}>
//                       <input
//                         type="text"
//                         className="form-control form-control-sm"
//                         placeholder="Key"
//                         value={h.key}
//                         onChange={(e) => {
//                           const updated = [...val];
//                           updated[i].key = e.target.value;
//                           handleInputChange('headers', updated);
//                         }}
//                       />
//                       <input
//                         type="text"
//                         className="form-control form-control-sm"
//                         placeholder="Value"
//                         value={h.value}
//                         onChange={(e) => {
//                           const updated = [...val];
//                           updated[i].value = e.target.value;
//                           handleInputChange('headers', updated);
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateIntegration;


// import React, { useEffect, useRef, useState } from 'react';
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
// import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

// // Default configuration per connector type
// const connectorDefaults = {
//   REST: {
//     connectorType: 'API',
//     url: 'https://sap.example.com/employee/job',
//     method: 'GET',
//     headers: [{ key: 'Authorization', value: 'Bearer ---' }],
//     authentication: 'None',
//     retryPolicy: 'Disabled',
//     timeout: 60000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   FTP: {
//     connectorType: 'FTP',
//     url: 'ftp://example.com/data',
//     method: 'PUT',
//     headers: [],
//     authentication: 'Basic',
//     retryPolicy: 'Retry Twice',
//     timeout: 45000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   SAP: {
//     connectorType: 'SAP',
//     url: 'https://sap.example.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Once',
//     timeout: 50000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   Salesforce: {
//     connectorType: 'Salesforce',
//     url: 'https://salesforce.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Twice',
//     timeout: 50000,
//     inputMapping: '',
//     outputMapping: '',
//   },
//   Database: {
//     connectorType: 'Database',
//     url: 'jdbc:mysql://localhost:3306/mydb',
//     // method: 'Query',
//     headers: [],
//     authentication: 'None',
//     retryPolicy: '3 times',
//     timeout: 30000,
//     inputMapping: '',
//     outputMapping: '',
//   }
// };

// const CreateIntegration = () => {
//   const canvasRef = useRef(null);
//   const modelerRef = useRef(null);

//   const [selectedConnectorType, setSelectedConnectorType] = useState('');
//   const [connectorConfig, setConnectorConfig] = useState(null);

//   useEffect(() => {
//     const modeler = new BpmnJS({
//       container: canvasRef.current,
//       additionalModules: [
//         require('bpmn-js-properties-panel'),
//         require('bpmn-js-properties-panel/lib/provider/camunda'),
//       ],
//       moddleExtensions: {
//         camunda: camundaModdleDescriptor,
//       },
//     });

//     modelerRef.current = modeler;

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//       <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//         xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//         xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
//         id="Definitions_1"
//         targetNamespace="http://bpmn.io/schema/bpmn">
//         <bpmn:process id="Process_1" isExecutable="true" />
//         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//           <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
//         </bpmndi:BPMNDiagram>
//       </bpmn:definitions>`;

//     modeler.importXML(xml).catch(console.error);

//     return () => modeler.destroy();
//   }, []);

//   const createElement = async (type, label = '') => {
//     const modeler = modelerRef.current;
//     const elementFactory = modeler.get('elementFactory');
//     const modeling = modeler.get('modeling');
//     const canvas = modeler.get('canvas');
//     const rootElement = canvas.getRootElement();

//     const shape = elementFactory.createShape({ type });
//     const x = Math.floor(Math.random() * 400 + 100);
//     const y = Math.floor(Math.random() * 300 + 100);

//     modeling.createShape(shape, { x, y }, rootElement);

//     if (label) {
//       setTimeout(() => modeling.updateLabel(shape, label), 0);
//     }

//     // Show custom config panel if matching connector
//     const defaultValues = connectorDefaults[label];
//     if (defaultValues) {
//       setSelectedConnectorType(label);
//       setConnectorConfig({ ...defaultValues });
//     } else {
//       setSelectedConnectorType('');
//       setConnectorConfig(null);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setConnectorConfig((prev) => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className=" main_datatable" >
//       {/* <h5 className="mb-3 fs-3 fw-600"> Create Integration</h5> */}
//       <div className="d-flex flex-column vh-100">
//         <div className="d-flex flex-grow-1">
//           {/* Sidebar */}
//           <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
//             <div className="mb-4">
//               <div className="fw-bold mb-2">Process Modeller</div>
//               <div className="d-flex flex-wrap gap-2">
//                 <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:StartEvent', 'Start')}>Start</button>
//                 <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:EndEvent', 'End')}>End</button>
//                 <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:Task', 'Task')}>Task</button>
//                 <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:ExclusiveGateway', 'Gateway')}>Gateway</button>
//               </div>
//             </div>

//             <div className="mb-4">
//               <div className="fw-bold mb-2">App Connectors</div>
//               <div className="d-flex flex-wrap gap-2">
//                 <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'REST')}>REST</button>
//                 <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'FTP')}>FTP</button>
//                 <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'SAP')}>SAP</button>
//                 <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'Salesforce')}>Salesforce</button>
//                 <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:DataStoreReference', 'Database')}>Database</button>
//               </div>
//             </div>

//             <div>
//               <div className="fw-bold mb-2">Data Enrichers</div>
//               <div className="d-flex flex-wrap gap-2">
//                 <button className="btn btn-outline-warning btn-sm">Script</button>
//                 <button className="btn btn-outline-warning btn-sm">Mapper</button>
//                 <button className="btn btn-outline-warning btn-sm">Transformer</button>
//               </div>
//             </div>
//           </div>

//           {/* BPMN Canvas */}
//           <div className="flex-grow-1 position-relative" ref={canvasRef} />

//           {/* Right Properties Panel */}
//           {connectorConfig && (
//             <div className="bg-white border-start p-3" style={{ width: '320px', overflowY: 'auto' }}>
//               <h6 className="fw-bold mb-3">Properties – {selectedConnectorType}</h6>
//               {Object.entries(connectorConfig).map(([key, val]) => (
//                 key !== 'headers' ? (
//                   <div className="mb-2" key={key}>
//                     <label className="form-label text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       value={val}
//                       onChange={(e) => handleInputChange(key, e.target.value)}
//                     />
//                   </div>
//                 ) : (
//                   <div className="mb-2" key="headers">
//                     <label className="form-label">Headers</label>
//                     {val.length === 0 && <div className="text-muted small">No headers</div>}
//                     {val.map((h, i) => (
//                       <div className="d-flex gap-1 mb-1" key={i}>
//                         <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           placeholder="Key"
//                           value={h.key}
//                           onChange={(e) => {
//                             const updated = [...val];
//                             updated[i].key = e.target.value;
//                             handleInputChange('headers', updated);
//                           }}
//                         />
//                         <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           placeholder="Value"
//                           value={h.value}
//                           onChange={(e) => {
//                             const updated = [...val];
//                             updated[i].value = e.target.value;
//                             handleInputChange('headers', updated);
//                           }}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateIntegration;




// import React, { useEffect, useRef, useState } from 'react';
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
// import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

// const connectorDefaults = {
//   REST: {
//     connectorType: 'API',
//     url: 'https://sap.example.com/employee/job',
//     method: 'GET',
//     headers: [{ key: 'Authorization', value: 'Bearer ---' }],
//     authentication: 'None',
//     retryPolicy: 'Disabled',
//     timeout: 60000,
//     inputMapping: [],
//     outputMapping: []
//   },
//   FTP: {
//     connectorType: 'FTP',
//     url: 'ftp://example.com/data',
//     method: 'PUT',
//     headers: [],
//     authentication: 'Basic',
//     retryPolicy: 'Retry Twice',
//     timeout: 45000,
//     inputMapping: [],
//     outputMapping: []
//   },
//   SAP: {
//     connectorType: 'SAP',
//     url: 'https://sap.example.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Once',
//     timeout: 50000,
//     inputMapping: [],
//     outputMapping: []
//   },
//   Salesforce: {
//     connectorType: 'Salesforce',
//     url: 'https://salesforce.com/api',
//     method: 'POST',
//     headers: [],
//     authentication: 'OAuth',
//     retryPolicy: 'Retry Twice',
//     timeout: 50000,
//     inputMapping: [],
//     outputMapping: []
//   },
//   Database: {
//     connectorType: 'Database',
//     url: 'jdbc:mysql://localhost:3306/mydb',
//     method: '',
//     headers: [],
//     authentication: 'None',
//     retryPolicy: '3 times',
//     // timeout: 30000,
//     inputMapping: [
//       { source: 'id', target: 'ID' },
//       { source: 'username', target: 'UserName' },
//       { source: 'email', target: 'EmailAddress' },
//       { source: 'first_name', target: 'FirstName' },
//       { source: 'last_name', target: 'LastName' },
//     ],
//     outputMapping: []
//   }
// };

// const CreateIntegration = () => {
//   const canvasRef = useRef(null);
//   const modelerRef = useRef(null);

//   const [selectedConnectorType, setSelectedConnectorType] = useState('');
//   const [connectorConfig, setConnectorConfig] = useState(null);
//   const [mappingTab, setMappingTab] = useState('input');

//   useEffect(() => {
//     const modeler = new BpmnJS({
//       container: canvasRef.current,
//       additionalModules: [
//         require('bpmn-js-properties-panel'),
//         require('bpmn-js-properties-panel/lib/provider/camunda'),
//       ],
//       moddleExtensions: {
//         camunda: camundaModdleDescriptor,
//       },
//     });

//     modelerRef.current = modeler;

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
//       <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//         xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
//         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
//         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
//         xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
//         id="Definitions_1"
//         targetNamespace="http://bpmn.io/schema/bpmn">
//         <bpmn:process id="Process_1" isExecutable="true" />
//         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
//           <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
//         </bpmndi:BPMNDiagram>
//       </bpmn:definitions>`;

//     modeler.importXML(xml).catch(console.error);

//     return () => modeler.destroy();
//   }, []);

//   const createElement = async (type, label = '') => {
//     const modeler = modelerRef.current;
//     const elementFactory = modeler.get('elementFactory');
//     const modeling = modeler.get('modeling');
//     const canvas = modeler.get('canvas');
//     const rootElement = canvas.getRootElement();

//     const shape = elementFactory.createShape({ type });
//     const x = Math.floor(Math.random() * 400 + 100);
//     const y = Math.floor(Math.random() * 300 + 100);

//     modeling.createShape(shape, { x, y }, rootElement);

//     if (label) {
//       setTimeout(() => modeling.updateLabel(shape, label), 0);
//     }

//     const defaultValues = connectorDefaults[label];
//     if (defaultValues) {
//       setSelectedConnectorType(label);
//       setConnectorConfig({ ...defaultValues });
//     } else {
//       setSelectedConnectorType('');
//       setConnectorConfig(null);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setConnectorConfig((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="d-flex flex-column vh-100">
//       <div className="d-flex flex-grow-1">
//         <div className="bg-light p-3 border-end" style={{ width: '250px' }}>
//           <div className="mb-4">
//             <div className="fw-bold mb-2">Process Modeller</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:StartEvent', 'Start')}>Start</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:EndEvent', 'End')}>End</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:Task', 'Task')}>Task</button>
//               <button className="btn btn-outline-secondary btn-sm" onClick={() => createElement('bpmn:ExclusiveGateway', 'Gateway')}>Gateway</button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="fw-bold mb-2">App Connectors</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'REST')}>REST</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'FTP')}>FTP</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'SAP')}>SAP</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:Task', 'Salesforce')}>Salesforce</button>
//               <button className="btn btn-outline-primary btn-sm" onClick={() => createElement('bpmn:DataStoreReference', 'Database')}>Database</button>
//             </div>
//           </div>

//           <div>
//             <div className="fw-bold mb-2">Data Enrichers</div>
//             <div className="d-flex flex-wrap gap-2">
//               <button className="btn btn-outline-warning btn-sm">Script</button>
//               <button className="btn btn-outline-warning btn-sm">Mapper</button>
//               <button className="btn btn-outline-warning btn-sm">Transformer</button>
//             </div>
//           </div>
//         </div>

//         <div className="flex-grow-1 position-relative" ref={canvasRef} />

//         {connectorConfig && (
//           <div className="bg-white border-start p-3" style={{ width: '300px', overflowY: 'auto' }}>
//             <h6 className="fw-bold mb-3">Properties – {selectedConnectorType}</h6>


//             {Object.entries(connectorConfig).map(([key, val]) => {
//               if (["inputMapping", "outputMapping", "headers"].includes(key)) return null;
//               return (
//                 <div className="mb-2" key={key}>
//                   <label className="form-label my-0 text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     value={val}
//                     onChange={(e) => handleInputChange(key, e.target.value)}
//                   />
//                 </div>
//               );
//             })}

//             <div className="d-flex mb-2 border-bottom">
//               <button
//                 className={`btn btn-sm ${mappingTab === 'input' ? 'btn-dark' : 'btn-outline-dark'} me-2`}
//                 onClick={() => setMappingTab('input')}
//               >
//                 Input Mapping
//               </button>
//               <button
//                 className={`btn btn-sm ${mappingTab === 'output' ? 'btn-dark' : 'btn-outline-dark'}`}
//                 onClick={() => setMappingTab('output')}
//               >
//                 Output Mapping
//               </button>
//             </div>

//             <div className="mb-3">
//               <div className="d-flex justify-content-between fw-bold mb-2">
//                 <div style={{ flex: 1 }}>Source Fields</div>
//                 <div style={{ flex: 1 }}>Target Fields</div>
//               </div>
//               {(connectorConfig[mappingTab + 'Mapping'] || []).map((mapping, index) => (
//                 <div key={index} className="d-flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     value={mapping.source}
//                     placeholder="Source"
//                     onChange={(e) => {
//                       const updated = [...connectorConfig[mappingTab + 'Mapping']];
//                       updated[index].source = e.target.value;
//                       handleInputChange(mappingTab + 'Mapping', updated);
//                     }}
//                   />
//                   <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     value={mapping.target}
//                     placeholder="Target"
//                     onChange={(e) => {
//                       const updated = [...connectorConfig[mappingTab + 'Mapping']];
//                       updated[index].target = e.target.value;
//                       handleInputChange(mappingTab + 'Mapping', updated);
//                     }}
//                   />
//                 </div>
//               ))}
//               <button
//                 className="btn btn-sm btn-outline-secondary"
//                 onClick={() => handleInputChange(mappingTab + 'Mapping', [...connectorConfig[mappingTab + 'Mapping'], { source: '', target: '' }])}
//               >
//                 + Add Mapping
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateIntegration;


import React, { useEffect, useRef, useState } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

// Connector defaults
const connectorDefaults = {
  REST: {
    connectorType: 'API',
    url: 'https://sap.example.com/employee/job',
    method: 'GET',
    headers: [{ key: 'Authorization', value: 'Bearer ---' }],
    authentication: 'None',
    retryPolicy: 'Disabled',
    timeout: 60000,
    inputMapping: [],
    outputMapping: []
  },
  SOAP: {
    connectorType: 'API',
    url: '',
    method: 'POST',
    headers: [],
    authentication: 'None',
    retryPolicy: 'Disabled',
    timeout: 60000,
    inputMapping: [],
    outputMapping: []
  },
  SAP: {
    connectorType: 'SAP',
    url: 'https://sap.example.com/api',
    method: 'POST',
    headers: [],
    authentication: 'OAuth',
    retryPolicy: 'Retry Once',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  },
  Salesforce: {
    connectorType: 'Salesforce',
    url: 'https://salesforce.com/api',
    method: 'POST',
    headers: [],
    authentication: 'OAuth',
    retryPolicy: 'Retry Twice',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  },
  ServiceNow: {
    connectorType: 'ServiceNow',
    url: '',
    method: 'POST',
    headers: [],
    authentication: 'OAuth',
    retryPolicy: 'Disabled',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  },
  'Oracle EBS': {
    connectorType: 'Oracle EBS',
    url: '',
    method: 'POST',
    headers: [],
    authentication: 'OAuth',
    retryPolicy: 'Disabled',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  },
  'Oracle DB': {
    connectorType: 'Database',
    url: 'jdbc:oracle:thin:@localhost:1521:xe',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: '3 times',
    inputMapping: [],
    outputMapping: []
  },
  MySQL: {
    connectorType: 'Database',
    url: 'jdbc:mysql://localhost:3306/mydb',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: '3 times',
    inputMapping: [],
    outputMapping: []
  },
  PostgreSQL: {
    connectorType: 'Database',
    url: 'jdbc:postgresql://localhost:5432/mydb',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: '3 times',
    inputMapping: [],
    outputMapping: []
  },
  'SQL Server': {
    connectorType: 'Database',
    url: 'jdbc:sqlserver://localhost:1433;databaseName=mydb',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: '3 times',
    inputMapping: [],
    outputMapping: []
  },
  'FTP/SFTP': {
    connectorType: 'FTP',
    url: 'ftp://example.com/data',
    method: 'PUT',
    headers: [],
    authentication: 'Basic',
    retryPolicy: 'Retry Twice',
    timeout: 45000,
    inputMapping: [],
    outputMapping: []
  },
  'Amazon S3': {
    connectorType: 'S3',
    url: '',
    method: 'PUT',
    headers: [],
    authentication: 'AWS Signature',
    retryPolicy: 'Retry Once',
    timeout: 45000,
    inputMapping: [],
    outputMapping: []
  },
  'Google Drive': {
    connectorType: 'Google Drive',
    url: '',
    method: 'POST',
    headers: [],
    authentication: 'OAuth',
    retryPolicy: 'Retry Once',
    timeout: 45000,
    inputMapping: [],
    outputMapping: []
  },
  Kafka: {
    connectorType: 'Kafka',
    url: 'kafka://localhost:9092/topic',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: 'Retry Twice',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  },
  RabbitMQ: {
    connectorType: 'RabbitMQ',
    url: 'amqp://localhost:5672/queue',
    method: '',
    headers: [],
    authentication: 'None',
    retryPolicy: 'Retry Once',
    timeout: 50000,
    inputMapping: [],
    outputMapping: []
  }
};

// Connector palette layout
const connectorPalette = [
  {
    group: "API Connectors",
    connectors: [
      { label: "REST", type: "bpmn:Task" },
      { label: "SOAP", type: "bpmn:Task" }
    ]
  },
  {
    group: "Enterprise Apps",
    connectors: [
      { label: "SAP", type: "bpmn:Task" },
      { label: "Salesforce", type: "bpmn:Task" },
      { label: "ServiceNow", type: "bpmn:Task" },
      { label: "Oracle EBS", type: "bpmn:Task" }
    ]
  },
  {
    group: "Databases",
    connectors: [
      { label: "Oracle DB", type: "bpmn:DataStoreReference" },
      { label: "MySQL", type: "bpmn:DataStoreReference" },
      { label: "PostgreSQL", type: "bpmn:DataStoreReference" },
      { label: "SQL Server", type: "bpmn:DataStoreReference" }
    ]
  },
  {
    group: "Files & Storage",
    connectors: [
      { label: "FTP/SFTP", type: "bpmn:Task" },
      // { label: "Amazon S3", type: "bpmn:Task" },
      // { label: "Google Drive", type: "bpmn:Task" }
    ]
  },
  {
    group: "Messaging/Streaming",
    connectors: [
      { label: "Kafka", type: "bpmn:Task" },
      { label: "RabbitMQ", type: "bpmn:Task" }
    ]
  }
];

const CreateIntegration = () => {
  const canvasRef = useRef(null);
  const modelerRef = useRef(null);

  const [selectedConnectorType, setSelectedConnectorType] = useState('');
  const [connectorConfig, setConnectorConfig] = useState(null);
  const [mappingTab, setMappingTab] = useState('input');

  useEffect(() => {
    const modeler = new BpmnJS({
      container: canvasRef.current,
      additionalModules: [
        require('bpmn-js-properties-panel'),
        require('bpmn-js-properties-panel/lib/provider/camunda'),
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor,
      },
    });

    modelerRef.current = modeler;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
        xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
        xmlns:camunda="http://camunda.org/schema/1.0/bpmn"
        id="Definitions_1"
        targetNamespace="http://bpmn.io/schema/bpmn">
        <bpmn:process id="Process_1" isExecutable="true" />
        <bpmndi:BPMNDiagram id="BPMNDiagram_1">
          <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
        </bpmndi:BPMNDiagram>
      </bpmn:definitions>`;

    modeler.importXML(xml).catch(console.error);

    return () => modeler.destroy();
  }, []);

  const createElement = async (type, label = '') => {
    const modeler = modelerRef.current;
    const elementFactory = modeler.get('elementFactory');
    const modeling = modeler.get('modeling');
    const canvas = modeler.get('canvas');
    const rootElement = canvas.getRootElement();

    const shape = elementFactory.createShape({ type });
    const x = Math.floor(Math.random() * 400 + 100);
    const y = Math.floor(Math.random() * 300 + 100);

    modeling.createShape(shape, { x, y }, rootElement);

    if (label) {
      setTimeout(() => modeling.updateLabel(shape, label), 0);
    }

    const defaultValues = connectorDefaults[label];
    if (defaultValues) {
      setSelectedConnectorType(label);
      setConnectorConfig({ ...defaultValues });
    } else {
      setSelectedConnectorType('');
      setConnectorConfig(null);
    }
  };

  const handleInputChange = (field, value) => {
    setConnectorConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="bg-light p-3 border-end" style={{ width: '300px', overflowY: 'auto' }}>
          <div className="fw-bold mb-3">Component Palette</div>

          {connectorPalette.map((group, idx) => (
            <div key={idx} className="mb-3">
              <div className="fw-semibold mb-1">{group.group}</div>
              <div className="d-flex flex-wrap gap-2">
                {group.connectors.map((connector, i) => (
                  <button
                    key={i}
                    className="btn btn-outline-primary btn-sm d-flex align-items-center"
                    onClick={() => createElement(connector.type, connector.label)}
                  >
                    <span className="me-1">≡</span>
                    {connector.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-grow-1 position-relative" ref={canvasRef} />

        {/* Properties Panel */}
        {connectorConfig && (
          <div className="bg-white border-start p-3" style={{ width: '300px', overflowY: 'auto' }}>
            <h6 className="fw-bold mb-3">Properties – {selectedConnectorType}</h6>

            {Object.entries(connectorConfig).map(([key, val]) => {
              if (["inputMapping", "outputMapping", "headers"].includes(key)) return null;
              return (
                <div className="mb-2" key={key}>
                  <label className="form-label my-0 text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={val}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              );
            })}

            <div className="d-flex mb-2 border-bottom">
              <button
                className={`btn btn-sm ${mappingTab === 'input' ? 'btn-dark' : 'btn-outline-dark'} me-2`}
                onClick={() => setMappingTab('input')}
              >
                Input Mapping
              </button>
              <button
                className={`btn btn-sm ${mappingTab === 'output' ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => setMappingTab('output')}
              >
                Output Mapping
              </button>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between fw-bold mb-2">
                <div style={{ flex: 1 }}>Source</div>
                <div style={{ flex: 1 }}>Target</div>
              </div>
              {(connectorConfig[mappingTab + 'Mapping'] || []).map((mapping, index) => (
                <div key={index} className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={mapping.source}
                    onChange={(e) => {
                      const updated = [...connectorConfig[mappingTab + 'Mapping']];
                      updated[index].source = e.target.value;
                      handleInputChange(mappingTab + 'Mapping', updated);
                    }}
                  />
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={mapping.target}
                    onChange={(e) => {
                      const updated = [...connectorConfig[mappingTab + 'Mapping']];
                      updated[index].target = e.target.value;
                      handleInputChange(mappingTab + 'Mapping', updated);
                    }}
                  />
                </div>
              ))}
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleInputChange(mappingTab + 'Mapping', [...connectorConfig[mappingTab + 'Mapping'], { source: '', target: '' }])}
              >
                + Add Mapping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateIntegration;
