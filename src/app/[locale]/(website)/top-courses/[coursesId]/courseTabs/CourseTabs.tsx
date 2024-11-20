'use client';

import { useState } from 'react';
import OverviewSection from './courseTabsSections/overviewSection/OverviewSection';
import CurriculumSection from './courseTabsSections/curriculumSection/CurriculumSection';

const CourseTabs = () => {
  const [currentView, setCurrentView] = useState('overview');
  const getTabStyles = (sectionName: any) => {
    return sectionName === currentView ? 'bg-[#22B9DD] text-white' : 'bg-[#F5F5F5] text-[##6D6C80]'
  }
  return (
    <>
      <div className='flex items-center gap-6 my-10'>
        <button
          className={`rounded-full px-6 py-3 ${getTabStyles('overview')}`}
          onClick={() => setCurrentView('overview')}
        >
          Overview
        </button>
        <button
          className={`rounded-full px-6 py-3 ${getTabStyles('curriculum')}`}
          onClick={() => setCurrentView('curriculum')}
        >
          Curriculum
        </button>
        <button
          className={`rounded-full px-6 py-3 ${getTabStyles('instructors')}`}
          onClick={() => setCurrentView('instructors')}
        >
          Instructors
        </button>
        <button
          className={`rounded-full px-6 py-3 ${getTabStyles('reviews')}`}
          onClick={() => setCurrentView('reviews')}
        >
          reviews
        </button>
      </div>
      <div>{currentView === 'overview' && <OverviewSection />}</div>
      <div>{currentView === 'curriculum' && <CurriculumSection />}</div>
    </>
  );
};

export default CourseTabs;
