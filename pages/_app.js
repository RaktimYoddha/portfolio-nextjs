import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Getintouch } from '../components/Getintouch';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


config.autoAddCss = false; /* eslint-disable import/first */

library.add(fab)

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 5000);
    router.events.on('routerChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routerChangeError', handleComplete)

    return () => {
    router.events.off('routerChangeStart', handleStart)
    router.events.off('routerChangeComplete', handleComplete)
    router.events.off('routerChangeError', handleComplete)

    }
    
  })
  return loading && (
    <div className='spinner-wrapper'>
      <div className='spinner'></div>
    </div>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Navbar />
      <Getintouch/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
