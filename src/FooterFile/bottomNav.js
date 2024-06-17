import React from 'react'

export default function bottomNav() {
  return (
    <div className="flex flex-row justify-around w-full m-1 ">
        <section >
           <p className="text-red-600 text-lg">About US</p>
           <p className="font-bold">lorem ipsum dolor</p>
           <p>October 30, 2017</p> 
        </section>
        <section >
           <p className="text-red-600 text-lg">Contact Us</p>
           <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
           <p>(603) 555-0123</p> 
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
