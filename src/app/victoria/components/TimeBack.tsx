import { FaCalendarAlt } from "react-icons/fa";
import asset1 from "../assets/ASSET-GOLD-WHITE-16-2.webp";
import asset2 from "../assets/ASSET-GOLD-WHITE-16.webp";
import { crimsonProNormal, gfsDidot } from "../libs/fonts";
import ButtonGold from "./_global/ButtonGold";
import TextGolden from "./_global/TextGolden";
import { dataMempelai } from "../libs/data";
import useCountdown from "@/hooks/useCountdown";
import { ShowZoomIn } from "./_global/Animation";
import data from "@/utils/data";
import { formatTimeline } from "@/utils/formatTimeline";

const TimeBack = () => {
  const countdown = useCountdown(dataMempelai.timeline);
  const { timeline } = data();

  return (
    <div className="relative p-5 bg-[#EDE6D5]">
      <div
        className="relative bg-top bg-no-repeat bg-contain py-[100px] px-[30px]"
        style={{ backgroundImage: `url(${asset1.src})` }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-bottom bg-no-repeat bg-contain opacity-100"
          style={{ backgroundImage: `url(${asset2.src})` }}
        ></div>
        <div className="relative flex flex-col gap-y-5 justify-center items-center">
          <ShowZoomIn>
            <TextGolden
              className={`${gfsDidot.className} text-[25px] uppercase leading-4`}
            >
              SAVE THE DATE
            </TextGolden>
          </ShowZoomIn>
          <ShowZoomIn className="grid grid-cols-2 w-[60%]">
            <div
              className={`${crimsonProNormal.className} flex flex-col justify-center items-center`}
            >
              <p className="text-[40px]">{countdown.days}</p>
              <p>Days</p>
            </div>
            <div
              className={`${crimsonProNormal.className} flex flex-col justify-center items-center`}
            >
              <p className="text-[40px]">{countdown.hours}</p>
              <p>Hours</p>
            </div>
            <div
              className={`${crimsonProNormal.className} flex flex-col justify-center items-center`}
            >
              <p className="text-[40px]">{countdown.minutes}</p>
              <p>Minutes</p>
            </div>
            <div
              className={`${crimsonProNormal.className} flex flex-col justify-center items-center`}
            >
              <p className="text-[40px]">{countdown.seconds}</p>
              <p>Seconds</p>
            </div>
          </ShowZoomIn>
          <ButtonGold
            onClick={() =>
              window.open(
                `https://calendar.google.com/calendar/u/0/r/eventedit?text=The+Wedding+of+${
                  dataMempelai.nama_panggilan_pria
                } and+${dataMempelai.nama_panggilan_wanita}&details=${
                  timeline.detailInvite
                }.&dates=${formatTimeline(
                  timeline.startDate,
                  timeline.endDate
                )}&location`,
                "_blank"
              )
            }
            iconLeft={<FaCalendarAlt />}
          >
            add to calender
          </ButtonGold>
        </div>
      </div>
    </div>
  );
};

export default TimeBack;
