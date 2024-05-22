import {FaGithub, FaLinkedin } from 'react-icons/fa'
import {BsFillPersonLinesFill} from'react-icons/bs'
export const Footer = () => {
    return (
        <div>

        {/* Mobile View */}
        <footer className="fixed md:hidden bottom-0 flex flex-col w-full  items-center pb-4 pt-4 bg-[#232323]">
            <div className="grid grid-cols-3 gap-7 ">
                <a href="https://github.com/ChrisMaylor92" > 
                
                    <FaGithub size={35} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
                <a href="https://www.linkedin.com/in/chris-maylor-20132317b/" > 
                    <FaLinkedin size={35} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
                <a download="CV.docx" href='CV.docx'> 
                    <BsFillPersonLinesFill size={35} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
            </div>
        </footer>
        {/* Desktop View */}
        <footer className="hidden fixed bottom-0 md:flex flex-col w-full  items-center pb-4 pt-4 bg-[#232323]">
            <div className="grid grid-cols-3 gap-10 ">
                <a href="https://github.com/ChrisMaylor92" > 
                
                    <FaGithub size={50} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
                <a href="https://www.linkedin.com/in/chris-maylor-20132317b/" > 
                    <FaLinkedin size={50} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
                <a download="CV.docx" href='CV.docx'> 
                    <BsFillPersonLinesFill size={50} className="text-gray-300 hover:text-[#43ad2e]"/>
                </a>
            </div>
        </footer>
        </div>
    )
}
