import { Link } from 'react-scroll';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation'
import { useEffect } from 'react';

export const Home = () => {
    const [timePass, setTimePass] = useState(false)

    
    useEffect(() => {
        setTimeout(() => {
            setTimePass(true);
          }, 8500);
    }, [setTimePass])

    return (
        <div name="home">
{/* Mobile View */}
        <div name="home" className="md:hidden w-full h-screen ">
            {/* container */}
            
            
            <div className="max-w-[1500px] px-5 pt-20 flex flex-col ">
                {/* <p className="text-[#5fff3f] font-bold pb-2 text-2xl">Hi, my name is</p> */}
                <TypeAnimation 
                sequence={[
                    'Hi, my name is...',
                    1000
                    
                    ]}
                wrapper="span"
                speed={60}
                className="text-base text-left font-bold pb-1 justify-items-start text-[#43ad2e]"
                repeat={0}
                cursor={false}
                />
                <TypeAnimation 
                sequence={[
                    '',
                    800,
                    'Chris Maylor',
                    1000
                    
                    
                    ]}
                wrapper="span"
                speed={20}
                className="text-2xl text-left font-bold pb-1 text-[#ccd6f6]"
                repeat={0}
                cursor={false}
                />
                {/* <h1 className="text-4xl md:text-7xl pb-2 font-bold text-[#ccd6f6]">Chris Maylor</h1> */}
                <TypeAnimation 
                sequence={[
                    '',
                    1900,
                    "& I'm a Full Stack Web Developer",
                    1000
                    
                    ]}
                wrapper="span"
                speed={65}
                className="text-xl text-left font-bold pb-1 text-[#8892b0]"
                repeat={0}
                cursor={false}
                />

                <TypeAnimation 
                sequence={[
                    '',
                    3150,
                    'Welcome to my portfolio website, please take a look around.'
                    ]}
                wrapper="span"
                speed={65}
                className="text-sm font-bold  py-1 text-[#e1712e]"
                repeat={0}
                cursor={false}
                />

                <TypeAnimation 
                sequence={[
                    '',
                    5600,
                    'I built this website using JavaScript, React, TailwindCSS & Adobe CC.'
                    ]}
                wrapper="span"
                speed={65}
                className="text-xs font-bold pb-1 text-gray-300"
                repeat={0}
                cursor={false}
                />
                {/* <h2 className="text-3xl md:text-6xl font-bold text-[#8892b0]">& I'm a Full Stack Developer</h2> */}
                {/* <p className="text-lg text-gray-300 py-4 max-w-700px">Welcome to my portfolio website, please take a look around. I built this website using Javascript, React, TailwindCSS & Adobe CSS. </p> */}
                
             
            </div>
            { timePass && <div className="pt-1 flex justify-center">
                    <Link to="work" smooth={true} duration={500} >
                        <button className="text-white text-sm border-2 px-3 py-2 my-2 items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
                        View Work 
                        
                        </button>
                        </Link>
                    
            </div>}
        </div> 
{/* Desktop View */}
        <div name="home" className="hidden w-screen h-screen md:grid grid-cols-3 justify-center">
            {/* container */}
            <div>

            </div>
            
            <div className="max-w-[1500px] pl-64 flex flex-col col-span-2 justify-center h-full">
                {/* <p className="text-[#5fff3f] font-bold pb-2 text-2xl">Hi, my name is</p> */}
                <TypeAnimation 
                sequence={[
                    'Hi, my name is...',
                    1000
                    
                    ]}
                wrapper="span"
                speed={60}
                className="text-2xl text-left font-bold pb-2 justify-items-start text-[#43ad2e]"
                repeat={0}
                cursor={false}
                />
                <TypeAnimation 
                sequence={[
                    '',
                    800,
                    'Chris Maylor',
                    1000
                    
                    
                    ]}
                wrapper="span"
                speed={20}
                className="text-7xl text-left font-bold pb-2 text-[#ccd6f6]"
                repeat={0}
                cursor={false}
                />
                {/* <h1 className="text-4xl md:text-7xl pb-2 font-bold text-[#ccd6f6]">Chris Maylor</h1> */}
                <TypeAnimation 
                sequence={[
                    '',
                    1900,
                    "& I'm a Full Stack Web Developer",
                    1000
                    
                    ]}
                wrapper="span"
                speed={65}
                className="text-6xl text-left font-bold pb-1 text-[#8892b0]"
                repeat={0}
                cursor={false}
                />

                <TypeAnimation 
                sequence={[
                    '',
                    3150,
                    'Welcome to my portfolio website, please take a look around.'
                    ]}
                wrapper="span"
                speed={65}
                className="text-2xl font-bold  py-4 text-[#e1712e]"
                repeat={0}
                cursor={false}
                />

                <TypeAnimation 
                sequence={[
                    '',
                    5600,
                    'I built this website using JavaScript, React, TailwindCSS & Adobe CC.'
                    ]}
                wrapper="span"
                speed={65}
                className="text-lg font-bold pb-2 text-gray-300"
                repeat={0}
                cursor={false}
                />
                {/* <h2 className="text-3xl md:text-6xl font-bold text-[#8892b0]">& I'm a Full Stack Developer</h2> */}
                {/* <p className="text-lg text-gray-300 py-4 max-w-700px">Welcome to my portfolio website, please take a look around. I built this website using Javascript, React, TailwindCSS & Adobe CSS. </p> */}
                 <div className="pt-3">
                    <Link to="work" smooth={true} duration={500} >
                        <button className="text-white text-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
                        View Work 
                        
                        </button>
                        </Link>
                    
                </div>
             
            </div>
        </div>
        </div>
    )
}