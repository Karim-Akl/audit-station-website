import { link } from 'fs';
import SectionAccordion from './sectionAccordion/SectionAccordion';
const CurriculumSection = () => {
  const lessons = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      duration: 1,
      link: '#',
      isLocked: false,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      duration: 1,
      link: '#',
      isLocked: true,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      duration: 1,
      link: '#',
      isLocked: true,
    },
  ];
  return (
    <>
      <div>
        <SectionAccordion
          title='1. Introduction'
          lessonsNumber={5}
          duration={1}
          lessons={lessons}
        />
        <SectionAccordion
          title='2.Lorem ipsum dolor sit amet'
          lessonsNumber={5}
          duration={1}
          lessons={lessons}
        />
        <SectionAccordion
          title='3.Lorem ipsum dolor sit amet'
          lessonsNumber={5}
          duration={1}
          lessons={lessons}
        />
      </div>
    </>
  );
};

export default CurriculumSection;
