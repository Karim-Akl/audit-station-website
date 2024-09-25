import Image from "next/image";
import React from "react";
import pesone from "@../../../public/assets/smiling-woman.svg";
interface CarouselItem {
  id: number;
  imageSrc: {
    src: string;
  };
  name: string;
  description: string;
  labelPrev: string;
  labelNext: string;
  labelColor: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    imageSrc: pesone,
    name: "Gloria Rose",
    description:
      "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
    labelPrev: "carousel-3",
    labelNext: "carousel-2",
    labelColor: "red-600",
  },
  {
    id: 2,
    imageSrc: pesone,
    name: "Gloria Rose",
    description:
      "Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.",
    labelPrev: "carousel-1",
    labelNext: "carousel-3",
    labelColor: "blue-600",
  },
  {
    id: 3,
    imageSrc: pesone,
    name: "Gloria Rose.",
    description:
      "Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.",
    labelPrev: "carousel-2",
    labelNext: "carousel-1",
    labelColor: "yellow-600",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="  bg-gray-100 relative">
      <div className="w-96 mx-auto" style={{ scrollSnapType: "x mandatory" }}>
        {carouselItems.map((item) => (
          <div key={item.id} className="">
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              id={`carousel-${item.id}`}
              defaultChecked={item.id === 1}
            />
            <div className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <Image
                className="rounded-t-lg w-96 h-100 z-40"
                width={96}
                height={100}
                src={item.imageSrc.src}
                alt={`carousel-item-${item.id}`}
              />
              <div className="py-4 border-s-8 rounded-xl border-[#22B9DD] px-8 ms-20 h-50 z-50 absolute top-80 -right-20 bg-white ">
                <p className=" py-3 text-gray-600 leading-6 border-s border-[#BDBDD1] p-2">
                  {item.description}
                </p>
                <div>
                  <p className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl tracking-tight">
                    {item.name}
                  </p>
                </div>
              </div>
              {/* Controls */}
              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  htmlFor={item.labelPrev}
                  className={`inline-block text-${item.labelColor} cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  htmlFor={item.labelNext}
                  className={`inline-block text-${item.labelColor} cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
