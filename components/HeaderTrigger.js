'use client';
import { useAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { HeaderStateAtom } from "@/lib/stores/headerState";

const HeaderTrigger = ({ children }) => {
    const { ref, inView } = useInView();
    let [headerState, setHeaderState] = useAtom(HeaderStateAtom);
    if (inView === true) {
        setHeaderState(true);
    } else {
        setHeaderState(false);
    }

    return (
        <div className="z-50 w-full h-full">
            <div ref={ref} className="absolute t-0 w-full h-[10px]"></div>
            {children}
        </div>
    )
}

export default HeaderTrigger;
