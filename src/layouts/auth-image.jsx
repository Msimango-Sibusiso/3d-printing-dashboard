import { motion } from "framer-motion";
import CardImage from "../assets/cardImg.png";
export const AuthImage = ({ isSignUp }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 flex h-full w-1/2 items-center justify-center"
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: isSignUp ? "100%" : "0%",
        opacity: 1,
      }}
      transition={{ type: "spring", damping: 15, stiffness: 250 }}
    >
      <img
        src={CardImage}
        alt="Background"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
