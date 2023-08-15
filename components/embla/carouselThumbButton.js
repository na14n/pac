export const Thumb = (props) => {

    const { selected, imgSrc, index, onClick } = props

    return (
        <div
            className={`relative pl-3 transition-opacity ${selected ? `opacity-100` : `opacity-50`}`}
        >
            <button
                onClick={onClick}
                className="bg-transparent block cursor-pointer b-0 p-0 m-0 w-full transition-opacity text-red-500"
                type="button"
            >
                <img
                    className="block w-16"
                    src={imgSrc}
                    alt="Your alt text"
                />
            </button>
        </div>
    )
}
