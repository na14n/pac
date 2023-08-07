const Updates = ({ type, title, description, image, date, alttext }) => {
  return (
    <>
      {type === 1 ? (
        <section className="text-white">
          <section className="flex flex-col items-start mr-3 relative">
            <img
              className="w-full h-[312px] rounded-xl my-2 hover:border-pac-green hover:border-4 hover:border-solid"
              src={image}
              alt={alttext}
            />
            <span className="absolute bottom-0 left-0 mb-5 mx-3 text-xl font-semibold flex flex-col">
              <span className="font-normal text-sm">{description}</span>
              {title}
            </span>
          </section>
        </section>
      ) : type === 2 ? (
        <section className="text-white w-full">
          <section className="flex flex-col items-start mr-5 relative">
            <img
              className="w-full h-52 rounded-xl mt-2 hover:border-pac-green hover:border-4 hover:border-solid"
              src={image}
              alt={alttext}
            />
            <span className="absolute bottom-0 left-0 mb-3 mx-3 text-xl font-semibold flex flex-col">
              <span className="font-normal text-sm">{description}</span>
              {title}
            </span>
          </section>
        </section>
      ) : type === 3 ? (
        <div className="w-[75%] h-auto hover:border-2 hover:border-pac-green p-1 rounded-xl mb-8">
          <img
            className="w-full h-60 border-2 rounded-xl mb-2"
            src={image}
            alt={alttext}
          />
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-sm text-pac-orange mb-2">{date}</p>
          <p className="text-sm">{description}</p>
        </div>
      ) : type === 4 ? (
        <div className="w-full h-auto hover:border-2 hover:border-pac-green p-1 rounded-xl flex mb-2">
              <div className="flex">
                <img
                  className="w-[30%] h-full border-2 rounded-xl mr-4"
                  src={image}
                  alt={alttext}
                />
                <div>
                  <p className="text-xl font-semibold">
                    {title}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">{date}</p>
                </div>
              </div>
            </div>
      ) : null}
    </>
  );
};

export default Updates;
