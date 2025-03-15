import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "../src/Components/About";
import Blogs from "../src/Components/Blogs";
import Footer from "../src/Components/Footer";
import Reading from "../src/Components/Reading"; 
import Experiance from "../src/Components/Experiance";
import Worldmap from "../src/Components/Worldmap";
import HeroSection from "../src/Components/HeroSection";

function AppContent() {
  const location = useLocation();
  const isReadingPage = location.pathname.startsWith("/reading");

  return (
    <>
      {!isReadingPage && <HeroSection />}
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
