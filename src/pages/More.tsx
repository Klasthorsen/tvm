import { motion } from 'framer-motion';
import { 
  User, 
  Building2, 
  Palette, 
  Bell, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Settings
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './More.css';

const menuItems = [
  { id: 'account', icon: User, label: 'Account settings' },
  { id: 'venue', icon: Building2, label: 'Venue settings' },
  { id: 'brand', icon: Palette, label: 'Brand profile' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'help', icon: HelpCircle, label: 'Help & support' },
  { id: 'settings', icon: Settings, label: 'App settings' },
];

export default function More() {
  return (
    <motion.div 
      className="page more-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="More" showNotification={false} />
      
      <div className="more-content">
        <div className="user-card glass">
          <div className="user-avatar">
            <User size={32} />
          </div>
          <div className="user-info">
            <span className="user-name">Sports Bar Inc.</span>
            <span className="user-email">admin@sportsbar.com</span>
          </div>
        </div>
        
        <div className="menu-list">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                className="menu-item glass"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={24} className="menu-icon" />
                <span className="menu-label">{item.label}</span>
                <ChevronRight size={20} className="menu-arrow" />
              </motion.button>
            );
          })}
        </div>
        
        <motion.button
          className="logout-btn"
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <LogOut size={20} />
          <span>Sign out</span>
        </motion.button>
        
        <p className="version-text">Version 1.0.0</p>
      </div>
    </motion.div>
  );
}
