import Image from "next/image";

const FaciCard = ({ title, description, image, alttext }) => {
  return (
    <div>
      <div className=" w-72 h-72 rounded-md shadow-md group overflow-hidden relative flex justify-center items-center">
        <div className="absolute z-20 t-0 bg-gradient-to-b from-[#3E3E3E]/50 via-[#3E3E3E]/70 to-[#121212]/100  w-full h-full transition-all translate-y-96 group-hover:translate-y-0" />
        <div className="absolute z-10 t-0 w-96 h-96 flex justify-center items-center">
          <Image
            className="flex  w-full h-full object-cover object-center"
            src={image}
            alt={alttext}
            width={100}
            height={100}
          />
          <h3 className=" w-full font-bold text-xl absolute text-center bottom-0 align-middle drop-shadow-xl group-hover:hidden text-white h-10 bg-gradient-to-t from-pac-charcoal to-transparent">
            {title}
          </h3>
        </div>
        <div className="w-full h-full z-40 flex flex-col items-center justify-around py-4 translate-y-96 group-hover:translate-y-0 transition-all">
          <div className="flex flex-col items-center justify-center h-fit w-fit text-center">
            <h3 className="text-[#FCFCFC] text-2xl font-bold ">{title}</h3>
          </div>
          <p className="text-[#EFEFEF] text-sm text-center px-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaciCard;
