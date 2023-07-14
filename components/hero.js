'use client';
import { Provider, atom, useAtom } from "jotai";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HeaderStateAtom } from "@/lib/stores/headerState";

const Hero = () => {
    const { ref, inView } = useInView();
    let [headerState, setHeaderState] = useAtom(HeaderStateAtom);
    if (inView == true) {
        setHeaderState(true);
       console.log('HEADER STATE: ',headerState);
       console.log('INVIEW: ',inView);
    } else {
        setHeaderState(false);
        console.log('HEADER STATE: ',headerState);
        console.log('INVIEW: ',inView);
    }
    

    return (
        <div className="w-full h-full test flex justify-center items-center bg-red-500/10">
            <div ref={ref} className="w-full h-[100vh] test flex justify-center items-center bg-red-500/10">
                (hero banner)
            </div>
        </div>
    )
}

export default Hero;