import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Reorder } from 'framer-motion';
import { ChevronLeft, Play, Pause, Trash2, GripVertical, Clock } from 'lucide-react';
import { assets } from '../data/assets';
import './ActiveContent.css';

interface ContentItem {
  id: string;
  title: string;
  image: string;
  duration: number;
  priority: 'high' | 'low';
  status: 'playing' | 'paused' | 'scheduled';
  screen?: string;
}

const initialContent: ContentItem[] = [
  {
    id: '1',
    title: 'Super Bowl LX Promo',
    image: assets.featured.superBowl,
    duration: 15,
    priority: 'high',
    status: 'playing',
    screen: 'Main Bar',
  },
  {
    id: '2',
    title: 'Happy Hour Special',
    image: assets.templates.cocktail1,
    duration: 10,
    priority: 'high',
    status: 'paused',
    screen: 'All screens',
  },
  {
    id: '3',
    title: 'Weekend Brunch',
    image: assets.themes.brunch,
    duration: 12,
    priority: 'low',
    status: 'scheduled',
    screen: 'Entrance',
  },
  {
    id: '4',
    title: 'Craft Beer Selection',
    image: assets.themes.beer,
    duration: 8,
    priority: 'low',
    status: 'scheduled',
  },
];

export default function ActiveContent() {
  const navigate = useNavigate();
  const [content, setContent] = useState(initialContent);
  const [viewMode, setViewMode] = useState<'all' | 'queue'>('all');

  const toggleStatus = (id: string) => {
    setContent(content.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === 'playing' ? 'paused' : 'playing',
        };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setContent(content.filter((item) => item.id !== id));
  };

  const filteredContent = viewMode === 'queue'
    ? content.filter((item) => item.status !== 'scheduled')
    : content;

  return (
    <motion.div
      className="page active-content-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="active-header">
        <motion.button
          className="active-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="active-title">Active content</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="active-tabs">
        <motion.button
          className={`active-tab ${viewMode === 'all' ? 'active' : ''}`}
          onClick={() => setViewMode('all')}
          whileTap={{ scale: 0.95 }}
        >
          All content
        </motion.button>
        <motion.button
          className={`active-tab ${viewMode === 'queue' ? 'active' : ''}`}
          onClick={() => setViewMode('queue')}
          whileTap={{ scale: 0.95 }}
        >
          Play queue
        </motion.button>
      </div>

      <div className="active-content-list">
        <Reorder.Group axis="y" values={filteredContent} onReorder={setContent}>
          {filteredContent.map((item) => (
            <Reorder.Item key={item.id} value={item} className="active-item-wrapper">
              <motion.div
                className={`active-item ${item.status}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="active-item-drag">
                  <GripVertical size={20} />
                </div>
                <div className="active-item-preview">
                  <img src={item.image} alt={item.title} />
                  {item.status === 'playing' && (
                    <div className="active-item-playing-indicator" />
                  )}
                </div>
                <div className="active-item-info">
                  <h3 className="active-item-title">{item.title}</h3>
                  <div className="active-item-meta">
                    <span className={`active-item-priority ${item.priority}`}>
                      {item.priority}
                    </span>
                    <span className="active-item-duration">
                      <Clock size={12} />
                      {item.duration}s
                    </span>
                    {item.screen && (
                      <span className="active-item-screen">{item.screen}</span>
                    )}
                  </div>
                </div>
                <div className="active-item-actions">
                  <motion.button
                    className="active-item-btn play"
                    onClick={() => toggleStatus(item.id)}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.status === 'playing' ? <Pause size={18} /> : <Play size={18} />}
                  </motion.button>
                  <motion.button
                    className="active-item-btn delete"
                    onClick={() => removeItem(item.id)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={18} />
                  </motion.button>
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div className="active-summary">
        <div className="active-summary-item">
          <span className="active-summary-value">{content.filter(c => c.status === 'playing').length}</span>
          <span className="active-summary-label">Playing</span>
        </div>
        <div className="active-summary-item">
          <span className="active-summary-value">{content.filter(c => c.status === 'paused').length}</span>
          <span className="active-summary-label">Paused</span>
        </div>
        <div className="active-summary-item">
          <span className="active-summary-value">{content.filter(c => c.status === 'scheduled').length}</span>
          <span className="active-summary-label">Scheduled</span>
        </div>
      </div>
    </motion.div>
  );
}
