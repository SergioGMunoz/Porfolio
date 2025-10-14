import { useEffect } from 'react';

interface AccentColor {
  name: string;
  value: string;
}

// Colores predefinidos que puedes usar
export const ACCENT_COLORS: AccentColor[] = [
  { name: 'blue', value: '#004aad' },
  { name: 'green', value: '#22c55e' },
  { name: 'purple', value: '#8b5cf6' },
  { name: 'red', value: '#ef4444' },
  { name: 'orange', value: '#f97316' },
  { name: 'pink', value: '#ec4899' },
];

export const useAccentColor = () => {
  const changeAccentColor = (color: string) => {
    // Cambiar la variable CSS directamente en el documento
    document.documentElement.style.setProperty('--color-accent', color);
  };

  const setAccentByName = (colorName: string) => {
    const color = ACCENT_COLORS.find(c => c.name === colorName);
    if (color) {
      changeAccentColor(color.value);
    }
  };

  const resetAccentColor = () => {
    // Volver al color por defecto
    changeAccentColor('#004aad');
  };

  return {
    changeAccentColor,
    setAccentByName,
    resetAccentColor,
    availableColors: ACCENT_COLORS
  };
};