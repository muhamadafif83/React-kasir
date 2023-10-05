import React from 'react'
import MainNavbar from '../navbar'
import MainFooter from '../mainFooter'

function Pesanan() {
  return (
    <>
    <MainNavbar/>
    <div>
        <div className='flex flex-row justify-between mx-24 border-b py-12'>
        <h1 className='bg-gray-400 w-32 p-2 rounded-lg'>Pesanan anda</h1>
        <div className='bg-gray-400 w-32 rounded-lg'></div>
        </div>
        <div className='bg-gray-400 mx-auto my-10 mx-32 rounded-lg w-[70%]'>
            <div className=''>
                <div className='flex flex-center px-10 py-2'>
            {/* <h1>Produk</h1> */}
            <div className='grid grid-cols-3 gap-x-60'>
              <h1>Handphone</h1>
              <h1>x1</h1>
              <h1>Rp.100.000</h1>
              <h1>Handphone</h1>
              <h1>Handphone</h1>
              <h1>Handphone</h1>
            </div>
            </div>
            </div>

        </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Pesanan