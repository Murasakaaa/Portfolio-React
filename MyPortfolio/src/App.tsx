import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import HomePage from "./pages/homePage/HomePage";
import AcademicBackground from "./pages/academicBackgroundPage/AcademicBackground";
import Projects from "./pages/projectsPage/Projects";


function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formations" element={<AcademicBackground />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
