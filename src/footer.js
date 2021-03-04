import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const footer = () => {

   return (
    <div class="footer-container">
       <div class="footer-section1 section-row">
           <h2>Ace Analytics</h2>
         <div class="section1-row1">
            <a class="a-color" href="www.facebook.com">
              <FacebookIcon></FacebookIcon>
              <div> Facebook</div>
            </a>
         </div>
         <div class="section1-row2">
           <a class="a-color" href="www.linkedIn.com">
             <LinkedInIcon></LinkedInIcon>
              <div> linkedIn</div>
            </a>
         </div>
         <div class="section1-row2">
         <a class="a-color" href="www.youtube.com">
              <YouTubeIcon></YouTubeIcon>
              <div> You Tube</div>
            </a>
         </div>
       </div>
       <div class="footer-section2 section-row">
            <h3> Products</h3>
        <div class="section1-row1">
        <a class="a-color" href="www.aceanlytics.com">
              <div> Ace clients</div>
            </a>
        </div>
        <div class="section1-row2">
        <a class="a-color" href="www.aceanlytics.com">
              <div> Ace Products</div>
            </a>
        </div>
        <div class="section1-row2">
        <a class="a-color" href="www.aceanlytics.com">
              <div> Ace Services</div>
            </a>
        </div>
       </div>
       <div class="footer-section3 section-row">
           <h3>Company</h3>
           <div class="section1-row1">
           <a class="a-color" href="www.aceanlytics.com">
              <div> About us</div>
            </a>
            </div>
            <div class="section1-row2">
            <a class="a-color" href="www.aceanlytics.com">
              <div> Careers</div>
            </a>
            </div>
            <div class="section1-row2">
            <a class="a-color" href="www.aceanlytics.com">
              <div> Privacy</div>
            </a>
            </div>
       </div>

    </div>

   );

}
export default footer;