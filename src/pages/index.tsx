import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import '../css/main.css'
import Navbar  from "../components/Navbar"
import Card  from "../components/Card"
import Section from "../components/Section"
import Footer from "../components/Footer"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div >
      <Navbar />
      <main className="main main--home">
        <Card />
        <Section />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Niall Byrnes</title>
