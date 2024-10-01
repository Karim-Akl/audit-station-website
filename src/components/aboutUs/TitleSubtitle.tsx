import React from 'react'

interface IProps {
   title: string,
   subTitle: string
}

const TitleSubtitle = ({ title, subTitle }: IProps) => {
   return (
      <div className='my-8'>
         <h3 className='text-3xl font-semibold'>{title}</h3>
         <p className='mt-4 text-[#5C5C5C]'>{subTitle}</p>
      </div>
   )
}

export default TitleSubtitle