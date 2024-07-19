import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ResumePage from './pages/ResumePage';

import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
