import Bride from "@/components/bride/Bride";
import Cover from "@/components/cover/Cover";
import EndlessLove from "@/components/endlessLove/EndlessLove";
import Event from "@/components/event/Event";
import Gallery from "@/components/gallery/Gallery";
import Gift from "@/components/gift/Gift";

export default function Page() {
  return (
    <>
      <Cover />
      <EndlessLove />
      <Bride />
      <Event />
      <Gift />
      <Gallery />
    </>
  );
}
