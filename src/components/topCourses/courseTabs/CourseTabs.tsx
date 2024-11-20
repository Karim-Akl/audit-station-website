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
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-6 my-10'>
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
        <AddCourseReview setIsCommentAreaOpen = {setIsCommentAreaOpen} />
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
