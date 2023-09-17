import React from 'react'
import {motion, useScroll} from "framer-motion"
import {useRef} from 'react';
import LiIcon from './LiIcon';

const Details =({position, company, companyLink, work}) => {
    const ref = useRef(null);
    return <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary capitalize dark:text-primaryDark'
            >@{company}</a></h3>
            <p className='font-medium w-full md:text-sm'>
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
        <div className='my-48 mb-4'>
            <h2 className='font-bold text-8xl w-full text-center mb-12 md:text-6xl xs:text-4xl md:mb-16'>
                Achievements
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2                                                                '>
                    <Details
                        position='Solved 600+ questions '
                        company='LeetCode'
                        companyLink="https://leetcode.com/Eternal_Blue/"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving a 3-star rating on LeetCode.'
                    />

                    <Details
                        position='Attained 5-star rating '
                        company='HackerRank'
                        companyLink="https://www.hackerrank.com/yuvv_raj7"
                        work='Affirming my coding and problem-solving abilities, demonstrating my commitment to continuous skill development.'
                    />

                    <Details
                        position='Solved 200+ questions '
                        company='GeeksForGeeks'
                        companyLink="https://auth.geeksforgeeks.org/user/yuvv_raj7/practice"
                        work='Strong grasp of data structures and algorithms, demonstrated by achieving 700+ points on GeeksForGeeks.'
                    />
                    
                    <Details
                        position='Qualified for Level 1.2 in the '
                        company='Flipkart Grid 5.0 Competition'
                        companyLink="https://drive.google.com/file/d/1V4lp0Sy73K8asKq7x5GMFtCm7_AH0kpM/view"
                        work='Qualified for Level 1.2 of the @Flipkart Grid 5.0 Competition, showcasing problem-solving and innovation skills.'
                    />

                    <Details
                        position='Ranked 9th in College Coding Competition '
                        company='CodingNinjaStdio'
                        companyLink="https://drive.google.com/file/d/1CNAKHfFlgKpjsUbpbyH7nKMAgj24rGsN/view"
                        work='Secured the 9th position in the College Coding Competition at CodingNinjaStdio, showcasing strong problem-solving skills.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience