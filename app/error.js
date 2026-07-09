'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Application error:', error)
    }, [error])

    return (
        <main className="w-full min-h-screen max-h-fit lg:px-32 2xl:px-48 py-16 bg-nav-green flex flex-col justify-center items-center gap-6">
            <div className="xs:h-8 lg:h-10 w-44 relative">
                <Image alt="pros-apac-logo" src="/pac-white.png" fill={true} />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-[#FCFCFC] font-bold text-4xl lg:text-5xl text-center">Something Went Wrong</h1>
                <h3 className="text-[#EFEFEF] text-lg lg:text-xl text-center max-w-xl">
                    We&apos;re having trouble loading this page right now. Please try again in a moment.
                </h3>
            </div>
            <div className="flex gap-4 mt-2">
                <button
                    onClick={() => reset()}
                    className="group w-fit h-fit bg-size-200 shadow-md bg-gradient-to-r from-[#E05B25] via-[#FD8F29] to-[#E05B25] py-2 px-3 rounded-md hover:bg-pos-100 grow-0 shrink-0 text-sm font-semibold text-[#F1F1F1] transition-all duration-50"
                >
                    Try Again
                </button>
                <Button type={1} color={'full-green'} link={'/'} name={'Return to Home Page'} />
            </div>
        </main>
    )
}
