import React from "react";
import bgPohon from "@/../public/images/pink-forest-pohon.webp";
import {
  aston_script,
  marcellus,
  montserrat_regular,
  montserrat_semi,
} from "@/utils/fonts";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import data from "@/utils/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, showZoomIn } from "@/utils/animatios";

const Bride = () => {
  const { dataMempelai } = data();

  return (
    <div className="min-h-screen relative w-full bg-whiteSmooke pt-[50px] pb-[75px] px-[30px]">
      <div
        className="bg-contain bg-center bg-repeat opacity-20 absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgPohon.src})`,
        }}
      ></div>
      <div className="relative w-full h-full flex flex-col gap-10 justify-center items-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${marcellus.className} text-[35px] text-primary`}
        >
          Groom & Bride
        </motion.p>
        <div className="flex flex-col items-center gap-10">
          <motion.div
            variants={showZoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden w-[90%] border-8 border-whiteSmooke shadow-sm rounded-full"
          >
            <Image
              src={dataMempelai.foto_pria}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </motion.div>
          <div className="flex flex-col gap-5 items-center">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${aston_script.className} text-primary text-[32px]`}
            >
              {dataMempelai.nama_panggilan_pria}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${montserrat_semi.className} text-black leading-6`}
            >
              {dataMempelai.nama_lengkap_pria}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${montserrat_regular.className} text-sm text-center text-black leading-7`}
            >
              <p>{dataMempelai.nama_ayah_pria}</p>
              <p>& {dataMempelai.nama_ibu_pria}</p>
            </motion.div>
            <motion.div
              variants={showZoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Link href={dataMempelai.instagram_pria}>
                <FaInstagram
                  color="white"
                  size={40}
                  className="bg-primary p-2 rounded-full cursor-pointer"
                />
              </Link>
            </motion.div>
          </div>
          <h2
            className={`${marcellus.className} text-primary text-[65px] text-center`}
          >
            &
          </h2>
          <motion.div
            variants={showZoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="overflow-hidden w-[90%] border-8 border-whiteSmooke shadow-sm rounded-full"
          >
            <Image
              src={dataMempelai.foto_wanita}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </motion.div>
          <div className="flex flex-col gap-5 items-center">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${aston_script.className} text-primary text-[32px]`}
            >
              {dataMempelai.nama_panggilan_wanita}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${montserrat_semi.className} text-black leading-6`}
            >
              {dataMempelai.nama_lengkap_Wanita}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${montserrat_regular.className} text-sm text-center text-black leading-7`}
            >
              <p>{dataMempelai.nama_ayah_wanita}</p>
              <p>& {dataMempelai.nama_ibu_wanita}</p>
            </motion.div>
            <motion.div
              variants={showZoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Link href={dataMempelai.instagram_wanita}>
                <FaInstagram
                  color="white"
                  size={40}
                  className="bg-primary p-2 rounded-full cursor-pointer"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bride;
