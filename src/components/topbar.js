import { useDispatch } from "react-redux";
import { clearAccessTokenReducer } from "../hooks/redux/slice/access-token";
import { clearLoggedUserReducer } from "../hooks/redux/slice/logged-user";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
const Topbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const logoutSession = (e) => {
    e.preventDefault();
    dispatch(clearAccessTokenReducer());
    dispatch(clearLoggedUserReducer());
  };
  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="topbar bg-dark text-white d-flex justify-content-between align-items-center px-4 py-3 shadow-sm ">
      <div className="navbar-brand m-0 fw-semibold fs-6">

        <GiHamburgerMenu className="cursor-pointer" onClick={handleToggleSidebar} />

        <span className="ms-2">Enterprise Integration</span>
      </div>
      <div className="d-flex gap-3 align-items-center">
        {/* <span className="text-white">Logs</span>
        <span className="text-white">Alerts</span> */}
        <div className="dropdown">
          <a className="nav-link  text-white" href="#" data-bs-toggle="dropdown">

            <FaUserCircle className="fs-1" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end cursor-pointer p-0 ">
            <li className="dropdown-item border-bottom border-1   py-2 fw-bolder" >Admin</li>
            <li className="dropdown-item" >Profile</li>
            <li className="dropdown-item" onClick={logoutSession}>Logout</li>
          </ul>
        </div>
      </div>
    </div>


  );
};

export default Topbar;

