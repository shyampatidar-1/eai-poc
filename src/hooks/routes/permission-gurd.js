// components/PermissionGuard.js
import React from "react";
import { useSelector } from "react-redux";
import { decryptAEStoJSON } from "../../utils/utilities";
import AccessPermissionpage from "../../components/common/accessPermissionpage";

const PermissionGuard = ({ moduleCode, children }) => {
  const encryptedPermissions = useSelector((state) => state?.permission?.value);
  const permissions = decryptAEStoJSON(encryptedPermissions);

   if (!moduleCode) {
    return children;
  }
  const modulePermission = permissions?.find((p) => p?.moduleCode === moduleCode);
  const hasAccess =
    modulePermission 
    &&
    (modulePermission?.addAction === 1 ||
      modulePermission?.viewAction === 1 ||
      modulePermission?.updateAction === 1);

  if (!hasAccess) {
    return <AccessPermissionpage />;
  }

  return children;
};

export default PermissionGuard;
