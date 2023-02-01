import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
   
    className='relative flex justify-center items-center max-[766px]:hidden'>
        <div className='absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-gray-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-gray-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-zinc-200 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-zinc-200 rounded-full h-[800px] w-[800px] mt-52 animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles