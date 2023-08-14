import { Button } from "@/components"

export default function ErrorPage () {
    return (
        <main className="w-hull min-h-screen max-h-fit lg:px-32 2xl:px-48 py-16 bg-[#272727] flex flex-col justify-center items-center gap-4">
            <h1 className="text-[#FCFCFC] font-bold text-5xl">We're Sorry</h1>
            <h3 className="text-[#EFEFEF] text-xl">The page you were looking for is not available.</h3>
            <Button type={1} link={'/'} name={'Return to Home Page'}/>
        </main>
    )
}