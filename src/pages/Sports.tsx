import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Search } from 'lucide-react';
import SportsCard from '../components/SportsCard';
import { upcomingGames } from '../data/content';
import type { SportsGame } from '../data/content';
import { assets } from '../data/assets';
import './Sports.css';

const leagues = [
  { id: 'all', name: 'All', icon: '🏆' },
  { id: 'nhl', name: 'NHL', icon: '🏒' },
  { id: 'nba', name: 'NBA', icon: '🏀' },
  { id: 'nfl', name: 'NFL', icon: '🏈' },
  { id: 'mlb', name: 'MLB', icon: '⚾' },
  { id: 'mls', name: 'MLS', icon: '⚽' },
];

const allGames: SportsGame[] = [
  ...upcomingGames,
  {
    id: '3',
    team1: { name: 'Boston Red Sox', logo: assets.sports.redSox, color: '#c8102e' },
    team2: { name: 'Atlanta Braves', logo: assets.sports.braves, color: '#13274f' },
    date: '28 FEBRUARY',
    time: '7:00 PM',
  },
  {
    id: '4',
    team1: { name: 'NY Rangers', logo: assets.sports.rangers, color: '#0038a8' },
    team2: { name: 'Edmonton Oilers', logo: assets.sports.oilers, color: '#ff4c00' },
    date: '1 MARCH',
    time: '3:00 PM',
  },
];

export default function Sports() {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = allGames.filter((game) => {
    const matchesSearch =
      game.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.team2.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <motion.div
      className="page sports-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="sports-header">
        <motion.button
          className="sports-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="sports-title">Sports</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="sports-search">
        <Search size={20} className="sports-search-icon" />
        <input
          type="text"
          className="sports-search-input"
          placeholder="Search teams..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="sports-leagues">
        {leagues.map((league) => (
          <motion.button
            key={league.id}
            className={`sports-league-btn ${selectedLeague === league.id ? 'active' : ''}`}
            onClick={() => setSelectedLeague(league.id)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sports-league-icon">{league.icon}</span>
            <span className="sports-league-name">{league.name}</span>
          </motion.button>
        ))}
      </div>

      <div className="sports-content">
        <h2 className="sports-section-title">Upcoming games</h2>
        <div className="sports-games-list">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <SportsCard game={game} />
              </motion.div>
            ))
          ) : (
            <div className="sports-empty">
              <p>No games found</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
