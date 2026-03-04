import { motion } from 'framer-motion';
import { categories, type Category } from '../data/content';
import './CategoryGrid.css';

interface CategoryGridProps {
  onCategoryClick?: (category: Category) => void;
}

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          className="category-card"
          style={{ backgroundColor: category.color }}
          onClick={() => onCategoryClick?.(category)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="category-name">{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
}
