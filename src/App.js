import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Sidebar from "./Components/Sidebar";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
