import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from'react-icons/bs'
import logo from '../assets/CMLogo.png'
import { useState } from 'react'
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232323] text-gray-300">
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
                        <Link to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
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
            
            {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars/> : <FaTimes/> }
                </div>
            {/* Mobile Menu */}
                <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col justify-center items-center"}>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            
            {/* socials */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#84848433]">
                            <a href="https://github.com/ChrisMaylor92" className="flex justify-between items-center w-full text-gray-300"> 
                            GitHub <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#43ad2e]">
                            <a href="https://www.linkedin.com/in/chris-maylor-20132317b/" className="flex justify-between items-center w-full text-gray-300"> 
                            LinkedIn <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                            <a download="CV.docx" href='CV.docx'className="flex justify-between items-center w-full text-gray-300"> 
                            Resume <BsFillPersonLinesFill size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}