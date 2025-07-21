

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

import Sidebar from '../sidebar';
import Topbar from '../topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const topbarHeight = '64px'; // Customize if your topbar has different height

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
        {/* Fixed Topbar */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: '250px', // same as sidebar width
          right: 0,
          zIndex: 1030, // to stay above everything
        }}>
          <Topbar />
        </div>

        {/* Scrollable Content Area */}
        <main
          className="bg-light"
          style={{
            marginTop: topbarHeight,
            height: `calc(100vh - ${topbarHeight})`,
            overflowY: 'auto',
            padding: '1rem'
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;


