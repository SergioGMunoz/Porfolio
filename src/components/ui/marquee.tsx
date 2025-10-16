import { ComponentPropsWithoutRef, useRef, useState, useEffect } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart(vertical ? e.clientY : e.clientX);
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const currentPos = vertical ? e.clientY : e.clientX;
      const diff = currentPos - dragStart;
      
      setScrollOffset(prev => prev + diff);
      setDragStart(currentPos);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      container.style.cursor = 'grab';
    };

    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, dragStart, vertical]);

  return (
    <div
      ref={containerRef}
      {...props}
      className={cn(
        "flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem] cursor-grab select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "group": pauseOnHover, // Solo agregar group si pauseOnHover es true
        },
        className
      )}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical && !isDragging,
              "animate-marquee-vertical flex-col": vertical && !isDragging,
              "[animation-direction:reverse]": reverse,
            })}
            style={{
              transform: isDragging 
                ? `translate${vertical ? 'Y' : 'X'}(${scrollOffset}px)` 
                : undefined,
              transition: isDragging ? 'none' : undefined,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
