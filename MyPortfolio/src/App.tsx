import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import HomePage from "./pages/homePage/HomePage";
import AcademicBackground from "./pages/academicBackgroundPage/AcademicBackground";
import Projects from "./pages/projectsPage/Projects";
import Contact from "./pages/contactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formations" element={<AcademicBackground />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/blackjack" element={""} />
          <Route path="/projets/yams" element={""} />
          <Route path="/projets/seniorchat" element={""} />
          <Route path="/projets/unesco" element={""} />

          <Route path="/Réaliser" element={""} />
          <Route path="/Optimiser" element={""} />
          <Route path="/Collaborer" element={""} />
          <Route path="/Administrer" element={""} />
          <Route path="/Gérer" element={""} />
          <Route path="/Conduire" element={""} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
