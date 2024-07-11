import React from 'react';
import '../App.css';
import Header from './Header';
import Banner from './Banner';
import LatestNews from './LatestNews';
import NoticeForms from './NoticeForms';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="content">
        <div className="left-column">
          <LatestNews />
        </div>
        <div className="right-column">
          <NoticeForms />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;