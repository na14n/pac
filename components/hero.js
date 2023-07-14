'use client';
import { useAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { HeaderStateAtom } from "@/lib/stores/headerState";

const Hero = () => {
    const { ref, inView } = useInView();
    let [headerState, setHeaderState] = useAtom(HeaderStateAtom);
    if (inView == true) {
        setHeaderState(true);
    } else {
        setHeaderState(false);
    }

    return (
        <div className="w-full h-full flex justify-center items-center pb-1">
            <div ref={ref} className="w-full h-[100vh] flex justify-center items-center bg-slate-600">
                (hero banner)
            </div>
        </div>
    )
}

export default Hero;