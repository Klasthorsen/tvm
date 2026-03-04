import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import QuickActions from '../components/QuickActions';
import SectionHeader from '../components/SectionHeader';
import CategoryGrid from '../components/CategoryGrid';
import TemplateCarousel from '../components/TemplateCarousel';
import SportsCard from '../components/SportsCard';
import { upcomingGames, trendingTemplates, apps } from '../data/content';
import './Studio.css';

export default function Studio() {
  return (
    <motion.div 
      className="page studio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="Studio" showNotification={false} />
      
      <div className="studio-content">
        <QuickActions />
        
        <section className="studio-section">
          <SectionHeader title="Categories" showArrow={false} />
          <CategoryGrid />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Recent content" />
          <TemplateCarousel templates={trendingTemplates} />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Sports" />
          <div className="sports-list">
            {upcomingGames.map((game) => (
              <SportsCard key={game.id} game={game} />
            ))}
          </div>
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Menus" />
          <TemplateCarousel templates={trendingTemplates} />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Food & Drink" />
          <TemplateCarousel templates={trendingTemplates} />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Events" />
          <TemplateCarousel templates={trendingTemplates} />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="Seasonal" />
          <TemplateCarousel templates={trendingTemplates} />
        </section>
        
        <section className="studio-section">
          <SectionHeader title="App & Games" />
          <div className="apps-grid">
            {apps.map((app, index) => (
              <motion.button
                key={app.id}
                className="app-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="app-icon-wrapper">
                  <img src={app.icon} alt={app.name} className="app-icon" />
                </div>
                <span className="app-name">{app.name}</span>
              </motion.button>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
