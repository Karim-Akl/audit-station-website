'use client';
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { useRouter } from 'next/navigation';

//
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

type teamMemberCard = {
  id: number;
  name: string;
  facebook: null;
  instagram: null;
  twitter: null;
  telegram: null;
  whatsapp: null;
  snapchat: null;
  tiktok: null;
  github: null;
  image: string;
  section: {
    id: number;
    title: string;
  };
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const TeamMemberCard = ({
  card,
  index,
}: {
  card: teamMemberCard;
  index: number;
  layout?: boolean;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className='fixed inset-0 h-screen z-50 overflow-auto '>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0'
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className='max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative'
            >
              <button
                className='sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center'
                onClick={handleClose}
              >
                <IconX className='h-6 w-6 text-neutral-100 dark:text-neutral-900' />
              </button>
              <motion.p className='text-base font-medium text-black dark:text-white'>
                {card.name}
              </motion.p>
              <motion.p className='text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white'>
                {card.name}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        // onClick={handleOpen}
        className='rounded-3xl dark:bg-neutral-900 h-80 w-56 md:h-[30rem] md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10'
      >
        <div className='relative inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none' />
        <div className='flex flex-col items-start ps-2 absolute bottom-20'>
          <span className='font-semibold'>{card?.name}</span>
          <span className='font-semibold'>{card?.section?.title}</span>
        </div>
        <div className='absolute bottom-0 z-40 h-16 hover:h-full transition-all duration-300 ease-in-out p-6 w-full background-team flex justify-around'>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.facebook}`)}>
              <FaFacebook />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.instagram}`)}>
              {' '}
              <FaInstagram />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.twitter}`)}>
              <FaTwitter />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.telegram}`)}>
              <FaTelegram />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.whatsapp}`)}>
              <FaWhatsapp />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.snapchat}`)}>
              <FaSnapchat />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.tiktok}`)}>
              <FaTiktok />
            </button>
          </motion.p>
          <motion.p className='text-white text-xl md:text-2xl  font-semibold font-sans text-left'>
            <button onClick={() => router.push(`${card?.github}`)}>
              <FaGithub />
            </button>
          </motion.p>
        </div>
        <BlurImage
          src={card.image}
          alt={card.name}
          width={100}
          height={100}
          className='w-full h-auto'
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src = '/images/placeholder.jpg',
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn('transition duration-300 ', isLoading ? 'blur-sm' : 'blur-0', className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading='lazy'
      decoding='async'
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  );
};
