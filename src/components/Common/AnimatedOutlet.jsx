import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import { pageTransition } from '../../utils/motionVariants';

function AnimatedOutlet() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageTransition} initial="hidden" animate="visible" exit="exit">
        {element}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
