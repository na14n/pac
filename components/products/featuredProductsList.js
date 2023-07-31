import ProductCard from "./productCard";

const FeaturedProductsList = () => {
    return (
        <div className="w-full h-full lg:px-32">
            <div className="h-full w-full rounded-md bg-[#FCFCFC] flex flex-col items-center justify-between shadow-md">
                <div className='w-full h-content px-4 py-2 border-b-2 uppercase text-pac-orange text-sm font-semibold'>
                    Featured Products
                </div>
                <div className="w-full h-full p-4">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductsList;