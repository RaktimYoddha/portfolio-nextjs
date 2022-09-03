import Image from 'next/image'
import { Slide } from "react-awesome-reveal"
import { Zoom } from "react-awesome-reveal";


export function Aboutme() {
  return (
    <div className="about" id="about">
    <div className="max-width">
        <div className="about-content">
          <Slide>
            <h2 className="about-heading text-3xl ml-9 mb-5">About Me</h2>
            </Slide>
          <div className='about-details'>
            <div className="column left">
              <Zoom cascade delay={10}>
                <Image src={"/project.webp"} height={300} width={300} />
                </Zoom>
                </div>
            <div className="column right">
              <Slide  direction='right'>
                <div className="text">I'm Raktim Yoddha</div>
              </Slide>
              <Zoom cascade delay={10}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
                        autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                        accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus
                        veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
                  beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                </Zoom>
              <Slide direction='up'>     
                <a href="#about">Download CV</a>
              </Slide> 
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
