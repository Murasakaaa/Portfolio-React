import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import HomePage from "./pages/homePage/HomePage";
import AcademicBackground from "./pages/academicBackgroundPage/AcademicBackground";
import Projects from "./pages/projectsPage/Projects";
import Contact from "./pages/contactPage/Contact";
import Blackjack from "./pages/projectsPage/projects/Blackjack_project";
import SeniorChat from "./pages/projectsPage/projects/SeniorChat";
import Yams from "./pages/projectsPage/projects/Yams";
import Unesco from "./pages/projectsPage/projects/Unesco";

// Composant séparé car useLocation doit être DANS BrowserRouter
function Layout() {
  const location = useLocation();

  const hideNavbarOn = [
    "/projets/blackjack",
    "/projets/yams",
    "/projets/seniorchat",
    "/projets/unesco",
  ];

  const showNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <div className="h-screen flex flex-col">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formations" element={<AcademicBackground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/blackjack" element={<Blackjack />} />
        <Route path="/projets/yams" element={<Yams />} />
        <Route path="/projets/seniorchat" element={<SeniorChat />} />
        <Route path="/projets/unesco" element={<Unesco />} />

        <Route path="/realiser" element={""} />
        <Route path="/optimiser" element={""} />
        <Route path="/collaborer" element={""} />
        <Route path="/administrer" element={""} />
        <Route path="/gerer" element={""} />
        <Route path="/conduire" element={""} />
      </Routes>
      {showNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
