import Image from "next/image";

export async function AboutF({media, about}) {
    return (
        <div className=" max-h-fit relative lg:px-32 2xl:px-48 lg:py-16 2xl:py-36 lg:min-h-[50vh] xs:px-4 xs:py-16 xs:flex xs:flex-col xs:items-center lg:items-start xs:gap-8 xs:overflow-hidden lg:overflow-visible ">
            <div className="xs:w-36 xs:h-48 xs:relative lg:w-60 lg:h-80 2xl:w-72 2xl:h-96 rounded-md lg:absolute shadow-lg lg:-top-32 lg:right-32 2xl:right-48 bg-[#F1F1F1] overflow-hidden">
                <Image fill={true} alt="dental-products-distributor" src={media ? media :'https://picsum.photos/600/800'} />
            </div>
            <div className="text-[#121212] lg:max-w-[750px] 2xl:text-lg xs:text-sm ">
                {about ? about : `Over the years, PROS-APAC has built a reputation among Filipinos in the Dental Industry as a Top notch distributor offering internationally recognized brands. We attribute part of this success to the strong supplier relationships we have built over time. With the help of our suppliers, we have come so far in providing wonderful service to our customers that eventually led to the fulfillment of our vision of bringing back the smile on every Filipino.`}
            </div>
        </div>
    )
}

