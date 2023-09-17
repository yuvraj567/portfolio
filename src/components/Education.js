import React from 'react'
import {motion, useScroll} from "framer-motion"
import {useRef} from 'react';
import LiIcon from './LiIcon';

const Details =({type, time, place, info}) => {
    const ref = useRef(null);
    return <li ref={ref}  className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl m:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-primaryDark xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
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
            <h2 className='font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl md:mb-16 mb-16'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4   xs:ml-2                                                              '>
                    <Details
                        type='B.Tech in Computer Science '
                        time='June 2021-May 2025'
                        place="Institute of Engineering and Management, Kolkata"
                        info='Achieved a Cumulative Grade Point Average (CGPA) of 9.33 out of 10.0 till the completion of the fourth semester.'
                    />

                    <Details
                        type='Higher Secondary Education in Science'
                        time='June 2018-May 2020'
                        place="Mahanth Tapeshwar Goswami S.S. School, Chapra, Bihar"
                        info='Achieved an impressive 84.2% marks in my 12th-grade examination.'
                    />
                    <Details
                        type='Matriculation in Science'
                        time='June 2016-May 2018'
                        place="N.S. High School, Taraiya, Chapra"
                        info='Achieved an impressive 74% marks in my 10th-grade Board examination.'
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education