import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PersonalInfoForm from './Components/PersonalInfoForm';
import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
// import TrackingLine from './Components/TrackingLine';
import HomeSections from './Components/HomeSections';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import LoginInstituteGovt from './Components/LoginInstituteGovt';

function App() {
  return (
    <>
      {/* <LoginInstituteGovt></LoginInstituteGovt> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loginInstituteGovt" element={<LoginInstituteGovt />} />
          {/* <Route path="/about" element={<AboutUs />} />  */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
