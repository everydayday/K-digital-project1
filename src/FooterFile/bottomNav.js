import React from 'react'

export default function bottomNav() {
  return (
    <div className="flex flex-row justify-around w-full m-1 ">
        <section >
           <p className="text-red-600 text-lg">About US</p>
           <p className="font-bold">Clear See</p>
           <p>June 28, 2024</p> 
        </section>
        <section >
           <p className="text-red-600 text-lg">Contact Us</p>
           <p>2, Busandaehak-ro 63beon-gil, </p>
           <p>Geumjeong-gu, Busan, Republic of Korea</p>
           <p>46241</p> 
        </section>
        <section className="flex flex-col" >
           <p className="text-red-600 text-lg">Register For Newsletter</p>
           <input type="text" id="username" name="username" className='border-2 w-52 h-6 rounded-lg bg-slate-100 mt-1' ></input>
           <input type="text" id="username" name="username" className='border-2 w-52 h-6 rounded-lg mt-1' ></input>
           <button className='bg-red-600 text-white w-52 rounded-lg mt-1' type="button" >subscribe</button> 
        </section>
    </div>
  )
}
