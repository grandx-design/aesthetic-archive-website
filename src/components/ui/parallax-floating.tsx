
import { ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingProps {
  children: ReactNode
  sensitivity?: number
  className?: string
}

interface FloatingElementProps {
  children: ReactNode
  depth?: number
  className?: string
}

export function FloatingElement({ children, depth = 1, className }: FloatingElementProps) {
  return (
    <div className={cn("absolute", className)} style={{ zIndex: Math.round(depth * 10) }}>
      {children}
    </div>
  )
}

const Floating = ({ children, sensitivity = 1, className }: FloatingProps) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, mass: 0.5, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = (event.clientX - centerX) * sensitivity
    const mouseY = (event.clientY - centerY) * sensitivity

    x.set(mouseX)
    y.set(mouseY)
  }

  return (
    <motion.div
      className={cn("relative w-full", className)}
      onMouseMove={handleMouseMove}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Floating
