import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { decryptAEStoString } from "../../utils/utilities";

const ProtectedRoutes = ({ component }) => {
  let location = useLocation(),
    rawAccessToken = useSelector((state) => state?.accessToken?.value);
  rawAccessToken = rawAccessToken
    ? decryptAEStoString(rawAccessToken)
    : rawAccessToken;
  if (!rawAccessToken)
    return <Navigate to="/" state={{ from: location }} replace />;
  return component;
};

export default ProtectedRoutes;

// components/ProtectedRoutes.js
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { decryptAEStoJSON } from "../../utils/utilities";
// import { ROUTES } from "../../hooks/routes/routes-constant";
// import PermissionGuard from "./permission-gurd";

// const ProtectedRoutes = ({ component, moduleCode,requiredVerifiedStatus }) => {
//   const accessToken = useSelector((state) => state?.accessToken?.value);
//   const loggedUser = useSelector((state) => state?.loggedUser?.value);
//   const userData = decryptAEStoJSON(loggedUser);

//   if (!accessToken || !userData) {
//     return <Navigate to={ROUTES.INDEX} replace />;
//   }

//    if (requiredVerifiedStatus && userData?.isVerified !== requiredVerifiedStatus) {
//     return <Navigate to={ROUTES.DASHBOARD} replace />;
//   }
//   return (
//     <PermissionGuard moduleCode={moduleCode}>
//       {component}
//     </PermissionGuard>
//   );
// };

// export default ProtectedRoutes;
