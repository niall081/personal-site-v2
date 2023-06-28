import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar  from "../components/Navbar"
import Footer from "../components/Footer"
import Article from "../components/Article"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaBook, FaFilePdf} from 'react-icons/fa'

const PublicationsPage: React.FC<PageProps> = () => {
  return (
    <div className="parent">
      <Navbar />
      <main className="main">
        <h1 className="section_title">Publications</h1>
          <div id="journal-articles">
            <h2 className="section_title--secondary"><span className="list_number--big">01.</span>Journal Articles</h2>

            {/* First one */}
            <div className="grid row">
            <StaticImage 
                  src="../images/icon.png" 
                  alt="My picture" 
                  className="row_img" 
                />
            <div>
                <h3 className="row_text--title">"Random matrix theory of polarized light scattering in disordered media"</h3>
                <p className="row_text">"N. Byrnes and M. R. Foreman, Waves Random Complex Media, in press (2022)"</p>
            </div>
            <div className="card_socials">
                <a className="card_socials_icon" href="https://www.tandfonline.com/doi/full/10.1080/17455030.2022.2153305"><FaBook /></a>
                <a className="card_socials_icon" href="../downloads/articles/article004.pdf"><FaFilePdf /></a>
                <a className="card_socials_icon" href="https://github.com/niall081/random-matrix-polarized-scattering"><FaGithub /></a>
            </div>
            </div>

            {/* Second one */}
            <div className="grid row">
            <StaticImage 
                  src="../images/icon.png" 
                  alt="My picture" 
                  className="row_img" 
                />
            <div>
                <h3 className="row_text--title">"Random matrix theory of polarized light scattering in disordered media"</h3>
                <p className="row_text">"N. Byrnes and M. R. Foreman, Waves Random Complex Media, in press (2022)"</p>
            </div>
            <div className="card_socials">
                <a className="card_socials_icon" href="https://www.tandfonline.com/doi/full/10.1080/17455030.2022.2153305"><FaBook /></a>
                <a className="card_socials_icon" href="../downloads/articles/article004.pdf"><FaFilePdf /></a>
                <a className="card_socials_icon" href="https://github.com/niall081/random-matrix-polarized-scattering"><FaGithub /></a>
            </div>
            </div>


          </div>
      </main>
      <Footer />
    </div>
  )
}

export default PublicationsPage

export const Head: HeadFC = () => <title>Niall Byrnes</title>
