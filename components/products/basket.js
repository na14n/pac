'use client';
import { useState } from "react";
import { useAtom, Provider } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";
import Increment from "./increment";

export default function Basket() {

    const [basketItems, setBasketItems] = useAtom(BasketAtom);
    const [inputValues, setInputValues] = useState({});
    console.log(basketItems);

    const increment = (item) => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)

        if (itemIndex === -1) {
            updateBasketItems([...basketItems, { ...item, qty: 1 }])
        } else {
            const updatedBasketItems = [...basketItems];
            updatedBasketItems[itemIndex].qty += 1;
            setBasketItems(updatedBasketItems);
            setInputValues({ ...inputValues, [item.id]: value++ });
        }
        console.log(basketItems);
    }

    const decrement = (item) => {
        const itemIndex = basketItems.findIndex((basketItem) => basketItem.id === item.id)

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
            setInputValues({ ...inputValues, [item.id]: value-- });
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
            <div className="w-fit min-h-96 h-fit p-32 bg-[#FCFCFC] flex flex-col">
                <h1 className="font-bold text-3xl text-[#121212]">
                    Your Basket
                </h1>
                {basketItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {basketItems.map((i, index) => (
                            <li key={index}>
                                {/* <p>{i.name} - Quantity: {i.qty}</p> */}
                                {i.id}__
                                {i.name}__
                                {i.brand.node.name}__
                                <input
                                    type="number"
                                    min="0"
                                    value={inputValues[i.id] || i.qty}
                                    onChange={(e) => handleInputChange(e, i)}
                                />
                                <button className={`w-fit h-fit p-1 bg-red-500`} onClick={() => decrement(i)}>
                                    -
                                </button>
                                {`Quantity: ${i.qty}`}
                                <button className={`w-fit h-fit p-1 bg-green-500`} onMouseDown={() => increment(i)}>
                                    +
                                </button>

                            </li>
                        ))}
                    </ul>
                )}
                {/* <pre>
                    {JSON.stringify(basketItems, null, 2)}
                </pre> */}
            </div>
        </Provider>
    )
}