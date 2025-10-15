import { FloatingDock } from "@/components/ui/floating-dock";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useAccentColor } from "@/hooks/useAccentColor";
import { useState } from "react";

const NavBar = () => {
  // Scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dark Mode
  const handleDarkMode = () => {
    console.log("darkmode");
  };

  // Color Changing
  const { cycleToNextColor, getNextColor } = useAccentColor();
  const [nextColor, setNextColor] = useState(getNextColor());
  const handleAccentColor = () => {
    cycleToNextColor();
    setNextColor(getNextColor());
  };

  const links = [
    {
      title: "Home",
      icon: <HomeIcon className="text-accent" />,
      onClick: () => scrollToSection("#home"),
    },
    {
      title: "Modo Oscuro",
      icon: <DarkModeIcon className="text-accent" />,
      onClick: handleDarkMode,
    },
    {
      title: `Cambiar Color`,
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
