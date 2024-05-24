import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";
import MMITM from "../assets/MMITM.png"

export const Carousel = () => {
    
    const data = [
        {
            "src": MMITM,
            "alt": "Image for Meet me in the Middle"
        },
        {
            "src": "https://picsum.photos/seed/img2/600/400",
            "alt": "Image 2 for carousel"
        },
        {
            "src": "https://picsum.photos/seed/img3/600/400",
            "alt": "Image 3 for carousel"
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
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    )
}