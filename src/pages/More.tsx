import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Building2, 
  Palette, 
  Bell, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Settings,
  PlayCircle,
  ListOrdered
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './More.css';

const menuItems = [
  { id: 'account', icon: User, label: 'Account settings', route: null },
  { id: 'venue', icon: Building2, label: 'Venue settings', route: null },
  { id: 'brand', icon: Palette, label: 'Brand profile', route: '/onboarding/brand' },
  { id: 'content', icon: PlayCircle, label: 'Active content', route: '/active-content' },
  { id: 'queue', icon: ListOrdered, label: 'Play queue', route: '/active-content' },
  { id: 'notifications', icon: Bell, label: 'Notifications', route: null },
  { id: 'help', icon: HelpCircle, label: 'Help & support', route: null },
  { id: 'settings', icon: Settings, label: 'App settings', route: null },
];

export default function More() {
  const navigate = useNavigate();

  const handleMenuClick = (route: string | null) => {
    if (route) {
      navigate(route);
    }
  };

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
                onClick={() => handleMenuClick(item.route)}
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
