import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import image from "../../public/images/node-2032759.jpg"
import Image from 'next/image';
import {BsSendCheck} from 'react-icons/bs'
import TransitionEffect from '@/components/TransitionEffect';

const contact = () => {
  return (
        <>
            <Head>
                <title>Portfolio | Contact Page</title>
                <meta name="description" content="Explore More" />
            </Head>
            <TransitionEffect/>
            <div>
              <AnimatedText text="Let&apos;s Connect!" className='mb-16 mt-16'/>
            </div>

            <div className='w-full flex flex-col items-center'>
              <div>
                <h1 className='pt-8 text-5xl text-[#e84949] ml-[150px]'>Contact Me</h1>
                <h3 className='text-3xl capitalize text-black ml-[150px]'>Questions, thoughts, or just want to say hello?</h3>

                <div className='mb-4 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-black-700'>
                  <div className='flex mt-[25px] justify-center items-center w-[1000px]'>
                    <form action="https://formspree.io/f/mlekrnnl" method="post" className='flex flex-col gap-[30px] w-[70%] my-[16px] mx-[40px]'>
                      <div className='w-full' required='true'>
                        <label htmlFor="there" className='font-semibold'>Enter your name</label>
                        <input type="text" id='there' className='w-full h-[42px] py-0 px-[16px] font-bold rounded-md shadow-lg bg-[#ffffff] hover:focus:border-none' placeholder='John Doe'/>
                      </div>
                      <div>
                      <label htmlFor="there" className='font-semibold'>Enter your email address</label>
                        <input type="email" id='there' className='w-full h-[42px] py-0 px-[16px] font-bold rounded-md shadow-lg bg-[#ffffff] hover:focus:border-none' placeholder='abc@gmail.com'/>
                      </div>
                      <div className='w-full'>
                        <label htmlFor="therei" className='font-semibold'>Enter your subject</label>
                        <input type="text" id='therei' className='w-full h-[42px] py-0 px-[16px] font-bold rounded-md shadow-lg bg-[#ffffff] hover:focus:border-none' placeholder='internship opportunity'/>
                      </div>
                      <div className='w-full'>
                        <label htmlFor="message" className='font-semibold'>Enter your message</label>
                        <textarea name="message" id="message" cols="30" rows="10" className='w-full h-auto py-0 px-[16px] pt-[8px] font-bold rounded-md shadow-lg bg-[#ffffff] hover:focus:border-none' placeholder='Hii, There...'></textarea>
                      </div>
                      <div className='flex flex-col items-center justify-between'>
                        <button type='submit' className='bg-[#e84949] w-fit text-white py-[6.4px] px-[18px] cursor-pointer font-[9.6px] my-4 mx-0'>Send Message</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>

        </>
  )
}
export default contact;
