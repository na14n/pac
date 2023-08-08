'use client';
import { Provider, useAtom } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";

export default function AddToBasket({ item }) {

    const [basketItems, setBasketItems] = useAtom(BasketAtom);

    const addToBasket = () => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)

        if (itemIndex === -1) {
            setBasketItems([...basketItems, { ...item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty += 1;
            setBasketItems(updatedBasketItems);
        }
        
        console.log(basketItems);

    }

    return (
        <Provider>
            <button className="w-fit h-fit bg-slate-200 p-1" onClick={() => addToBasket()}>
                <h5>Add to Basket</h5>
            </button>
        </Provider>
    )
}