import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/ui/text-animate";

// React Icons - logos de otras herramientas
import { 
  FaGitAlt,
  FaLinux,
  FaAws,
  FaCloud,
} from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import { 
  SiFigma,
  SiNotion
} from 'react-icons/si';

const otherTechnologies = [
  {
    name: "AWS",
    level: 2,
    icon: <FaAws size={32} style={{ color: '#FF9900' }} />, // Color oficial de AWS
  },
  {
    name: "Azure",
    level: 1,
    icon: <FaCloud size={32} style={{ color: '#0078D4' }} />, // Icono de cloud para Azure
  },
  {
    name: "Docker",
    level: 1,
    icon: <SiDocker size={32} style={{ color: '#2496ED' }} />, // Color oficial de Docker
  },
  {
    name: "Git",
    level: 2,
    icon: <FaGitAlt size={32} style={{ color: '#F05032' }} />,
  },
  {
    name: "Linux",
    level: 2,
    icon: <FaLinux size={32} style={{ color: '#FCC624' }} />,
  },
  {
    name: "Notion",
    level: 3,
    icon: <SiNotion size={32} style={{ color: 'var(--text-primary)' }} />,
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
  const { t, i18n } = useTranslation();
  
  return (
    <div className="mb-8">
      <h3 
        className="text-3xl font-bold text-center mb-2"
        style={{ 
          color: 'var(--color-accent)'
        }}
      >
        <TextAnimate
          key={`others-title-${i18n.language}`}
          animation="slideUp"
          duration={0.8}
          by="character"
          startOnView={true}
          delay={0.1}
        >
          {t('stack.others')}
        </TextAnimate>
      </h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee 
          pauseOnHover={false} 
          className="[--duration:6s] sm:[--duration:17s] md:[--duration:21s] marquee-container"
        >
          {otherTechnologies.map((tech, index) => (
            <TechnologyCard 
              key={`${tech.name}-${index}`} 
              icon={tech.icon}
              name={tech.name}
              level={tech.level}
            />
          ))}
        </Marquee>
        
        {/* Gradients que se adaptan al tema usando variables CSS - responsivos */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-24 md:w-1/4"
          style={{
            background: `linear-gradient(to right, var(--bg-primary), transparent)`
          }}
        ></div>
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-24 md:w-1/4"
          style={{
            background: `linear-gradient(to left, var(--bg-primary), transparent)`
          }}
        ></div>
      </div>
    </div>
  );
}