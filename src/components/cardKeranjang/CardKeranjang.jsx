import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

export function CardKeranjang() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL tempat Anda mendapatkan data JSON
        const url = "../../public/data/products.json";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Terjadi kesalahan saat mengambil data.');
        }
        const data = await response.json();
        setProduct(data.product);
        console.log(data.product);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };
    // console.log(url);
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      {product.map((product, index) => (
        <Card key={index} className=" h-auto max-w-[65%] flex-row my-10">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-[50%] shrink-0 rounded-r-none"
          >
            <img
              src={product.urlPoster}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
              {product.nama}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {product.price}
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
