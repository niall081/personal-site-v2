import * as React from "react"
import '../css/main.css'
import Button from "./Button"
import { FaGraduationCap } from 'react-icons/fa'


const Section = () => {
  return (
    <div className="section">
        <h1 className="section_title">About me</h1>
        <p className="section_text">
        Hi, I’m Niall Byrnes. I’m a research associate based in the School of Electronic and Electrical Engineering at NTU Singapore. My work primarily involves theoretical and computational modelling of the scattering of polarised light in random media.
        </p>
        <p className="section_text">
        I completed my PhD in 2023 at Imperial College London, where I studied applications of random matrix theory to modelling the multiple scattering of polarised light. In particular, I developed computational methods for generating random scattering matrices whose statistical properties more accurately resemble those of realistic scattering media.
        </p>
        <p className="section_text">
        In the past I’ve worked as a mathematics teacher in Shanghai and, at present, I occasionally accept new students for private tutoring. Outside of work, I’m also an avid language learner and constantly strive to improve my Mandarin skills.
        </p>
        <p className="section_text">
        If you would like to get in touch, please don't hesitate to do so! 
        </p>
    </div>
  ) 
}

export default Section