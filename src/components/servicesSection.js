import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import Image from "./image"
import $ from 'jquery'




const ServicesSection = ({ blockHeight , backgroundColorVal , blockMarginTop}) => {
  /* --- Services Section JS START --- */ 

  if (typeof window !== `undefined`) {

  /* ----------------
    // set onclick events for each category element
  ---------------- */
  $( document ).ready(function() {
    // set onclick listeners for desktop menu to show correct content for each category 
    setDesktopServicesEvents();
    // set onclick listeners for mobile dropdown to show correct content for each category 
    setMobileServicesEvents();
    // set up drop down content 
    slideDropDown();
  });
    

  /* ----------------
    // set onclick events for the desktop menu
  ---------------- */
  function setDesktopServicesEvents() {
    // get all categories <a> elements in a collection
    var sericeCategories = $('.services-category');
    // for each category found
    for(var i = 0; i < sericeCategories.length; i++) {
        var category = sericeCategories[i];
        // set onclick event for current category in the list
        category.onclick = function(e) {
          // find the previously selected category & remove acitve css class
          var activeSericeCategories = $('.active-category');
          if ( activeSericeCategories.length > 0 ) {
            for(var i = 0; i < activeSericeCategories.length; i++) {
              var activeCategory = activeSericeCategories[i];
              $(activeCategory).removeClass('active-category');
            };
          }
          // get id of the <a> that the user most recently selected
          var eventId = e.currentTarget.id;
          // add acitve css class to selected category
          $('#' + eventId).addClass('active-category');
          // show selected category's content
          toggleServiceView(e);
          console.log(e.target.id, e.target.innerHTML);
        }
    }
  }


  /* ----------------
    // set onclick events for the mobile dropdown 
  ---------------- */
  function setMobileServicesEvents() {
    // get all categories <a> elements in a collection
    var sericeCategories = $('.category-mobile');
    // for each category found
    for(var i = 0; i < sericeCategories.length; i++) {
        var category = sericeCategories[i];
        // set onclick event for current category in the list
        category.onclick = function(e) {
          // find the previously selected category & remove acitve css class
          var activeSericeCategories = $('.active-category-mobile');
          if ( activeSericeCategories.length > 0 ) {
            for(var i = 0; i < activeSericeCategories.length; i++) {
              var activeCategory = activeSericeCategories[i];
              $(activeCategory).removeClass('active-category-mobile');
            };
          }
          // get id of the <a> that the user most recently selected
          var eventId = e.currentTarget.id;
          // add acitve css class to selected category
          $('#' + eventId).addClass('active-category-mobile');
          // set selected category text to dropdown title
          $('.services-dropdown-title').text( $('#' + eventId).text() );
          // show selected category's content
          $('.dropdown-menu').slideUp('medium');
          toggleServiceView(e);
          console.log(e.target.id, e.target.innerHTML);
        }
    }
  }


  /* ----------------
    // hide / show correct content based on selected category

    @param event - The DOM element object that the user selected
  ---------------- */
  function toggleServiceView(event) {
    // get all content <ul> elements in a collection
    var serviceCategoryViews = $('.collapse');
    console.log(serviceCategoryViews);
    // for each view <ul> block found
    for(var i = 0; i < serviceCategoryViews.length; i++) {
      var view = serviceCategoryViews[i];
      // find the <ul> block that is currently shown and hide it
      if (view.classList.contains('show') && view.id !== event.target.id ){
        event.preventDefault();
        //$(view).collapse();
        $(view).removeClass('show');       
      } 
      // else if it is the new <ul> block , show it
      else if (view.id === event.target.id) {
        event.preventDefault();
        $(view).collapse();
      }
    }
  };


  function slideDropDown() {
    $('#dropdownMenu2')[0].onclick = function(event) { 
      console.log('click')
      event.preventDefault();
      var dropDownMenu = $('.dropdown-mobile');
      if ( $('.drop-mobile')[0].classList.contains('show') ) {
        $('.dropdown-menu').slideUp('medium');
      } else {
        $('.dropdown-menu').slideDown('medium');
      }
    }
  };

  /* --- Services Section JS END --- */ 
  }

  return (
    <>
    <div 
      style={{ height : blockHeight , marginTop: blockMarginTop  }} 
      id="servicesSection"
      className="Logo"
    > 
      <div className="row" style={{ padding: '25px'  }}>
       
        <div className="col-lg-12">
          <h1 className="services-title" style={{ textAlign : 'center' }}> Services </h1>

          <div className="row"> 
          
            <div className="col-lg-12" style={{ display: 'flex' , flexWrap : 'wrap'}}>
              
              <div className="col-lg-1"></div>
              
              {/* START of vertical category list */}
              <div className="col-one skills-col col-lg-4 col-md-4 hidden-xs " style={{ textAlign : 'center', paddingBottom : '50px' }}>

                <a id="cutsAnchor" className="services-category active-category" data-toggle="collapse" data-target=".multi-collapse" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Cuts & Combo </h5> </a>

                <a id="colorAnchor" className="services-category" data-toggle="collapse" data-target="#testId1" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Color </h5> </a>

                <a id="bleachAnchor" className="services-category" data-toggle="collapse" data-target="#testId3" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Bleaching Serivces </h5> </a>

                <a id="extensionsAnchor" className="services-category" data-toggle="collapse" data-target="#testId5" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Extensions </h5> </a>

                <a id="keratinAnchor" className="services-category" data-toggle="collapse" data-target="#testId6" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Keratin Treatments </h5> </a>

              </div>
              {/* END of vertical category list */}

              <div class="dropdown visible-xs-only col-sm-12 col-xs-12 services-dropdown" style={{ textAlign : 'center' }}>
               
                <button class="btn btn-secondary dropdown-toggle dropdown-title" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ width : '220px' , borderRadius : '0rem' ,
                    backgroundColor : 'rgba(161,167,172,0.7)' }}>
                  <div class="services-dropdown-title" style={{ display : 'inline' }}>Cuts & Combo</div>
                  <div class="fas fa-chevron-down" aria-hidden="true" style={{ color : 'white' , borderRadius : '0rem' , marginLeft : '10px' }}></div>
                </button>
                
                <div class="dropdown-menu drop-mobile" aria-labelledby="dropdownMenu2" style={{ width : '220px' , borderRadius : '0rem' , backgroundColor: 'lightgray' }}>
                  
                  <a id="cutsAnchorMobile" className="category-mobile active-category-mobile" data-toggle="collapse" data-target=".multi-collapse" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Cuts & Combo </h5> </a>

                  <a id="colorAnchorMobile" className="category-mobile" data-toggle="collapse" data-target="#testId1" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Color </h5> </a>

                  <a id="bleachAnchorMobile" className="category-mobile" data-toggle="collapse" data-target="#testId3" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Bleaching Serivces </h5> </a>

                  <a id="extensionsAnchorMobile" className="category-mobile" data-toggle="collapse" data-target="#testId5" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Extensions </h5> </a>

                  <a id="keratinAnchorMobile" className="category-mobile" data-toggle="collapse" data-target="#testId6" href="#0" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><h5 className="services-h3"> Keratin Treatments </h5> </a>

                </div>



              </div>

              {/* START of category Views */}
              <div className="col-one tab-content skills-col col-lg-5 col-md-8 .d-none .d-sm-block" style={{ textAlign : 'center', paddingBottom : '50px' , backgroundColor : 'rgba(233, 246, 251, 0.4)'}}>

                <ul id="testId" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse multi-collapse show">
                    <li> <h6 style={{  paddingTop : '10px'  }}> WOMAN </h6> </li> 
                    <li> $35+ with blowout </li> 
                    <li> $25+ with blowout </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> CHILDREN </h6> </li> 
                    <li> $20+ with blowout </li> 
                    <li> $15+ with blowout </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> TRIM </h6> </li>
                    <li> $15+ </li>  
                  </ul>

                  <ul id="testId1" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse">
                    <li> <h6 style={{  paddingTop : '10px'  }}> Down Style </h6> </li> 
                    <li> $50+ </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Up do </h6> </li> 
                    <li> $75+ </li> 
                    <li> Will pay for the hair the day we order it </li> 
                    <li> Will pay for the installation the day we order it </li>
                    <li> <h6 style={{  paddingTop : '10px'  }}> Tape in strand </h6> </li> 
                    <li> $5 per strand </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Fusion/micro-bead/I-tip strand </h6> </li> 
                    <li> $10 per strand </li> 
                  </ul>

                  <ul id="testId2" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse  multi-collapse show ">
                    <li> <h3 style={{  paddingTop : '30px'  }}> Combo </h3> </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Color, Hair Cut, and Blowout </h6> </li> 
                    <li> 95$ </li> 
                  </ul> 

                  <ul id="testId3" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse ">
                    <li> <h6 style={{  paddingTop : '10px'  }}> Partial Hightlights </h6> </li> 
                    <li> $75+ </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Full Head Hightlights </h6> </li> 
                    <li> $100+ </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Ombre </h6> </li> 
                    <li> $120+ </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Full Head Hightlights </h6> </li> 
                    <li> $100+ </li> 
                  </ul>

                  <ul id="testId5" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse ">
                    <li> <h6 style={{  paddingTop : '10px'  }}> Down Style </h6> </li> 
                    <li> $50+ </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Up do </h6> </li> 
                    <li> $75+ </li> 
                    <li> Will pay for the hair the day we order it </li> 
                    <li> Will pay for the installation the day we order it </li>
                    <li> <h6 style={{  paddingTop : '10px'  }}> Tape in strand </h6> </li> 
                    <li> $5 per strand </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Fusion/micro-bead/I-tip strand </h6> </li> 
                    <li> $10 per strand </li> 
                  </ul>

                  <ul id="testId6" style={{ listStyleType : 'none' , margin : 0 }}
                    className="collapse ">
                    <li> <h6 style={{  paddingTop : '10px'  }}> Regular Signature Treatment </h6> </li> 
                    <li> $27 , 3 day marginal needed </li> 
                    <li> Stronger treatment , lasts 4-6 months , Eliminates frizz without straightning hair </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Express Blowout </h6> </li> 
                    <li> $12 </li> 
                    <li> Lighter treatment , lasts 6-8 weeks , Eliminates frizz without straightning hair </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> KCMAX Treatment </h6> </li> 
                    <li> $25 </li> 
                    <li> Strongest Solution , lasts 4-6 months , Completley Eliminates frizz while flattening the hair and slightly straightening it </li> 
                    <li> <h6 style={{  paddingTop : '10px'  }}> Keratin Shot </h6> </li> 
                    <li> $25 </li> 
                    <li> Lightest treatment as it does not elimate frizz or straighten hair permanently, This is a conditioning treatment meant for damaged or unruly hair , Can be added to your bleach or color  </li> 
                  </ul>

              </div>
              {/* END of category Views */}
   
            </div>
          </div>

        </div>
      
       </div>
      </div>
    </>
  )
}

ServicesSection.propTypes = {
  blockHeight : PropTypes.number,
  backgroundColorVal: PropTypes.string,
  blockMarginTop: PropTypes.number
}

ServicesSection.defaultProps = {
  blockHeight: 500,
  backgroundColorVal: 'lightgrey',
  blockMarginTop: 0
}

export default ServicesSection