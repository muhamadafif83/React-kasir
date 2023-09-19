import React from 'react';

    const items = [
      {
        imgUrl: "https://via.placeholder.com/300",
        productName: "Handphone",
        price: "Rp.2.500.000",
      },
      {
        imgUrl: "https://via.placeholder.com/300",
        productName: "Laptop",
        price: "Rp.15.000.000",
      },
      {
        imgUrl: "https://via.placeholder.com/300",
        productName: "Tahu Qeju",
        price: "Rp.900 /biji",
      },
      {
        imgUrl: "https://via.placeholder.com/300",
        productName: "Tahu Putih",
        bebas: "jj",
        price: "Rp.500 /biji",
      },
    ];

    import {
        Card,
        CardHeader,
        CardBody,
        Typography,
        Button,
      } from "@material-tailwind/react";
       
      export function CardKeranjang() {
        return (
          <div>
          {items.map((item, index) => (
          <Card key={index} className="w-auto h-auto max-w-[110%] flex-row my-10">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-[50%] shrink-0 rounded-r-none"
            >
              <img
                src={item.imgUrl}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
              {item.productName}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
              {item.price}
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Learn More
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