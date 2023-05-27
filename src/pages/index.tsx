import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Navbar  from "../components/Navbar"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <Navbar />
      <h1>This is the home page</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Niall Byrnes</title>
