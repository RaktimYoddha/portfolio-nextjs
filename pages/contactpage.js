import Head from "next/head"
import Contact from "../components/Contact"


export default function Contactpage() {
  return (
    <div className="contactpage">
      <Head>
        <title>Portfolio | Contact</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/project.webp" />
    </Head>  
    <Contact/>
    </div>
  )
}