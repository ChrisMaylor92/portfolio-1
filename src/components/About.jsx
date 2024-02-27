export const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 "> 
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-3xl font-bold ">
                        <p>Hi I'm Chris Maylor, welcome to my porfolio website.</p>
                    </div>
                    <div>
                        <p>I'm passionatte about coding and building excellent things and stuff, Chris please fill this in before you go ahead and launch kind regards your past self. Im just adding some more text so that i cvan really see what this is like when there is loads of text loads and loads of text.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}