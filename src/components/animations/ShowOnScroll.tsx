import { motion } from "framer-motion";
import React from "react";

interface ShowOnScrollProps {
  children: React.ReactNode;
  horizontal?: boolean;
  className?: string;
  delay?: number;
}

function ShowOnScroll({
  children,
  horizontal,
  className,
  delay,
}: ShowOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={horizontal ? { opacity: 0, x: -200 } : { opacity: 0, y: 100 }}
      whileInView={horizontal ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      viewport={
        horizontal ? { once: true, amount: 0.4 } : { once: true, amount: 0.8 }
      }
      transition={{ delay: delay, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default ShowOnScroll;
