import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export default function SectionHeader({ title, showArrow = true, onClick }: SectionHeaderProps) {
  return (
    <motion.button 
      className="section-header"
      onClick={onClick}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      <span className="section-title">{title}</span>
      {showArrow && <ChevronRight size={24} className="section-arrow" />}
    </motion.button>
  );
}
