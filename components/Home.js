import Image from 'next/image'
import Link from 'next/link'
import { Slide } from "react-awesome-reveal"
import Typewriter from 'typewriter-effect';




export function Home() {

  
  return (
    <div className="flex" id='home'>
      
      
      
      <div className=' home flex flex-col md:flex-row text-center md:items-start  align-center justify-evenly px-6'>
        <div className="p-6 md:mt-11 md:pt-11 home-info">
          <div>
            <Slide>

              <h1 className="greetings  text-white md:text-5xl greeting pl-6">Good To See You Here! 👋 </h1>
            </Slide>
            <Slide direction='right' duration={1500}>
            
            <h1 className=" myname text-white  mt-2 md:text-7xl  pl-6">I'm Raktim Yoddha</h1>
            </Slide>
            <h1 className='profession mt-2 mb-4 text-white text-xl md:text-5xl pl-6'>
            <Typewriter
              options={{
                strings: ["A full stack web developer", "A web3 developer","A ML/AI Developer"],
                autoStart: true,
                loop: true,
                delay: "100",
              }}
            />
            </h1>
             <Slide direction="up" triggerOnce >
          <a href='aboutpage' className='aboutbtn text-red-600'>About me</a>
        </Slide>
          </div>
          

          
        </div>
        {/* <Slide direction="up" triggerOnce>

          <div className='bio pt-10 mt-6 flex ml-9 flex-col items-center'>
            <div className=' hidden lg:flex border-4 rounded-3xl overflow-hidden border-zinc-800'>
              <Image src={'/project.webp'} width={270} height={270}/>
            </div>
            <div className=' hidden md:flex lg:hidden border-4 rounded-3xl overflow-hidden border-red-400'>
              <Image src={'/project.webp'} width={200} height={200}/>
            </div>
            <div className=' md:hidden border-4 rounded-3xl overflow-hidden border-red-400'>
              <Image src={'/project.webp'} width={150} height={150} />
            </div>
           <div className='flex items-start  flex-col justify-center mt-10 text-white'>
            <button className="resume bg-transparent text-crimson font-semibold hover:text-white py-2 px-9 border hover:border-transparent rounded">
              <Link target='_blank' href='' >About</Link>
            </button>
          </div>
          </div>
        </Slide> */}
       
      </div>
    </div>
  )
}