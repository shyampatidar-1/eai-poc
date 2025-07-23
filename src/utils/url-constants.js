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
    getAuditLog: ""
  },
  passwordPolicy: {
    getPasswordPolicy: "password-policy/list",
    addPasswordPolicy: "password-policy/create",
    updatePasswordPolicy: "password-policy/update",
    deletePasswordPolicy: "/password-policy/delete/policyId"
  },
  fileUpload: {
    file: "authController/uploadPost",
  },

};
