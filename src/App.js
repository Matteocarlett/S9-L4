import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </div>
  );
}

export default App;
