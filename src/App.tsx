import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Studio from './pages/Studio';
import OnAir from './pages/OnAir';
import More from './pages/More';
import EditContent from './pages/EditContent';
import CreateWithAI from './pages/CreateWithAI';
import Sports from './pages/Sports';
import ActiveContent from './pages/ActiveContent';
import Welcome from './pages/onboarding/Welcome';
import BrandProfile from './pages/onboarding/BrandProfile';
import FirstContent from './pages/onboarding/FirstContent';
import Success from './pages/onboarding/Success';
import SignIn from './pages/onboarding/SignIn';
import './styles/global.css';

const mainRoutes = ['/', '/studio', '/on-air', '/more'];

function AnimatedRoutes() {
  const location = useLocation();
  const showNav = mainRoutes.includes(location.pathname);
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main app routes */}
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/on-air" element={<OnAir />} />
          <Route path="/more" element={<More />} />
          
          {/* Content creation routes */}
          <Route path="/edit" element={<EditContent />} />
          <Route path="/create-ai" element={<CreateWithAI />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/active-content" element={<ActiveContent />} />
          
          {/* Onboarding routes */}
          <Route path="/onboarding" element={<Welcome />} />
          <Route path="/onboarding/brand" element={<BrandProfile />} />
          <Route path="/onboarding/content" element={<FirstContent />} />
          <Route path="/onboarding/success" element={<Success />} />
          <Route path="/onboarding/signin" element={<SignIn />} />
        </Routes>
      </AnimatePresence>
      {showNav && <BottomNav />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
