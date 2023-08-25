import Button from "../button";

export default function QuoteForm() {
    return (
        <section className="w-fit h-full p-4 rounded-sm shadow-md bg-[#FCFCFC] shrink-0">
            <form className="flex flex-col gap-2 w-full h-fit">
                <h2 className="pb-2 text-lg text-pac-orange font-bold">Inquiry Form</h2>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        PRC ID
                    </label>
                    <input
                        type="text"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Clinic Address
                    </label>
                    <input
                        type="text"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full h-fit">
                    <label className="font-semibold text-sm text-[#121212]">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        className="w-60 h-fit border-2 border-[#575757]/20 text-[#373737] rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                    />
                </div>
                <button className="rounded-md shadow-md p-2 mt-4 bg-gradient-to-r bg-size-200 hover:bg-pos-100 transition-all duration-75 from-pac-orange via-nav-orange to-pac-orange">
                    <p className="font-bold text-[#FCFCFC] text-sm">Request Quotation</p>
                </button>
            </form>
        </section>
    )
} 