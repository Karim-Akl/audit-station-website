import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TopCoursesCard from './topCoursesCard';
import Link from 'next/link';

export default function CoursesSwiper({ data }: { data: any[] }) {
  return (
    <>
      <Carousel
        opts={{
          align: 'center',
        }}
        className='md:my-6 my-2 overflow-hidden relative'
      >
        <CarouselContent className='ml-0 flex'>
          {data.map((course) => (
            <CarouselItem
              key={course.id}
              className='md:w-full rounded-lg sm:basis-1/2 lg:basis-1/4'
            >
              <Link
                href=''
                className='bg-white rounded-2xl border-1 border-[#E2E8F0]'
              >
                <TopCoursesCard course={course} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='absolute top-1/2 left-2 transform -translate-y-1/2 z-10'>
          <CarouselPrevious className='text-black hover:bg-gray-200 rounded-full p-2 shadow-lg' />
        </div>
        <div className='absolute top-1/2 right-2 transform -translate-y-1/2 z-10'>
          <CarouselNext className='text-black hover:bg-gray-200 rounded-full p-2 shadow-lg' />
        </div>
      </Carousel>
    </>
  );
}
