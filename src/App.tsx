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
import LouisTrain from "./pages/projectsPage/projects/LouisTrain";
import Bricksy from "./pages/projectsPage/projects/Bricksy";
import SkillPage from "./pages/skillsPage/Skillpage";
import skillsData from "./data/skills.json";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Composant séparé car useLocation doit être DANS BrowserRouter
function Layout() {
  const location = useLocation();

  const hideNavbarOn = [
    "/projets/blackjack",
    "/projets/yams",
    "/projets/seniorchat",
    "/projets/unesco",
    "/projets/louistrain",
    "/projets/bricksy",
    "/realiser",
    "/optimiser",
    "/administrer",
    "/gerer",
    "/conduire",
    "/collaborer",
  ];

  // Permet de ne pas afficher la Navbar sur certaines pages
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
        <Route path="/projets/louistrain" element={<LouisTrain />} />
        <Route path="/projets/bricksy" element={<Bricksy />} />

        <Route
          path="/realiser"
          element={<SkillPage skillData={skillsData.realiser} />}
        />
        <Route
          path="/optimiser"
          element={<SkillPage skillData={skillsData.optimiser} />}
        />
        <Route
          path="/collaborer"
          element={<SkillPage skillData={skillsData.collaborer} />}
        />
        <Route
          path="/administrer"
          element={<SkillPage skillData={skillsData.administrer} />}
        />
        <Route
          path="/gerer"
          element={<SkillPage skillData={skillsData.gerer} />}
        />
        <Route
          path="/conduire"
          element={<SkillPage skillData={skillsData.conduire} />}
        />
      </Routes>
      {showNavbar && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
