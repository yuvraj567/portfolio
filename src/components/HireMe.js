import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
    return(
        <div  className="fixed left-4 bottom-4
        flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
        ">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-48 md:h-28">
                <Link href='mailto:yuvraj8847.11@gmail.com' className='flex items-center justify-center
                 -translate-x-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
                 font-semibold hover:bg-light hover:text-dark 
                 hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:w-12 md:h-12 md:text-[10px]
                 '>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe