import { FloatingDock } from "@/components/ui/floating-dock";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useTheme } from "@/hooks/useTheme";

const NavBar = () => {
  const { 
    toggleTheme, 
    cycleToNextColor, 
    getNextColor, 
    getNextTheme,
    isDark 
  } = useTheme();

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

  // Obtener el siguiente color para preview
  const nextColor = getNextColor();
  const nextTheme = getNextTheme();

  const links = [
    {
      title: "Home",
      icon: <HomeIcon className="text-accent" />,
      onClick: () => scrollToSection("#home"),
    },
    {
      title: `Modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`,
      icon: isDark ? 
        <LightModeIcon className="text-accent" /> : 
        <DarkModeIcon className="text-accent" />,
      onClick: handleThemeToggle,
    },
    {
      title: `Cambiar color (${nextColor.name})`,
      icon: <ColorLensIcon style={{ color: nextColor.value }} />,
      onClick: handleAccentColor,
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
