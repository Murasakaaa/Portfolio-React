import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
