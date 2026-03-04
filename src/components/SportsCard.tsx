import { motion } from 'framer-motion';
import { type SportsGame } from '../data/content';
import './SportsCard.css';

interface SportsCardProps {
  game: SportsGame;
  onPromote?: () => void;
}

export default function SportsCard({ game, onPromote }: SportsCardProps) {
  return (
    <motion.div
      className="sports-card glass"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ borderColor: 'var(--color-primary)' }}
    >
      <div className="teams">
        <div className="team">
          <div className="team-logo" style={{ backgroundColor: game.team1.color }}>
            <img src={game.team1.logo} alt={game.team1.name} />
          </div>
          <span className="team-name">{game.team1.name}</span>
        </div>
        <div className="team">
          <div className="team-logo" style={{ backgroundColor: game.team2.color }}>
            <img src={game.team2.logo} alt={game.team2.name} />
          </div>
          <span className="team-name">{game.team2.name}</span>
        </div>
      </div>
      
      <div className="game-footer">
        <span className="game-time">{game.date} {game.time}</span>
        <motion.button
          className="promote-btn glass"
          onClick={onPromote}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          Promote game
        </motion.button>
      </div>
    </motion.div>
  );
}
