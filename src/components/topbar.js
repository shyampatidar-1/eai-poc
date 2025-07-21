import { useDispatch } from "react-redux";
import { clearAccessTokenReducer } from "../hooks/redux/slice/access-token";
import { clearLoggedUserReducer } from "../hooks/redux/slice/logged-user";

const Topbar = () => {
  const dispatch = useDispatch();
  const logoutSession = (e) => {
    e.preventDefault();
    dispatch(clearAccessTokenReducer());
    dispatch(clearLoggedUserReducer());
  };

  return (
    <div className="topbar bg-dark text-white d-flex justify-content-between align-items-center px-4 py-3 shadow-sm ">
      <div className="navbar-brand m-0 fw-semibold fs-5 ">Enterprise Integration</div>
      <div className="d-flex gap-3 align-items-center">
        {/* <span className="text-white">Logs</span>
        <span className="text-white">Alerts</span> */}
        <div className="dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-person-circle fs-5"></i>     Admin
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li className="dropdown-item" onClick={logoutSession}>Logout</li>
          </ul>
        </div>
      </div>
    </div>


  );
};

export default Topbar;

