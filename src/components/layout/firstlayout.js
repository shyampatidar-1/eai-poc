

// import Sidebar from '../sidebar';
// import Topbar from '../topbar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     // <div className="d-flex">
//     //   <Sidebar />
//     //   <div className="flex-grow-1" style={{ marginLeft: '250px', width: '100%' }}>
//     //     <Topbar />
//     //     <main className="p-3">
//     //       <Outlet />
//     //     </main>
//     //   </div>
//     // </div>
//     <div className="d-flex">
//       <Sidebar />
//       <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
//         <Topbar />
//         <main className="p-4 bg-light min-vh-100">
//           <Outlet />
//         </main>
//       </div>
//     </div>

//   );
// };

// export default Layout;

import { useState } from 'react';
import Sidebar from '../sidebar';
import Topbar from '../topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const topbarHeight = '64px'; // Customize if your topbar has different height

  return (
    <div >
      {/* Fixed Topbar */}
      <div style={{
        position: 'fixed',
        width: "100%",
        top: 0,
        // left: '250px', // same as sidebar width
        right: 0,
        zIndex: 1030, // to stay above everything
      }}>
        <Topbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content Wrapper */}



      {/* Sidebar */}
      <div className="d-flex  " style={{ height: `calc(100vh - ${topbarHeight})`, marginTop: '63px' }}>
        {isSidebarOpen && <Sidebar />}

        {/* Scrollable Content Area */}
        <main
          className=" flex-grow-1 p-3"
          style={{
            width: '100%',

            overflowY: 'auto',
            // padding: '1rem'
          }}
        >
          <Outlet />
        </main>
      </div>
    </div >

  );
};

export default Layout;


