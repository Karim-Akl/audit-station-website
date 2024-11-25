import topcourse from '@../../../public/assets/topcourse.svg';
import cartCourses from '@../../../public/assets/cartCourses.png';

export const shopping = [
  {
    id: 1,
    instructorName: 'instructor name',
    title: 'Software Engineer',
    rating: 4.5,
    reviewersCount: 200,
    duration: 22,
    LecturesCount: 155,
    level: 'Beginner',
    students: 1200,
    imageUrl: topcourse,
    category: 'NEWS',
    flag: true,
  },
  {
    id: 2,
    instructorName: 'Lorem ipsum dolor sit amet.',
    title: 'Product Manager',
    rating: 4.7,
    reviewersCount: 200,
    duration: 22,
    LecturesCount: 155,
    level: 'All levels',
    students: 1500,
    imageUrl: topcourse,
    category: 'NEWS',
    flag: false,
  },
  // ... other instructors
];

export const coursesCart = [
  {
    id: 1,
    name: 'ahmed',
    title: 'Software Engineer',
    rating: 4.5,
    students: 1200,
    houre: '20h',
    leasons: '10',
    imageUrl: cartCourses,
    category: 'Accounting',
    flag: true,
  },
  {
    id: 2,
    name: 'mohamed',
    title: 'Product Manager',
    rating: 4.7,
    students: 1500,
    houre: '20h',
    leasons: '10',
    imageUrl: cartCourses,
    category: 'Accounting',
    flag: false,
  },

  // ... other instructors
];
