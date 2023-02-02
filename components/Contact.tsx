import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
type Props = {}

const Contact = (props: Props) => {
    const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formdata => {
    window.location.href = `mailto:singh9765h@gmail.com?subject=${formdata.subject}&body=Hi, my name is ${formdata.name}. ${formdata.message} (${formdata.email})`
  };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center px-10 mx-auto'>
        <h3 className='absolute top-24 tracking-[20px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black text-2xl uppercase'>Contact</h3>

        <div className='flex flex-col space-y-10 mt-24 w-full h-96'>
            <h4 className='text-4xl font-semibold text-center'>
                For My service at your place
                <span className='decoration-[#0a75f7]/50 underline'> Lets Discuss</span>
            </h4>
              <div className="flex flex-row flex-1 justify-between mt-12">
            <div className='space-y-10 items-center'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-[#0a75f7]' />
                <p className='text-2xl'>+91-9478849065</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapIcon className='h-7 w-7 animate-pulse text-[#0a75f7]' />
                <p className='text-2xl'>Address</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#0a75f7]' />
                <p className='text-2xl'>Mail Id</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='ContactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='ContactInput' type="text" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='ContactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='ContactInput'></textarea>
                <button type="submit" className='py-5 px-10 rounded-md text-black font-bold text-lg bg-cyan-600'>Submit</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact