import { Background } from "@/components/background/Background";
import CustomerService from "@/components/socialapp/customerService";
import { TimelineDemo } from "@/components/home/PropertyCard";
import { CardHoverEffectDemo } from "@/components/home/Properties";
import RealAdversting from "@/components/home/RealAdversting";
import ServiceApply from "@/components/home/ServiceApply";
import { StepsComponent } from "@/components/home/stepsComponent/StepsComponent";
import { AnalyticsStats } from "@/components/home/analytics/analytics";
import { AppleCardsCarouselDemo } from "@/components/home/cardsCarousel/CardsCarousel";
import { Testimonial } from "@/components/home/Testimonial/Testimonial";
import { Faqs } from "@/components/home/faqs/Faqs";
export default async function Home() {
  return (
    <>
      {/* <CustomerService /> */}
      <Background />
      <div className="container mx-auto z-0 ">
        <AnalyticsStats />
        <StepsComponent />
        <AppleCardsCarouselDemo />
        <Testimonial />
        <Faqs />
        {/* <RealAdversting />
        <CardHoverEffectDemo />
        <TimelineDemo />
        <AppleCardsCarouselDemo />
        <ServiceApply /> */}

        {/*<BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
         */}
      </div>
    </>
  );
}
