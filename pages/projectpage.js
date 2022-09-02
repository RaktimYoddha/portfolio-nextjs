import Head from "next/head"
import { Getintouch } from "../components/Getintouch"
import { Footer } from "../components/Footer"
import Projects from "../components/Projects"

export default function Projectpage() {
  return (
    <div className="projectpage">
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/project.webp" />
      </Head>
    

      <Projects />

      

    </div>
  )
}