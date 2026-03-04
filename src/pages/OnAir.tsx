import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, Wifi, WifiOff, BarChart2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { assets } from '../data/assets';
import './OnAir.css';

interface ContentItem {
  id: string;
  title: string;
  schedule: string;
  priority: 'high' | 'low' | 'paused' | null;
  image: string;
}

interface Screen {
  id: string;
  name: string;
  content: string;
  status: 'online' | 'offline';
  image: string;
}

const activeContent: ContentItem[] = [
  { id: '1', title: 'November Specials', schedule: 'Everyday 5-7pm, Nov 1-31st', priority: 'high', image: assets.onAir.novemberSpecials },
  { id: '2', title: 'Cocktail specials', schedule: 'Everyday 5-7pm, Nov 1-31st', priority: 'high', image: assets.onAir.cocktailSpecials },
  { id: '3', title: 'Drink of the week', schedule: 'Everyday 5-7pm, Nov 1-31st', priority: null, image: assets.onAir.drinkOfTheWeek },
  { id: '4', title: "The Pimm's Cup", schedule: 'All day, every day', priority: null, image: assets.onAir.pimmsCup },
  { id: '5', title: 'Menu a la carte', schedule: 'All day, every day', priority: 'low', image: assets.onAir.pimmsCup },
  { id: '6', title: 'Summer festival', schedule: 'Fridays, 5pm-10pm', priority: 'paused', image: assets.onAir.cocktailSpecials },
];

const screens: Screen[] = [
  { id: '1', name: 'Bar One', content: 'Cocktail specials', status: 'online', image: assets.screens.barOne },
  { id: '2', name: 'Bar Two', content: 'Sports results', status: 'online', image: assets.screens.barTwo },
  { id: '3', name: 'Dancefloor', content: 'No content', status: 'offline', image: '' },
];

export default function OnAir() {
  const [activeTab, setActiveTab] = useState<'content' | 'playing'>('content');
  const [moodChannelEnabled, setMoodChannelEnabled] = useState(true);

  return (
    <motion.div 
      className="page onair-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="On Air" />
      
      <div className="onair-tabs">
        <motion.button
          className={`onair-tab ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
          whileTap={{ scale: 0.95 }}
        >
          Active content
        </motion.button>
        <motion.button
          className={`onair-tab ${activeTab === 'playing' ? 'active' : ''}`}
          onClick={() => setActiveTab('playing')}
          whileTap={{ scale: 0.95 }}
        >
          Now playing
        </motion.button>
      </div>

      <div className="onair-content">
        {activeTab === 'content' ? (
          <>
            <div className="mood-channel-card">
              <div className="mood-channel-header">
                <div className="mood-channel-info">
                  <span className="mood-channel-title">Mood channel</span>
                  <span className="mood-channel-subtitle">Mix your content with videos</span>
                </div>
                <motion.button
                  className={`mood-toggle ${moodChannelEnabled ? 'active' : ''}`}
                  onClick={() => setMoodChannelEnabled(!moodChannelEnabled)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="mood-toggle-knob"
                    animate={{ x: moodChannelEnabled ? 22 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
              {moodChannelEnabled && (
                <motion.div 
                  className="mood-channel-preview"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 78 }}
                >
                  <div className="mood-preview-image">
                    <img src={assets.onAir.moodChannel} alt="Mood" />
                  </div>
                  <span className="mood-preview-title">Cocktail O'Clock</span>
                  <ChevronRight size={24} className="mood-preview-arrow" />
                </motion.div>
              )}
            </div>

            <div className="content-sort">
              <span className="content-sort-label">Sort by </span>
              <span className="content-sort-value">Priority</span>
              <ChevronDown size={20} />
            </div>

            <div className="content-list">
              {activeContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`content-item ${item.priority === 'paused' ? 'paused' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="content-item-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content-item-info">
                    <span className="content-item-title">{item.title}</span>
                    <span className="content-item-schedule">{item.schedule}</span>
                  </div>
                  {item.priority && (
                    <span className={`content-item-tag ${item.priority}`}>
                      {item.priority === 'high' ? 'High priority' : 
                       item.priority === 'low' ? 'Low priority' : 'Paused'}
                    </span>
                  )}
                  <ChevronRight size={24} className="content-item-arrow" />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="screens-list">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.id}
                className={`screen-card ${screen.status === 'offline' ? 'offline' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="screen-card-header">
                  <span className="screen-card-name">{screen.name}</span>
                  <BarChart2 size={24} className="screen-card-icon" />
                </div>
                <div className="screen-card-content">
                  {screen.image && (
                    <div className="screen-card-thumb">
                      <img src={screen.image} alt={screen.content} />
                    </div>
                  )}
                  {!screen.image && (
                    <div className="screen-card-thumb empty" />
                  )}
                  <div className="screen-card-info">
                    <span className="screen-card-title">{screen.content}</span>
                    <div className="screen-card-status">
                      {screen.status === 'online' ? (
                        <Wifi size={14} />
                      ) : (
                        <WifiOff size={14} />
                      )}
                      <span>{screen.status === 'online' ? 'Online' : 'Offline'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
