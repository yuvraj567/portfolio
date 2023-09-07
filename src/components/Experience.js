import React from 'react'
import {motion, useScroll} from "framer-motion"
import {useRef} from 'react';
import LiIcon from './LiIcon';

const Details =({position, company, companyLink, work}) => {
    const ref = useRef(null);
    return <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary capitalize dark:text-primaryDark'
            >@{company}</a></h3>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const  {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    );
    return(
        <div className='my-48 '>
            <h2 className='font-bold text-8xl w-full text-center mb-12'>
                Achievements
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4                                                                '>
                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />

                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />

                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />

                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />

                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience