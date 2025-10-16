import { useEffect, useState } from "react"
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/utils"

/**
 * A custom pointer component that displays an animated cursor.
 * Add this as a child to any component to enable a custom pointer when hovering.
 * You can pass custom children to render as the pointer.
 *
 * @component
 * @param {HTMLMotionProps<"div">} props - The component props
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Listen to events on the entire document
      const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX)
        y.set(e.clientY)
      }

      const handleMouseEnter = (e: MouseEvent) => {
        x.set(e.clientX)
        y.set(e.clientY)
        setIsActive(true)
      }

      const handleMouseLeave = () => {
        setIsActive(false)
      }

      // Add event listeners to document
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      // Set cursor none on body to hide native cursor globally
      document.body.style.cursor = "none"

      return () => {
        document.body.style.cursor = ""
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseenter", handleMouseEnter)
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [x, y])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
            className="pointer-events-none fixed z-50 transform-[translate(-50%,-50%)]"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] stroke-white",
                  className
                )}
                style={{ 
                  color: 'var(--color-accent)'
                }}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
  )
}
