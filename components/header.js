import { useInView } from 'react-intersection-observer';

const Header = () => {

    // const { ref, inView, entry } = useInView();
    let isExpanded;

    return (
        <div class="min-h-24 h-24 max-h-24 w-full fixed top-0 flex justify-center items-center px-32">
            <div class="flex-shrink-0 h-full basis-1/4 test">(logo)</div>
            <div class="flex-shrink-0 h-full basis-1/2 test">(navigation links)</div>
            <div class="flex-shrink-0 h-full basis-1/4 test">(shop now && search)</div>
        </div>
    )
}

export default Header;