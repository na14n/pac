import Image from "next/image";

const ProductCard = ({media, name, brand, category, slug}) => {
    return (
        <a className="z-10 rounded-sm overflow-hidden bg-[#FCFCFC] shadow-sm w-64 h-72 relative  flex flex-col items-center justify-end group hover:-translate-y-1 hover:shadow-lg transition-all" href={slug ? slug : '/'}>
            <Image width={256} height={256} src={media ? media : 'https://picsum.photos/2400'} alt="dental-product" />
            <div className="w-full h-2/5 flex flex-col p-2">
                <div className="font-bold text-[#171717] text-lg">{name ? name : 'Product Name'}</div>
                <div className="text-[#373737] text-xs">{brand ? brand : 'Brand Name'}</div>
                <div className="text-[#373737] text-xs">{category ? category : 'Category'}</div>
            </div>
        </a>
    )
}

export default ProductCard;