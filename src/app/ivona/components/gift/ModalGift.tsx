import { abhaya_libre, lato, latoBold } from "@/utils/fonts";
import React, { useState } from "react";
import cardRekening from "@/../public/images/cardRekening.png";
import Image from "next/image";
import chipAtm from "@/../public/images/chip-atm.png";
import { FaRegCopy } from "react-icons/fa";
import data from "@/utils/data";
import Modal from "@/app/victoria/components/_global/Modal";

interface IModalGift {
  closeModal: () => void;
}

const ModalGift: React.FC<IModalGift> = ({ closeModal }) => {
  const [copy, setCopy] = useState<string | null>(null);
  const { rekening, penerimaGift } = data();

  const handleCopyNumber = (id: string, number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopy(id);
      setTimeout(() => setCopy(null), 2000);
    });
  };

  const handleCopyName = (name: string) => {
    navigator.clipboard.writeText(name).then(() => {
      setCopy(name);
      setTimeout(() => setCopy(null), 2000);
    });
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="text-center">
        <p className={`${abhaya_libre.className} text-[25px]`}>Wedding Gift</p>
        <p className={`${lato.className} text-sm leading-5`}>
          Please send a gift via the following account number, digital wallet or
          shipping address:
        </p>
      </div>
      <div className="my-5 flex flex-col gap-3">
        {rekening.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] p-[15px] shadow-md relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${cardRekening.src})` }}
            ></div>
            <div className="relative flex flex-col gap-2">
              <div className="flex justify-end">
                <div className="overflow-hidden w-[35%]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
              <div>
                <div className="overflow-hidden w-[14%] h-auto">
                  <Image
                    src={chipAtm}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <p
                  className={`${latoBold.className} text-xl font-semibold text-black`}
                >
                  {item.noRekening}
                </p>
                <p
                  className={`${latoBold.className} text-[15px] font-semibold text-black`}
                >
                  {item.namaRekening}
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  onClick={() => handleCopyNumber(item.id, item.noRekening)}
                  className="bg-[#00000087] rounded-[5px] py-2 px-[15px] flex items-center gap-2"
                >
                  {copy !== item.id ? (
                    <>
                      <FaRegCopy color="#fff" />
                      <p className={`${lato.className} text-sm text-white`}>
                        Copy
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-white">Copied Successfully</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-[10px] p-[15px] shadow-md relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${cardRekening.src})` }}
          ></div>
          <div className="relative flex flex-col gap-2">
            <p
              className={`${abhaya_libre.className} text-center text-[25px] font-semibold text-black`}
            >
              Send a Gift
            </p>
            <div>
              <p
                className={`${latoBold.className} text-base font-semibold text-black`}
              >
                {penerimaGift.namaPenerima}
              </p>
              <p className={`${lato.className} text-sm leading-5 text-black`}>
                {penerimaGift.alamat}
              </p>
            </div>
            <div className="flex justify-end">
              <div
                onClick={() => handleCopyName(penerimaGift.namaPenerima)}
                className="bg-[#00000087] rounded-[5px] py-2 px-[15px] flex items-center gap-2"
              >
                {copy !== penerimaGift.namaPenerima ? (
                  <>
                    <FaRegCopy color="#fff" />
                    <p className={`${lato.className} text-sm text-white`}>
                      Copy
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-white">Copied Successfully</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalGift;
