import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { assets } from '../../data/assets';
import './Onboarding.css';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="onboarding-page welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="welcome-background">
        <img src={assets.gradients.mesh1} alt="" className="welcome-bg-image" />
        <div className="welcome-overlay" />
      </div>

      <div className="welcome-content">
        <motion.div
          className="welcome-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="welcome-logo-text">TVM</span>
        </motion.div>

        <motion.div
          className="welcome-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="welcome-title">Digital signage made simple</h1>
          <p className="welcome-subtitle">
            Create stunning content for your screens in minutes
          </p>
        </motion.div>
      </div>

      <motion.div
        className="welcome-actions"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="welcome-btn welcome-btn-primary"
          onClick={() => navigate('/onboarding/brand')}
          whileTap={{ scale: 0.95 }}
        >
          Get started
        </motion.button>
        <motion.button
          className="welcome-btn welcome-btn-secondary"
          onClick={() => navigate('/onboarding/signin')}
          whileTap={{ scale: 0.95 }}
        >
          Sign in
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
