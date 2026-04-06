import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -40,
  },
};

const pageTransition = {
  duration: 0.7,
  ease: "easeInOut",
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
