import ProductCard from "./productCard";

const FeaturedProductsList = () => {
    return (
        <div className="w-full h-full xs:px-4 lg:px-32 2xl:px-48 flex flex-col items-center justify-center py-16 max-lg:py-8" >
            <h1 className='w-fit py-2 uppercase text-pac-orange text-2xl font-semibold `'>
                Featured Products
            </h1>
            <div className='w-4/5 h-[2px] bg-pac-orange' />
            <div className="w-full h-full pt-16 max-lg:pt-8 grid gap-4 grid-auto-fit-xs max-lg:grid-auto-fit-[150px] ">
                <ProductCard best={'true'} />
                <ProductCard best={'true'} />
                <ProductCard best={'true'} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default FeaturedProductsList;