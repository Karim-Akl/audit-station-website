import React from 'react'
import FormattedText from '../formattedText/FormattedText'

interface IProps {
   title: string,
   subTitle: string
}

const TitleSubtitle = ({ title, subTitle }: IProps) => {
   return (
      <div className='my-8'>
         <h3 className='text-3xl font-semibold'>{title}</h3>
         <FormattedText htmlText={subTitle} />

      </div>
   )
}

export default TitleSubtitle