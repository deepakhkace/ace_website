import React from 'react';
import './footer.css';
const footer = () => {

   return (
    <div class="footer-container">
       <div class="footer-section1">
           <h2>Ace Analytics</h2>
         <div class="section1-row1">
            <a href="www.facebook.com">
              <div> Facebook</div>
            </a>
         </div>
         <div class="section1-row2">
           <a href="www.linkedIn.com">
              <div> linkedIn</div>
            </a>
         </div>
         <div class="section1-row2">
         <a href="www.youtube.com">
              <div> You Tube</div>
            </a>
         </div>
       </div>
       <div class="footer-section2">
            <h3> Products</h3>
        <div class="section1-row1">
        <a href="www.aceanlytics.com">
              <div> Ace clients</div>
            </a>
        </div>
        <div class="section1-row2">
        <a href="www.aceanlytics.com">
              <div> Ace Products</div>
            </a>
        </div>
        <div class="section1-row2">
        <a href="www.aceanlytics.com">
              <div> Ace Services</div>
            </a>
        </div>
       </div>
       <div class="footer-section3">
           <h3>Company</h3>
           <div class="section1-row1">
           <a href="www.aceanlytics.com">
              <div> About us</div>
            </a>
            </div>
            <div class="section1-row2">
            <a href="www.aceanlytics.com">
              <div> Careers</div>
            </a>
            </div>
            <div class="section1-row2">
            <a href="www.aceanlytics.com">
              <div> Privacy</div>
            </a>
            </div>
       </div>

    </div>

   );

}
export default footer;