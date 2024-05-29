import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";
import MMITM from "../assets/MMITM2.jpg"
import Backend from '../assets/Backend2.jpg'
import News from '../assets/News2.jpg'

export const CarouselMobile = () => {
    
    const data = [
        {
            "src": MMITM,
            "alt": "Image for Meet me in the Middle",
            "name": 'Meet in the Middle',
            "type": "Full Stack Web Application",
            "stack": "Typescript, Firebase, React, Vite, Tailwind UI and Daisy UI",
            "demo": "https://meet-me-in-the-middle-22a40.web.app/",
            "code": "https://github.com/ChrisMaylor92/MMITM"
        },
        {
            "src": Backend,
            "alt": "Image 2 for carousel",
            "name": 'NC News API',
            "type": "Back-End API",
            "stack": "JavaScript, Node Express, PSQL and Test Driven Development",
            "demo": "https://chriss-new-app.onrender.com/api",
            "code": "https://github.com/ChrisMaylor92/chris-nc-news"
        },
        {
            "src": News,
            "alt": "Image 3 for carousel",
            "name": "NC-News Front-End",
            "type": "Front-End Web Application",
            "stack": "JavaScript, React, Vite and Tailwind UI",
            "demo": "https://snazzy-pika-9fa17f.netlify.app/",
            "code": "https://github.com/ChrisMaylor92/fe-nc-news"
        }

    ]
    const [slide, setSlide] = useState(0)
    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow-m arrow-left-m" onClick={prevSlide}/>
            {data.map((item, idx) => {
                return <span key={idx} className={slide === idx ? "card-m" : "card-hidden-m"}>
                            <p className="text-2xl font-bold " key={idx} >{item.name}</p>
                            <p>{item.type}</p>
                            <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide-m" : "slide-m slide-hidden-m"}/>
                            
                            <p className="text-center">{item.stack}</p>
                            <div>
                                <a href={item.demo}>
                                    <button className="text-center round-lg px-2 py-1 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-md">Demo</button>
                                </a>
                                <a href={item.code}>
                                    <button className="text-center round-lg px-2 py-1 m-2 bg-[#111111] border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-white font-bold text-md">Code</button>
                                </a>
                            </div>
                            
                        </span>
                    
                    
            })}
            <BsArrowRightCircleFill className="arrow-m arrow-right-m" onClick={nextSlide}/>
            <span className="indicators-m">
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator-m" : "indicator-m indicator-inactive-m"}></button>
                })}
            </span>
        </div>
    )
}