import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
// React Icons - logos reales de tecnologías frontend
import { 
  FaReact, 
  FaJs, 
  FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVite,
  SiVuedotjs
} from 'react-icons/si';

const frontendTechnologies = [
  {
    name: "React",
    level: 3,
    icon: <FaReact size={32} style={{ color: '#61DAFB' }} />, // Color oficial de React
  },
  {
    name: "TypeScript",
    level: 3,
    icon: <SiTypescript size={32} style={{ color: '#3178C6' }} />, // Color oficial de TypeScript
  },
  {
    name: "JavaScript",
    level: 3, 
    icon: <FaJs size={32} style={{ color: '#F7DF1E' }} />, // Color oficial de JavaScript
  },
  {
    name: "Tailwind CSS",
    level: 3,
    icon: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} />, // Color oficial de Tailwind
  },
  {
    name: "Bootstrap",
    level: 2,
    icon: <FaBootstrap size={32} style={{ color: '#7952B3' }} />, // Color oficial de Bootstrap
  },
  {
    name: "Vue.js",
    level: 1,
    icon: <SiVuedotjs size={32} style={{ color: '#4FC08D' }} />, // Color oficial de Vue
  },
  {
    name: "Next.js",
    level: 1,
    icon: <SiNextdotjs size={32} style={{ color: 'var(--text-primary)' }} />, // Usa color del tema
  },
  {
    name: "Vite",
    level: 1,
    icon: <SiVite size={32} style={{ color: '#646CFF' }} />, // Color oficial de Vite
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

export function FrontendTechnologies() {
  const { t } = useTranslation();
  
  return (
    <div className="mb-8">
      <h3 
        className="text-3xl font-bold text-center mb-2 transition-all duration-500 opacity-0 animate-fade-in text-accent"
        style={{ 
          color: 'var(--color-accent)',
          animationDelay: '0.2s',
          animationFillMode: 'forwards'
        }}
      >
        {t('stack.frontend')}
      </h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover={true} className="[--duration:25s] marquee-container">
          {frontendTechnologies.map((tech, index) => (
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