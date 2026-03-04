import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, LayoutGrid, FilePlus, MoreHorizontal } from 'lucide-react';
import './BottomNav.css';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/on-air', icon: LayoutGrid, label: 'On Air' },
  { path: '/studio', icon: FilePlus, label: 'Studio' },
  { path: '/more', icon: MoreHorizontal, label: 'More' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-gradient" />
      <motion.div 
        className="bottom-nav-container glass"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="nav-item"
            >
              <motion.div
                className="nav-item-content"
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2 : 1.5}
                  className={isActive ? 'nav-icon active' : 'nav-icon'}
                />
                <span className={isActive ? 'nav-label active' : 'nav-label'}>
                  {item.label}
                </span>
              </motion.div>
            </NavLink>
          );
        })}
      </motion.div>
    </nav>
  );
}
