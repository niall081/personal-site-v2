import * as React from "react"
import '../css/main.css'
import { FaGithub, FaResearchgate, FaOrcid} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { StaticImage } from "gatsby-plugin-image"



const Card = () => {
  return (
    <div className="card">
        <StaticImage 
            src="../images/icon.png" 
            alt="My picture" 
            width={200} 
            height={200} 
        />
        <h2 className="card_title">Niall Byrnes</h2>
        <div>Research Associate</div>
        <div className="wrapper_link"><a className="link" href="https://www.mrforeman.com/">Optical Theory Group</a></div>
        <div className="wrapper_link"><a className="link" href="https://www.ntu.edu.sg/">NTU Singapore</a></div>

        <div className="card_socials">
          <a className="card_socials_icon" href="mailto:niallfrancis.byrnes@ntu.edu.sg" ><FiMail /></a>
          <a className="card_socials_icon" href="https://github.com/niall081" ><FaGithub /></a>
          <a className="card_socials_icon" href="https://www.researchgate.net/profile/Niall-Byrnes" ><FaResearchgate /></a>
          <a className="card_socials_icon" href="https://orcid.org/0000-0002-1554-3820"><FaOrcid /></a>
        </div>
    </div>
  ) 
}

export default Card