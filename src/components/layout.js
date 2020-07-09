/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavHeader from "../components/navbar"
import ContentBlock from "./contentblock"
import ContactUs from "./contactus"
import Image from "../components/image"

import Header from "./header"
import "./layout.css"
import ServicesSection from "./servicesSection";
import GallerySection from "./gallerySection";
import LandingView from "./landingView";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      

      {/* include Navigation component  */}
      <NavHeader />
      
      {/* include sample content block components  */}
      <LandingView />
      
      {/* include Services Section component  */}
      <ServicesSection blockHeight={'auto'} />
      

      {/* include Gallery Section component  */}
      <GallerySection blockHeight={'auto'} backgroundColorVal={'white'}/>

      
      {/* include Contact Us component  */}
      <ContactUs blockHeight={'auto'} backgroundColorVal={'#D1D7E0'} />

      

      



      {/* @@TODO - should be removed - do we want small 1 line footer? */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          position: 'relative',
          height: '30px',
          fontSize: '12px',
          textAlign: 'center'
        }}
      >
        <main>{children}</main>
        <footer style={{ backgroundColor : '#f7f7f7' , color : 'black' }}>
          <div class="col-lg-12"> 
          <span>
          © {new Date().getFullYear()}, R&B Technology
          </span>
            </div>
        </footer>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
