import React, { useState } from 'react';
import { generateRandomColorPalette, copyToClipboard } from '../../utils/colorUtils';
import './PaletteGenerator.css';

const PaletteGenerator = ({ onSavePalette }) => {
  const [colors, setColors] = useState(generateRandomColorPalette());
  const [locked, setLocked] = useState([false, false, false, false, false]);
  const [paletteName, setPaletteName] = useState('');

  const handleGeneratePalette = () => {
    setColors((prevColors) =>
      prevColors.map((color, index) => (locked[index] ? color : generateRandomColorPalette()[index]))
    );
  };

  const handleCopyColor = (color) => {
    copyToClipboard(color);
    alert(`Copied ${color} to clipboard`);
  };

  const handleLockToggle = (index) => {
    setLocked((prevLocked) => prevLocked.map((lock, i) => (i === index ? !lock : lock)));
  };

  const handleSavePalette = () => {
    if (!paletteName.trim()) {
      alert('Please enter a name for the palette before saving.');
      return;
    }
    const filteredColors = colors.filter((_, index) => !locked[index]);
    onSavePalette({ name: paletteName, colors: filteredColors });
    setPaletteName('');
  };

  return (
    <div className="palette-generator">
      <div className='input-feild'>
      <input
        type="text"
        placeholder="Enter palette name"
        value={paletteName}
        onChange={(e) => setPaletteName(e.target.value)}
      />
      <button onClick={handleSavePalette}>Save Palette</button>
      </div>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div key={index} className="color-block" style={{ backgroundColor: color }}>
            <span className="color-code" onClick={() => handleCopyColor(color)}>{color}</span>
            <button onClick={() => handleLockToggle(index)} className={`lock-btn ${locked[index] ? 'locked' : ''}`}>
              {locked[index] ? 'Unlock' : 'Lock'}
            </button>
          </div>
        ))}
      </div>
      <button  onClick={handleGeneratePalette}>Generate Palette</button>
    </div>
  );
};

export default PaletteGenerator;

