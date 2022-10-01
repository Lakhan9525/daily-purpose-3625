import { Image } from '@chakra-ui/react';
import React from 'react';
// import VideoPlayer from 'react-video-js-player';
import './BookDemo.css';
import ReactPlayer from 'react-player';

const BottomSection = () => {

    // const videoSrc = "https://www.youtube.com/embed/ctlEnvcy6CY";
    // const poster = "https://cdn-m.timecamp.com/img/landing-page/video-free-demo.jpg"

  return (
    <div className='bottom_section'>
        <h3>DEMO</h3>
        <h1>Want a qiuck overview of TimeCamp?</h1>
        <h1>Just watch our product walkthrough</h1>
        
        <div className='video_box'><ReactPlayer  url='https://youtu.be/ctlEnvcy6CY' width='320'  /></div>
       
        <div className='cards'>
           <div className='small_cards'>
             <div><Image src='https://cdn-m.timecamp.com/img/landing-page/emplyee-monitoring/automatic-time-tracking.svg'/></div>
             <p> Automatic time tracking </p>
           </div>
           <div className='small_cards'>
             <div><Image src='https://cdn-m.timecamp.com/img/landing-page/integration-02.png'/></div>
             <p> Integrations with your favorite work tools </p>
           </div>
           <div className='small_cards'>
             <div><Image src='https://cdn-m.timecamp.com/img/landing-page/emplyee-monitoring/Computer-monitoring.svg'/></div>
             <p> Useful reports with export opinions </p>
           </div>
           <div className='small_cards'>
             <div><Image src='https://cdn-m.timecamp.com/img/landing-page/attendance-check.svg'/></div>
             <p> Attendance, invoicing, budgeting and more </p>
           </div>
        </div>
    </div>
  )
}

export default BottomSection;