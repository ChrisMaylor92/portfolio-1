import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi'
export const Home = () => {
    return (
        <div name="home" className="bg-[#111111] w-full h-screen">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#5fff3f] text-lg">Hi, my name is</p>
                <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">Chris Maylor</h1>
                <h2 className="text-3xl md:text-6xl font-bold text-[#8892b0]">& I'm a Full Stack Developer</h2>
                <p className="text-lg text-gray-300 py-4 max-w-700px">Welcome to my portfolio website, please take a look around. I built this website using Javascript, React & TailwindCSS. </p>
                <div>
                    <Link to="work" smooth={true} duration={500} >
                        <button className="text-white text-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#43ad2e] hover:border-[#43ad2e]">
                        Veiw Work 
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3"/>
                        </span>
                        
                        </button>
                        </Link>
                    
                </div>
            </div>
        </div>
    )
}