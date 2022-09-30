import { Image } from '@chakra-ui/react';
import React from 'react'

const BottomSection = () => {
  return (
    <div className='bottom_section'>
        <h3>DEMO</h3>
        <h1>Want a qiuck overview of TimeCamp?</h1>
        <h1>Just watch our product walkthrough</h1>
        <div>
            video section
        </div>
        <div className='cards'>
           <div className='small_cards'>
             <Image />
             <p> Automatic time tracking </p>
           </div>
           <div className='small_cards'>
           <Image />
             <p> Integrations with your favorite work tools </p>
           </div>
           <div className='small_cards'>
           <Image />
             <p> Useful reports with export opinions </p>
           </div>
           <div className='small_cards'>
           <Image />
             <p> Attendance, invoicing, budgeting and more </p>
           </div>
        </div>

    </div>
  )
}

export default BottomSection;