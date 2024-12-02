import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CausesSection from "./components/CausesSection";
import ImpactStats from "./components/ImpactStats";
import Footer from "./components/Footer";
import DonatePage from "./pages/DonatePage";
import MapPage from "./pages/mapPage"; // Import your MapPage component

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <ImpactStats />
                <CausesSection />
              </main>
            }
          />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/where-we-work" element={<MapPage />} />{" "}
          {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;