import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Hero from "./components/HeroSection";
import Reading from "./Components/Reading"; // Import Reading page
import Experiance from "./Components/Experiance";
import Worldmap from "./Components/Worldmap";

function AppContent() {
  const location = useLocation();
  const isReadingPage = location.pathname.startsWith("/reading");

  return (
    <>
      {!isReadingPage && <Hero />}
      <div className="max-w-7xl mx-auto px-6">
      {!isReadingPage && <Worldmap />}
        {!isReadingPage && <About />}
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/reading/:email/:id" element={<Reading />} />
        </Routes>
        {!isReadingPage && <Experiance />}
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
