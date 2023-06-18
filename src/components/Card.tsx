import * as React from "react"
import '../css/main.css'
import { FaGithub, FaResearchgate, FaOrcid } from 'react-icons/fa'




const Card = () => {
  return (
    <div className="card">
        <div><img src="" alt="" /></div>
        <h2 className="card_title">Niall Byrnes</h2>
        <div>Physics researcher at</div>
        <div className="wrapper_link"><a className="link" href="https://www.mrforeman.com/">Optical Theory Group</a></div>
        <div className="wrapper_link"><a className="link" href="https://www.ntu.edu.sg/">NTU Singapore.</a></div>

        <div className="card_socials">
          <a className="card_socials_icon" href="https://github.com/niall081" ><FaGithub /></a>
          <a className="card_socials_icon" href="https://www.researchgate.net/profile/Niall-Byrnes" ><FaResearchgate /></a>
          <a className="card_socials_icon" href="https://orcid.org/0000-0002-1554-3820"><FaOrcid /></a>
        </div>
    </div>
  ) 
}

export default Card