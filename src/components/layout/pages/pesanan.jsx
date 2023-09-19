import React from 'react'
import MainNavbar from '../navbar'
import MainFooter from '../mainFooter'

function Pesanan() {
  return (
    <>
    <MainNavbar/>
    <div>
        <div className='flex flex-row justify-between mx-24 border-b py-12'>
        <h1 className='bg-gray-400 w-32 rounded-lg'>Keranjang</h1>
        <div className='bg-gray-400 w-32 rounded-lg'></div>
        </div>
        <div className='bg-gray-400 mx-auto my-10 mx-32'>
            <div className=''>
                <div className='flex flex-col justify-start'>
            <h1>Produk</h1><br />
            <h1>test</h1>
            </div>
            </div>

        </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Pesanan