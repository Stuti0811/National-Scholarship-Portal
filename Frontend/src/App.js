import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInfoForm from './Components/PersonalInfoForm';
import Home from './Components/Home';
// import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
// import TrackingLine from './Components/TrackingLine';
import Login from './Components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
