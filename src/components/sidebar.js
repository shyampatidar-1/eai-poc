


// correct code 

// import { NavLink, useLocation } from 'react-router-dom';

// import { RiGitMergeLine } from "react-icons/ri";
// import { BiTask } from "react-icons/bi";
// import { FaEnvelope } from "react-icons/fa";
// import { } from "react-icons/md";
// import { useEffect, useState } from 'react';
// import { ROUTES } from '../hooks/routes/routes-constant';
// import { MdDashboard, MdIntegrationInstructions, MdOutlineManageAccounts, MdSecurity, MdOutlinePolicy, MdOutlineTrackChanges, MdOutlineSupervisorAccount, MdOutlineEventNote } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import { decryptAEStoJSON } from '../utils/utilities';

// const Sidebar = () => {
//   const topbarHeight = '64px'; // Customize if your topbar has different height
//   const [openSubmenu, setOpenSubmenu] = useState(null);
//   const location = useLocation();

//   // const { value } = useSelector((state) => state?.loggedUser);
//   // const userData = decryptAEStoJSON(value);
//   const permission = useSelector((state) => state?.permission?.value);
//   const modulePermission = decryptAEStoJSON(permission);
//   console.log("modulePermission>>>", modulePermission);

//   const menuItems = [
//     { path: ROUTES?.DASHBOARD, label: 'Dashboard', moduelCode: "dashboard", icon: <MdDashboard className="fs-5" /> },
//     { path: ROUTES?.MONITORDASHBOARD, label: 'Monitor Dashboard', moduleCode: 'monitor-dashboard', icon: <MdOutlineTrackChanges className="fs-5" /> },
//     { path: ROUTES?.CREATEINT, label: 'Create Integration', moduleCode: 'create-integration', icon: <MdIntegrationInstructions className="fs-5" /> },
//     { path: ROUTES?.CONNECTORES, label: 'Connector Manager', moduleCode: 'connector-manager', icon: <RiGitMergeLine className="fs-5" /> },
//     { path: ROUTES?.QUEUE, label: 'Queues', moduleCode: 'queues', icon: <BiTask className="fs-5" /> },
//     { path: ROUTES?.MESSAGETRACKER, label: 'Message Tracker', moduleCode: 'message-tracker', icon: <FaEnvelope className="fs-5" /> },
//     {
//       label: 'Role Management',
//       path: ROUTES?.ROLE,
//       moduleCode: 'role-management',
//       icon: <MdOutlineManageAccounts className="fs-5" />,
//       children: [
//         { path: ROUTES?.ROLE, label: 'Role', moduleCode: 'role', icon: <MdSecurity className="fs-5" /> },
//         { path: ROUTES?.STAFF, label: 'Staff', moduleCode: 'staff', icon: <MdOutlineSupervisorAccount className="fs-5" /> },
//       ],
//     },
//     { path: ROUTES?.PASSWORDPOLICY, label: 'Password Policy', moduleCode: 'password-policy', icon: <MdOutlinePolicy className="fs-5" /> },
//     { path: ROUTES?.AUDITLOG, label: 'Audit log', moduleCode: 'audit-log', icon: <MdOutlineEventNote className="fs-5" /> },
//   ];
//   useEffect(() => {
//     menuItems.forEach((item, index) => {
//       if (item.children) {
//         const isChildActive = item.children.some(child =>
//           location.pathname.startsWith(child.path)
//         );
//         if (isChildActive) {
//           setOpenSubmenu(index);
//         }
//       }
//     });
//   }, [location.pathname]);
//   const allowedModuleCodes = modulePermission && modulePermission?.permissions?.map((item) => item?.moduleCode);
//   const filteredMenuItems = menuItems && menuItems?.filter((menuItem) =>
//     allowedModuleCodes && allowedModuleCodes?.includes(menuItem?.moduleCode)
//   );
//   return (
//     <div className="bg-dark text-white  sidebar shadow-sm " style={{ width: '330px', height: '100%' }}>
//       {/* <div className="p-3 border-bottom border-secondary">
//         <h4 className="text-white">🧩 EAI</h4>
//       </div> */}

//       <ul className="nav flex-column  gap-1 p-2 ">
//         {filteredMenuItems.map((item, index) => (
//           <li className="nav-item " key={index}>
//             {item.children ? (
//               <>
//                 <button
//                   className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center px-3 py-2"
//                   onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
//                 >
//                   <span className="d-flex align-items-center gap-2 ">
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
//                             `nav-link  px-3 py-2  ${isActive ? 'bg-light text-dark fw-semibold ' : 'text-white '
//                             }`
//                           }
//                         >
//                           {child.icon}  {child.label}
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
//                 onClick={() => setOpenSubmenu(null)} // close submenu when other link is clicked
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


