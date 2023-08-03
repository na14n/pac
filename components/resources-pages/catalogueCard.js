import Image from "next/image";
import Button from "../button";

const CatalogueCard = ({ img, name, date, brand, link }) => {
    return (
        <div className="w-60 h-64 bg-[#EFEFEF] rounded-md shadow-md relative overflow-hidden flex flex-col justify-end hover:-translate-y-1 hover:shadow-lg transition-all border-2 border-[#575757]/20 hover:border-pac-green cursor-pointer">
            <Image src={link ? link : 'https://picsum.photos/600/800'} alt="dental-products-catalogue" width={600} height={800} />
            <div className="w-full h-1/3 flex justify-around items-center px-2 py-1 z-10 bg-[#EFEFEF] ">
                <div className="h-full w-full z-10 flex flex-col px-2">
                    <div className="font-bold text-[#121212]">{name ? name : 'Catalog Name'}</div>
                    <div className=" text-[#575757] text-xs">{date ? date : 'Release Date'}</div>
                    <div className=" text-[#575757] text-xs">{brand ? brand : 'Catalog Brand'}</div>
                </div>
                <Button type={'download'} link={'https://prosapac.com/wp-content/uploads/2023/07/sample.pdf'} />
            </div>
        </div>
    )
}

export default CatalogueCard;