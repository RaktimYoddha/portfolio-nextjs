import Head from "next/head"
import { Blogs } from "../components/Blogs"

export default function blogpage() {
  return(
  <div className="blogpage">
      <Head>
        <title>Portfolio | Blogs</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/project.webp" />
    </Head>  
    <Blogs/>
    </div>
  )
}