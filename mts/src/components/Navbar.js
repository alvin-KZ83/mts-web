// src/components/Navbar.js

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <a href="#home">Your Company</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#products" className="hover:text-gray-300">Products</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    {/*<a href="#chat" className="hover:text-gray-300">Chatbot</a>*/}
                    {/* Add more navigation links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