// module permission code
import { NavLink, useLocation } from 'react-router-dom';
import { RiGitMergeLine } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import {
  MdDashboard,
  MdIntegrationInstructions,
  MdOutlineManageAccounts,
  MdSecurity,
  MdOutlinePolicy,
  MdOutlineTrackChanges,
  MdOutlineSupervisorAccount,
  MdOutlineEventNote,
  MdCompareArrows
} from 'react-icons/md';

import { useEffect, useState } from 'react';
import { ROUTES } from '../hooks/routes/routes-constant';
import { useSelector } from 'react-redux';
import { decryptAEStoJSON } from '../utils/utilities';

const Sidebar = () => {
  const topbarHeight = '64px';
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const permission = useSelector((state) => state?.permission?.value);
  const modulePermission = decryptAEStoJSON(permission);

  const allowedModuleCodes = modulePermission && modulePermission?.map(item => item?.moduleCode);


  const menuItems = [
    { path: ROUTES?.DASHBOARD, label: 'Dashboard', moduleCode: "dashboard", icon: <MdDashboard className="fs-5" /> },
    { path: ROUTES?.MONITORDASHBOARD, label: 'Monitor Dashboard', moduleCode: 'monitor-dashboard', icon: <MdOutlineTrackChanges className="fs-5" /> },
    { path: ROUTES?.CREATEINT, label: 'Create Integration', moduleCode: 'create-integration', icon: <MdIntegrationInstructions className="fs-5" /> },
    { path: ROUTES?.CONNECTORES, label: 'Connector Manager', moduleCode: 'connector-manager', icon: <RiGitMergeLine className="fs-5" /> },
    { path: ROUTES?.QUEUE, label: 'Queues', moduleCode: 'queues', icon: <BiTask className="fs-5" /> },
    { path: ROUTES?.MESSAGETRACKER, label: 'Message Tracker', moduleCode: 'message-tracker', icon: <FaEnvelope className="fs-5" /> },
    {
      label: 'Role Management',
      path: ROUTES?.ROLE,
      moduleCode: 'role-management',
      icon: <MdOutlineManageAccounts className="fs-5" />,
      children: [
        { path: ROUTES?.ROLE, label: 'Role', moduleCode: 'role', icon: <MdSecurity className="fs-5" /> },
        { path: ROUTES?.STAFF, label: 'Staff', moduleCode: 'staff', icon: <MdOutlineSupervisorAccount className="fs-5" /> },
      ],
    },
    { path: ROUTES?.PASSWORDPOLICY, label: 'Password Policy', moduleCode: 'password-policy', icon: <MdOutlinePolicy className="fs-5" /> },
    { path: ROUTES?.AUDITLOG, label: 'Audit log', moduleCode: 'audit-log', icon: <MdOutlineEventNote className="fs-5" /> },
    // { path: ROUTES?.MAPPING, label: 'Mapping', moduleCode: 'audit-log', icon: <MdCompareArrows className="fs-5" /> },
  ];

  const filteredMenuItems = menuItems
    .map(menuItem => {
      if (menuItem.children) {
        const filteredChildren = menuItem.children.filter(child =>
          allowedModuleCodes?.includes(child.moduleCode)
        );
        if (allowedModuleCodes?.includes(menuItem.moduleCode) || filteredChildren.length > 0) {
          return {
            ...menuItem,
            children: filteredChildren
          };
        }
        return null;
      }
      return allowedModuleCodes?.includes(menuItem.moduleCode) ? menuItem : null;
    })
    .filter(Boolean);

  useEffect(() => {
    filteredMenuItems.forEach((item, index) => {
      if (item.children) {
        const isChildActive = item.children.some(child =>
          location.pathname.startsWith(child.path)
        );
        if (isChildActive) {
          setOpenSubmenu(index);
        }
      }
    });
  }, [location.pathname, filteredMenuItems]);

  return (
    <div className="bg-dark text-white sidebar shadow-sm" style={{ width: '330px', height: '100%' }}>
      <ul className="nav flex-column gap-1 p-2">
        {filteredMenuItems.map((item, index) => (
          <li className="nav-item" key={index}>
            {item.children ? (
              <>
                <button
                  className="btn btn-dark w-100 text-start d-flex justify-content-between align-items-center px-3 py-2"
                  onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                >
                  <span className="d-flex align-items-center gap-2">
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
                            `nav-link px-3 py-2 ${isActive ? 'bg-light text-dark fw-semibold' : 'text-white'}`
                          }
                        >
                          {child.icon} {child.label}
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
                  `nav-link d-flex align-items-center gap-2 px-3 py-2 ${isActive ? 'bg-light text-dark fw-semibold' : 'text-white'}`
                }
                onClick={() => setOpenSubmenu(null)}
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
