import Image from "next/image";

const ProductCard = ({ media, name, brand, category, slug, best }) => {
    return (
        <a className="z-10 rounded-sm overflow-hidden bg-[#FCFCFC] shadow-sm w-48 h-fit relative  flex flex-col items-center justify-end group hover:-translate-y-1 hover:shadow-lg transition-all" href={slug ? slug : '/'}>
            <div className={`w-fit h-fit absolute top-0 left-0 z-10 bg-gradient-to-r from-nav-orange to-pac-orange px-3 py-2 flex flex-col justify-end items-center ${best == 'true' ? '' : 'hidden'}`}>
                <p className="text-[#FCFCFC] capitalize font-bold text-xs">Best Seller</p>
            </div>
            <div className="w-full h-48 z-0 relative flex items-center justify-center">
                <Image height={192} width={192} src={media ? media : '/gengigel-bottle.png'} alt="dental-product" />
            </div>
            <div className="w-full h-fit flex flex-col px-4 py-2 z-10">
                <div className="font-bold text-[#171717] text-lg">{name ? name : 'Product Name'}</div>
                <div className="text-[#373737] text-xs">{brand ? brand : 'Brand Name'}</div>
                <div className="text-[#373737] text-xs">{category ? category : 'Category'}</div>
            </div>
        </a>
    )
}

export default ProductCard;