import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Play, Pause, ZoomIn, Move, Wand2, Layers } from 'lucide-react';
import { assets } from '../data/assets';
import './EditContent.css';

const motionControls = [
  { id: 'zoom', icon: ZoomIn, label: 'Zoom', description: 'Zoom in/out effect' },
  { id: 'pan', icon: Move, label: 'Pan', description: 'Pan across image' },
  { id: 'drift', icon: Layers, label: 'Drift', description: 'Slow drift motion' },
  { id: 'ai', icon: Wand2, label: 'AI Animate', description: 'AI-powered animation' },
];

export default function EditContent() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMotion, setSelectedMotion] = useState<string | null>(null);
  const [duration, setDuration] = useState(10);

  return (
    <motion.div
      className="page edit-content-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="edit-header">
        <motion.button
          className="edit-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="edit-title">Edit content</h1>
        <motion.button
          className="edit-done-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.95 }}
        >
          Done
        </motion.button>
      </div>

      <div className="edit-preview">
        <div className="edit-preview-container">
          <img
            src={assets.templates.cocktail1}
            alt="Content preview"
            className={`edit-preview-image ${selectedMotion ? `motion-${selectedMotion}` : ''} ${isPlaying ? 'playing' : ''}`}
          />
          <motion.button
            className="edit-play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </motion.button>
        </div>
      </div>

      <div className="edit-controls">
        <div className="edit-section">
          <h3 className="edit-section-title">Duration</h3>
          <div className="edit-duration">
            <input
              type="range"
              min="5"
              max="60"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="edit-duration-slider"
            />
            <span className="edit-duration-value">{duration}s</span>
          </div>
        </div>

        <div className="edit-section">
          <h3 className="edit-section-title">Add motion</h3>
          <div className="edit-motion-grid">
            {motionControls.map((control) => {
              const Icon = control.icon;
              const isActive = selectedMotion === control.id;
              return (
                <motion.button
                  key={control.id}
                  className={`edit-motion-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedMotion(isActive ? null : control.id)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="edit-motion-icon">
                    <Icon size={24} />
                  </div>
                  <span className="edit-motion-label">{control.label}</span>
                  <span className="edit-motion-desc">{control.description}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="edit-section">
          <h3 className="edit-section-title">Text overlay</h3>
          <motion.button
            className="edit-add-text-btn"
            whileTap={{ scale: 0.95 }}
          >
            + Add text
          </motion.button>
        </div>
      </div>

      <div className="edit-actions">
        <motion.button
          className="edit-schedule-btn"
          onClick={() => navigate('/schedule')}
          whileTap={{ scale: 0.95 }}
        >
          Schedule
        </motion.button>
        <motion.button
          className="edit-publish-btn"
          whileTap={{ scale: 0.95 }}
        >
          Publish now
        </motion.button>
      </div>
    </motion.div>
  );
}
