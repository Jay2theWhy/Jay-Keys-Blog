import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/index/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/contact">Gallery</Link>
    <ThemeChanger/>
  </nav>
  
)