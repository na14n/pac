import Image from "next/image";

export default function PHero() {
    return (
        <section className="w-full h-fit xl:min-h-screen flex xl:flex-row xs:flex-col xs:px-4 lg:px-32 2xl:px-48">
            <div className="w-full h-fit shrink-0 grow flex flex-col ">
                <div>
                    <div className="">
                        <Image src={''} />
                    </div>
                    <h3>Platinum Rewards Card</h3>
                </div>
            </div>
        </section>
    )
}