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
        <div className='bg-gray-400 mx-auto my-10 mx-32 p-3 rounded-lg w-[70%]'>
            <h1 className='flex flex-start p-3 pl-10'>Produk</h1>
            <div className=''>
                <div className='flex flex-col px-10 py-2'>
            <div className='grid grid-cols-3 gap-x-60'>
              <h1>Handphone</h1>
              <h1>x1</h1>
              <h1>Rp.100.000</h1>
            </div>
            <div className='grid grid-cols-3 gap-x-60 mt-3'>
              <h1>Laptop</h1>
              <h1>x20</h1>
              <h1>Rp.2.000.000</h1>
              </div>
            </div><hr className='w-[90%] flex mx-auto'/>
            <h1 className='flex flex-start p-3 pl-10'>Jasa Pengiriman</h1>
            <div className='flex flex-col px-10 py-2'>
            <div className='grid grid-cols-2 gap-x-[70%]'>
              <h1>JNE</h1>
              <h1>Rp.10.000</h1>
            </div>
            </div><hr className='w-[90%] flex mx-auto'/>
            {/* <h1 className='flex flex-start p-3 pl-10'>Total Pembayaran</h1> */}
            <div className='flex flex-col px-10 py-2'>
            <div className='grid grid-cols-2 gap-x-[70%]'>
              <h1>Total pembayaran</h1>
              <h1>Rp.2.110.000</h1>
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