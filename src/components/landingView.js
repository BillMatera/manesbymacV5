import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import testvid from "../images/under-sea-zipped.mp4"
import vidPoster from "../images/background-poster.png"
import LandingImg from "-!svg-react-loader!../assets/undraw_jewelry_iima.svg"
import $ from 'jquery';

const LandingView = ({ }) => {
  
  // include jquery
  //const $ = require("jquery");
  //typeof $ !== `undefined` ? require("jquery") : null
  //const $ = typeof window !== `undefined` ? require("jquery") : null

  if (typeof window !== `undefined`) {
/* ----------------
    // set onclick events for the desktop menu
  ---------------- */
  function isPlaying() {
    let backgroundVideo = document.getElementsByClassName('vidtest2')[0];
    return !!(backgroundVideo.currentTime > 0 && !backgroundVideo.paused && !backgroundVideo.ended && backgroundVideo.readyState > 2);
  }

  function iOSDevice() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        return true;
    }
  }
  
  $( document ).ready(function() { 
    
    // document.getElementsByClassName('vidtest2')[0].addEventListener('suspend', (event) => {
    //   console.log('suspend event triggered');
    //   // if user is on IOS device in low power mode HTML5 video tags will not autoplay
    //   if (!isPlaying() && iOSDevice() ) {
    //     //document.getElementById('landing-block').classList.add('alternate-landing-view');
    //   }
    //   //document.getElementById('landing-block').classList.add('alternate-landing-view');
    //   let backgroundVideo = document.getElementsByClassName('vidtest2')[0];
    //   $('body').on('click touchstart', function () {
    //     if (!isPlaying()) {
    //         // user has interacted with the page, play background video
    //         backgroundVideo.play();
    //     }
    //   }); 
    // });

  });
  
}
  
  
  return (
    
    <div className="banner bg-diagnal main-block">
      <div className="landing-view row" id="landing-block">
      <div className="col-lg-6 col-md-6 col-sm-4">
        <div className="landing-margin-desktop">
        <h2 style={{ zIndex : '2' , position : 'relative' , fontFamily : " 'Pacifico', cursive " 
                    , textAlign : 'center' , fontSize : '75px' , textShadow : 'rgba(0, 0, 0, 0.3) -10px 10px 18px, rgba(192, 128, 255, 0.1) 10px -10px 30px'}} >MM</h2>

        <h2 style={{ zIndex : '2' , position : 'relative' , paddingTop : '50px' , fontFamily : " 'Quicksand', sans-serif " 
                    , textAlign : 'center' , fontSize : '50px'}} >Manes By Macey</h2>

        <h2 style={{ zIndex : '2' , position : 'relative' , paddingTop : '35px' , fontFamily : " 'Quicksand', sans-serif" 
                    , textAlign : 'center' , fontSize : '18px'}} >Hair Artist Based in Central New Jersey</h2>     
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-4" >
          <div>
          <LandingImg style={{ height: '300px' , width : '300px' , marginLeft: '15%'}} />
          </div>
      </div>
      </div>
      {/* <video src={testvid+'#t=0.1'} className="" id="vid"  preload muted="true" autoplay="autoplay" playsinline="playsinline" loop="loop" ></video> */}
    </div>

  )
}

LandingView.propTypes = {

}

LandingView.defaultProps = {

}

export default LandingView  