import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
// React Icons - logos de tecnologías backend
import { 
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker
} from 'react-icons/fa';
import { 
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma 
} from 'react-icons/si';

const backendTechnologies = [
  {
    name: "Node.js",
    level: "Avanzado",
    icon: <FaNodeJs size={32} style={{ color: '#339933' }} />, // Color oficial de Node.js
  },
  {
    name: "Express",
    level: "Avanzado",
    icon: <SiExpress size={32} style={{ color: 'var(--text-primary)' }} />, // Usa color del tema
  },
  {
    name: "Python",
    level: "Intermedio", 
    icon: <FaPython size={32} style={{ color: '#3776AB' }} />, // Color oficial de Python
  },
  {
    name: "MongoDB",
    level: "Avanzado",
    icon: <SiMongodb size={32} style={{ color: '#47A248' }} />, // Color oficial de MongoDB
  },
  {
    name: "PostgreSQL",
    level: "Intermedio",
    icon: <SiPostgresql size={32} style={{ color: '#4169E1' }} />, // Color oficial de PostgreSQL
  },
  {
    name: "Prisma",
    level: "Intermedio",
    icon: <SiPrisma size={32} style={{ color: '#2D3748' }} />, // Color oficial de Prisma
  },
  {
    name: "Docker",
    level: "Básico",
    icon: <FaDocker size={32} style={{ color: '#2496ED' }} />, // Color oficial de Docker
  },
  {
    name: "SQL",
    level: "Avanzado",
    icon: <FaDatabase size={32} style={{ color: '#336791' }} />, // Color genérico para bases de datos
  },
];

const TechnologyCard = ({
  icon,
  name,
  level,
}: {
  icon: React.ReactNode
  name: string
  level: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-300",
        "hover:scale-105 hover:shadow-lg"
      )}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center">
          <figcaption 
            className="text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {name}
          </figcaption>
          <p 
            className="text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {level}
          </p>
        </div>
      </div>
    </figure>
  )
};

export function BackendTechnologies() {
  const { t } = useTranslation();
  
  return (
    <div className="mb-8">
      <h3 
        className="text-3xl font-bold text-center mb-8 transition-all duration-500 opacity-0 animate-fade-in text-accent"
        style={{ 
          color: 'var(--color-accent)',
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}
      >
        {t('stack.backend')}
      </h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover={true} className="[--duration:30s]" reverse>
          {backendTechnologies.map((tech, index) => (
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