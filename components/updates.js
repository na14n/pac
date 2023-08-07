const Updates = ({ type, title, category, link, image, date }) => {
  return (
    (type === 1) ? (
      <section className={"text-white"}>
        <section className="flex flex-col items-start mr-3 relative">
          <img
            className="w-full h-[312px] rounded-xl my-2 hover:border-pac-green hover:border-4 hover:border-solid"
            src={image}
          />
          <span className="absolute bottom-0 left-0 mb-5 mx-3 text-xl font-semibold flex flex-col">
            <span className="font-normal text-sm">{category}</span>
            {title}
          </span>
        </section>
      </section>
    ) : (type === 2) ? (
      <section className="text-white w-full">
        <section className="flex flex-col items-start mr-5 relative">
          <img
            className="w-full h-52 rounded-xl mt-2 hover:border-pac-green hover:border-4 hover:border-solid"
            src={image}
          />
          <span className="absolute bottom-0 left-0 mb-3 mx-3 text-xl font-semibold flex flex-col">
            <span className="font-normal text-sm">{category}</span>
            {title}
          </span>
        </section>
      </section>
    ) : null // Add a default condition if needed, otherwise you can omit this line.
  );
};

export default Updates;
