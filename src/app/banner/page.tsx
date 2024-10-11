"use client";

import { useEffect, useState } from "react";
import data from "@/utils/data";
import { marcellus } from "@/utils/fonts";

function BannerWedding() {
  const { TamuHadir, Banner, dataMempelai } = data();

  const [currentNamaTamu, setCurrentNamaTamu] = useState(0);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [namaTamu] = useState(TamuHadir);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Banner[currentBannerIndex].type === "image") {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % Banner.length);
      }
      setCurrentNamaTamu((prevIndex) => (prevIndex + 1) % namaTamu.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Banner, currentBannerIndex, namaTamu]);

  const currentBanner = Banner[currentBannerIndex];

  const handleVideoEnd = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % Banner.length);
  };

  return (
    <div
      className={`${marcellus.className} relative min-h-screen w-full bg-cover bg-no-repeat bg-center`}
    >
      {currentBanner.type === "video" ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={currentBanner.img}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${currentBanner.img})` }}
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="mx-auto relative text-white h-full grid lg:grid-cols-2 gap-10 p-10">
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl">Tamu Hadir</h1>
          <div className="mt-10 h-[70vh] overflow-hidden">
            <ul className="divide-y-2 animate-infinite-scroll">
              {TamuHadir.map((item, index) => (
                <li
                  key={index}
                  className="text-xl py-5 flex items-center gap-3"
                >
                  <p>{item.name}</p>
                  {item.vip && (
                    <span className="bg-yellow-300 text-white px-2 rounded-full shadow-xl">
                      VIP
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center flex flex-col gap-10 lg:gap-0 justify-between py-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl">The Wedding Of</h1>
            <p className="text-5xl md:text-6xl flex flex-col md:flex-row justify-center gap-5">
              {dataMempelai?.nama_panggilan_wanita} <span>&</span>
              {dataMempelai?.nama_panggilan_pria}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2 uppercase text-xl md:text-2xl">
              <p>Selamat datang</p>
              <p>YTH. Bapak Beserta Ibu</p>
            </div>
            <ul className="my-5">
              <li className="flex items-center justify-center gap-3 text-2xl">
                <p>{namaTamu[currentNamaTamu].name}</p>
                {namaTamu[currentNamaTamu].vip && (
                  <span className="bg-yellow-300 text-white px-2 rounded-full shadow-xl">
                    VIP
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerWedding;
