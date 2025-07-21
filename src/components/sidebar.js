
// import { NavLink } from 'react-router-dom';
// import {
//   FaTachometerAlt, FaPlug, FaTools, FaListUl, FaEnvelope,
//   FaUserShield,
//   FaKey
// } from 'react-icons/fa';
// import { useState } from 'react';
// import { ROUTES } from '../hooks/routes/routes-constant';
// const menuItems = [
//   { path: ROUTES?.DASHBOARD, label: 'Dashboard', icon: <FaTachometerAlt /> },
//   { path: ROUTES?.MONITORDASHBOARD, label: 'Monitor Dashboard', icon: <FaTachometerAlt /> },
//   { path: ROUTES?.CREATEINT, label: 'Create Integration', icon: <FaTools /> },
//   { path: ROUTES?.CONNECTORES, label: 'Connector Manager', icon: <FaPlug /> },
//   { path: ROUTES?.QUEUE, label: 'Queues', icon: <FaListUl /> },
//   { path: ROUTES?.MESSAGETRACKER, label: 'Message Tracker', icon: <FaEnvelope /> },
//   {
//     label: 'Role Management',
//     path: ROUTES?.ROLE,
//     icon: <FaUserShield />,
//     children: [
//       { path: ROUTES?.ROLE, label: 'Role' },
//       { path: ROUTES?.STAFF, label: 'Staff' },
//     ],
//   },
//   { path: ROUTES?.PASSWORDPOLICY, label: 'Password Policy', icon: <FaKey /> },
//   { path: ROUTES?.AUDITLOG, label: 'Audit log', icon: <FaKey /> },
// ];

// const Sidebar = () => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   return (
//     // <div className="bg-dark text-white p-3 position-fixed h-100" style={{ width: '250px' }}>
//     //   <h4 className="text-white">EAI</h4>
//     //   <hr />
//     //   <ul className="nav flex-column">
//     //     {menuItems.map((item, index) => (
//     //       <li className="nav-item" key={index}>
//     //         {item.children ? (
//     //           <>
//     //             <button
//     //               className="btn btn-link nav-link text-white d-flex justify-content-between align-items-center"
//     //               onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
//     //             >
//     //               <span>{item.icon} {item.label}</span>
//     //               <span className='ms-2'>{openSubmenu === index ? '▲' : '▼'}</span>
//     //             </button>
//     //             {openSubmenu === index && (
//     //               <ul className="nav flex-column ms-3">
//     //                 {item.children.map((child, childIdx) => (
//     //                   <li key={childIdx} className="nav-item">
//     //                     <NavLink
//     //                       to={child.path}
//     //                       className={({ isActive }) =>
//     //                         `nav-link text-white ${isActive ? 'fw-bold' : ''}`
//     //                       }
//     //                     >
//     //                       {child.label}
//     //                     </NavLink>
//     //                   </li>
//     //                 ))}
//     //               </ul>
//     //             )}
//     //           </>
//     //         ) : (
//     //           <NavLink
//     //             to={item.path}
//     //             className={({ isActive }) =>
//     //               `nav-link text-white ${isActive ? 'fw-bold' : ''}`
//     //             }
//     //           >
//     //             {item.icon} {item.label}
//     //           </NavLink>
//     //         )}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//     // <div
//     //   className="bg-dark text-white position-fixed h-100 d-flex flex-column shadow"
//     //   style={{ width: '250px' }}
//     // >
//     <div className="bg-dark text-white position-fixed h-100 sidebar shadow-sm" style={{ width: '250px' }}>

//       <div className="p-3 border-bottom border-secondary">
//         <h4 className="text-white">🧩 EAI</h4>
//       </div>

