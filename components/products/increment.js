'use client';
import { Provider, useAtom } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";

export default function Increment({ item, type }) {

    const [basketItems, setBasketItems] = useAtom(BasketAtom);

    const increment = () => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)

        if (itemIndex === -1) {
            updateBasketItems([...basketItems, { ...item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty += 1;
            setBasketItems(updatedBasketItems);
        }
        console.log(basketItems);
    }

    const decrement = () => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)

        if (itemIndex === -1) {
            setBasketItems([...basketItems, { ...item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty -= 1;
            return updatedBasketItems;
        }
        console.log(basketItems);
    }


    return (
        <button className={`w-fit h-fit p-1 ${(type === 'add') ? `text-green-500` : (type === 'sub') ? `text-red-500` : `text-pac-orange`}`} onClick={(type === 'add') ? increment : (type === 'sub') ? decrement : ``}>
            <p>{`${(type === 'add') ? `+` : (type === 'sub') ? `-` : `...`}`}</p>
        </button>
    )
}