import * as React from "react"
import '../css/main.css'
import { FaGraduationCap } from 'react-icons/fa'


const Section = () => {
  return (
    <div className="section">
        <h1 className="section_title">About me</h1>
        <p className="section_text">
        Hi, I’m Niall. I’m a research associate based in the <span className="wrapper_link"><a className="link" href="https://www.ntu.edu.sg/eee">School of Electrical and Electronic Engineering</a></span> at NTU Singapore. My work primarily concerns the scattering of polarised light in random media.
        </p>
        <p className="section_text">
        I completed my PhD in 2023 at <span className="wrapper_link"><a className="link" href="https://www.imperial.ac.uk/photonics/">Imperial College London</a></span>. In my thesis, I developed computational methods for generating random scattering matrices whose statistical properties more accurately resemble those of realistic scattering media.
        </p>
        <p className="section_text">
        I’ve previously worked as a mathematics teacher in Shanghai and occasionally take on private students. Outside of work, I’m also an avid language learner and constantly strive to improve my Mandarin skills.
        </p>
        <p className="section_text">
        If you would like to <span className="wrapper_link"><a className="link" href="mailto:niallfrancis.byrnes@ntu.edu.sg">get in touch</a></span>, please don't hesitate to do so! 
        </p>
    </div>
  ) 
}

export default Section