'use client';

import { Icon } from "@iconify-icon/react";
import { Provider, atom, useAtom } from "jotai";
import { BasketAtom } from "@/lib/stores/basketAtom";

export default function BasketIcon() {

    let [basket, setBasket] = useAtom(BasketAtom);


    return (
        basket ? (
            basket.length > 0 ?
                <a
                    className={`text-2xl flex items-center justify-center gap-1 ${animate ? `text-pac-green` : `text-white`}hover:text-pac-orange relative`}
                    href="/products/basket"
                >
                    <Icon icon="mdi:basket-outline" />
                </a>
                : <></>
        ) : <></>
    )
}