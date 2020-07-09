import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "../components/image"
// import { url } from "inspector";


if (typeof window !== 'undefined') {
  window.initMap = function() {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.193240, lng: -74.165349 },
      zoom: 11,
    })
    var marker = new window.google.maps.Marker({
      position:  { lat: 40.193240, lng: -74.165349 }
    })
    marker.setMap(map);
  }
}

const ContactUs = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  return (
    <div 
      style={{ height : blockHeight , backgroundColor: '#f7f7f7' }} 
      id="contactSection"
    >
      <h1 style={{ textAlign: "center", padding: "25px" , position : 'relative' , paddingTop : '100px'}}>Contact Us</h1>
      <div className="row contact-us-row">
       
        <div className="col-lg-12">

          <div className="row"> 
          
            <div className="col-lg-5">

              <p className="" style={{ whiteSpace : 'pre-wrap' , paddingTop : '15px' }}><b>Location : Cathy and  Danielle's Hair Salon</b> </p>

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>      
                <b>T |&nbsp;732-938-3011</b>
                <br /><br />
                <b>SALON HOURS</b>
                <br />Monday: Closed<br />Tuesday:&nbsp; 10am-7pm<br />Wednesday: 10am-7pm<br />Thursday: &nbsp;10am-8pm<br />Friday: &nbsp;10am-7pm<br />Saturday: 9am-5pm<br />Sunday: Closed      
              </p>

              {/* <p className="" style={{ whiteSpace : 'pre-wrap' }}><b>Location : Cathy and  Danielle's Hair Salon</b> </p> */}

              <p className="" style={{ whiteSpace : 'pre-wrap' }}>
                <b>Address</b>
                <br />
                93 Main Street , Farmingdale, NJ 07727
              </p>

            </div>

            <div className="col-lg-1"></div>

            <div id="map" className="col-lg-6 map-buffer" style={{ width: "100%" , height :"400px", backgroundColor : "grey"}}>
            Google Map

            </div>
          
          </div>

        </div>
      
      </div>

    </div>
  )
}

ContactUs.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

ContactUs.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default ContactUs  
