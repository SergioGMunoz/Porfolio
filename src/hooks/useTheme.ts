import { useState, useEffect } from 'react';
import { themeManager, ACCENT_COLORS, ThemeMode } from '@/lib/colorUtils';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(themeManager.getCurrentTheme());
  const [currentColor, setCurrentColor] = useState(themeManager.getCurrentColor());

  // Inicializar el tema al montar el componente
  useEffect(() => {
    // El constructor ya aplica el tema inicial
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setCurrentTheme(themeManager.getCurrentTheme());
      }
      if (e.key === 'currentColorIndex') {
        setCurrentColor(themeManager.getCurrentColor());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Funciones de tema
  const toggleTheme = () => {
    const newTheme = themeManager.toggleTheme();
    setCurrentTheme(newTheme);
    return newTheme;
  };

  const setTheme = (theme: ThemeMode) => {
    const newTheme = themeManager.setTheme(theme);
    setCurrentTheme(newTheme);
    return newTheme;
  };

  const useSystemTheme = () => {
    const systemTheme = themeManager.useSystemTheme();
    setCurrentTheme(systemTheme);
    return systemTheme;
  };

  const getNextTheme = () => {
    return themeManager.getNextTheme();
  };

  const getSystemTheme = () => {
    return themeManager.getSystemTheme();
  };

  // Funciones de color
  const cycleToNextColor = () => {
    const newColor = themeManager.cycleToNextColor();
    setCurrentColor(newColor);
    console.log('Color cambiado a:', newColor.name, newColor.value); // Debug
    return newColor;
  };

  const getNextColor = () => {
    return themeManager.getNextColor();
  };

  const setColorByIndex = (index: number) => {
    const newColor = themeManager.setColorByIndex(index);
    setCurrentColor(newColor);
    return newColor;
  };

  const setColorByName = (colorName: string) => {
    const newColor = themeManager.setColorByName(colorName);
    if (newColor) {
      setCurrentColor(newColor);
    }
    return newColor;
  };

  return {
    // Estado actual
    currentTheme,
    currentColor,
    
    // Funciones de tema
    toggleTheme,
    setTheme,
    useSystemTheme,
    getNextTheme,
    getSystemTheme,
    
    // Funciones de color
    cycleToNextColor,
    getNextColor,
    setColorByIndex,
    setColorByName,
    
    // Datos de referencia
    availableColors: ACCENT_COLORS,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
  };
};