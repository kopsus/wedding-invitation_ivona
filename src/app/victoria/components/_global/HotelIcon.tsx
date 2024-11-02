import { showZoomIn } from "@/utils/animatins";
import { motion } from "framer-motion";
import { FaHotel } from "react-icons/fa";

const HotelIcon = () => {
  return (
    <motion.div
      variants={showZoomIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center gap-2 w-1/2"
    >
      <span className="bg-black w-full h-[1px]"></span>
      <span>
        <FaHotel size={24} />
      </span>
      <span className="bg-black w-full h-[1px]"></span>
    </motion.div>
  );
};

export default HotelIcon;
