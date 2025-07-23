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
    deletePasswordPolicy: "password-policy/delete/policyId?policyId=0"
  },
  fileUpload: {
    file: "authController/uploadPost",
  },

};
