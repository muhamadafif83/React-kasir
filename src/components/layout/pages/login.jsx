import React from 'react'
import Input from '../../InputLogin/Input'
import dodle from '../../../assets/dodle.png'
import TokoKu from '../../../assets/TokoKu.png'
import Footer from '../footer'
// import './style/Login.css'

function Login() {
  return (
    <div>
    <div className='flex flex-row-reverse justify-center m-12'>
      <div className=''>
        <div className='border border-slate-400 py-5 px-20 '>
            <img src={TokoKu} alt="" className='mx-auto'/>
            <Input />
            <div className='mt-10'>
            <a href="http://" className='text-slate-400'>Lupa Password?</a>
            </div>
        </div>
        <div className='border border-slate-400 my-5 py-12'>
            <h2>Belum punya akun? <a href="" className='text-[#6CAEFF]'>Daftar</a></h2>
        </div>
        </div>
        <div>
          <img src={dodle} alt="" className='w-[80%] mr-10 mt-10' />
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login;