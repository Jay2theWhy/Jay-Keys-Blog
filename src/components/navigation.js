import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/">Home</Link>
    <Link to="/404">Gallery</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)