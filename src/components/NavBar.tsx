import { FloatingDock } from "@/components/ui/floating-dock";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { 
    toggleTheme, 
    cycleToNextColor, 
    getNextColor, 
    getNextTheme,
    isDark 
  } = useTheme();
  
  const { currentLanguage, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  // Helper function to translate color names
  const getTranslatedColorName = (colorName: string) => {
    return t(`colors.${colorName}`);
  };

  // Scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dark Mode Toggle
  const handleThemeToggle = () => {
    toggleTheme();
  };

  // Color Changing
  const handleAccentColor = () => {
    const newColor = cycleToNextColor();
    console.log('Nuevo color aplicado:', newColor);
    
    // Verificar que la variable CSS se haya actualizado
    const rootStyles = getComputedStyle(document.documentElement);
    const currentAccent = rootStyles.getPropertyValue('--color-accent');
    console.log('Variable CSS --color-accent:', currentAccent);
  };

  // Language switching
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  // Obtener el siguiente color para preview
  const nextColor = getNextColor();
  const nextTheme = getNextTheme();

  const links = [
    {
      title: t('navbar.home'),
      icon: <HomeIcon className="text-accent" />,
      onClick: () => scrollToSection("#home"),
    },
    {
      title: t('navbar.theme', { mode: nextTheme === 'dark' ? t('navbar.dark') : t('navbar.light') }),
      icon: isDark ? 
        <LightModeIcon className="text-accent" /> : 
        <DarkModeIcon className="text-accent" />,
      onClick: handleThemeToggle,
    },
    {
      title: t('navbar.color', { color: getTranslatedColorName(nextColor.name) }),
      icon: <ColorLensIcon style={{ color: nextColor.value }} />,
      onClick: handleAccentColor,
    },
    {
      title: t('navbar.language', { lang: currentLanguage === 'es' ? 'English' : 'Español' }),
      icon: <LanguageIcon className="text-accent" />,
      onClick: handleLanguageToggle,
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        items={links}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
      />
    </div>
  );
};

export default NavBar;
