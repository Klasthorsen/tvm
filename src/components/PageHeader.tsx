import { motion } from 'framer-motion';
import { Bell, ChevronLeft, X } from 'lucide-react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  showNotification?: boolean;
  showClose?: boolean;
  onBack?: () => void;
  onClose?: () => void;
}

export default function PageHeader({
  title,
  subtitle,
  showBack = false,
  showNotification = true,
  showClose = false,
  onBack,
  onClose,
}: PageHeaderProps) {
  return (
    <motion.header 
      className="page-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showBack && (
        <motion.button
          className="header-btn back-btn"
          onClick={onBack}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
      )}
      
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
      
      {showClose && (
        <motion.button
          className="header-btn icon-btn glass"
          onClick={onClose}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>
      )}
      
      {showNotification && !showClose && (
        <motion.button
          className="header-btn icon-btn glass"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <Bell size={24} />
        </motion.button>
      )}
    </motion.header>
  );
}
