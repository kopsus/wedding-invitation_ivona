import { fadeInUp, showZoomIn } from "@/utils/animatins";
import { motion } from "framer-motion";
import Image from "next/image";
import { crimsonProNormal, manstein } from "../../libs/fonts";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

interface ICardTheGroom {
  foto: string;
  nickname: string;
  fullname: string;
  fatherName: string;
  motherName: string;
  sosmed: string;
}

const CardTheGroom = ({
  foto,
  nickname,
  fullname,
  fatherName,
  motherName,
  sosmed,
}: ICardTheGroom) => {
  return (
    <>
      <motion.div
        variants={showZoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[65%] border-[3px] bg-[#F9F6EF] rounded-[200px] shadow-cardGroomVictoria overflow-hidden"
      >
        <Image src={foto} alt="" width={0} height={0} sizes="100vw" />
      </motion.div>
      <div className="flex flex-col gap-5 items-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${manstein.className} pt-[9px] pb-[5px] text-[45px] inline-block bg-gradientGolden bg-clip-text text-transparent`}
        >
          {nickname}
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${crimsonProNormal.className} text-xl text-black leading-6 tracking-[0.3px]`}
        >
          {fullname}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${crimsonProNormal.className} text-center text-black leading-[1.8em] tracking-[0.5px]`}
        >
          <p>The Son Of</p>
          <p>{fatherName}</p>
          <p>& {motherName}</p>
        </motion.div>
        <motion.div
          variants={showZoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link href={sosmed}>
            <FaInstagram
              color="white"
              size={40}
              className="bg-[#AC8711] p-2 rounded-full cursor-pointer"
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default CardTheGroom;
