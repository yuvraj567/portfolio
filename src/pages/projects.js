import React from 'react';
import Head from 'next/head'
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import Project1 from "../../public/images/projects/courseStack.png"
import weather from "../../public/images/projects/weather.png"
import game from "../../public/images/projects/number-game.png"
import TransitionEffect from '@/components/TransitionEffect';
import majorwala from "../../public/images/projects/major.png"
import Random from "../../public/images/projects/password.png"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='relative w-full flex items-center justify-between rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'/>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={`${link}`} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>

                <Link href={`${link}`} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title} </h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={`${github}`} target='_blank' className='w-10'><GithubIcon/></Link>
                    <Link href={`${link}`} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={`${link}`} target="_blank">
                <Image src={img} alt={title} className='w-full h-[80%]'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>

                <Link href={`${link}`} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title} </h2>
                </Link>

                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={`${link}`} target='_blank'
                        className='underline text-lg  font-semibold md:text-base'
                        >Visit </Link>
                    <Link href={`${github}`} target='_blank' className='w-8 md:w-6'><GithubIcon/></Link>
                    
                </div>
            </div>
        </article>
    )
}
const projects = () => {
    return(
        <>
            <Head>
                <title>Portfolio | Projects Page</title>
                <meta name="description" content="Explore More"/>
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!'
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Edtech Platform Project"
                                summary="CourseStack is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. 
                                The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS."
                                link="https://coursestack-sigma.vercel.app/"
                                type='Major Project'
                                img={Project1}
                                github="https://github.com/yuvraj567/course-stack-fullstack"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="SkyView Weather App"
                                link="https://skyview-weather.netlify.app/"
                                type='Minor Project'
                                img={weather}
                                github="https://github.com/yuvraj567/weather-App"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="2-0-4-8 game"
                                link="https://2-0-4-8game.netlify.app/"
                                type='Minor Project'
                                img={game}
                                github="https://github.com/yuvraj567/2048-game"
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title="LeetCode Problem Extension"
                                summary="LeetCode Torture is an extension designed to make you productive to ace those technical interviews. When you activate this extension,
                                 you won't be able to access any websites except LeetCode until you solve your randomly assigned LeetCode problem."
                                link="https://github.com/yuvraj567/haha-funny-leetcode-extension"
                                type='Major Project'
                                img={majorwala}
                                github="https://github.com/yuvraj567/haha-funny-leetcode-extension"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Random Password Generator"
                                link="https://random-password-generater24into7.netlify.app/"
                                type='Minor Project'
                                img={Random}
                                github="https://github.com/yuvraj567/random-password-generate"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Calculator"
                                link="/"
                                type='Minor Project'
                                img={weather}
                                github="www.google.com"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects