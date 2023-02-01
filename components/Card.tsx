import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}

function Card({}: Props) {
  return (
    <article className='flex flex-col mt-40 rounded-lg items-center space-y-7 flex-shrink-0 w-[550px] h-[650px] md:w-[350px] xl:w-[650px] snap-center bg-slate-400 p-10  transition-opacity duration-200 overflow-scroll'>
        <motion.img 
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        src="/card.jpg" alt="card" className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl  text-white font-light'>JOB title</h4>
            <p className='font-bold text-white text-2xl mt-1'>Designation</p>
            <div className='flex space-x-2 my-2'>
                <Image src="/Js.png" alt="tech" height={100} width={100} className='h-10 w-10 rounded-full ' />
                <Image src="/mongodb.png" alt="tech" height={100} width={100} className='h-10 w-10 rounded-full ' />
                <Image src="/react.png" alt="tech" height={100} width={100} className='h-10 w-10 rounded-full ' />
                <Image src="/node.png" alt="tech" height={100} width={100} className='h-10 w-10 rounded-full ' />
                <Image src="/npm.png" alt="tech" height={100} width={100} className='h-10 w-10 rounded-full ' />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work ..... -Ended ......</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
            </ul>
        </div>
    </article>
  )
}

export default Card