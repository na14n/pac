import parse from "html-react-parser"

const BrandInfo = (props) => {

    return (
        props ?
            <div className={`w-full h-fit lg:px-32 2xl:px-48 lg:pt-32 2xl:pt-40 flex flex-col items-center justify-center gap-4 xl:gap-8 pb-20 `}>
                <h1 className={`text-5xl font-bold text-[#121212]`}>{props.name ? props.name : 'Brand Name'}</h1>
                <div className={`text-[#373737] p h1 h2 h3 b text-sm px-16 xl:text-lg`}>{props.description ? parse(props.description) : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</div>
            </div>
            :
            <></>
    )
}


export default BrandInfo;