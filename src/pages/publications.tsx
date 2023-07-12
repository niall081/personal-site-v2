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

    <section className="publications_section--mod">
        
        <h1 className="section_title">Publications</h1>
          <div id="journal-articles">
            <h2 className="section_title--secondary"><span className="list_number--big">01.</span>Journal Articles</h2>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className="grid publication_wrapper">
              <StaticImage 
                    src="../images/article004.png" 
                    alt="Article 004" 
                    className="publication_img" 
                  />
              <div>
                  <h3 className="publication_text--title">"Random matrix theory of polarized light scattering in disordered media"</h3>
                  <p className="publication_text--citation">"N. Byrnes and M. R. Foreman, Waves Random Complex Media, in press (2022)"</p>
              </div>
              <div className="card_socials">
                  <a className="card_socials_icon" href="https://www.tandfonline.com/doi/full/10.1080/17455030.2022.2153305"><FaBook /></a>
                  <a className="card_socials_icon" href="/src/publications/article004.pdf"><FaFilePdf /></a>
                  <a className="card_socials_icon" href="https://github.com/niall081/random-matrix-polarized-scattering"><FaGithub /></a>
              </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className="grid publication_wrapper">
            <StaticImage 
                  src="../images/article003.png" 
                  alt="Article 003" 
                  className="publication_img" 
                />
            <div>
                <h3 className="publication_text_text--title">"Polarisation statistics of vector scattering matrices from the circular orthogonal ensemble"</h3>
                <p className="publication_text--citation">"N. Byrnes and M. R. Foreman, Opt. Commun. 503, 127462 (2022)"</p>
            </div>
            <div className="card_socials">
                <a className="card_socials_icon" href="https://www.sciencedirect.com/science/article/abs/pii/S0030401821007112?via%3Dihub"><FaBook /></a>
                <a className="card_socials_icon" href="/src/publications/article004.pdf"><FaFilePdf /></a>
            </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className="grid publication_wrapper">
            <StaticImage 
                  src="../images/article002.png" 
                  alt="Article 002" 
                  className="publication_img" 
                />
            <div>
                <h3 className="publication_text--title">"Symmetry constraints for vector scattering and transfer matrices containing evanescent components: 
                        energy conservation, reciprocity and time reversal"</h3>
                <p className="publication_text--citation">"N. Byrnes and M. R. Foreman, Phys. Rev. Research 3, 013129 (2021)"</p>
            </div>
            <div className="card_socials">
                <a className="card_socials_icon" href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013129"><FaBook /></a>
                <a className="card_socials_icon" href="/src/publications/article002.pdf"><FaFilePdf /></a>
            </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className="grid publication_wrapper">
            <StaticImage 
                  src="../images/article001.png" 
                  alt="Article 001" 
                  className="publication_img" 
                />
            <div>
                <h3 className="publication_text--title">"Universal bounds for imaging in scattering media"</h3>
                <p className="publication_text--citation">"N. Byrnes and M. R. Foreman, New J. Phys. 22, 083023 (2020)"</p>
            </div>
            <div className="card_socials">
                <a className="card_socials_icon" href="https://www.sciencedirect.com/science/article/abs/pii/S0030401821007112?via%3Dihub"><FaBook /></a>
                <a className="card_socials_icon" href="/src/publications/article004.pdf"><FaFilePdf /></a>
            </div>
            </div>


          </div>
          </section>
      </main>
      <Footer />
    </div>
  )
}

export default PublicationsPage

export const Head: HeadFC = () => <title>Niall Byrnes</title>
