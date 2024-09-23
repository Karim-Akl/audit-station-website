import { Background } from "@/components/background/Background";
import CustomerService from "@/components/socialapp/customerService";
import { TimelineDemo } from "@/components/home/PropertyCard";
import { CardHoverEffectDemo } from "@/components/home/Properties";
import RealAdversting from "@/components/home/RealAdversting";
import { AppleCardsCarouselDemo } from "@/components/home/AppleCardsCarouselDemo";
import ServiceApply from "@/components/home/ServiceApply";
export default async function Home() {
  return (
    <>
      <CustomerService />
      <Background />
      <div className="container mx-auto z-0 ">
        <RealAdversting />
        <CardHoverEffectDemo />
        <TimelineDemo />
        <AppleCardsCarouselDemo />
        <ServiceApply />

        {/*<BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
         */}
      </div>
    </>
  );
}
