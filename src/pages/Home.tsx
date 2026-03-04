import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import FeaturedCard from '../components/FeaturedCard';
import SectionHeader from '../components/SectionHeader';
import TemplateCarousel from '../components/TemplateCarousel';
import ThemeList from '../components/ThemeList';
import './Home.css';

export default function Home() {
  return (
    <motion.div 
      className="page home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="Home" />
      
      <div className="home-content">
        <FeaturedCard />
        
        <section className="home-section">
          <SectionHeader title="Trending templates" />
          <TemplateCarousel />
        </section>
        
        <section className="home-section">
          <SectionHeader title="Popular themes" />
          <ThemeList />
        </section>
      </div>
    </motion.div>
  );
}
