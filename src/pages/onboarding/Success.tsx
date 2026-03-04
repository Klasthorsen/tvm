import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import './Onboarding.css';

export default function Success() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="onboarding-page success-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="success-content">
        <motion.div
          className="success-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          <Check size={48} />
        </motion.div>

        <motion.h1
          className="success-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          You're all set!
        </motion.h1>

        <motion.p
          className="success-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your brand profile is ready. Start creating amazing content for your screens.
        </motion.p>

        <motion.div
          className="success-features"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="success-feature">
            <div className="success-feature-icon">🎨</div>
            <div className="success-feature-text">
              <h4>Create content</h4>
              <p>Use templates or AI to create</p>
            </div>
          </div>
          <div className="success-feature">
            <div className="success-feature-icon">📺</div>
            <div className="success-feature-text">
              <h4>Manage screens</h4>
              <p>Control what plays where</p>
            </div>
          </div>
          <div className="success-feature">
            <div className="success-feature-icon">📅</div>
            <div className="success-feature-text">
              <h4>Schedule content</h4>
              <p>Set it and forget it</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="success-actions"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.button
          className="success-btn-primary"
          onClick={() => navigate('/')}
          whileTap={{ scale: 0.95 }}
        >
          <span>Go to dashboard</span>
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
