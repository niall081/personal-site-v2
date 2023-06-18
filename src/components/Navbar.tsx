import * as React from "react"
import { Link } from "gatsby"
import '../css/navbar.css'



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_wrapper">
        <Link className="navbar_link" to="/">Home</Link>
        <Link className="navbar_link" to="/publications">Publications</Link>
      </div> 
    </nav>
  )
}

export default Navbar
