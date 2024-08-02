import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import './App.css';

function Dashboard() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <h1>Student Dashboard</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
