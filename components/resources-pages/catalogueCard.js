import Image from "next/image";
import Button from "../button";

const CatalogueCard = ({img, name, link}) => {
    return (
        <div className="w-80 h-64 bg-[#EFEFEF] rounded-md shadow-md relative overflow-hidden flex flex-col justify-end">
            <Image className="w-full h-auto absolute top-0 z-0" src={link ? link : 'https://picsum.photos/1920/1080'} alt="dental-products-catalogue"/>
            <div className="bg-[#EFEFEF] h-1/3 w-full z-10 flex flex-col py-2 px-4 gap-2">
                <div className="font-bold text-[#121212] text-lg">{name ? name : 'Catalog Name'}</div>
                <Button name={'Download'} type={'download'} link={'https://prosapac.com/wp-content/uploads/2023/07/sample.pdf'} />
            </div>
        </div>
    )
}

export default CatalogueCard;