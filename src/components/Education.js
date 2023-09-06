import React from 'react'
import {motion, useScroll} from "framer-motion"
import {useRef} from 'react';
import LiIcon from './LiIcon';

const Details =({type, time, place, info}) => {
    const ref = useRef(null);
    return <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-primaryDark'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
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
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4                                                                '>
                    <Details
                        type='B.Tech in Computer Science '
                        time='June 2021-May 2025'
                        place="Institute of Engineering and Management, Kolkata"
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />

                    <Details
                        type='B.Tech in Computer Science '
                        time='June 2021-May 2025'
                        place="Institute of Engineering and Management, Kolkata"
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />
                    <Details
                        type='B.Tech in Computer Science '
                        time='June 2021-May 2025'
                        place="Institute of Engineering and Management, Kolkata"
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence.'
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education