'use client';

import { useState } from 'react';
import OverviewSection from './courseTabsSections/overviewSection/OverviewSection';
import CurriculumSection from './courseTabsSections/curriculumSection/CurriculumSection';
import InstructorsSection from './courseTabsSections/instructorsSection/InstructorsSection';
import ReviewsSection from './courseTabsSections/reviewsSection/ReviewsSection';
import CourseTab from './course-tab/CourseTap';
import AddCourseReview from './addCourseReview/AddCourseReview';

const CourseTabs = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false);
  return (
    <>
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-0'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
          <CourseTab
            sectionTitle='overview'
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <CourseTab
            sectionTitle='curriculum'
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <CourseTab
            sectionTitle='instructors'
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <CourseTab
            sectionTitle='reviews'
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
        </div>
        <button
          className='bg-[#22B9DD] py-3 px-10 rounded-2xl text-white whitespace-nowrap'
          onClick={() => setIsCommentAreaOpen(true)}
        >
          Write a comment
        </button>
      </div>
      {isCommentAreaOpen ? (
        <>
          <AddCourseReview setIsCommentAreaOpen={setIsCommentAreaOpen} />
        </>
      ) : (
        <>
          {currentView === 'overview' && <OverviewSection />}
          {currentView === 'curriculum' && <CurriculumSection />}
          {currentView === 'instructors' && <InstructorsSection />}
          {currentView === 'reviews' && <ReviewsSection />}
        </>
      )}
    </>
  );
};

export default CourseTabs;
