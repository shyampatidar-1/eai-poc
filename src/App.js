
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import CreateIntegration from './pages/createintegration/CreateIntegration';
import Connectors from './pages/connector/Connectors';
import QueueManagement from './pages/queuemanagement/QueueManagement';
import MessageTracker from './pages/massagetracker/MessageTracker';
import FirstLayout from './components/layout/firstlayout';
import { ROUTES } from './hooks/routes/routes-constant';
import AuthLayout from './components/layout/auth-layout';
import PublicRoutes from './hooks/routes/public-routes';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot-password';
import NewPassword from './pages/auth/new-password';
import ProtectedRoutes from './hooks/routes/protected-routes';
import MonitorDashboard from './pages/monitordashboard/MonitorDashboard';
import PasswordPolicy from './pages/password-policy/passwordPolicy';
import AuditLog from './pages/auditlog/auditLog';
import PageNotFound from './pages/pageNotFound';
import Role from './pages/role-management/role';
import Staff from './pages/role-management/staff';
import AddStaff from './pages/role-management/add-staff';
import AddRole from './pages/role-management/add-role';



function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          {/* <Route path={ROUTES?.LOGIN} element={<PublicRoutes component={<Login />} />} /> */}
          <Route index path={ROUTES?.INDEX} element={<PublicRoutes component={<Login />} />} />
          {/* <Route path={ROUTES?.REGISTER} element={<PublicRoutes component={<Register />} />} /> */}
          <Route path={ROUTES?.FORGOT_PASSWORD} element={<PublicRoutes component={<ForgotPassword />} />} />
          <Route path={ROUTES?.NEW_PASSWORD} element={<PublicRoutes component={<NewPassword />} />} />
        </Route>

        {/* home layout */}
        <Route element={<FirstLayout />}>
          <Route path={ROUTES?.DASHBOARD} element={<ProtectedRoutes component={<Dashboard />} />} />
          <Route path={ROUTES?.MONITORDASHBOARD} element={<ProtectedRoutes component={<MonitorDashboard />} />} />
          {/* <Route element={<ProtectedRoutes component={<Dashboard />} />} /> */}
          <Route path={ROUTES?.CREATEINT} element={<ProtectedRoutes component={<CreateIntegration />} />} />
          <Route path={ROUTES?.CONNECTORES} element={<ProtectedRoutes component={<Connectors />} />} />
          <Route path={ROUTES?.QUEUE} element={<ProtectedRoutes component={<QueueManagement />} />} />
          <Route path={ROUTES?.MESSAGETRACKER} element={<ProtectedRoutes component={<MessageTracker />} />} />
          <Route path={ROUTES?.PASSWORDPOLICY} element={<ProtectedRoutes component={<PasswordPolicy />} />} />
          <Route path={ROUTES?.AUDITLOG} element={<ProtectedRoutes component={<AuditLog />} />} />
          <Route path={ROUTES?.ROLE} element={<ProtectedRoutes component={<Role />} />} />
          <Route path={ROUTES?.STAFF} element={<ProtectedRoutes component={<Staff />} />} />
          <Route path={ROUTES?.ADDSTAFF} element={<ProtectedRoutes component={<AddStaff />} />} />
          <Route path={ROUTES?.ADDROLE} element={<ProtectedRoutes component={<AddRole />} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
