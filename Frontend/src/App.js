import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
import Error from "./Components/Error";
import TrackingLine from "./Components/TrackingLine";
import HomeSections from "./Components/HomeSections";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import LoginInstituteGovt from "./Components/LoginInstituteGovt";
import Caste from "./Components/Caste";
import FemaleScholarship from "./Components/FemaleScholarship";
import InstituteDashboard from "./Components/InstituteDashboard";
import NtseStudentList from "./Components/NtseStudentList";
import Ntse from "./Components/Ntse";

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
          <Route path="/loginInstituteGovt" element={<LoginInstituteGovt />} />
          <Route path="/ntse" element={<Ntse />} />
          <Route path="/caste" element={<Caste />} />
          <Route path="/female" element={<FemaleScholarship />} />
          <Route path="/instituteDashboard" element={<InstituteDashboard />} />
          <Route path="/ntseList" element={<NtseStudentList />} />
          {/* <Route path="/femaleList" element={<FemaleList />} />
          <Route path="/casteList" element={<CasteList />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
