import React from 'react';
import './SavedPalettes.css';

const SavedPalettes = ({ palettes, onDeletePalette }) => {
  return (
    <div className="saved-palettes">
      <h2>Saved Palettes</h2>
      {palettes.length === 0 ? (
        <p>No saved palettes</p>
      ) : (
        palettes.map((palette, index) => (
          <div key={index} className="saved-palette">
            <h3>{palette.name || `Palette ${index + 1}`}</h3>
            <div className="saved-color-palette">
              {palette.colors.map((color, i) => (
                <div key={i} className="saved-color-block" style={{ backgroundColor: color }}>
                  <span className="saved-color-code">{color}</span>
                </div>
              ))}
            </div>
            <button onClick={() => onDeletePalette(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedPalettes;
