import { API_URL } from "../../utils/url-constants";
import axiosMain from "./intercepters";
import axios from "axios";

// Auth
export async function signIn(payload) {
  return await axiosMain.post(`${API_URL.auth.login}`, payload);
}
export async function registerClinic(payload) {
  return await axiosMain.post(`${API_URL.auth.registerClinic}`, payload);
}
export async function forgotPassword(payload) {
  return await axiosMain?.post(`${API_URL?.auth?.forgotPassword}`, payload);
}
export async function resetPassword(payload) {
  return await axiosMain?.post(`${API_URL?.auth?.ResetPassword}`, payload);
}

export async function getAllUpcomingAppointmentListByDate(clinicId, date, languageType) {
  return await axiosMain?.get(`${API_URL?.dashboard?.getUpcomingAppointmentListByDate}?clinicId=${clinicId}&date=${date}&languageType=${languageType}`);
}
//  single file upload
export async function postFileUpload(payload) {
  return await axios?.post(
    `${API_URL?.baseURL}${API_URL?.fileUpload?.file}`,
    payload
  );
}

// audit Log
export async function getAuditLog(payload) {
  return await axiosMain.post(`${API_URL.auditLog.getAuditLog}`, payload);
}

// password policy
export async function getPasswordPolicy(payload) {
  return await axiosMain.post(`${API_URL.passwordPolicy.getPasswordPolicy}`, payload);
}

export async function addPasswordPolicy(payload) {
  return await axiosMain.post(`${API_URL.passwordPolicy.getPasswordPolicy}`, payload);
}

export async function deletePasswordPolicy(payload) {
  return await axiosMain.post(`${API_URL.passwordPolicy.getPasswordPolicy}`, payload);
}
