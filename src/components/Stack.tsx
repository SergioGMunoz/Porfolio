import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";
// React Icons - logos reales de tecnologías
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVite 
} from 'react-icons/si';

const frontendTechnologies = [
  {
    name: "React",
    level: "Avanzado",
    icon: <FaReact size={32} style={{ color: '#61DAFB' }} />, // Color oficial de React
  },
  {
    name: "TypeScript",
    level: "Avanzado",
    icon: <SiTypescript size={32} style={{ color: '#3178C6' }} />, // Color oficial de TypeScript
  },
  {
    name: "JavaScript",
    level: "Avanzado", 
    icon: <FaJs size={32} style={{ color: '#F7DF1E' }} />, // Color oficial de JavaScript
  },
  {
    name: "HTML5",
    level: "Avanzado",
    icon: <FaHtml5 size={32} style={{ color: '#E34F26' }} />, // Color oficial de HTML5
  },
  {
    name: "CSS3",
    level: "Avanzado",
    icon: <FaCss3Alt size={32} style={{ color: '#1572B6' }} />, // Color oficial de CSS3
  },
  {
    name: "Next.js",
    level: "Intermedio",
    icon: <SiNextdotjs size={32} style={{ color: 'var(--text-primary)' }} />, // Usa color del tema
  },
  {
    name: "Tailwind CSS",
    level: "Avanzado",
    icon: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} />, // Color oficial de Tailwind
  },
  {
    name: "Vite",
    level: "Intermedio",
    icon: <SiVite size={32} style={{ color: '#646CFF' }} />, // Color oficial de Vite
  },
]

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
}

export function TechnologyMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-8">
      <Marquee pauseOnHover className="[--duration:25s]">
        {frontendTechnologies.map((tech, index) => (
          <TechnologyCard 
            key={`${tech.name}-${index}`} 
            icon={tech.icon}
            name={tech.name}
            level={tech.level}
          />
        ))}
      </Marquee>
      
      {/* Gradients para el efecto de desenfoque lateral */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"
        style={{
          background: `linear-gradient(to right, var(--bg-primary), transparent)`
        }}
      ></div>
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"
        style={{
          background: `linear-gradient(to left, var(--bg-primary), transparent)`
        }}
      ></div>
    </div>
  )
}


const Stack = () => {
  return (
    <section id="Stack" className="py-16 px-4">
      {/* Frontend Technologies */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">
          Frontend Technologies
        </h3>
        <div>
          <TechnologyMarquee />
        </div>
      </div>
    </section>
  );
};

export default Stack;
