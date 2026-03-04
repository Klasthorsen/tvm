import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Studio from './pages/Studio';
import OnAir from './pages/OnAir';
import More from './pages/More';
import './styles/global.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/on-air" element={<OnAir />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedRoutes />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
