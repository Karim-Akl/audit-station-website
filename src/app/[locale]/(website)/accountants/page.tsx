import SecondHeroBackground from "@/components/helper/SecondHeroBackground";
import Accountants from "../accountants/_Accountants";
import Salary from "../accountants/_Salary"
import { SearchInput } from "@/components/header/searchInput";
export default function AccountantsPage() {
  return (

    <div className=" w-full overflow-hidden">
      <SecondHeroBackground
        title="Accountants"
        imageShow={false}
        upgradeshow={false}
        step="Home > Accountants "
      />
      <div className="flex m-auto md:flex-row flex-col ">
        <div className="px-10 max-w-screen  pt-14  ">
          <div className='col-span-1 md:max-w-[300px] w-full '>
            <SearchInput />
          </div>
          <div className="mt-4 flex flex-col gap-4 ">
            <Salary
              title="Location"
              ActiveTaShow={false}
              upgradeshow={false}
              salaryRanges={["Near me", "Remote job", "Exact location", "Within 15 km", "Within 30 km", "Within 50 km"]}
            />
            <Salary />
            <Salary
              title="Work experience"
              ActiveTaShow={false}
              upgradeshow={false}
              salaryRanges={["Any experience", "Intership", "Work remotely"]}
            />
            <Salary
              title="Work experience"
              ActiveTaShow={false}
              upgradeshow={false}
              salaryRanges={["Full-time", "Temporary", "Part-time"]}
            />
          </div>
        </div>
        <div className="">
        <Accountants
        />
        </div>
      </div>
    </div>
  )
}
