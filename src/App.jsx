// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ResumePage from './pages/ResumePage';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <AboutPage />
    </>
  );
}

export default App;
