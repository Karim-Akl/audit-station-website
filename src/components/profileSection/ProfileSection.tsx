'use client';

import * as React from 'react';

interface ProfileSectionProps {
  steps: {
    page?: string;
    date: string;
    company?: string;
    description: string;
    degree?: string;
  }[];
  label: string;
}

export default function ProfileSection({ steps, label }: ProfileSectionProps) {
  return (
    <>
      <h1 className='text-xl font-bold mb-4'>{label}</h1>
      <div className='flex flex-col items-start gap-8'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex items-start gap-8 relative flex-noWrap'
          >
            <div className='absolute left-2 w-px h-full bg-[#BAE9F4]'></div>
            <div className='bg-[#22B9DD] w-4 h-4 rounded-full absolute'></div>
            <div className='ms-8'>
              <p className='text-[#767676] text-xs font-semibold mb-1'>{step.date}</p>
              {step.company && <p className='my-2 text-md font-semibold'>{step.company}</p>}
              <h1 className={`font-bold ${step.page === 'instructor' ? 'text-[#767676]' : ''}`}>{step.description}</h1>
              {step.degree && (
                <span className='text-[#767676] text-xs font-semibold mt-1'>{step.degree}</span>
              )}{' '}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
