import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Navbar  from "../components/Navbar"


const PublicationsPage: React.FC<PageProps> = () => {
  return (
    <main >
      <Navbar />
      <div className="main">
        <h1>This is the publications page</h1>
      </div>
    </main>
  )
}

export default PublicationsPage

export const Head: HeadFC = () => <title>Niall Byrnes</title>
