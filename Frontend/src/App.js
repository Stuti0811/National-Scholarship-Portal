import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";
import TrackingLine from "./Components/TrackingLine";
import HomeSections from "./Components/HomeSections";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Caste from "./Components/Caste";
import FemaleScholarship from "./Components/FemaleScholarship";
import InstituteDashboard from "./InstituteDashboardComponents/InstituteDashboard";
import NtseStudentList from "./InstituteDashboardComponents/NtseStudentList";
import Ntse from "./Components/Ntse";
import NtseStudentDetails from "./InstituteDashboardComponents/NtseStudentDetails";
import GovtDashboard from "./GovtDashboardComponents/GovtDashboard";
import GovtNtseStudentList from "./GovtDashboardComponents/GovtNtseStudentList";
import GovtLogin from "./GovtDashboardComponents/GovtLogin";
import InstituteLogin from "./InstituteDashboardComponents/InstituteLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSections />} />
          <Route path="/forms" element={<TrackingLine />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeSections />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instituteLogin" element={<InstituteLogin />} />
          <Route path="/govtLogin" element={<GovtLogin />} />
          <Route path="/ntse" element={<Ntse />} />
          <Route path="/caste" element={<Caste />} />
          <Route path="/female" element={<FemaleScholarship />} />
          <Route path="/instituteDashboard" element={<InstituteDashboard />} />
          <Route path="/govtDashboard" element={<GovtDashboard />} />
          <Route path="/ntseList" element={<NtseStudentList />} />
          <Route path="/ntsestudent/:email" element={<NtseStudentDetails />} />
          <Route path="/govtntseList" element={<GovtNtseStudentList />} />
          {/* <Route path="/femaleList" element={<FemaleList />} />
          <Route path="/casteList" element={<CasteList />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
