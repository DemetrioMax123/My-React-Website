import "./App.css";
import { TopBar } from "./barFiles/topBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fun } from "./pages/fun/fun";
import { PagesNavbar } from "./pages/pagesNavbar";
import { Art } from "./pages/art/art";
import { Clasification } from "./pages/clasification";

function App() {
  return (
    <div className="container">
      <Clasification>
        <Router>
          <TopBar />
          <PagesNavbar />
          <Routes>
            <Route path="/art" element={<Art />} />
            <Route path="/fun" element={<Fun />} />
          </Routes>
        </Router>
      </Clasification>
    </div>
  );
}

export default App;
