'use client';
import { Provider, useAtom } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";
import { toast } from 'react-toastify';
import { useEffect } from "react";

export default function AddToBasket({ item }) {

    const [basketItems, setBasketItems] = useAtom(BasketAtom);

    const addToBasket = () => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.item.id == item.id)

        if (itemIndex === -1) {
            setBasketItems([...basketItems, { item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty += 1;
            setBasketItems(updatedBasketItems);
            console.log('CURRENT BASKET: ', basketItems);
        }

        toast.success("Product Added to Basket.", {
            position: toast.POSITION.TOP_CENTER
        });

        // console.log('ITEM: ', item);
        // console.log('ITEM INDEX: ', itemIndex);
        // console.log('CURRENT BASKET: ',basketItems);
    }

    return (
        <Provider>
            <button className="group w-fit h-fit bg-size-200 bg-gradient-to-b from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 transition-all duration-50 shadow-md hover:shadow-lg" onClick={() => addToBasket()}>
                <h5 className="xs:text-sm 2xl:text-lg font-semibold text-[#F1F1F1]">Add to Basket</h5>
            </button>
        </Provider>
    )
}