import Image from "next/image";
import Link from 'next/link';
import ImageSlider from "./components/ImageSlider";
import ProjectSlider from "./components/ProjectSlider";
import linkedin from "../public/icons8-linkedin-96.png";
import croppedgrad from "../public/croppedgrad.jpeg";

export default function Home() {
  return (
    <div>
    <main className='flex flex-col items-center mx-auto px-[3%] xl:max-w-[1500px]'>
      <Link className='' href={"https://www.linkedin.com/in/hameed-karim/"}>
          <Image className='mt-5 hover:scale-150 transition ease-in-out delay-150' src={linkedin} alt="linkedin" />
      </Link>
        <div className="flex flex-col text-4xl justify-center items-center sm:text-8xl p-8">
            <div>
              <p className="text-center">Hi, I'm Hameed,</p>
              <p className="text-center">and I'm a Software Developer.</p>
            </div>
        </div>
            
        <div className="text-base sm:text-2xl sm:px-24 sm:py-8 p-1 text-center">
            I am a highly motivated and dependable computer science graduate from the <b>University of British Columbia. </b>  
            I am adept in many languages, and open to new learning and fun challenges.
            I am currently searching for new opportunities to collaborate and learn new things. 
            I am an avid learner, who enjoys solving complex problems via the creation of innovate solutions. 
            Over time, I've acquired numerous skills and completed several noteworthy projects. I'd appreciate it if you could take a look at them and share your thoughts!
        </div>

        <h2 className="sm:text-6xl text-4xl mt-20 font-bold tracking-widest sm:mt-24">
            TECH STACK
        </h2>
        <div className="animate-pulse">
          <ImageSlider/>
        </div>
        
        <div className="w-full text-right">
          <h2 className="sm:text-6xl text-4xl mt-12 sm:mt-24 px-5">
              My Projects
          </h2>
        </div>
        
        <div className="mt-4">
          <ProjectSlider/>
        </div>
        
    </main>
    <div className="bg-[#b3d4a1] p-10 mt-12">
        <a href="mailto:hameedk2324@yahoo.com">Contact Me</a>
    </div>
    </div>
  );
}
