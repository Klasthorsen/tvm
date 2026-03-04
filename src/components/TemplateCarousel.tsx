import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { trendingTemplates, type Template } from '../data/content';
import './TemplateCarousel.css';

interface TemplateCarouselProps {
  templates?: Template[];
  onTemplateClick?: (template: Template) => void;
  onViewAll?: () => void;
}

export default function TemplateCarousel({ 
  templates = trendingTemplates,
  onTemplateClick,
  onViewAll 
}: TemplateCarouselProps) {
  return (
    <div className="template-carousel">
      <div className="template-scroll">
        {templates.map((template, index) => (
          <motion.button
            key={template.id}
            className="template-card"
            onClick={() => onTemplateClick?.(template)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={template.image} 
              alt={template.title}
              className="template-image"
            />
            {template.badge && (
              <motion.div 
                className="template-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              >
                <Sparkles size={16} />
                <span>{template.badge}</span>
              </motion.div>
            )}
          </motion.button>
        ))}
        
        <motion.button
          className="template-card view-all-card glass"
          onClick={onViewAll}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: templates.length * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="view-all-content">
            <div className="view-all-icon">
              <ArrowRight size={24} />
            </div>
            <span className="view-all-text">All trending templates</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
