
import Head from 'next/head'
import Contact from '../components/Contact';
import { Home } from '../components/Home';
import { Getintouch } from '../components/Getintouch';

import Projects from '../components/Projects';
import Skills from '../components/Skills';




export default function Main() {

  
  return (
    <div className="main">
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
      

    </div>
  )
}

