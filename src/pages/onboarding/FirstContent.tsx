import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { assets } from '../../data/assets';
import './Onboarding.css';

const contentOptions = [
  {
    id: 'menus',
    title: 'Menus',
    description: 'Display food and drink menus',
    image: assets.themes.weeklyMenu,
    color: 'var(--color-menus)',
  },
  {
    id: 'sports',
    title: 'Sports',
    description: 'Show upcoming games and scores',
    image: assets.templates.sports1,
    color: 'var(--color-apps-games)',
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Promote specials and events',
    image: assets.templates.cocktail1,
    color: 'var(--color-events)',
  },
  {
    id: 'social',
    title: 'Social media',
    description: 'Connect Instagram and more',
    image: assets.templates.food1,
    color: 'var(--color-social)',
  },
];

export default function FirstContent() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFinish = () => {
    navigate('/onboarding/success');
  };

  return (
    <motion.div
      className="onboarding-page first-content-page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="onboarding-header">
        <motion.button
          className="onboarding-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <div className="onboarding-progress">
          <div className="onboarding-progress-bar" style={{ width: '66%' }} />
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div className="onboarding-content">
        <h1 className="onboarding-title">What would you like to display?</h1>
        <p className="onboarding-subtitle">
          Select the content types you want to show on your screens
        </p>

        <div className="content-carousel">
          <div
            className="content-carousel-track"
            style={{ transform: `translateX(-${currentSlide * 280}px)` }}
          >
            {contentOptions.map((option) => (
              <motion.button
                key={option.id}
                className={`content-option ${selected.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection(option.id)}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="content-option-image"
                  style={{ background: option.color }}
                >
                  <img src={option.image} alt={option.title} />
                  {selected.includes(option.id) && (
                    <motion.div
                      className="content-option-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check size={24} />
                    </motion.div>
                  )}
                </div>
                <div className="content-option-info">
                  <h3 className="content-option-title">{option.title}</h3>
                  <p className="content-option-desc">{option.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="content-carousel-nav">
          <motion.button
            className="content-nav-btn"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <div className="content-carousel-dots">
            {contentOptions.map((_, index) => (
              <button
                key={index}
                className={`content-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <motion.button
            className="content-nav-btn"
            onClick={() =>
              setCurrentSlide(Math.min(contentOptions.length - 1, currentSlide + 1))
            }
            disabled={currentSlide === contentOptions.length - 1}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <div className="content-selected-count">
          {selected.length > 0 ? (
            <span>{selected.length} selected</span>
          ) : (
            <span className="hint">Select at least one option</span>
          )}
        </div>
      </div>

      <div className="onboarding-actions">
        <motion.button
          className={`onboarding-btn-primary ${selected.length === 0 ? 'disabled' : ''}`}
          onClick={handleFinish}
          disabled={selected.length === 0}
          whileTap={selected.length > 0 ? { scale: 0.95 } : {}}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
}
