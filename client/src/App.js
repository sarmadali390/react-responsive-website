import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import About from "./Components/About";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className="main">
        <Routes>
            <Route exact path="/" element={<Showcase />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
