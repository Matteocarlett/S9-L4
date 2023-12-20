import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/Footer";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AllTheBooks />

      {/* ScrollTop bottone */}
      <button
        className="btn btn-danger scroll-to-top"
        onClick={scrollToTop}
        style={{ position: 'fixed', left: '10px', bottom: '10px', zIndex: '1000' }}
      >
        TORNA SU
      </button>

      <Footer />
    </div>
  );
}

export default App;
