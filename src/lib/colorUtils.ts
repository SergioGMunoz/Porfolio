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

export class ColorCycler {
  private currentIndex: number = 0;
  
  constructor() {
    // Intentar obtener el índice guardado del localStorage
    const savedIndex = localStorage.getItem('currentColorIndex');
    if (savedIndex) {
      this.currentIndex = parseInt(savedIndex, 10);
    }
  }

  getCurrentColor(): AccentColor {
    return ACCENT_COLORS[this.currentIndex];
  }

  getNextColor(): AccentColor {
    this.currentIndex = (this.currentIndex + 1) % ACCENT_COLORS.length;
    // Guardar el índice en localStorage
    localStorage.setItem('currentColorIndex', this.currentIndex.toString());
    return ACCENT_COLORS[this.currentIndex];
  }

  setColorByIndex(index: number): AccentColor {
    if (index >= 0 && index < ACCENT_COLORS.length) {
      this.currentIndex = index;
      localStorage.setItem('currentColorIndex', this.currentIndex.toString());
      return ACCENT_COLORS[this.currentIndex];
    }
    return this.getCurrentColor();
  }

  changeAccentColor(color: string): void {
    document.documentElement.style.setProperty('--color-accent', color);
  }
}