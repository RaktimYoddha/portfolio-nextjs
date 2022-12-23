import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {

  const projectsData = [
    {
      img: '/portfolio.png',
      title: 'Portfolio Website',
      details: "Personal portfolio website to showcase all projects , skills and information",
      tags: ["ReactJs",'NextJs', "Tailwind CSS", "SASS"],
      link: 'https://raktimyoddha.vercel.app/'
    },
    {
      img: '/convo.png',
      title: 'Convo',
      details: 'A chatting web-app where you can chat as well as share files with friends and colleague',
      tags: ['ReactJs', 'ExpressJs', 'Socket.IO','NodeJs', 'Material UI'],
      link: 'google.com'
    },
    {
      img: '/musify.png',
      title: 'Musify',
      details: 'A complete new generation music player and searching web app',
      tags: ['ReactJs', 'Redux', 'Rapid API','Tailwind CSS','CSS'],
      link: 'https://musify-soundon.netlify.app/'
    },
    {
      img: '/todo-list.png',
      title: 'Todo-List',
      details: 'A todo list app with create read and delete option and save edits in local storage',
      tags :['ReactJs','Vite', 'React bootstrap','CSS']
    },
    
    {
      img: '/musify-beta.png',
      title: 'Musify -vanilla',
      details: 'A music player website with few selectable songs',
      tags: ['HTML5', 'CSS', "Javascript"],
      link: 'https://raktimyoddha.github.io/Musify-Beta-1.0/'
    },
    {
      img: '/webkit-mini.png',
      title: 'Drum-Kit Mini',
      details: 'A click responding Drum-Kit with added key strokes play',
      tags: ['HTML5', 'CSS', 'Javascript'],
      link: 'https://raktimyoddha.github.io/DrumKit-mini'
    },
    {
      img: '/foody.png',
      title: 'Foody',
      details: 'A food ordering website design',
      tags: ['HTML5', 'CSS','JQuery'],
      link: 'https://raktimyoddha.github.io/FoodOrderBegineeer'
    },
    
    {
      img: '/snakegame.png',
      title: 'Snake Game',
      details: 'A classical Snake Game with Score and high score record and sound-effects',
      tags: ['HTML5', 'CSS', 'Javascript'],
      link: 'https://raktimyoddha.github.io/SnakeGame'
    },
    
    {
      img: '/tic-tac-toe.png',
      title: 'Tic-Tac-Toe Game',
      details: 'A tik-tac-toe game where every time a random player gets chance first',
      tags: ['HTML5', 'CSS', 'Javascript'],
      link: 'https://raktimyoddha.github.io/tic-tac-toe'
    },
    
  ]

  
  

  return (
    <div className="flex flex-col items-center ml-11" id="projects">
      <div className='flex flex-col items-center mb-11'>
        <h1 className='project-heading text-3xl ml-2 mb-5'>PROJECTS</h1>
        <h1 className='project-subheading text-3xl ml-2 mb-5'>-Click on the Project Image to visit the site-</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Fade  cascade  triggerOnce>
        
          {projectsData.map((item, index) => (
            <div className="project max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg bg-white mx-4 pb-5" key={index}>
              
              <div>
                <div className="px-6 py-4">
                  <div className="project-item font-bold text-xl mb-2" style={{ color: '#b9bbb6' }}>{item.title}</div>
                  {/* <hr className="projecthr"/> */}
                  <p className="project-details text-white font-semibold text-base" style={{ color: '#877f7d' }}>{item.details}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-3">
                <Link href={`${item.link}`}>
                  <Image width={400} height={220} src={item.img} alt="Sunset in the mountains" />
                </Link>
              </div>
            </div>
          ))}

        </Fade>
      </div>
    </div>
  )
}
