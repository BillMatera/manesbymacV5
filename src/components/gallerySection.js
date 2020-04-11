import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";
import imgtest from "../images/sample_pic.png" 
import "./layout.css"




const GallerySection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  
  function test() {
    console.log('testing');
    //document.getElementById('test1').style.display = 'none';
  };

  

  return (
    <div 
      style={{ height : blockHeight , backgroundColor: backgroundColorVal , marginTop: blockMarginTop }} 
      id="gallerySection"
    >
    <h1 style={{ textAlign: "center", padding: "25px", color: 'black', position : 'relative'}}>Gallery</h1>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div style={{ backgroundColor: 'black'}} class="carousel-inner">
    <div class="carousel-item active">
      <img className="img1" src={imgtest} class="w-400" alt="los angeles"></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="w-100" alt="..."></img>
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
