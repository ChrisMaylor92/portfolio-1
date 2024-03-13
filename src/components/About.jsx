export const About = () => {
    return (
        <div name="about" className="w-full h-screen grid grid-cols-3 text-gray-300 "> 
            <div className="flex flex-col col-span-2 justify-center items-center w-full h-full">
                <div className="max-w-[1600px] w-full grid grid-cols-3 gap-8 px-4">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#5fff3f]">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1600px] w-full grid sm:grid-cols-3 gap-8 px-4">
                    <div className="sm:text-right text-xl font-bold ">
                        <p className="text-2xl pb-1">Chris Maylor</p>
                        <p>Full Stack Web Developer</p>
                        <p>London</p>
                    </div>
                    <div className="col-span-2 pr-44">
                        <p className="text-lg">I'm a recent graduate of Northcoders Software Development Bootcamp. Currently, I'm focusing on building responsive full-stack web-applications to boost my portfolio whilst I look for work. With a background in Illustration, Animation and Graphic Design and a love for Logical Problem Solving, I plan to tie my love for design and ability to write robust code into a career as a Full Stack Software Developer.</p>
               
                    </div>
                </div>
                
            </div>
        </div>
    )
}