import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Upload, Sparkles, Image, Palette } from 'lucide-react';
import './CreateWithAI.css';

const categories = ['Food & Drink', 'Events', 'Promotions', 'Menus', 'Seasonal', 'Sports'];
const styles = [
  { id: 'modern', name: 'Modern', color: '#10ff91' },
  { id: 'classic', name: 'Classic', color: '#ffc8a5' },
  { id: 'bold', name: 'Bold', color: '#ff8b9e' },
  { id: 'minimal', name: 'Minimal', color: '#b2cfff' },
  { id: 'retro', name: 'Retro', color: '#ffecb2' },
  { id: 'elegant', name: 'Elegant', color: '#c0bbb1' },
];

export default function CreateWithAI() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/edit');
    }, 2000);
  };

  const canGenerate = category && title && selectedStyle;

  return (
    <motion.div
      className="page create-ai-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="create-ai-header">
        <motion.button
          className="create-ai-back-btn"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
        <h1 className="create-ai-title">Create with AI</h1>
        <div style={{ width: 40 }} />
      </div>

      <div className="create-ai-content">
        <div className="create-ai-icon">
          <Sparkles size={32} />
        </div>
        <p className="create-ai-subtitle">
          Describe what you want to create and let AI do the magic
        </p>

        <div className="create-ai-form">
          <div className="create-ai-field">
            <label className="create-ai-label">Category</label>
            <div className="create-ai-category-grid">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`create-ai-category-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="create-ai-field">
            <label className="create-ai-label">Title</label>
            <input
              type="text"
              className="create-ai-input"
              placeholder="e.g., Happy Hour Special"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="create-ai-field">
            <label className="create-ai-label">Description (optional)</label>
            <textarea
              className="create-ai-textarea"
              placeholder="Add details about what you want to promote..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="create-ai-field">
            <label className="create-ai-label">
              <Image size={16} />
              Reference image (optional)
            </label>
            <motion.button
              className="create-ai-upload-btn"
              whileTap={{ scale: 0.98 }}
            >
              <Upload size={24} />
              <span>Upload image</span>
            </motion.button>
          </div>

          <div className="create-ai-field">
            <label className="create-ai-label">
              <Palette size={16} />
              Style
            </label>
            <div className="create-ai-style-grid">
              {styles.map((style) => (
                <motion.button
                  key={style.id}
                  className={`create-ai-style-btn ${selectedStyle === style.id ? 'active' : ''}`}
                  onClick={() => setSelectedStyle(style.id)}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--style-color': style.color } as React.CSSProperties}
                >
                  <div className="create-ai-style-preview" />
                  <span>{style.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="create-ai-actions">
        <motion.button
          className={`create-ai-generate-btn ${!canGenerate ? 'disabled' : ''}`}
          onClick={handleGenerate}
          disabled={!canGenerate || isGenerating}
          whileTap={canGenerate ? { scale: 0.95 } : {}}
        >
          {isGenerating ? (
            <span className="create-ai-loading">
              <Sparkles size={20} className="spinning" />
              Generating...
            </span>
          ) : (
            <>
              <Sparkles size={20} />
              Generate content
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
