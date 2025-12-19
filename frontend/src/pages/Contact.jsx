import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTÁCTANOS</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>NUESTRA OFICINA</p>
          <p className=' text-gray-500'>UBICACION <br /> Mocoa Putumayo, Colombia, Barrio San Agustin Cra 3-4</p>
          <p className=' text-gray-500'>Tel: 3138219115 <br /> Email: chavezoskar34@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>MAS DE APPOINTY</p>
          <p className=' text-gray-500'>Obtén más información sobre nuestros equipos y vacantes.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explora empleos</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
