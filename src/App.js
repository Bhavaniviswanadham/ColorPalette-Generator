import React, { useState, useEffect } from 'react';
import PaletteGenerator from './components/PaletteGenerator/PaletteGenerator';
import SavedPalettes from './components/SavedPalettes/SavedPalettes';
import './App.css';

const App = () => {
  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem('palettes')) || [];
    setSavedPalettes(palettes);
  }, []);

  const savePalette = (palette) => {
    const newPalettes = [...savedPalettes, palette];
    setSavedPalettes(newPalettes);
    localStorage.setItem('palettes', JSON.stringify(newPalettes));
  };

  const deletePalette = (index) => {
    const updatedPalettes = savedPalettes.filter((_, i) => i !== index);
    setSavedPalettes(updatedPalettes);
    localStorage.setItem('palettes', JSON.stringify(updatedPalettes));
  };

  return (
    <div className="app">
      <h1>Color Palette Generator</h1>
      <div>
      <PaletteGenerator onSavePalette={savePalette} />
      <SavedPalettes palettes={savedPalettes} onDeletePalette={deletePalette} />
      </div>
    </div>
  );
};

export default App;
