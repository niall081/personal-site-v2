import * as React from "react"
import { Link } from "gatsby"

const NavbarStyle = {
    display: "flex",
    gap: "10px"
}

const Navbar = () => {
  return (
    <div style={NavbarStyle}>
      <Link to="/">Home</Link>
      <Link to="/publications">Publications</Link>
    </div>
  )
}

export default Navbar
