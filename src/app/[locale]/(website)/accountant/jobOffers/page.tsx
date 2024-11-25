import { getLocale } from "next-intl/server";
import JobOfferCard from "@/components/helper/jobCard";

export default async function JobOffers() {
  const locale = await getLocale();

  return (
    <div className="mb-20">
      <JobOfferCard />
    </div>
  );
}
