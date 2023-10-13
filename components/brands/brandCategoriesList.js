import { slugFormatter, bgAccentFormatter, hoverTextAccentFormatter } from '@/lib/helpers';
import Link from 'next/link';

const BrandCategoriesList = (props) => {

    return (
        <div className=" w-full h-fit flex items-center justify-center gap-4">
            <Link
                href={`/brands/${props.p}`}
                shallow
                scroll={false}
                className={`w-fit h-fit px-2 py-1 
                ${!props.q ?
                        `bg-nav-orange/90 text-[#EFEFEF] hover:text-[#FCFCFC]shadow-md`
                        :
                        `bg-[#373737]/10 text-[#373737]/50 hover:text-[#121212] shadow-sm`} 
                transition-all rounded-md  group `}
            >
                all
            </Link>
            {props.c.map((c, index) => (
                <Link
                    key={index}
                    href={`/brands/${props.p}?q=${slugFormatter(c.name, false, true)}`}
                    shallow
                    scroll={false}
                    className={`w-fit h-fit px-2 py-1 
                    ${slugFormatter(props.q, false, false) == c.name.toLowerCase() ?
                            `bg-nav-orange/90 text-[#EFEFEF] hover:text-[#FCFCFC] shadow-md`
                            : `bg-[#373737]/10 text-[#373737]/50 hover:text-[#121212] shadow-sm`} 
                            transition-all rounded-md  group `}>
                    {c.name}
                </Link>
            ))}
        </div>
    )
}

export default BrandCategoriesList;
