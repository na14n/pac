import Image from "next/image";

export async function AboutF() {
    return (
        <div className="min-h-[50vh] max-h-fit h-full relative lg:px-32 lg:py-16">
            <div className="w-64 h-72 rounded-md absolute shadow-lg lg:-top-32 lg:right-32 bg-[#F1F1F1] overflow-hidden">
                <Image fill={true} alt="dental-products-distributor" />
            </div>
            <div className="text-[#121212] lg:max-w-[750px]">
                {`Over the years, PROS-APAC has built a reputation among Filipinos in the Dental Industry as a Top notch distributor offering internationally recognized brands. We attribute part of this success to the strong supplier relationships we have built over time. With the help of our suppliers, we have come so far in providing wonderful service to our customers that eventually led to the fulfillment of our vision of bringing back the smile on every Filipino.`}
            </div>
        </div>
    )
}

