
// import React, { useState } from "react";

// const Mapping = () => {
//   const [mappings, setMappings] = useState([
//     { source: "id", target: "ID", tag: "SAP" },
//     { source: "username", target: "UserName" },
//     { source: "email", target: "EmailAddress" },
//     { source: "first_name", target: "FirstName" },
//     { source: "last_name", target: "LastName" },
//   ]);

//   const handleChange = (index, field, value) => {
//     const updated = [...mappings];
//     updated[index][field] = value;
//     setMappings(updated);
//   };

//   return (
//     <div className="main_datatable">
//       <h5 className="mb-3 fs-3 fw-600"> Mapping</h5>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h4></h4>
//         <button className="btn btn-primary btn-sm">Done</button>
//       </div>

//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <a className="nav-link active" href="#input" data-bs-toggle="tab">
//             Input Mapping
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#output" data-bs-toggle="tab">
//             Output Mapping
//           </a>
//         </li>
//       </ul>

//       <div className="table-responsive">
//         <table className="table align-middle">
//           <thead>
//             <tr>
//               <th>Source Fields</th>
//               <th></th>
//               <th>Target Fields</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mappings.map((map, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={map.source}
//                     onChange={(e) =>
//                       handleChange(index, "source", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="text-center">→</td>
//                 <td>
//                   <div className="d-flex align-items-center">
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={map.target}
//                       onChange={(e) =>
//                         handleChange(index, "target", e.target.value)
//                       }
//                     />
//                     {map.tag && (
//                       <span className="badge bg-light text-muted border ms-2">
//                         {map.tag}
//                       </span>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Mapping;

import React, { useState } from "react";

const Mapping = () => {
  const [activeTab, setActiveTab] = useState("input");

  const [inputMappings, setInputMappings] = useState([
    { source: "id", target: "ID", tag: "SAP" },
    { source: "username", target: "UserName" },
    { source: "email", target: "EmailAddress" },
    { source: "first_name", target: "FirstName" },
    { source: "last_name", target: "LastName" },
  ]);

  const [outputMappings, setOutputMappings] = useState([
    { source: "ID", target: "user_id" },
    { source: "UserName", target: "username" },
    { source: "EmailAddress", target: "email" },
  ]);

  const handleMappingChange = (type, index, field, value) => {
    const mappings = type === "input" ? [...inputMappings] : [...outputMappings];
    mappings[index][field] = value;
    type === "input" ? setInputMappings(mappings) : setOutputMappings(mappings);
  };

  const renderMappingRows = (mappings, type) => (
    mappings.map((map, index) => (
      <tr key={index}>
        <td>
          <input
            type="text"
            className="form-control"
            value={map.source}
            onChange={(e) => handleMappingChange(type, index, "source", e.target.value)}
          />
        </td>
        <td className="text-center">→</td>
        <td>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              value={map.target}
              onChange={(e) => handleMappingChange(type, index, "target", e.target.value)}
            />
            {type === "input" && map.tag && (
              <span className="badge bg-light text-muted border ms-2">
                {map.tag}
              </span>
            )}
          </div>
        </td>
      </tr>
    ))
  );

  return (
    <div className="main_datatable">
      <h5 className=" fs-3 fw-600"> Mapping</h5>
      <div className="">
        <div className="d-flex justify-content-between align-items-center">
          <h4></h4>
          <button className="btn btn-primary btn-sm">Done</button>
        </div>

        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "input" ? "active" : ""}`}
              onClick={() => setActiveTab("input")}
            >
              Input Mapping
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "output" ? "active" : ""}`}
              onClick={() => setActiveTab("output")}
            >
              Output Mapping
            </button>
          </li>
        </ul>

        <div className="table-responsive rounded-2">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Source Fields</th>
                <th></th>
                <th>Target Fields</th>
              </tr>
            </thead>
            <tbody>
              {activeTab === "input"
                ? renderMappingRows(inputMappings, "input")
                : renderMappingRows(outputMappings, "output")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mapping;
