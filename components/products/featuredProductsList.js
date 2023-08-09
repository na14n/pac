import ProductCard from "./productCard";

const FeaturedProductsList = () => {
    return (
        <div className="w-full h-full lg:px-32 2xl:px-48 flex flex-col items-center justify-center py-16">
            <h1 className='w-fit px-4 py-2 uppercase text-pac-orange text-2xl font-semibold `'>
                Featured Products
            </h1>
            <div className='w-4/5 h-[2px] bg-pac-orange' />
            <div className="w-full h-full px-8 pt-16 grid lg:grid-cols-4 2xl:grid-cols-6 lg:gap-y-4 2xl:gap-y-6">
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