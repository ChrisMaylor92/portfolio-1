import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import CSS from '../assets/css.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import TypeScript from '../assets/ts.png'
export const Skills =() => {
    return (
        <div name="skills" className="w-full h-screen bg-[#232323] text-gray-300">
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
    )
}