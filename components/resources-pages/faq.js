import { Icon } from "@iconify-icon/react";
import FaqItem from "./faqItem";

const Faq = () => {

    const placeholder = [
        {
            q: 'Question One?',
            a: 'Answer One'
        },
        {
            q: 'Question Two?',
            a: 'Answer Two'
        },
        {
            q: 'Question Three?',
            a: 'Answer Three'
        },
        {
            q: 'Question Four?',
            a: 'Answer Four'
        },
    ]

    return (
        <div className="w-full h-full xs:px-4 lg:px-28 2xl:px-48 flex flex-col gap-16 lg:py-32 items-center">
            <h1 className="text-4xl text-pac-orange uppercase font-bold">
                Frequently Asked Questions
            </h1>
            <div className="w-full h-fit flex flex-col items-center gap-8">
                {placeholder.map((q,index) => (
                    <FaqItem question={q.q} answer={q.a} />
                ))}
            </div>
        </div>
    )
}

export default Faq;