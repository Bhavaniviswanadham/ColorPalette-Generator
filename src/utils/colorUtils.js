export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateRandomColorPalette = () => {
  return Array.from({ length: 5 }, generateRandomColor);
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
