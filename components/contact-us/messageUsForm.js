import { Button } from "@/components"

const MessageUsForm = () => {
    return (
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
            <div className="absolute z-10 t-0 bg-gradient-to-b from-[#077232]/95 via-[# 063013]/95 to-[#063013]/95 w-full h-full"></div>
            <img className="absolute z-0 t-0  w-auto h-auto" src="https://picsum.photos/1920/1080" alt="dental-website-banner"></img>
            <div className="z-50 text-2xl w-full h-content flex flex-col justify-between items-center lg:gap-20">
                <div className="flex flex-col justify-center items-center  xs:p-8 xs:gap-4 lg:gap-0">
                    <div className="lg:text-3xl xs:text-2xl  uppercase font-bold text-[#FCFCFC] ">send us a message</div>
                    <div className="text-[#E1E1E1] text-sm  text-center">Our Customer Support are happy to respond to your inquiries. Please leave a message and we will answer your questions as soon as possible.</div>
                </div>
                <form className="flex flex-col lg:w-content xs:w-full py-8 lg:px-40 xs:px-8 lg:gap-4 xs:gap-8 ">
                    <div className="flex lg:flex-row xs:flex-col justify-between gap-8">
                        <input placeholder="Your Name" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <input placeholder="E-mail Address" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                        <input placeholder="Contact Number" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" />
                    </div>
                    <textarea placeholder="Your Message" className="bg-[#FCFCFC] p-2 ring-2 ring-[#FCFCFC] text-[#575757] text-sm focus:outline-none focus:ring-nav-orange rounded-md focus:text-[#272727] focus:placeholder:text-[#b1b1b1] placeholder:text-[#C1C1C1]" rows={5} />
                    <div>
                        <Button name={'Send Message'} type={'submit'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MessageUsForm;