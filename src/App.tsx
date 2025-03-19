import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AnnualEvents from './components/AnnualEvents';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import DecorativeBorder from './components/DecorativeBorder';
import UpcomingEvents from './components/pages/UpcomingEvents';
import LoadingScreen from './components/LoadingScreen';
const HomePage = () => {
  return <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <DecorativeBorder />
      <div id="annual-events">
        <AnnualEvents />
      </div>
      <DecorativeBorder />
      <div id="social">
        <SocialMedia />
      </div>
    </>;
};
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <Router>
      <div className="w-full min-h-screen bg-white">
        {isLoading ? <LoadingScreen /> : <>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/upcoming-events" element={<UpcomingEvents />} />
            </Routes>
            <div id="contact">
              <Footer />
            </div>
          </>}
      </div>
    </Router>;
}