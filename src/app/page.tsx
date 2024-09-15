import Bride from "@/components/bride/Bride";
import Cover from "@/components/cover/Cover";
import EndlessLove from "@/components/endlessLove/Endless";
import Event from "@/components/event/Event";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Gift from "@/components/gift/Gift";
import LoveStory from "@/components/loveStory/LoveStory";
import QrCheckin from "@/components/qrCheckin/QrCheckin";
import Rsvp from "@/components/rsvp/Rsvp";
import Timeline from "@/components/timeline/Timeline";

export default function Page() {
  return (
    <>
      <Cover />
      <EndlessLove />
      <Bride />
      <Event />
      <Gift />
      <Gallery />
      <Rsvp />
      <LoveStory />
      <QrCheckin />
      <Timeline />
      <Footer />
    </>
  );
}
