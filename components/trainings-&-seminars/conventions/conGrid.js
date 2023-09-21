import Image from "next/image";

export default function ConGrid() {

    const arrayOfObjects = [
        { title: 'One', body: 'Apple' },
        { title: 'Two', body: 'Banana' },
        { title: 'Three', body: 'Cherry' },
        { title: 'Four', body: 'Date' },
        { title: 'Five', body: 'Fig' },
        { title: 'Six', body: 'Grape' },
        { title: 'Seven', body: 'Kiwi' },
        { title: 'Eight', body: 'Lemon' },
        { title: 'Nine', body: 'Mango' },
        { title: 'Ten', body: 'Orange' },
        { title: 'Eleven', body: 'Peach' },
        { title: 'Twelve', body: 'Pear' },
        { title: 'Thirteen', body: 'Plum' },
        { title: 'Fourteen', body: 'Raspberry' },
        { title: 'Fifteen', body: 'Strawberry' },
        { title: 'Sixteen', body: 'Watermelon' },
        { title: 'Seventeen', body: 'Blueberry' },
        { title: 'Eighteen', body: 'Pineapple' },
        { title: 'Nineteen', body: 'Grapes' },
        { title: 'Twenty', body: 'Lime' },
        { title: 'Twenty-One', body: 'Coconut' }
    ];


    return (
        <section className="w-full h-fit flex items-center justify-center py-16">
            <div className="w-fit h-fit grid justify-items-center grid-cols-4 gap-4">
                {arrayOfObjects.map((a, i) => (
                    <div key={i} className={`relative flex items-center justify-center
                        aspect-video shadow-md rounded-sm hover:shadow-lg transition-all ease-in-out duration-150 cursor-pointer ${i === 0 ? `h-full col-span-2 row-span-2` : `h-36 2xl:h-48`} 
                    `}>
                        {/* {a.body} */}
                        <Image src={`https://picsum.photos/seed/${a.title}/1920/1080`} fill={true} className="object-center object-contain" />
                    </div>
                ))}
            </div>
        </section>
    )
}