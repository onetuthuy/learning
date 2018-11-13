import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/about">About</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/instagram">Instagram</Link>
      <Link to="/contact"><button>Contact</button></Link>
  </div>
</div>  
)

export default Header
