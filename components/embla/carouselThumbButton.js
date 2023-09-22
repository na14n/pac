import Image from "next/image"

export const Thumb = (props) => {

    const { selected, imgSrc, index, onClick } = props

    return (
        <div
            className={`relative pl-3 transition-opacity ${selected ? `opacity-100` : `opacity-50`}`}
        >
            <button
                onClick={onClick}
                className="bg-transparent block cursor-pointer b-0 p-0 m-0 w-32 aspect-square transition-opacity relative"
                type="button"
            >
                <Image
                    className="object-cover object-center"
                    src={imgSrc}
                    alt="Your alt text"
                    fill
                />
            </button>
        </div>
    )
}
