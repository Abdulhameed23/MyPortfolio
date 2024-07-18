import React from 'react'
import ProjectSlider from '../components/ProjectSlider'
import ImageSlider from '../components/ImageSlider'

const HomePage = () => {
  return (
    <main className='mx-96'>
        <h1>Hi, I'm Hameed, <br/> and I'm a Software Developer.</h1>
            
            <div>
                I am a highly motivated and dependable computer science graduate from the University of British Columbia. 
                I am adept in many languages, and open to new learning and fun challenges.
                I am currently searching for new opportunities to collaborate and learn new things. 
                I am an avid learner, who enjoys solving complex problems via the creation of innovate solutions. 
                Over time, I've acquired numerous skills and completed several noteworthy projects. I'd appreciate it if you could take a look at them and share your thoughts!
            </div>

            <h2>
                Tech Stack
            </h2>
            <ImageSlider/>

            <h2>
                My Projects
            </h2>
            <ProjectSlider/>

            <h3>
                I'd love to hear from you
                <div>
                    Please <a href="mailto:hameedk2324@yahoo.com">Contact Me</a>
                </div>
            </h3>
    </main>
  )
}

export default HomePage