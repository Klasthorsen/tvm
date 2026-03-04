import { motion } from 'framer-motion';
import { Play, Pause, Monitor } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { trendingTemplates } from '../data/content';
import './OnAir.css';

const screens = [
  { id: '1', name: 'Bar Area', status: 'playing', template: trendingTemplates[0] },
  { id: '2', name: 'Entrance', status: 'playing', template: trendingTemplates[1] },
  { id: '3', name: 'Patio', status: 'paused', template: trendingTemplates[2] },
];

export default function OnAir() {
  return (
    <motion.div 
      className="page onair-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="On Air" subtitle="3 screens connected" />
      
      <div className="onair-content">
        <div className="screens-list">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              className="screen-card glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="screen-preview">
                <img 
                  src={screen.template.image} 
                  alt={screen.name}
                  className="screen-image"
                />
                <div className="screen-overlay">
                  <motion.button
                    className="play-btn"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {screen.status === 'playing' ? (
                      <Pause size={24} fill="white" />
                    ) : (
                      <Play size={24} fill="white" />
                    )}
                  </motion.button>
                </div>
              </div>
              
              <div className="screen-info">
                <div className="screen-header">
                  <Monitor size={20} />
                  <span className="screen-name">{screen.name}</span>
                </div>
                <div className="screen-status">
                  <span className={`status-dot ${screen.status}`} />
                  <span className="status-text">
                    {screen.status === 'playing' ? 'Now playing' : 'Paused'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className="add-screen-btn glass"
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Monitor size={24} />
          <span>Add new screen</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
