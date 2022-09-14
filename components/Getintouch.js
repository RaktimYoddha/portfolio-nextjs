import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export function Getintouch() {
  return (
    <div className='follow-con pl-4 z-50 mt-11 pt-11 w-auto fixed'>
        <div className='flex mt-11'>
          <h1 className='followme mb-5'>Get In Touch</h1>
          <div className="followme-line h-60 w-0.5 slant-line"></div>
        </div>
        <div className='followme-icons ml-3 mt-4 flex flex-col'>
          <Link href='https://twitter.com/Raktim_Yoddha07'>
            <a>
              <FontAwesomeIcon icon={faTwitter} color='#77c3ec' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <Link href='https://github.com/RaktimYoddha' target='_blank'>
            <a>
              <FontAwesomeIcon icon={faGithub} color='white' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/raktim-yoddha-724714232/' target='_blank'>
            <a>
              <FontAwesomeIcon icon={faLinkedin} color='#77c3ec' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <Link href='https://www.instagram.com/raktim_yoddha03/'>
            <a>
              <FontAwesomeIcon icon={faInstagram}   color='#E75480' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
        </div>
      </div>
  )
}
