import Image from "next/image";
import bgStory from "../assets/ASSET-GOLD-WHITE-6-scaled.webp";
import { crimsonProNormal, gfsDidot, manstein } from "../libs/fonts";
import { FadeInUp, ShowZoomIn } from "./_global/Animation";
import { loveStory } from "../libs/data";
import TextGolden from "./_global/TextGolden";
const Story = () => {
  return (
    <div className="bg-[#F9F6EF] py-[50px] px-5">
      <div
        className="bg-top bg-repeat bg-contain opacity-50 absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${bgStory.src})` }}
      ></div>
      <div className="relative w-full flex flex-col gap-y-5">
        <ShowZoomIn
          className={`${manstein.className} text-center text-[45px] font-medium leading-4 text-[#AC8711] my-10`}
        >
          Our Story
        </ShowZoomIn>
        <FadeInUp className="border-[3px] border-[#F9F6EF] rounded-[50px] overflow-hidden shadow-storyVictoria">
          <Image
            src={loveStory.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </FadeInUp>
        {loveStory.stroy.map((item, index) => (
          <FadeInUp
            key={index}
            className="text-center flex flex-col gap-3 mt-5"
          >
            <TextGolden className={`${gfsDidot.className} text-xl`}>
              {item.title}
            </TextGolden>
            <p
              className={`${crimsonProNormal.className} text-sm leading-7 text-black`}
            >
              {item.story}
            </p>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

export default Story;
