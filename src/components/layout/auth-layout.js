
import { Outlet, useLocation } from "react-router";
import {
  LOGIN_BG
} from "../../utils/aap-image-constant";

function AuthLayout() {
  const location = useLocation();
  return (
    <div className="container ">
      <div className="row align-items-center my-auto authlayout" style={{ height: "100vh" }}>
        <div className={`col-md-5 `}>
          <div className="">
            <div className="">
              <div>
                <div className="navbar-brand"><h2>EAI </h2></div>
              </div>

            </div>
            <div className="auth-form">
              <Outlet />
            </div>
          </div>
        </div>
        <div className={`d-none d-sm-block mt-4 mt-md-0 col-md-7`}>
          <div className="login-bg-img-div text-end text-center">
            <img
              src={LOGIN_BG}
              alt="dr_background_img"
              className="login-bg-img rounded-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

