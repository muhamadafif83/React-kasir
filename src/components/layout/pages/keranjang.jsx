import React from 'react'
import { Textarea } from "@material-tailwind/react";
import { Radio } from 'antd'
import MainNavbar from '../navbar'
import MainFooter from '../mainFooter'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CardKeranjang } from '../../cardKeranjang/CardKeranjang';

function Keranjang() {
  return (
    <>
    <MainNavbar/>
    <div>
          <div className='flex flex-row justify-between mx-24 border-b py-12'>
          <h1 className='bg-gray-400 w-32 rounded-lg'>Keranjang</h1>
          <div className='bg-gray-400 w-32 rounded-lg'></div>
          </div>
        <div className='flex flex-row '>
        <div className='flex ml-10 pb-12'>
        <CardKeranjang/>
        </div>
        <div>
        <Card className="my-10 mx-10 w-96 border border-black">
      <CardBody>
        <div>
        <Typography variant="h5" color="blue-gray" className="p-1 w-[50%] flex justify-start">
          Detail Pesanan
        </Typography>
        <hr className='border-gray-500 border-t-2  p-2 bg-cover'/>
        </div>
        <div className='border border-black rounded p-3 mt-5 w-[92%] mx-auto'>
        <Typography className='flex justify-start'>
          Opsi pengiriman
        </Typography>
        <div className='flex flex-row'>
        <div className='flex flex-col gap-3 justify-start mt-2'>
        <Radio>JNE</Radio>
        <Radio>SiCepat</Radio>
        </div>
        <div className='flex flex-col justify-end mt-1 gap-3'>
          <Typography>
            Rp.200.000
          </Typography>
          <Typography>
            Rp.200.000
          </Typography>
          </div>
        </div>
        </div>
        <div className='p-3 w-full flex justify-start'>
        <Textarea size="md" label="Pesan" color='indigo'/>
        </div>
        <hr className='border-gray-500 border-t-2  p-2 bg-cover'/>
        <div className='flex flex-row'>
          <h1>Total pesanan :</h1>
          <div className=''>
          <p className=''>Rp.500.000</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
       <a href="/pesanan"> <Button className='w-[50%]'>Buat Pesanan</Button></a>
      </CardFooter>
    </Card>
        </div>
        </div>
    </div>
    <MainFooter/>
    </>
  )
}

export default Keranjang