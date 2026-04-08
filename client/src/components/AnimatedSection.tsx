import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimate = () => {
    if (!isVisible) return getInitial();
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
