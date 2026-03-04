import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Upload, Check } from 'lucide-react';
import './Onboarding.css';

const fonts = ['Inter', 'Roboto', 'Open Sans', 'Montserrat', 'Poppins', 'Lato'];
const colorPresets = [
  { name: 'Mint', colors: ['#10ff91', '#0ea5e9', '#000000'] },
  { name: 'Sunset', colors: ['#ff6b6b', '#feca57', '#1a1a2e'] },
  { name: 'Ocean', colors: ['#00d2d3', '#54a0ff', '#222f3e'] },
  { name: 'Forest', colors: ['#26de81', '#20bf6b', '#1e272e'] },
  { name: 'Royal', colors: ['#a55eea', '#5f27cd', '#2d3436'] },
  { name: 'Custom', colors: [] },
];

export default function BrandProfile() {
  const navigate = useNavigate();
  const [venueName, setVenueName] = useState('');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [selectedPalette, setSelectedPalette] = useState('Mint');
  const [logoUploaded, setLogoUploaded] = useState(false);

  const handleContinue = () => {
    navigate('/onboarding/content');
  };

  return (
    <motion.div
      className="onboarding-page brand-page"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="onboarding-header">
        <motion.button
          className="onboarding-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <div className="onboarding-progress">
          <div className="onboarding-progress-bar" style={{ width: '33%' }} />
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div className="onboarding-content">
        <h1 className="onboarding-title">Set up your brand</h1>
        <p className="onboarding-subtitle">
          Customize your content to match your venue's style
        </p>

        <div className="brand-form">
          <div className="brand-field">
            <label className="brand-label">Venue name</label>
            <input
              type="text"
              className="brand-input"
              placeholder="Enter your venue name"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
          </div>

          <div className="brand-field">
            <label className="brand-label">Logo</label>
            <motion.button
              className={`brand-upload-btn ${logoUploaded ? 'uploaded' : ''}`}
              onClick={() => setLogoUploaded(!logoUploaded)}
              whileTap={{ scale: 0.98 }}
            >
              {logoUploaded ? (
                <>
                  <Check size={24} />
                  <span>Logo uploaded</span>
                </>
              ) : (
                <>
                  <Upload size={24} />
                  <span>Upload logo</span>
                </>
              )}
            </motion.button>
          </div>

          <div className="brand-field">
            <label className="brand-label">Font</label>
            <div className="brand-fonts">
              {fonts.map((font) => (
                <motion.button
                  key={font}
                  className={`brand-font-btn ${selectedFont === font ? 'active' : ''}`}
                  onClick={() => setSelectedFont(font)}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: font }}
                >
                  {font}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="brand-field">
            <label className="brand-label">Color palette</label>
            <div className="brand-palettes">
              {colorPresets.map((palette) => (
                <motion.button
                  key={palette.name}
                  className={`brand-palette-btn ${selectedPalette === palette.name ? 'active' : ''}`}
                  onClick={() => setSelectedPalette(palette.name)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="brand-palette-colors">
                    {palette.colors.length > 0 ? (
                      palette.colors.map((color, i) => (
                        <div
                          key={i}
                          className="brand-palette-color"
                          style={{ background: color }}
                        />
                      ))
                    ) : (
                      <div className="brand-palette-custom">+</div>
                    )}
                  </div>
                  <span className="brand-palette-name">{palette.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="onboarding-actions">
        <motion.button
          className="onboarding-btn-primary"
          onClick={handleContinue}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>
        <motion.button
          className="onboarding-btn-skip"
          onClick={() => navigate('/onboarding/content')}
          whileTap={{ scale: 0.95 }}
        >
          Skip for now
        </motion.button>
      </div>
    </motion.div>
  );
}
