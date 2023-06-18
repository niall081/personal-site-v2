import * as React from "react"
import '../css/main.css'
import Button from "./Button"
import { FaGraduationCap } from 'react-icons/fa'


const Section = () => {
  return (
    <div className="section">
        <h1 className="section_title">About me</h1>
        <p className="section_text">
        Hi, I’m Niall Byrnes. I’m currently pursuing a PhD in physics at <a className="link" href="https://www.imperial.ac.uk/"> Imperial College London</a> under the supervision of Dr. Matthew Foreman. My research is primarily focused on the scattering of polarised light in complex, mesoscopic scattering media. In particular, I have been exploring the application of random matrices to modelling the vectorial scattering matrix and have developed techniques for numerical simulations.
        </p>

        <p className="section_text">
        I worked as a mathematics teacher in an international high school in Shanghai for three years. At present, I occasionally do private tutoring in mathematics, physics and computer programming. I have also helped people with English proofreading and Chinese to English translations. 
        </p>
        
        <Button />
    </div>
  ) 
}

export default Section