import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import capstone1 from '../../public/capstone1.png';
import gunited1 from '../../public/gunited1.png';
import harvey1 from '../../public/harveyChatbot.png';
import githubLogo from '../../public/icons8-github-100.png'


const ProjectSlider = () => {
  return (
    <div className='sm:px-0 px-2 flex flex-col gap-20'>
        <div className='my-5 bg-[#008282] p-5 rounded-lg lg:rounded-[30px] text-white flex flex-col lg:flex-row lg:gap-8 lg:py-16
        items-center justify-center lg:justify-normal lg:items-start'>
            <Image className='lg:w-3/5 rounded-[20px]' src={capstone1} alt="exzbt1" />
            <div className=''>
                <div className='my-6 text-center text-black font-bold text-4xl lg:text-6xl italic'>EX-ZBT</div>
                <div className='text-xl'>
                    An innovative use of cloud technologies on AWS, for the purpose of video sharing/streaming. 
                    Users can request video submissions from other users, and utilize the features for recording, saving, playback,
                    and video comments. 
                    <span className='text-yellow-300 font-bold italic'>View my source code: </span>   
                </div> 
                <Link className='' href={"https://github.com/Abdulhameed23/EXZBT"}>
                    <Image className='mx-auto my-8 hover:border-2 hover:rounded-full hover:border-yellow-300' src={githubLogo} alt="githubLogo" />
                </Link>
            </div>
        </div>
        <div className='my-5 bg-[#008282] p-5 rounded-lg lg:rounded-[30px] text-white flex flex-col lg:flex-row lg:gap-8 lg:py-16
        items-center justify-center lg:justify-normal lg:items-start'>
            <Image className='lg:w-3/5 rounded-[20px]' src={gunited1} alt="gunited1" />
            <div>
                <div className='my-6 text-center text-black font-bold text-4xl lg:text-6xl italic'>G-UNITED</div>
                <div className='text-xl'>
                    A solution to ever changing grocery prices all over the world. This project solves many issues people run 
                    into daily, by allowing users to track prices of items in the grocery stores around them. Built 
                    using the LAMP stack.
                    <span className='text-yellow-300 font-bold italic'>View my source code: </span>   
                </div>
                <Link className='' href={"https://github.com/yemoski/G-United"}>
                    <Image className='mx-auto my-8 hover:border-2 hover:rounded-full hover:border-yellow-300' src={githubLogo} alt="githubLogo" />
                </Link>
            </div>
        </div>
        <div className='my-5 bg-[#008282] p-5 rounded-lg lg:rounded-[30px] text-white flex flex-col lg:flex-row lg:gap-8 lg:py-16
        items-center justify-center lg:justify-normal lg:items-start'>
            <Image className='lg:w-3/5 rounded-[20px]' src={harvey1} alt="harvey1" />
            <div>
                <div className='my-6 text-center text-black font-bold text-4xl italic'>HARVEY: A CHATBOT</div>
                <div className='text-xl'>
                    An innovative chatbot, that draws from a couple of service APIs for information about movies, 
                    trending tweets, or wiki information. Built using python, with ntlk features. 
                    <span className='text-yellow-300 font-bold italic'>View my source code: </span>   
                </div> 
                <Link className='' href={"https://github.com/Abdulhameed23/IndividualA4Hameed"}>
                    <Image className='mx-auto my-8 hover:border-2 hover:rounded-full hover:border-yellow-300' src={githubLogo} alt="githubLogo" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectSlider