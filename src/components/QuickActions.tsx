import { motion } from 'framer-motion';
import { PlusCircle, Upload, Heart } from 'lucide-react';
import './QuickActions.css';

interface QuickActionsProps {
  onCreateWithAI?: () => void;
  onUpload?: () => void;
  onSaved?: () => void;
}

const actions = [
  { id: 'create', icon: PlusCircle, label: 'Create with AI' },
  { id: 'upload', icon: Upload, label: 'Upload content' },
  { id: 'saved', icon: Heart, label: 'Saved content' },
];

export default function QuickActions({ onCreateWithAI, onUpload, onSaved }: QuickActionsProps) {
  const handlers: Record<string, (() => void) | undefined> = {
    create: onCreateWithAI,
    upload: onUpload,
    saved: onSaved,
  };

  return (
    <div className="quick-actions">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={action.id}
            className="quick-action glass"
            onClick={handlers[action.id]}
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
  );
}
