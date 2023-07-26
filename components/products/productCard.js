const ProductCard = () => {
    return (
        <a className="z-10 rounded-md border-2 border-[#B1B1B1] bg-[#EEE] w-64 h-72 relative overflow-hidden flex flex-col items-center justify-end group hover:border-pac-green" href="#">
            <img className="w-full h-auto absolute top-0" />
            <div className="w-full h-2/5 flex flex-col p-2 bg-[#FCFCFC] shadow-md">
                <div className="font-bold text-[#171717] text-xl">Product Name</div>
                <div className="text-[#373737] text-sm">Product Brand Name</div>
                <div className="text-[#373737] text-sm">Category</div>
            </div>
            <a className="absolute bottom-0 w-full h-content flex justify-center items-center bg-pac-green z-20 py-1 translate-y-8 group-hover:translate-y-1 transition-all" href="#">
                <div className="text-[#FCFCFC] text-sm font-semibold">Add to Quotation</div>
            </a>
        </a>
    )
}

export default ProductCard;