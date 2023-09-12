import React from 'react'

function Input() {
  return (
    <div className=''>
        <input type="text" className="bg-slate-200 h-12 w-80 mb-1 mt-10 rounded-md p-2" name="" id="" placeholder='Username or Email'/><br />
        <input type="password" className='bg-slate-200 h-12 rounded-md w-80 p-2' name="" id="" placeholder='Password'/> <br />
        <button className='text-white bg-cyan-400 mt-5 h-10 w-80 rounded-md'>Masuk</button>
    </div>
  )
}

export default Input