import React from 'react'
import MainNavbar from '../navbar'
import MainFooter from '../mainFooter'
import { CardKeranjang } from '../../cardKeranjang/CardKeranjang'

function Keranjang() {
  return (
    <>
    <MainNavbar/>
    <div>
        <div className='flex flex-row justify-between m-24 border-b py-10'>
        <h1 className='bg-gray-400 w-32 rounded-lg'>Keranjang</h1>
        <div className='bg-gray-400 w-32 rounded-lg'></div>
        </div>
        <div className='flex ml-32'>
        <CardKeranjang/>
        </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Keranjang