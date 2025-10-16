import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; onClick: () => void }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <motion.div
      onMouseMove={!isMobile ? (e) => mouseX.set(e.pageX) : undefined}
      onMouseLeave={!isMobile ? () => mouseX.set(Infinity) : undefined}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3",
        className
      )}
      style={{ 
        backgroundColor: 'var(--dock-bg)',
        transition: 'background-color 0.3s ease'
      }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} isMobile={isMobile} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  onClick,
  isMobile,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isMobile: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Manejar click en móvil
  const handleClick = () => {
    if (isMobile) {
      // Mostrar efecto ANTES de ejecutar la acción
      setClicked(true);
      setIsAnimating(true);
      
      // Ejecutar la acción después de un pequeño delay para que se vea el efecto
      setTimeout(() => {
        onClick();
      }, 200); // Delay de 200ms para ver el efecto
      
      // Ocultar tooltip después de 1.2 segundos
      setTimeout(() => setClicked(false), 1200);
      
      // Terminar animación de bounce después de 1s (más lento)
      setTimeout(() => setIsAnimating(false), 1000);
    } else {
      // En desktop ejecutar inmediatamente
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ 
          width, 
          height,
          backgroundColor: 'var(--dock-button)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
        onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
        className="relative flex aspect-square items-center justify-center rounded-full"
        animate={
          isMobile && isAnimating
            ? {
                scale: [1, 1.4, 1], // Scale bastante notable: crece 40% y vuelve
              }
            : {}
        }
        transition={{
          duration: 1.0, // Duración de 1 segundo
          ease: "easeOut",
          times: [0, 0.4, 1], // Timing controlado para el efecto
        }}
      >
        <AnimatePresence>
          {(hovered || (isMobile && clicked)) && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md px-2 py-0.5 text-xs whitespace-pre"
              style={{
                backgroundColor: 'var(--dock-tooltip-bg)',
                borderColor: 'var(--dock-tooltip-border)',
                color: 'var(--dock-tooltip-text)',
                border: '1px solid var(--dock-tooltip-border)',
                transition: 'all 0.3s ease'
              }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
