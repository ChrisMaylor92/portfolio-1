import MMITM from '../assets/MMITM.png'
import Laptop from '../assets/Laptop.jpg'
import News from '../assets/Newspaper.png'

export const Work = () => {
    return (
        <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#232323]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text gray-300 border-[#5fff3f]">Work</p>
                    <p className="text-lg py-6">Check out some of my recent work</p>
                </div>
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> 
                {/* Grid Item */}
                    <div style={{backgroundImage: `url(${MMITM})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="  text-2xl text-center font-bold text-white tracking-wider">
                                Meet Me in the Middle
                            </span>
                            
                            <div className="pt-8 pb-8 text-center">
                                <a href="https://meet-me-in-the-middle-22a40.web.app/">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/ChrisMaylor92/MMITM">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Code</button>
                                </a>
                                
                            </div>
                            <span className=" pl-6 pt-6 text-1xl text-center font-bold text-white tracking-wider">
                                Typescript, React, Firebase
                            </span>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${News})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="pl-2 text-2xl font-bold text-white tracking-wider">
                                NC-News - Front End 
                            </span>
                            <div className="pt-8 pb-8 text-center">
                                <a href="https://snazzy-pika-9fa17f.netlify.app/">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/ChrisMaylor92/fe-nc-news">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Code</button>
                                </a>
                                
                            </div>
                            <span className=" pl-3 pt-6 text-1xl text-center font-bold text-white tracking-wider">
                                Javascript, React, TailwindCSS
                            </span>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Laptop})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="pl-2 text-2xl font-bold text-white tracking-wider">
                                NC-News - Back End
                            </span>
                            <div className="pt-8 pb-8 text-center">
                                <a href="https://chriss-new-app.onrender.com/api">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/ChrisMaylor92/chris-nc-news">
                                    <button className="text-center round-lg px-4 py-3 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-lg">Code</button>
                                </a>
                               
                            </div>
                            <span className=" pl-8 pt-6 text-1xl font-bold text-white tracking-wider">
                                Javascript, Express, TDD
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}