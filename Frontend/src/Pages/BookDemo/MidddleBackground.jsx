import { Image } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from '@chakra-ui/icons';
 
const MidddleBackground = () => {
  return (
    <>
    <div className="background">
      <h1>
        Trusted by 18,000 teams from all over the world(and still growing!)
      </h1>
      <div className="images">
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
            alt="usp"
          />
        </div>
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
            alt="dsv"
          />
        </div>
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
            alt="usp"
          />
        </div>
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
            alt="usp"
          />
        </div>
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
            alt="usp"
          />
        </div>
        <div>
          <Image
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
            alt="usp"
          />
        </div>
      </div>
      <div className="review_container">
        <div className="review_card">
          <p> Great asset to managing our marketing agency. 
           We love the ease it takes to input times. 
           We never have to worry about time record keeping because TimeCamp does it so accurately. 
           It makes creating our invoices at the end of each month so much easier.</p>
          <p>Review from <span>GetApp.com</span></p>
          <div>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
          </div>
        </div>
        <div className="review_card">
          <p>
          Our business problem was simple - at any given time we have 20 or so contractors working on a handful of different projects 
          and we needed to be scientific about knowing how many of whose hours were being spent on which project. 
          TimeCamp solved this problem well and simply. </p>
          <h5>Noah</h5>
          <div>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
          </div>
        </div>
        <div className="review_card">
          <p>
          We've tried a lot of tools and the integration, flexibility and fast array of features 
          that come with TimeCamp have really made this tool stand out and pay for itself. 
          It connects to a number of tools we use like our in house project management tools, 
          our client's project management tools and our accounting software.</p>
          <h5>Jakes</h5>
          <div>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
          </div>
        </div>
        <div className="review_card">
          <p>
          The primary reason I chose TimeCamp was the direct timekeeping-to-invoicing function, 
          which has been a tremendous timesaver. 
          I love the way it shows me what I'm spending my time on even when I'm not logging billable hours.</p>
          <h5>Kathryn</h5>
          <div>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
            <StarIcon color='#25CF60'/>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default MidddleBackground;
