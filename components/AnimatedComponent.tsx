import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent = ({ children }: AnimatedComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
