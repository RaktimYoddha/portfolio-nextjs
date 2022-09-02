import Head from 'next/head'
import { Aboutme } from '../components/Aboutme';
import { Getintouch } from '../components/Getintouch';

import Skills from '../components/Skills';

export default function About() {
  return (
    <div className="aboutpage">
      <Head>
        <title>Portfolio | About</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/project.webp" />
      </Head>
    

      <Aboutme/>
      <Skills/>
      

    </div>
  )
}