import React from 'react'
import MainNavbar from '../navbar'
import CardProduct from '../../card/Card'
import MainFooter from '../mainFooter'

function Home() {
  return (
    <div>
      <MainNavbar/>
    <div>
    <div className='bg-gray-400 w-[75%] p-24 mt-7 mx-auto rounded-lg'></div>
    <div className='flex flex-row mt-8 pb-10 px-24'>
    <div className='bg-gray-400 w-[10%] p-20 mt-10 mx-auto rounded-lg'></div>
    <div className='bg-gray-400 w-[10%] p-20 mt-10 mx-auto rounded-lg'></div>
    <div className='bg-gray-400 w-[10%] p-20 mt-10 mx-auto rounded-lg'></div>
    <div className='bg-gray-400 w-[10%] p-20 mt-10 mx-auto rounded-lg'></div>
    <div className='bg-gray-400 w-[10%] p-20 mt-10 mx-auto rounded-lg'></div>
    </div>
    </div>
    <div className='p-20'>
      <hr />
      <h2 className='justify-start flex bg-black text-white w-24 rounded-lg p-1 my-5'>Kategori 1</h2>
    <CardProduct />
    </div>
    <div className='px-20 pb-24'>
      <h2 className='justify-start flex bg-black text-white w-24 rounded-lg p-1 my-5'>Kategori 2</h2>
    <CardProduct />
    </div>
    <MainFooter />
    </div>
  )
}

export default Home