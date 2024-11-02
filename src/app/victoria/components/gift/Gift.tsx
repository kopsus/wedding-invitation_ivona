import { FaGift, FaVideo } from "react-icons/fa";
import bgFixed from "../../assets/cover.webp";
import CardVictoria from "../_global/CardVictoria";
import ModalGift from "./ModalGift";
import { useState } from "react";

const Gift = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="relative w-full py-[75px] px-[30px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${bgFixed.src})` }}
      ></div>
      <div className="relative flex flex-col gap-y-10">
        <CardVictoria
          title="WEDDING GIFT"
          desc="Your presence is a present in itself. But if you do wish to give us something else, please tap the button down below for further information:"
          textButton="wedding gift"
          iconButton={<FaGift />}
          onClick={() => setOpenModal(true)}
        />
        <CardVictoria
          title="LIVE STREAMING"
          desc="We invite those of you who cannot attend in person to join our special moment through a virtual live streaming by clicking the following:"
          textButton="Live streaming"
          iconButton={<FaVideo />}
        />
      </div>
      {openModal && <ModalGift closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

export default Gift;
