import React from "react";
import "../Styles/App.css";
import Banner from "./Banner";
import LatestNews from "./LatestNews";
import NoticeForms from "./NoticeForms";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <div className="content">
        <div className="left-column">
          <LatestNews />
        </div>
        <div className="right-column">
          <NoticeForms />
        </div>
      </div>
    </div>
  );
};

export default App;
