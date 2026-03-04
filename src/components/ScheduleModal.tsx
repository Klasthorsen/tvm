import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Clock, Monitor, Calendar } from 'lucide-react';
import './ScheduleModal.css';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (schedule: ScheduleData) => void;
}

interface ScheduleData {
  screen: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  priority: 'high' | 'low';
  venue: string;
}

const screens = ['All screens', 'Main Bar', 'Entrance', 'Patio', 'VIP Lounge'];
const priorities = [
  { value: 'high', label: 'High' },
  { value: 'low', label: 'Low' },
];
const venues = ['All venues', 'Downtown Location', 'Uptown Location'];

export default function ScheduleModal({ isOpen, onClose, onSchedule }: ScheduleModalProps) {
  const [schedule, setSchedule] = useState<ScheduleData>({
    screen: 'All screens',
    startDate: '2026-02-27',
    startTime: '09:00',
    endDate: '2026-02-28',
    endTime: '23:00',
    priority: 'high',
    venue: 'All venues',
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSchedule = () => {
    onSchedule(schedule);
    onClose();
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="schedule-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="schedule-modal"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="schedule-header">
              <h2 className="schedule-title">Schedule content</h2>
              <motion.button
                className="schedule-close"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="schedule-body">
              <div className="schedule-field">
                <label className="schedule-label">
                  <Monitor size={16} />
                  Screen
                </label>
                <div className="schedule-dropdown">
                  <button
                    className="schedule-dropdown-trigger"
                    onClick={() => toggleDropdown('screen')}
                  >
                    <span>{schedule.screen}</span>
                    <ChevronDown size={16} className={openDropdown === 'screen' ? 'rotated' : ''} />
                  </button>
                  {openDropdown === 'screen' && (
                    <motion.div
                      className="schedule-dropdown-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {screens.map((screen) => (
                        <button
                          key={screen}
                          className={`schedule-dropdown-item ${schedule.screen === screen ? 'active' : ''}`}
                          onClick={() => {
                            setSchedule({ ...schedule, screen });
                            setOpenDropdown(null);
                          }}
                        >
                          {screen}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="schedule-row">
                <div className="schedule-field">
                  <label className="schedule-label">
                    <Calendar size={16} />
                    Start date
                  </label>
                  <input
                    type="date"
                    className="schedule-input"
                    value={schedule.startDate}
                    onChange={(e) => setSchedule({ ...schedule, startDate: e.target.value })}
                  />
                </div>
                <div className="schedule-field">
                  <label className="schedule-label">
                    <Clock size={16} />
                    Time
                  </label>
                  <input
                    type="time"
                    className="schedule-input"
                    value={schedule.startTime}
                    onChange={(e) => setSchedule({ ...schedule, startTime: e.target.value })}
                  />
                </div>
              </div>

              <div className="schedule-row">
                <div className="schedule-field">
                  <label className="schedule-label">
                    <Calendar size={16} />
                    End date
                  </label>
                  <input
                    type="date"
                    className="schedule-input"
                    value={schedule.endDate}
                    onChange={(e) => setSchedule({ ...schedule, endDate: e.target.value })}
                  />
                </div>
                <div className="schedule-field">
                  <label className="schedule-label">
                    <Clock size={16} />
                    Time
                  </label>
                  <input
                    type="time"
                    className="schedule-input"
                    value={schedule.endTime}
                    onChange={(e) => setSchedule({ ...schedule, endTime: e.target.value })}
                  />
                </div>
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Priority</label>
                <div className="schedule-priority-buttons">
                  {priorities.map((p) => (
                    <motion.button
                      key={p.value}
                      className={`schedule-priority-btn ${schedule.priority === p.value ? 'active' : ''}`}
                      onClick={() => setSchedule({ ...schedule, priority: p.value as 'high' | 'low' })}
                      whileTap={{ scale: 0.95 }}
                    >
                      {p.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Venue</label>
                <div className="schedule-dropdown">
                  <button
                    className="schedule-dropdown-trigger"
                    onClick={() => toggleDropdown('venue')}
                  >
                    <span>{schedule.venue}</span>
                    <ChevronDown size={16} className={openDropdown === 'venue' ? 'rotated' : ''} />
                  </button>
                  {openDropdown === 'venue' && (
                    <motion.div
                      className="schedule-dropdown-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {venues.map((venue) => (
                        <button
                          key={venue}
                          className={`schedule-dropdown-item ${schedule.venue === venue ? 'active' : ''}`}
                          onClick={() => {
                            setSchedule({ ...schedule, venue });
                            setOpenDropdown(null);
                          }}
                        >
                          {venue}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            <div className="schedule-actions">
              <motion.button
                className="schedule-btn schedule-btn-secondary"
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              <motion.button
                className="schedule-btn schedule-btn-primary"
                onClick={handleSchedule}
                whileTap={{ scale: 0.95 }}
              >
                Schedule
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
