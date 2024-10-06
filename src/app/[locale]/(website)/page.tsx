import { Background } from "@/components/background/Background";
import { AnalyticsStats } from "@/components/home/analytics/analytics";
import { Testimonial } from "@/components/home/testimonial/Testimonial";
import { Faqs } from "@/components/home/faqs/Faqs";
import { AboutUs } from "@/components/home/aboutUs/AboutUs";
import { TeamWork } from "@/components/home/teamWork/TeamWork";
import { Blogs } from "@/components/home/blogs/Blogs";
import { Steps } from "@/components/home/steps/Steps";
import { StepsChart } from "@/components/home/stepsChart/StepsChart";
import { TopInstructors } from "@/components/home/topInstructors/TopInstructors";
import TopCourses from "@/components/home/topCourses/TopCourses";
export default async function Home() {
  return (
    <main
      className="
    bg-gradient-to-r
    from-white
    via-[#22b8dd86]
    to-white
    background-animate"
    >
      {/* <CustomerService /> */}
      <Background />
      <div className="md:container mx-auto z-0">
        <AnalyticsStats />
        <Steps />
        <StepsChart />
        <AboutUs />
        <TeamWork />
        <Testimonial />
        <Faqs />
        <Blogs />
        <TopCourses />
        <TopInstructors />
        {/* <RealAdversting />
        <CardHoverEffectDemo />
        <TimelineDemo />
        <AppleCardsCarouselDemo />
        <ServiceApply /> */}

        {/*<BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
         */}
      </div>
    </main>
  );
}
