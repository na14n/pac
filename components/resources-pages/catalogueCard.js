import Image from "next/image";
import Button from "../button";

const CatalogueCard = ({ img, name, date, brand, link }) => {
  return (
    <div className="w-60 h-80 bg-[#EFEFEF] rounded-md shadow-md relative overflow-hidden flex flex-col justify-end hover:-translate-y-1 hover:shadow-lg transition-all border-2 border-[#575757]/20 hover:border-pac-green cursor-pointer">
      <Image
        src={img ? img : "https://picsum.photos/600/800"}
        alt="dental-products-catalogue"
        width={800}
        height={800}
        className="object-fill object-center"
      />
      <div className="w-full h-1/3 flex justify-around items-center p-2 z-10 bg-[#EFEFEF] ">
        <div className="h-full w-full z-10 flex flex-col px-2 ">
          <div className=" text-[#575757] text-xs">
            {brand ? brand : "Catalog Brand"}
          </div>
          <div className="font-bold text-[#121212] h-full">
            {name ? name : "Catalog Name"}
          </div>
        </div>
        <Button
          type={"download"}
          link={
            link
              ? link
              : "https://prosapac.com/wp-content/uploads/2023/07/sample.pdf"
          }
        />
      </div>
    </div>
  );
};

export default CatalogueCard;
