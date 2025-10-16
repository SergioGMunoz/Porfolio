interface AccentColor {
  name: string;
  value: string;
}

export const ACCENT_COLORS: AccentColor[] = [
  { name: 'blue', value: '#004aad' },
  { name: 'green', value: '#22c55e' },
  { name: 'purple', value: '#8b5cf6' },
  { name: 'red', value: '#ef4444' },
  { name: 'orange', value: '#f97316' },
  { name: 'pink', value: '#ec4899' },
];

export type ThemeMode = 'light' | 'dark';

export class ThemeManager {
  private currentColorIndex: number = 0;
  private currentTheme: ThemeMode = 'light';
  
  constructor() {
    // Cargar configuraciones guardadas
    this.loadSavedSettings();
    // Aplicar tema inicial
    this.applyTheme();
  }

  private loadSavedSettings() {
    // Cargar índice de color
    const savedColorIndex = localStorage.getItem('currentColorIndex');
    if (savedColorIndex) {
      this.currentColorIndex = parseInt(savedColorIndex, 10);
    }

    // Cargar tema, con preferencia del sistema como fallback
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Detectar preferencia del sistema
      this.currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  }

  private applyTheme() {
    const root = document.documentElement;
    
    if (this.currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Aplicar color de acento actual
    const currentColor = this.getCurrentColor();
    root.style.setProperty('--color-accent', currentColor.value);
  }

  // Gestión de colores
  getCurrentColor(): AccentColor {
    return ACCENT_COLORS[this.currentColorIndex];
  }

  getNextColor(): AccentColor {
    const nextIndex = (this.currentColorIndex + 1) % ACCENT_COLORS.length;
    return ACCENT_COLORS[nextIndex];
  }

  cycleToNextColor(): AccentColor {
    this.currentColorIndex = (this.currentColorIndex + 1) % ACCENT_COLORS.length;
    localStorage.setItem('currentColorIndex', this.currentColorIndex.toString());
    
    const newColor = this.getCurrentColor();
    document.documentElement.style.setProperty('--color-accent', newColor.value);
    return newColor;
  }

  setColorByIndex(index: number): AccentColor {
    if (index >= 0 && index < ACCENT_COLORS.length) {
      this.currentColorIndex = index;
      localStorage.setItem('currentColorIndex', this.currentColorIndex.toString());
      
      const newColor = this.getCurrentColor();
      document.documentElement.style.setProperty('--color-accent', newColor.value);
      return newColor;
    }
    return this.getCurrentColor();
  }

  setColorByName(colorName: string): AccentColor | null {
    const colorIndex = ACCENT_COLORS.findIndex(color => color.name === colorName);
    if (colorIndex !== -1) {
      return this.setColorByIndex(colorIndex);
    }
    return null;
  }

  // Gestión de tema oscuro/claro
  getCurrentTheme(): ThemeMode {
    return this.currentTheme;
  }

  getNextTheme(): ThemeMode {
    return this.currentTheme === 'light' ? 'dark' : 'light';
  }

  toggleTheme(): ThemeMode {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
    return this.currentTheme;
  }

  setTheme(theme: ThemeMode): ThemeMode {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme();
    return this.currentTheme;
  }

  // Detectar preferencia del sistema
  getSystemTheme(): ThemeMode {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Usar preferencia del sistema
  useSystemTheme(): ThemeMode {
    this.currentTheme = this.getSystemTheme();
    localStorage.removeItem('theme'); // Eliminar preferencia manual
    this.applyTheme();
    return this.currentTheme;
  }
}

// Instancia singleton para uso global
export const themeManager = new ThemeManager();