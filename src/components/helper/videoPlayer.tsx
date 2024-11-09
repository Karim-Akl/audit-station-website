"use client";
import { MdPlayArrow } from "react-icons/md";
import { Button } from "../ui/button";
import VideoPlay from "../home/VideoPlay";
import { useState } from "react";

export const VideoPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div>
      <Button
        className="p-2 bg-[#22B9DD] hover:bg-[#22a8dd] rounded-full shadow-lg"
        onClick={openVideo}
      >
        <MdPlayArrow color="black" size={29} />
      </Button>

      <VideoPlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
