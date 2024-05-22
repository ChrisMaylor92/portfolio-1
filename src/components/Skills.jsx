import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import CSS from '../assets/css.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'

import Tailwind from '../assets/tailwind.png'
import TypeScript from '../assets/ts.png'
export const Skills =() => {
    return (
        <div>
        {/* Mobile View */}
        <div name="skills" className="flex md:hidden w-full h-screen bg-[#232323] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-2xl font-bold inline border-b-4 border-[#5fff3f] ">Skills</p>
                    <p className="py-4 text-md">These are the technologies I've worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 text-center justify-center py-4">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                        <img className="w-10 mx-auto mt-2" src={JavaScript} alt="JS icon"/>
                        <p className="mb-2">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={TypeScript} alt="JS icon"/>
                        <p className="mb-2">TypeScript</p>
                    </div>
                    <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={HTML} alt="html icon"/>
                        <p className="mb-2">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={CSS} alt="css icon"/>
                        <p className="mb-2">CSS</p>
                    </div>
                    
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={ReactImg} alt="react icon"/>
                        <p className="mb-2">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={Node} alt="node icon"/>
                        <p className="mb-2">Node</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={Firebase} alt="firebase icon"/>
                        <p className="mb-2">Firebase</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-10 mx-auto mt-2" src={Tailwind} alt="tailwind icon"/>
                        <p className="mb-2">Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Desktop View */}
        <div name="skills" className="w-full h-screen hidden md:flex bg-[#232323] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#5fff3f] ">Skills</p>
                    <p className="py-4 text-lg">These are the technologies I've worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JS icon"/>
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={TypeScript} alt="JS icon"/>
                        <p className="my-4">TypeScript</p>
                    </div>
                    <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="html icon"/>
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="css icon"/>
                        <p className="my-4">CSS</p>
                    </div>
                    
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactImg} alt="react icon"/>
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="node icon"/>
                        <p className="my-4">Node</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Firebase} alt="firebase icon"/>
                        <p className="my-4">Firebase</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon"/>
                        <p className="my-4">Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}