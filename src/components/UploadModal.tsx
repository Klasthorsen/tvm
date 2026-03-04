import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Image, FileUp, Instagram, Twitter, Facebook } from 'lucide-react';
import './UploadModal.css';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (source: string) => void;
}

const uploadSources = [
  { id: 'camera', icon: Camera, label: 'Take a picture' },
  { id: 'gallery', icon: Image, label: 'Camera roll' },
  { id: 'files', icon: FileUp, label: 'Browse files' },
];

const socialSources = [
  { id: 'instagram', icon: Instagram, label: 'Instagram' },
  { id: 'twitter', icon: Twitter, label: 'X (Twitter)' },
  { id: 'facebook', icon: Facebook, label: 'Facebook' },
];

export default function UploadModal({ isOpen, onClose, onSelect }: UploadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="upload-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="upload-modal"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="upload-modal-header">
              <h2 className="upload-modal-title">Upload content</h2>
              <motion.button
                className="upload-modal-close"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="upload-modal-body">
              <div className="upload-section">
                <h3 className="upload-section-title">From device</h3>
                <div className="upload-options">
                  {uploadSources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <motion.button
                        key={source.id}
                        className="upload-option"
                        onClick={() => onSelect(source.id)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="upload-option-icon">
                          <Icon size={24} />
                        </div>
                        <span className="upload-option-label">{source.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="upload-section">
                <h3 className="upload-section-title">From social media</h3>
                <div className="upload-options">
                  {socialSources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <motion.button
                        key={source.id}
                        className="upload-option"
                        onClick={() => onSelect(source.id)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="upload-option-icon">
                          <Icon size={24} />
                        </div>
                        <span className="upload-option-label">{source.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
