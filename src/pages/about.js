import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const about = () => {
    return(
        <>
            <Head>
                <title>Portfolio | About Page</title>
                <meta name="description" content="Explore More"/>
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-4 flex flex-col items-start justify-start '>
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>

                        <p className='my-4 font-medium'>Hi! I&apos;m <span className='font-bold'>Yuvraj Singh</span>, a diligent Bachelor of Technology (B.Tech) student majoring in Computer Science. 
                        My journey is characterized by a strong foundation in web development and expertise in data structures and algorithms (DSA).
                        </p>
                        <p className='font-medium'> In the domain of web development, I excel at creating seamless, user-centric websites that blend design with functionality. However, 
                        my true passion is DSA, where I relish solving intricate problems, optimizing algorithms, and crafting elegant solutions. </p>

                        <p className='font-medium my-4'>
                        I&apos;m on a relentless quest for knowledge, continually exploring the latest technologies and 
                        collaborating on innovative projects. With my unwavering commitment to excellence, 
                        I aspire to contribute positively to the ever-evolving landscape of computer science.
                        </p>
                        <p className='font-medium my-4'>Coding the future, one line at a time. Let&apos;s innovate together.</p>
                    </div>
                    <div className='col-span-4 relative h-[65%] rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt="Yuvraj Singh" className='w-[100%] h-[100%] rounded-2xl'
                            priority
                            sizes="(max-width:768px) 100vw,
                            (max-width:1200px) 50vw,
                            50vw"
                        />
                    </div>
                </div>
                
                <Skills/>
                <Education/>
                <Experience/>
                </Layout>
            </main>
        </>
    )
}
export default about;