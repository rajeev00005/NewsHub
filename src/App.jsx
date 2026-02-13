import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import SearchResults from './pages/SearchResults.jsx';
import Header from './components/Header.jsx';
import Category from './pages/Category.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      {/* Skip to content link for accessibility */}
      {/* <a href="#main-content" className="visually-hidden focusable skip-link">Skip to main content</a> */}
      <div className="hero-bg bg-dark d-flex flex-column min-vh-100 text-white">
        <Header/>
        <main id="main-content" className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;