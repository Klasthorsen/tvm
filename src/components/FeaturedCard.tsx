import { motion } from 'framer-motion';
import { featuredContent } from '../data/content';
import './FeaturedCard.css';

interface FeaturedCardProps {
  onClick?: () => void;
}

export default function FeaturedCard({ onClick }: FeaturedCardProps) {
  return (
    <motion.button
      className="featured-card"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="featured-image-container">
        <img 
          src={featuredContent.overlayImage} 
          alt="" 
          className="featured-image-overlay"
        />
        <img 
          src={featuredContent.image} 
          alt={featuredContent.title}
          className="featured-image"
        />
      </div>
      
      <div className="featured-content">
        <h2 className="featured-title">{featuredContent.title}</h2>
        <p className="featured-subtitle">{featuredContent.subtitle}</p>
        
        <motion.span 
          className="featured-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore content
        </motion.span>
      </div>
    </motion.button>
  );
}
