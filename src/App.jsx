import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "../src/Components/About";
import Blogs from "../src/Components/Blogs";
import Footer from "../src/Components/Footer";
import Reading from "../src/Components/Reading";
import Experiance from "../src/Components/Experiance";
import Worldmap from "../src/Components/Worldmap";
import HeroSection from "../src/Components/HeroSection";
import Navbar from "../src/Components/Navbar";

function AppContent() {
  const location = useLocation();
  const isReadingPage = location.pathname.startsWith("/reading");

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Worldmap />
                <About />
                <Blogs />
                <Experiance />
              </>
            }
          />
          <Route
            path="/reading/:email/:id"
            element={<Reading />}
          />
          <Route
            path="/blogs"
            element={
              <>
                <Blogs />
                <Footer/>
              </>}
          />
        </Routes>
      </div>
      <Footer />
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
