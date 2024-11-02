import { fadeInUp, showZoomIn } from "@/utils/animatins";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IFadeInUp {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const FadeInUp = ({ children, className, onClick }: IFadeInUp) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const ShowZoomIn = ({ children, className }: IFadeInUp) => {
  return (
    <motion.div
      variants={showZoomIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { FadeInUp, ShowZoomIn };
