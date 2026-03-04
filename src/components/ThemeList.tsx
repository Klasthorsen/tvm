import { motion } from 'framer-motion';
import { popularThemes, type Theme } from '../data/content';
import './ThemeList.css';

interface ThemeListProps {
  themes?: Theme[];
  onThemeClick?: (theme: Theme) => void;
}

export default function ThemeList({ themes = popularThemes, onThemeClick }: ThemeListProps) {
  return (
    <div className="theme-list">
      {themes.map((theme, index) => (
        <motion.button
          key={theme.id}
          className="theme-item glass"
          onClick={() => onThemeClick?.(theme)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileTap={{ scale: 0.98 }}
          whileHover={{ borderColor: 'var(--color-primary)' }}
        >
          <div className="theme-icon-wrapper">
            <img src={theme.icon} alt="" className="theme-icon" />
          </div>
          <div className="theme-content">
            <span className="theme-title">{theme.title}</span>
            <span className="theme-subtitle">{theme.subtitle}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
