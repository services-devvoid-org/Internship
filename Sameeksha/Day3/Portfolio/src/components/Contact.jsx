import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='bg-slate-500 flex flex-col items-center w-screen h-screen'>
      <h1 className='font-bold text-4xl m-10'>Contact</h1>

        <form className='border-black w-[50%] h-[50%] bg-slate-800 bg-opacity-30 rounded-2xl flex flex-col items-center p-6'><h1 className='text-center text-rose-700 mb-5 text-2xl font-bold'>Have any questions?</h1>
          <input type="text" className='w-full h-12 mb-3 bg-slate-800 rounded-xl px-3' placeholder='Enter your Name'/>
          <input type="email" className='w-full h-12 mb-3 bg-slate-800 rounded-xl px-3' placeholder='Enter your email'/>
          <textarea className='w-full h-1/4 mb-3 bg-slate-800 rounded-xl px-3 py-2' placeholder='Your message'/>
          <button className='bg-slate-700 rounded-2xl px-3 text-center text-rose-400'>Submit</button>
        </form>
    </div>
  )
}

export default Contact