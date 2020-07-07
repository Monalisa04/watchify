import React from "react";
import Navbar from "./components/navbar/navbar";
import SideNav from "./components/sidenav/sidenav";
import "./assets/styles/app.scss";
import AppContent from "./components/app-content/app-content";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid app-main">
        <SideNav />
        <AppContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
