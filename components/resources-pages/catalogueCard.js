import Button from "../button";

const CatalogueCard = ({img, name, link}) => {
    return (
        <div className="w-80 h-64 bg-[#EFEFEF] rounded-md shadow-md relative overflow-hidden flex flex-col justify-end">
            <img className="w-full h-auto absolute top-0 z-0" src={link ? link : 'https://picsum.photos/1920/1080'}/>
            <div className="bg-[#EFEFEF] h-1/3 w-full z-10 flex flex-col py-2 px-4 gap-2">
                <div className="font-bold text-[#121212] text-lg">{name ? name : 'Catalog Name'}</div>
                <Button name={'Download'} />
            </div>
        </div>
    )
}

export default CatalogueCard;