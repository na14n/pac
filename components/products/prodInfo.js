import ProdGallerySlider from "../embla/prodGallerySlider"
import AddToBasket from "./addToBasket"

export default function ProdInfo(props) {
    return (
        <main className="w-full h-fit flex justify-between py-12 lg:px-32 2xl:px-48">
            <section className="lg:w-2/5 2xl:w-[600px] h-fit ">
                <ProdGallerySlider slides={Array.from(Array(props.data.imageGallery.length).keys())} images={props.data.imageGallery ? props.data.imageGallery : ``} />
            </section>
            <section className="w-[600px] 2xl:w-[800px] h-fit flex flex-col gap-4 2xl:gap-8 ">
                <h1 className="text-4xl 2xl:text-5xl font-bold text-[#121212] uppercase ">{props.data.name ? props.data.name : ``}</h1>
                <p className="text-[#272727] text-sm 2xl:text-lg h-[150px]">
                    {props.data.shortDescription ? props.data.shortDescription : ``}
                </p>
                <AddToBasket item={props.data} />
                <div className="bg-[#121212]/50 h-[1px] w-full" />
                <div className="w-fit h-fit flex flex-col gap-1">
                    <h4 className="text-[#575757] font-semibold text-xs 2xl:text-sm uppercase">inclusions</h4>
                    <p className="text-[#272727] text-sm h-fit capitalize 2xl:text-lg">{props.data.inclusions ? props.data.inclusions : ``}</p>
                </div>
                <div className="w-full h-fit flex gap-4 flex-wrap">
                    <img src={props.data.productLogo ? props.data.productLogo.link : '' } className={`w-auto h-28 ${props.data.productLogo ? `` : `hidden`}`} />
                    {props.data.awards.map((a, index) => (
                        <img key={index} src={a.link} className="w-auto h-28" />
                    ))}
                </div>
            </section>

        </main>
    )
}