import React from 'react';
import { CgCloseO } from 'react-icons/cg';

interface IProps {
  isOpen: boolean;
  setIsOpen: Function;
  link: string;
}

const VideoPlay = ({ link, isOpen, setIsOpen }: IProps) => {
  const closeVideo = () => {
    setIsOpen(false);
    document.body.style.overflow = 'scroll';
  };
  return (
    <div
      className={`${isOpen === true ? 'fixed' : 'hidden'} w-[100vw] h-[100vh] top-0 left-0 z-40`}
    >
      <div
        className='bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] top-0 left-0 z-40'
        onClick={closeVideo}
      ></div>
      <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}>
        <CgCloseO
          className='absolute -top-10 right-0 text-[#C0C0C0] sm:text-3xl text-2xl cursor-pointer'
          onClick={closeVideo}
        />
        <video
          controls
          autoPlay
          className='!w-[80vw] max-w-[100vw]'
        >
          <source
            src={link}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default VideoPlay;
