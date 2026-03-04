import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  showArrow?: boolean;
  onClick?: () => void;
  onSeeAll?: () => void;
}

export default function SectionHeader({ title, showArrow = true, onClick, onSeeAll }: SectionHeaderProps) {
  const handleClick = onSeeAll || onClick;
  
  return (
    <motion.button 
      className="section-header"
      onClick={handleClick}
      whileTap={handleClick ? { scale: 0.98 } : undefined}
    >
      <span className="section-title">{title}</span>
      {showArrow && <ChevronRight size={24} className="section-arrow" />}
    </motion.button>
  );
}
