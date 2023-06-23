import * as React from "react"
import '../css/navbar.css'



const Footer = () => {
  return (
    <footer>
        <span>© {new Date().getFullYear()} Designed & Built by <a className="footer_link link" href="https://gloriacodes.com/">Gloria Mancini</a></span>
    </footer>
  )
}

export default Footer
