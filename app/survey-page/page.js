'use client'
import React from 'react'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

const SurveyPage = () => {
    const {theme} = useTheme()
  return (
    <div className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"}  w-full h-[100vh] pt-8 md:pt-[7.5rem]  flex flex-col md:justify-between px-6 md:px-[6rem] xl:px-72 md:flex-row`}>
      <div className='h-[200px] md:h-[50%] lg:h-[80%] flex flex-col items-center justify-center'>
            <h1 className='text-[#942289] text-[1.2rem] md:text-[1.6rem] lg:text-[2.2rem] font-bold'>NextLevelFunding</h1>
        </div>
      <div className='w-full md:w-[50%]'>
        <form className='tracking-[-00.005rem] leading-loose w-full'>
            <p className='font-bold  text-sm md:text-xl'>Where did you here about us?</p>
            <label className="mt-3 relative flex items-center ">
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='checkbox'/><span class="checkmark"></span> <p className='ml-3'>Instagram Or Facebook</p></div>
            </label>
            <label className="mt-3 relative flex items-center gap-2">
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='checkbox'/><span class="checkmark"></span> <p className='ml-3'>Search Engine</p></div>
            </label>
            <label className="mt-3 relative flex items-center gap-2">
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='checkbox'/><span class="checkmark"></span> <p className='ml-3'>Word of Mouth</p></div>
            </label>
            <label className="mt-3 relative flex items-center gap-2">
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='checkbox'/><span class="checkmark"></span> <p className='ml-3'>Youtube</p></div>
            </label>
            <label className="mt-3 mb-2 relative flex items-center gap-2">
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='checkbox'/><span class="checkmark"></span> <p className='ml-3'>Others</p></div>
            </label>
            <Button className={`${theme === 'dark' && 'border border-[#942289]'} `} text="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default SurveyPage
