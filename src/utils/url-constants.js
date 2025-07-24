export const API_URL = {
  // baseURL: process.env.REACT_APP_API_NEW_SERVER_URI,
  baseURL: process.env.REACT_APP_API_NEW_SERVER_URI,
  ServerURL: "http://72.167.33.207:3030",
  auth: {
    login: "authentication/login",
    registerClinic: "clinic/clinicProfileRegister",
    forgotPassword: "authController/forgotPassword",
    ResetPassword: "authController/changeUserPassword",
  },
  auditLog: {
    getAuditLog: "auditlog/list"
  },
  passwordPolicy: {
    getPasswordPolicy: "password-policy/list",
    addPasswordPolicy: "password-policy/create",
    updatePasswordPolicy: "password-policy/update",
    deletePasswordPolicy: "/password-policy/delete/policyId"
  },
  adminStaff: {
    addStaff: 'admin/add',
    updateStaff: 'admin/update',
    staffList: 'admin/list',
    getbyStaffId: 'admin/view',
    staffStatus: 'admin/manage-status',
  },

  adminRole: {
    addUpdateRole: 'role/add-or-update',
    RoleList: 'role/list',
    getbyRoleId: 'role/view',
    RoleStatus: 'role/manage-status'
  },
  module: {
    getAllModule: "module/list",
  },
  fileUpload: {
    file: "authController/uploadPost",
  },

};
