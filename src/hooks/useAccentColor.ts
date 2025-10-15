import { useRef } from 'react';
import { ColorCycler, ACCENT_COLORS } from '@/lib/colorUtils';

export const useAccentColor = () => {
  const colorCyclerRef = useRef(new ColorCycler());
  const colorCycler = colorCyclerRef.current;

  const changeAccentColor = (color: string) => {
    colorCycler.changeAccentColor(color);
  };

  const cycleToNextColor = () => {
    const nextColor = colorCycler.getNextColor();
    colorCycler.changeAccentColor(nextColor.value);
    return nextColor;
  };

  const setAccentByName = (colorName: string) => {
    const color = ACCENT_COLORS.find(c => c.name === colorName);
    if (color) {
      changeAccentColor(color.value);
    }
  };

  const setAccentByIndex = (index: number) => {
    const color = colorCycler.setColorByIndex(index);
    colorCycler.changeAccentColor(color.value);
    return color;
  };

  const getCurrentColor = () => {
    return colorCycler.getCurrentColor();
  };

  const getNextColor = () => {
    const currentIndex = colorCycler.getCurrentColor();
    const currentColorIndex = ACCENT_COLORS.findIndex(color => color.name === currentIndex.name);
    const nextIndex = (currentColorIndex + 1) % ACCENT_COLORS.length;
    return ACCENT_COLORS[nextIndex];
  };

  const resetAccentColor = () => {
    changeAccentColor('#004aad');
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