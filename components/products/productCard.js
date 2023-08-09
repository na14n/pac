import Image from "next/image";

const ProductCard = ({ media, name, brand, category, slug, best }) => {
    return (
        <a className="z-10 rounded-sm overflow-hidden bg-[#FCFCFC] shadow-sm w-60 h-fit relative  flex flex-col items-center justify-end group hover:-translate-y-1 hover:shadow-lg transition-all" href={slug ? slug : '/'}>
            <div className={`w-32 h-32 absolute rotate-45 -top-16 -right-16 z-10 bg-gradient-to-r from-nav-orange to-pac-orange px-3 py-2 flex flex-col justify-end items-center ${best == 'true' ? '' : 'hidden'}`}>
                <p className="text-[#FCFCFC] capitalize font-bold text-xs">Best</p>
                <p className="text-[#FCFCFC] capitalize font-bold text-xs">Seller</p>
            </div>
            <div className="w-full h-64 z-0 relative flex items-center justify-center">
                <Image fill={true} src={media ? media : '/gengigel-bottle.png'} alt="dental-product" />
            </div>
            <div className="w-full h-20 flex flex-col p-2 z-10">
                <div className="font-bold text-[#171717] text-lg">{name ? name : 'Product Name'}</div>
                <div className="text-[#373737] text-xs">{brand ? brand : 'Brand Name'}</div>
                <div className="text-[#373737] text-xs">{category ? category : 'Category'}</div>
            </div>
        </a>
    )
}

export default ProductCard;