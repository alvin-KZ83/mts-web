// src/components/Products.js

import React from 'react';
import sample1 from '../img/sample1.jpg'; // Import the image

const Products = () => {
    // Updated data for products
    const products = [
        { id: 1, image: sample1, name: "Product 1" },
        { id: 2, image: sample1, name: "Product 2" },
        // Add more products as needed
    ];

    return (
        <div className="container my-auto mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Products</h2>

            {/* Hino Products Section */}
            <h3 className="text-2xl font-semibold mb-4">Hino Products</h3>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border rounded overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full"/>
                        <div className="p-2">
                            <h3 className="font-semibold">{product.name}</h3>
                            {/* Add more product details if needed */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Isuzu Products Section */}
            <h3 className="text-2xl font-semibold mb-4">Isuzu Products</h3>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border rounded overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full"/>
                        <div className="p-2">
                            <h3 className="font-semibold">{product.name}</h3>
                            {/* Add more product details if needed */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Products;
