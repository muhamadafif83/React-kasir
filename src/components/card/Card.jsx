import React from 'react';
import { Card } from 'antd';

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

const { Meta } = Card;
const CardProduct = () => (
    <div className='flex flex-row gap-20'>
      {items.map((item, index) => (
  <Card
    key={index}
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={item.imgUrl} />}
  >
    <Meta title={item.productName} description={item.price} />
  </Card>
        ))}
        </div>
);
export default CardProduct;
