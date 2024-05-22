export const Contact = () => {
    return (
        <div name="contact" >
            {/* Mobile View */}
        <div className="md:hidden w-full h-screen flex flex-cols  justify-center pt-20 px-4">
            
            <form method="post" action="https://getform.io/f/xe7jLOd7" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-2">
                    <p className="text-2xl font-bold inline border-b-4 border-[#5fff3f] text-gray-300">Contact</p>
                    <p className="text-gray-300 text-md py-2">Submit the form below to send me an email</p>
                </div>
                <input className="bg-[#ffffff] p-1 h-6" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-1 bg-[#ffffff] h-6 " type="email" placeholder="Email" name="email" />
                <textarea className="bg-[#ffffff] p-1 h-10" placeholder="Message" name="message" rows="1" ></textarea>
                <button className="text-white border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] text-sm px-3 py-2 my-4 mx-auto ">Get in touch!</button>
            </form>
            
        </div>
        {/* Desktop View */}
        <div name="contact"className="hidden w-full h-screen md:grid grid-cols-2 flex justify-center items-center p-4">
            <div></div>
            <form method="post" action="https://getform.io/f/xe7jLOd7" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-[#5fff3f] text-gray-300">Contact</p>
                    <p className="text-gray-300 text-lg py-4">Submit the form below or send me an email - chrismaylor1@hotmail.com</p>
                </div>
                <input className="bg-[#ffffff] p-1" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-1 bg-[#ffffff]" type="email" placeholder="Email" name="email" />
                <textarea className="bg-[#ffffff] p-1" placeholder="Message" name="message" rows="5" ></textarea>
                <button className="text-white border-2 hover:bg-[#43ad2e] hover:border-[#43ad2e] px-4 py-3 my-6 mx-auto ">Get in touch!</button>
            </form>
        </div>
        </div>
    )
}