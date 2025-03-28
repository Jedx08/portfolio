import { motion } from "motion/react";

const ScrollAnimation = ({
  children,
  delaySec = 0.2,
  durationSec = 0.5,
  fadeUp = 30,
  fadeRight = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: fadeUp, x: fadeRight }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: { delay: delaySec, duration: durationSec },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
