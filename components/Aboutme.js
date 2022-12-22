import Image from 'next/image'
import { Slide , Zoom} from "react-awesome-reveal"



export function Aboutme() {
  return (
    <div className="about" id="about">
    <div className="max-width">
        <div className="about-content">
          <Zoom cascade delay={100}>
            <h2 className="about-heading text-3xl ml-9 mb-5">About Me</h2>
            </Zoom>
          <div className='about-details'>
            <div className="about-left column left">
              <Zoom cascade delay={10}>
                <Image src={"/project.webp"} height={300} width={300} />
                </Zoom>
                </div>
            <div className="about-right column right">
              <Zoom   delay={50}>
                <div className="about-text">I&apos;m Raktim Yoddha</div>
              </Zoom>
              <Zoom cascade delay={10}>
                <p>- I have pursued my Btech in Electonics and Communication
                <br />- I study in Mizoram University, Aizawl 
                <br />- My interests are in full stack web development and learning new technology
                  <br />- I am also learning Web3 and ML/AI 
                  </p>
                </Zoom>
              <Slide direction='up'>     
                <a className="cv" href="#about">Download CV</a>
              </Slide> 
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
