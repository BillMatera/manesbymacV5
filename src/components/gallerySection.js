import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";
import hair1 from "../images/hair_1-min.jpg"
import hair2 from "../images/hair_2-min.jpg"
import hair3 from "../images/hair_3-min.jpg"
import hair4 from "../images/hair_4-min.jpg"
import hair5 from "../images/hair_5-min.jpg"
import "./layout.css"
import $ from 'jquery'




const GallerySection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  
  function test() {
    console.log('testing');
    //document.getElementById('test1').style.display = 'none';

  };


  // if (typeof window !== `undefined`) {
  //   $('.carousel').carousel({
  //     interval: 2000
  //   });
  // }


  
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop , paddingTop : '200px' }} 
      id="gallerySection"
    >

    <h1 style={{ textAlign: "center", padding: "25px", color: 'black', position: 'relative'}}>Gallery</h1>

    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">
  <div style={{ backgroundColor: 'rgba(233, 246, 251, 0.5)'}} class="carousel-inner">
    <div class="carousel-item active">
      <img id="mobileimg" className="img1" src={hair3} class="w-400 img1" alt="los angeles"></img>
    </div>
    <div class="carousel-item">
      <img id="mobileimg" className="img1" src={hair1} class="w-400 img1" alt="los angeles"></img>
    </div>
    <div class="carousel-item">
      <img id="mobileimg" className="img1" src={hair2} class="w-400 img1" alt="los angeles"></img>
    </div>
    <div class="carousel-item">
      <img id="mobileimg" className="img1" src={hair4} class="w-400 img1" alt="los angeles"></img>
    </div>
    <div class="carousel-item">
      <img id="mobileimg" className="img1" src={hair5} class="w-400 img1" alt="los angeles"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  

    </div>
  )
}

GallerySection.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

GallerySection.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default GallerySection  
