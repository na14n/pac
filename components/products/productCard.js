import Image from "next/image";
import { breadcrumbsFormatter } from "@/lib/helpers";

const ProductCard = ({ media, name, brand, category, slug, best }) => {

    const breadcrumbs = category ? breadcrumbsFormatter(category) : {}

    return (
        <a className="z-10 rounded-sm overflow-hidden bg-[#FCFCFC] shadow-sm w-48 max-xl:w-36 aspect-[3/4] relative  flex flex-col items-center justify-end group hover:-translate-y-1 hover:shadow-lg transition-all" href={slug ? `/products/${slug}` : '/'}>
            <div className={`w-fit h-fit absolute top-0 left-0 z-10 bg-gradient-to-r from-nav-orange to-pac-orange px-3 py-2 flex flex-col justify-end items-center ${best === true ? '' : 'hidden'}`}>
                <p className="text-[#FCFCFC] capitalize font-bold text-xs">Best Seller</p>
            </div>
            <div className="w-48 h-48 shrink-0 max-xl:w-36 max-xl:h-36 z-0 relative flex items-center justify-center overflow-hidden bg-[#FFF]">
                <Image fill={true} className="object-contain" src={media ? media : '/gengigel-bottle.png'} alt="dental-product" />
            </div>
            <div className="w-full h-full flex flex-col px-4 py-2 z-10">
                <div className="font-bold text-[#171717] text-xs xl:text-lg">{name ? name.length > 12 ? name.substring(0, 12) + "..." : name: ""}</div>
                <div className="text-[#373737] text-[0.5rem] xl:text-xs">{brand ? brand : 'Brand Name'}</div>
                <div className="text-[#373737] text-[0.5rem] xl:text-xs">{breadcrumbs ? breadcrumbs.parent : 'Category'}</div>
            </div>
        </a>
    )
}

export default ProductCard;