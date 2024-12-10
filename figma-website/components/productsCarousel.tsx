"use client"   ;

import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import ProductCardCarousel from '@/components/productCardCarousel';

export default function ProductsCarousel() {

    const products = [
        {
            image: "20240619_Figma_Store_4914_600x.jpg",
            frame: "picked-retangle",
            name: "Product 1"
        },
        {
            image: "20240619_Figma_Store_4883_600x.jpg",
            frame: "hourglass",
            name: "Product 2"
        },
        {
            image: "20240619_Figma_Store_4812_1000x.jpg",
            frame: "octogon",
            name: "Product 3"
        },
        {
            image: "20240619_Figma_Store_4764_be63c001-0c88-468c-9a18-59aff3703031_600x.jpg",
            frame: "square",
            name: "Product 4"
        },
        {
            image: "20240619_Figma_Store_4506_600x.jpg",
            frame: "hourglass",
            name: "Product 5"
        },
        {
            image: "20240619_Figma_Store_4699_315ebfd9-ee39-4870-bbf5-4600a9eab645_1000x.jpg",
            frame: "octogon",
            name: "Product 7"
        },
    ]

  return (
    <Carousel
    show={2.5} slide={2} transition={0.5} swiping={true}>
        {products.map((product, index) => (
            <ProductCardCarousel key={index} product={product}/>
        ))}
    </Carousel>
  );
}