//       <ul className="nav flex-column mt-3">
//         {menuItems.map((item, index) => (
//           <li className="nav-item" key={index}>
//             {item.children ? (
//               <>
//                 <button
//                   className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center px-3 py-2"
//                   onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
//                 >
//                   <span className="d-flex align-items-center gap-2">
//                     {item.icon} {item.label}
//                   </span>
//                   <span>{openSubmenu === index ? '▲' : '▼'}</span>
//                 </button>
//                 {openSubmenu === index && (
//                   <ul className="nav flex-column bg-secondary ms-3 rounded">
//                     {item.children.map((child, childIdx) => (
//                       <li key={childIdx} className="nav-item">
//                         <NavLink
//                           to={child.path}
//                           className={({ isActive }) =>
//                             `nav-link text-white px-3 py-2 ${isActive ? 'bg-light text-dark fw-semibold' : 'text-white'}`
//                           }
//                         >
//                           {child.label}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             ) : (
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `nav-link d-flex align-items-center gap-2 px-3 py-2 ${isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
//                   }`
//                 }
//               >
//                 {item.icon} {item.label}
//               </NavLink>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>

//   );
// };

// export default Sidebar;

import { NavLink, useLocation } from 'react-router-dom';

import { RiGitMergeLine } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { } from "react-icons/md";
import { useEffect, useState } from 'react';
import { ROUTES } from '../hooks/routes/routes-constant';
import { MdDashboard, MdIntegrationInstructions, MdOutlineManageAccounts, MdSecurity, MdOutlinePolicy, MdOutlineTrackChanges, MdOutlineSupervisorAccount, MdOutlineEventNote } from 'react-icons/md';



const menuItems = [
  { path: ROUTES?.DASHBOARD, label: 'Dashboard', icon: <MdDashboard className="fs-4" /> },
  { path: ROUTES?.MONITORDASHBOARD, label: 'Monitor Dashboard', icon: <MdOutlineTrackChanges className="fs-4" /> },
  { path: ROUTES?.CREATEINT, label: 'Create Integration', icon: <MdIntegrationInstructions className="fs-4" /> },
  { path: ROUTES?.CONNECTORES, label: 'Connector Manager', icon: <RiGitMergeLine className="fs-4" /> },
  { path: ROUTES?.QUEUE, label: 'Queues', icon: <BiTask className="fs-4" /> },
  { path: ROUTES?.MESSAGETRACKER, label: 'Message Tracker', icon: <FaEnvelope className="fs-4" /> },
  {
    label: 'Role Management',
    path: ROUTES?.ROLE,
    icon: <MdOutlineManageAccounts className="fs-4" />,
    children: [
      { path: ROUTES?.ROLE, label: 'Role', icon: <MdSecurity className="fs-4" /> },
      { path: ROUTES?.STAFF, label: 'Staff', icon: <MdOutlineSupervisorAccount className="fs-4" /> },
    ],
  },
  { path: ROUTES?.PASSWORDPOLICY, label: 'Password Policy', icon: <MdOutlinePolicy className="fs-4" /> },
  { path: ROUTES?.AUDITLOG, label: 'Audit log', icon: <MdOutlineEventNote className="fs-4" /> },
];




const Sidebar = () => {
  const topbarHeight = '64px'; // Customize if your topbar has different height
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.children) {
        const isChildActive = item.children.some(child =>
          location.pathname.startsWith(child.path)
        );
        if (isChildActive) {
          setOpenSubmenu(index);
        }
      }
    });
  }, [location.pathname]);

  return (
    <div className="bg-dark text-white  sidebar shadow-sm " style={{ width: '330px', height: '100%' }}>
      {/* <div className="p-3 border-bottom border-secondary">
        <h4 className="text-white">🧩 EAI</h4>
      </div> */}

      <ul className="nav flex-column  gap-2 p-3 ">
        {menuItems.map((item, index) => (
          <li className="nav-item " key={index}>
            {item.children ? (
              <>
                <button
                  className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center px-3 py-2"
                  onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                >
                  <span className="d-flex align-items-center gap-2 ">
                    {item.icon} {item.label}
                  </span>
                  <span>{openSubmenu === index ? '▲' : '▼'}</span>
                </button>
                {openSubmenu === index && (
                  <ul className="nav flex-column bg-secondary ms-3 rounded">
                    {item.children.map((child, childIdx) => (
                      <li key={childIdx} className="nav-item">
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            `nav-link  px-3 py-2  ${isActive ? 'bg-light text-dark fw-semibold ' : 'text-white '
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-2 px-3 py-2 ${isActive ? 'bg-light text-dark fw-semibold' : 'text-white'
                  }`
                }
                onClick={() => setOpenSubmenu(null)} // close submenu when other link is clicked
              >
                {item.icon} {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
