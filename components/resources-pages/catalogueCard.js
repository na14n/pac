import Image from "next/image";
import Button from "../button";

const CatalogueCard = ({ img, name, date, brand, link }) => {
    return (
        <div className="w-80 h-64 bg-[#EFEFEF] rounded-md shadow-md relative overflow-hidden flex flex-col justify-end hover:-translate-y-1 hover:shadow-lg transition-all border-2 border-[#575757]/20 hover:border-pac-green cursor-pointer">
            <Image className="w-full h-auto absolute top-0 z-0" src={link ? link : 'https://picsum.photos/1920/1080'} alt="dental-products-catalogue" width={256} height={320} />
            <div className="w-full h-1/3 flex z-10 py-2 bg-[#EFEFEF] gap-2 px-4">
                <div className="h-full  w-full z-10 flex flex-col">
                    <div className="font-bold text-[#121212] text-lg">{name ? name : 'Catalog Name'}</div>
                    <div className=" text-[#575757] text-sm">{date ? date : 'Release Date'}</div>
                    <div className=" text-[#575757] text-sm">{brand ? brand : 'Catalog Brand'}</div>
                </div>
                <div className="h-full w-full py-1 flex flex-col justify-end items-end">
                    <Button name={'Download'} type={'download'} link={'https://prosapac.com/wp-content/uploads/2023/07/sample.pdf'} />
                </div>
            </div>
        </div>
    )
}

export default CatalogueCard;