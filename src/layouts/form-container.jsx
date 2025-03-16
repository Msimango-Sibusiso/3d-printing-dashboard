import { motion } from "framer-motion";
export const FormContainer = ({ children }) => {
  return (
    <motion.div
      className="w-full text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 1,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 250,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
