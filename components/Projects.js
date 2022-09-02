import { Slide } from "react-awesome-reveal";
import Link from "next/link";

export default function Projects() {

  const projectsData = [
    {
      img: '/portfolio.png',
      title: 'Portfolio Website',
      details: "Personal portfolio website to showcase all projects , skills and information",
      tags: ['NextJs', "Tailwind CSS", "SASS"],
      Link: 'https://fonts.google.com/?query=ubuntu'
    },
    {
      img: '/project.webp',
      title: 'wefwef grewaesd',
      details: 'gw wgrefdas wrfeadskgrefldw grwkfoelpwdigtkor4fepldwkorefpdw ikgtorflepkogt5rlpes',
      tags: ['NextJS', 'Tailwind CSS'],
      Link: 'google.com'
    },
    
    {
      img: '/project.webp',
      title: 'Mefd grew3t4rfwed',
      details: 'A Movie Catafwe gwtrfedgt4rf gr4feDB.',
      tags: ['React', 'CSS'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'Ufr rfewd rfe fwecdqwe',
      details: 'A clonewvgtrf refw rfewqd rfew rfew rfew ewer ffwdserf',
      tags: ['React Native', 'Firebase'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
    {
      img: '/project.webp',
      title: 'tre tre gtre',
      details: 'tbrgervf rvfwe trvefd rfed rfedw rfedw rfed wsf edws edwed wsed w',
      tags: ['React', 'Python'],
      Link: 'google.com'
    },
  ]
  

  return (
    <div className="flex flex-col items-center ml-11" id="projects">
      <div className='flex flex-col items-center mb-11'>
        <h1 className='project-heading text-3xl ml-2 mb-5'>PROJECTS</h1>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Slide direction="right" cascade delay={0} triggerOnce>
        
          {projectsData.map((item, index) => (
            <div className="project max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg bg-white mx-4 pb-5" key={index}>
              <div className="p-6">
                {/* <a href="${item.Link}"> */}
                  <img width={400} height={400} src={item.img} alt="Sunset in the mountains" />
                  {/* </a> */}
              </div>
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2" style={{color: '#cecece'}}>{item.title}</div>
                  <p className="text-white font-semibold text-base">
                    {item.details}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </Slide>
      </div>
    </div>
  )
}