// src/components/Products.js

const Products = () => {
    // Dummy data for products, replace with real data
    const products = [
        { id: 1, image: "path/to/image1.jpg", name: "Product 1" },
        { id: 2, image: "path/to/image2.jpg", name: "Product 2" },
        // Add more products as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
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
