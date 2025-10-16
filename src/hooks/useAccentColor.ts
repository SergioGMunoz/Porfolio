import { useRef } from 'react';
import { ThemeManager, ACCENT_COLORS } from '@/lib/colorUtils';

export const useAccentColor = () => {
  const themeManagerRef = useRef(new ThemeManager());
  const themeManager = themeManagerRef.current;

  const changeAccentColor = (color: string) => {
    // Buscar el color por su valor y establecerlo
    const colorObj = ACCENT_COLORS.find(c => c.value === color);
    if (colorObj) {
      themeManager.setColorByName(colorObj.name);
    }
  };

  const cycleToNextColor = () => {
    return themeManager.cycleToNextColor();
  };

  const setAccentByName = (colorName: string) => {
    themeManager.setColorByName(colorName);
  };

  const setAccentByIndex = (index: number) => {
    return themeManager.setColorByIndex(index);
  };

  const getCurrentColor = () => {
    return themeManager.getCurrentColor();
  };

  const getNextColor = () => {
    return themeManager.getNextColor();
  };

  const resetAccentColor = () => {
    themeManager.setColorByIndex(0); // Reset al primer color (azul)
  };

  return {
    changeAccentColor,
    cycleToNextColor,
    setAccentByName,
    setAccentByIndex,
    getCurrentColor,
    getNextColor,
    resetAccentColor,
    availableColors: ACCENT_COLORS
  };
};