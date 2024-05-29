import { FaFolderOpen, FaHome} from 'react-icons/fa'
import {FaScrewdriverWrench, FaPersonSnowboarding} from 'react-icons/fa6'
import { IoIosMail } from "react-icons/io";
import logo from '../assets/CMLogo.png'

import { Link } from 'react-scroll';
import { Footer } from './Footer';


export const Navbar = () => {
  
    
    return (
        <div>

        
        <div className="fixed w-full h-[80px] flex justify-between items-center z-20 px-4 bg-[#232323] text-gray-300">
            <div>
                <img src={logo} alt="logo" style={{width: '150px'}}/>
            </div>
            {/* Menu */}
            
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            
         
            
            {/* scroll links */}
                <div className="hidden lg:flex fixed flex-col top-[37%] left-0">
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00b9f2]">
                            <Link to="home" smooth={true} duration={600} className="flex justify-between items-center w-full text-xl text-gray-300"> 
                                Home
                                <FaHome size={30}/>
                                
                            </Link>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#43ad2e]">
                            <Link to="skills" smooth={true} duration={600} className="flex justify-between items-center w-full text-xl text-gray-300"> 
                                Skills
                                <FaScrewdriverWrench size={30}/>
                                
                            </Link>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e1712e]">
                            <Link to="about" smooth={true} duration={600} className="flex justify-between items-center w-full text-xl text-gray-300"> 
                                About
                                <FaPersonSnowboarding size={30}/>
                                
                            </Link>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9b643e]">
                            <Link to="work" smooth={true} duration={600} className="flex justify-between items-center w-full text-xl text-gray-300"> 
                                Work
                                <FaFolderOpen size={30}/>
                                
                            </Link>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7b00a8]">
                            <Link to="contact" smooth={true} duration={600} className="flex justify-between items-center w-full text-xl text-gray-300"> 
                                Contact
                                <IoIosMail size={30}/>
                                
                            </Link>
                        </li>
                    </ul>
                </div>
                
        </div>
      <Footer/>
        </div>
        
    )
}