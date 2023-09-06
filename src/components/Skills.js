import React from 'react';
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                '
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y}}
                transition={{duration:1.5}}
                Viewport={{once:true}}
                >
                    {name}
                </motion.div>
    )
}

const Skills = () => {
    return(
        <>
            <h2 className="font-bold text-8xl -mt-5 w-full text-center">Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center rounded-full font-bold bg-[#e84949] text-white 
                p-8 shadow-dark cursor-pointer 
                '
                whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>
                <Skill name='HTML' x='-19vw' y='2vw'/>
                <Skill name='CSS' x='-5vw' y='-10vw'/>
                <Skill name='JavaScript' x='20vw' y='6vw'/>
                <Skill name='Tailwind' x='0vw' y='12vw'/>
                <Skill name='ReactJS' x='-20vw' y='-15vw'/>
                <Skill name='NodeJS' x='15vw' y='-12vw'/>
                <Skill name='ExpressJS' x='32vw' y='-5vw'/>
                <Skill name='MongoDB' x='0vw' y='-20vw'/>
                <Skill name='Redux' x='-25vw' y='16vw'/>
                <Skill name='NextJS' x='18vw' y='18vw'/>
                <Skill name='Git' x='-36vw' y='-8vw'/>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#e84949] text-white
                p-8 shadow-dark cursor-pointer 
                '
                whileHover={{scale:1.05}}
                >
                    Other
                </motion.div>
                <Skill name='C++' x='-19vw' y='2vw'/>
                <Skill name='C' x='-5vw' y='-11vw'/>
                <Skill name='Data Structure' x='18vw' y='4vw'/>
                <Skill name='Algorithms' x='0vw' y='12vw'/>
                <Skill name='Operating System' x='-20vw' y='-15vw'/>
                <Skill name='Computer architecture' x='15vw' y='-14vw'/>
                <Skill name='Discrete Mathematics' x='32vw' y='-5vw'/>
                <Skill name='DBMS' x='0vw' y='-23vw'/>
                <Skill name='Python' x='-25vw' y='18vw'/>
                <Skill name='MongoDB Atlas' x='18vw' y='18vw'/>
                <Skill name='Matlab' x='-37vw' y='-5vw'/>
            </div>
        </>
    )
}

export default  Skills;