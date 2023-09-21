import Image from "next/image";
import ConGridItem from "./conGridItem";

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
            <div className="w-fit h-fit grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {arrayOfObjects.map((a, i) => (
                    <ConGridItem key={i} position={i} data={a} />
                ))}
            </div>
        </section>
    )
}