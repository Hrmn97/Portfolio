import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
    socials: Social[]
}

export default function Header({socials}: Props) {
    const [open,setOpen] = useState(false)

   
  return (
    <header className='sticky top-0 flex flex-row justify-between max-w-7xl mx-auto z-[99] p-5 bg-inherit '>
        <motion.div initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{x: 0,
        opacity: 1,
        scale: 1}}
        transition={{
            duration: 1.5
        }}
        className="icons flex flex-row items-center gap-1">
        <h1 className='text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-black to-white '>DEV HRMN.in</h1>
        
        </motion.div>
        <div onClick={()=>{setOpen(!open)}} className="absolute right-8 top-6 md:hidden cursor-pointer mb-6">
            <SocialIcon network={open ? 'vsco' : ''} />
        </div>
        <motion.div initial={{x:500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration: 1}} 
        className={`md:flex md:items-center absolute md:static md:z-auto z-[-1] left-o w-full
         md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
        
        <Link href="#main" className=' hover:underline md:my-0 my-7 mx-4 text-xl text-gray-500'>Home</Link>
        <Link href="#about" className=' hover:underline md:my-0 my-7 mx-4 text-xl text-gray-500'>About</Link>
        <Link href="#projects" className=' hover:underline md:my-0 my-7 mx-4 text-xl text-gray-500'>Projects</Link>
        <Link href="#contact" className=' hover:underline md:my-0 my-7 mx-4 text-xl text-gray-500'>Contact</Link>
        </motion.div>
    </header>
  )
}