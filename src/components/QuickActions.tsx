import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusCircle, Upload, Heart } from 'lucide-react';
import UploadModal from './UploadModal';
import './QuickActions.css';

const actions = [
  { id: 'create', icon: PlusCircle, label: 'Create with AI' },
  { id: 'upload', icon: Upload, label: 'Upload content' },
  { id: 'saved', icon: Heart, label: 'Saved content' },
];

export default function QuickActions() {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleAction = (id: string) => {
    switch (id) {
      case 'create':
        navigate('/create-ai');
        break;
      case 'upload':
        setShowUploadModal(true);
        break;
      case 'saved':
        navigate('/active-content');
        break;
    }
  };

  return (
    <>
      <div className="quick-actions">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              className="quick-action glass"
              onClick={() => handleAction(action.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ borderColor: 'var(--color-primary)' }}
            >
              <Icon size={24} className="quick-action-icon" />
              <span className="quick-action-label">{action.label}</span>
            </motion.button>
          );
        })}
      </div>
      <UploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onSelect={() => {
          setShowUploadModal(false);
          navigate('/edit');
        }}
      />
    </>
  );
}
