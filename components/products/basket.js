'use client';
import { useEffect, useState } from "react";
import { useAtom, Provider } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";


export default function Basket() {

    const [loading, setLoading] = useState(true)
    const [basketItems, setBasketItems] = useAtom(BasketAtom);
    const [basket, setBasket] = useState(null);
    const [inputValues, setInputValues] = useState({});

    useEffect(() => {
        setLoading(true);

        // if (typeof basket === object) {
        //     if (basketItems >= 0) {
        //         setLoading(false);
        //     }
        // }
        if (basketItems) {
            setBasket(basketItems);
            // console.log("BASKET", basketItems);
            // if (basket.length >= 0) {
            //     setLoading(false)
            // }
            // console.log(basket.length);
            if (basket) {
                // console.log("BASKET");
                setLoading(false)
            }
        }
    }, [basketItems, basket])

    const increment = (item) => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)
        console.log(itemIndex);
        // console.log(basketItems);
        // console.log(item.item.id);

        if (itemIndex === -1) {
            setBasketItems([...basketItems, { ...item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty += 1;
            setBasketItems(updatedBasketItems);
            // setInputValues({ ...inputValues, [item.id]: value++ });
        }
        console.log(basketItems);
    }

    const decrement = (item) => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)
        console.log(itemIndex);

        if (itemIndex === -1) {
            setBasketItems([...basketItems, { ...item, qty: 1 }])
        } if (item.qty === 1) {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems.splice(itemIndex, 1); // Remove the item from the cart
            setBasketItems(updatedBasketItems);
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty -= 1;
            setBasketItems(updatedBasketItems);
            // setInputValues({ ...inputValues, [item.id]: value-- });
        }
        console.log(basketItems);
    }

    const handleInputChange = (event, item) => {
        const value = event.target.value;
        setInputValues({ ...inputValues, [item.id]: value });

        const parsedValue = parseInt(value);
        if (parsedValue <= 0) {
            // If the value is less than or equal to zero, remove the item from the cart
            const updatedBasketItems = basketItems.filter((basketItem) => basketItem.id !== item.id);
            setBasketItems(updatedBasketItems);
        } else {
            // Update the quantity of the item in the cart
            const updatedBasketItems = basketItems.map((basketItem) => {
                if (basketItem.id === item.id) {
                    return { ...basketItem, qty: parsedValue };
                }
                return basketItem;
            });
            setBasketItems(updatedBasketItems);
        }
    };


    return (
        <Provider>
            <div className="bg-[#FCFCFC] flex flex-col gap-8 w-full min-h-full h-fit p-2 py-8 sm:p-8 grow shadow-md rounded-sm">
                <h1 className="font-bold text-2xl text-pac-orange">
                    My Cart
                </h1>
                <div className={`w-full h-full flex flex-col ${basketItems.length === 0 ? `justify-center items-center` : `justify-start items-start`}`}>
                    {loading ? <p>Loading...</p> : basket.length != 0 ? (
                        <ul className="flex flex-col gap-4 w-full h-full md:px-4">
                            {basketItems.map((i, index) => (
                                <li key={index} className="w-full min-h-32 max-h-fit shadow-md rounded-sm flex items-center border-[1px] border-[#575757]/20 p-0 sm:p-4">
                                    <div className="w-28 h-28 shrink-0 rounded-lg relative border-[2px] border-nav-orange/75 overflow-hidden">
                                        <Image fill={true} className="object-contain" src={i ? i.image : ''} />
                                    </div>
                                    <div className="w-full h-full flex flex-col px-4">
                                        <h3 className="font-semibold text-lg text-[#121212]">{i.name}</h3>
                                        <h5 className="text-sm text-[#373737]">{i.brand}</h5>
                                    </div>
                                    <div className="w-fit h-full shrink-0 flex max-md:flex-col-reverse max-md:gap-2 items-center justify-center gap-4">
                                        <button className={`w-fit h-fit rounded-md flex items-center text-[#FCFCFC] justify-center bg-red-700 hover:bg-red-600`} onClick={() => decrement(i)}>
                                            <Icon icon={'mdi:minus'} className="text-lg p-1" />
                                        </button>
                                        <input
                                            type="number"
                                            min="0"
                                            value={inputValues[i.id] || i.qty}
                                            onChange={(e) => handleInputChange(e, i)}
                                            className="w-10 h-fit border-2 border-[#575757]/20 rounded-sm focus:border-nav-orange/80 px-2 py-1 outline-none"
                                        />
                                        <button className={`w-fit h-fit bg-green-700 hover:bg-green-600 rounded-md flex text-[#FCFCFC] items-center justify-center`} onMouseDown={() => increment(i)}>
                                            <Icon icon={'mdi:plus'} className="text-lg p-1" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) :
                        <p>No Items Placed inside the Basket. View our products <a className="underline text-pac-orange " href="/products">here</a>.</p>
                    }
                </div>
            </div>
        </Provider>
    )
}