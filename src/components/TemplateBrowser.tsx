import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Template } from '../data/content';
import './TemplateBrowser.css';

interface TemplateBrowserProps {
  isOpen: boolean;
  onClose: () => void;
  templates: Template[];
  onSelect: (template: Template) => void;
}

export default function TemplateBrowser({ isOpen, onClose, templates, onSelect }: TemplateBrowserProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : templates.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < templates.length - 1 ? prev + 1 : 0));
  };

  const handlePublish = () => {
    onSelect(templates[currentIndex]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="template-browser-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="template-browser"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="browser-header">
              <motion.button
                className="browser-close"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <span className="browser-counter">{currentIndex + 1} / {templates.length}</span>
            </div>

            <div className="browser-carousel" ref={containerRef}>
              <motion.button
                className="browser-nav prev"
                onClick={handlePrev}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={32} />
              </motion.button>

              <div className="browser-slide-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="browser-slide"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={templates[currentIndex].image}
                      alt={templates[currentIndex].title}
                      className="browser-image"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                className="browser-nav next"
                onClick={handleNext}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={32} />
              </motion.button>
            </div>

            <div className="browser-info">
              <h3 className="browser-title">{templates[currentIndex].title}</h3>
              {templates[currentIndex].badge && (
                <span className="browser-badge">{templates[currentIndex].badge}</span>
              )}
            </div>

            <div className="browser-dots">
              {templates.map((_, index) => (
                <motion.button
                  key={index}
                  className={`browser-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <div className="browser-actions">
              <motion.button
                className="browser-publish-btn"
                onClick={handlePublish}
                whileTap={{ scale: 0.95 }}
              >
                Publish this
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
