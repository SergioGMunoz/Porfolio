import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
// React Icons - logos de otras herramientas
import { 
  FaGitAlt,
  FaLinux,
  FaTasks
} from 'react-icons/fa';
import { 
  SiFigma,
  SiNotion
} from 'react-icons/si';

const otherTechnologies = [
  {
    name: "Git",
    level: 3,
    icon: <FaGitAlt size={32} style={{ color: '#F05032' }} />, // Color oficial de Git
  },
  {
    name: "Linux",
    level: 2, 
    icon: <FaLinux size={32} style={{ color: '#FCC624' }} />, // Color oficial de Linux
  },
  {
    name: "Figma",
    level: 1,
    icon: <SiFigma size={32} style={{ color: '#F24E1E' }} />, // Color oficial de Figma
  },
  {
    name: "Metodología Ágil",
    level: 3,
    icon: <FaTasks size={32} style={{ color: 'var(--text-primary)' }} />, // Ícono para metodologías
  },
  {
    name: "Notion",
    level: 3,
    icon: <SiNotion size={32} style={{ color: 'var(--text-primary)' }} />, // Usa color del tema
  },
];

const TechnologyCard = ({
  icon,
  name,
  level,
}: {
  icon: React.ReactNode
  name: string
  level: number
}) => {
  const { t } = useTranslation();
  return (
    <figure
      className={cn(
        "relative h-full w-32 sm:w-40 md:w-48 cursor-pointer overflow-hidden rounded-xl p-2 sm:p-3 md:p-4 transition-all duration-300",
        "hover:scale-105 hover:shadow-lg"
      )}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <div className="flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center">
          <figcaption 
            className="text-sm sm:text-base md:text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {name}
          </figcaption>
          <p 
            className="text-xs sm:text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t(`levels.${level}`)}
          </p>
        </div>
      </div>
    </figure>
  )
};

export function OtherTechnologies() {
  const { t } = useTranslation();
  
  return (
    <div className="mb-8">
      <h3 
        className="text-3xl font-bold text-center mb-8 transition-all duration-500 opacity-0 animate-fade-in text-accent"
        style={{ 
          color: 'var(--color-accent)',
          animationDelay: '0.6s',
          animationFillMode: 'forwards'
        }}
      >
        {t('stack.others')}
      </h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover={true} className="[--duration:35s] marquee-container">
          {otherTechnologies.map((tech, index) => (
            <TechnologyCard 
              key={`${tech.name}-${index}`} 
              icon={tech.icon}
              name={tech.name}
              level={tech.level}
            />
          ))}
        </Marquee>
        
        {/* Gradients que se adaptan al tema usando variables CSS */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
          style={{
            background: `linear-gradient(to right, var(--bg-primary), transparent)`
          }}
        ></div>
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-1/4"
          style={{
            background: `linear-gradient(to left, var(--bg-primary), transparent)`
          }}
        ></div>
      </div>
    </div>
  );
}