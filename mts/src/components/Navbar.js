import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            } else {
                // if scroll up show the navbar
                setShow(true);
            }
            // remember current page position
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`${show ? 'translate-y-0' : '-translate-y-full'} bg-black text-white p-4 fixed top-0 w-full z-10 shadow-md transition-transform duration-300 ease-in-out`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <a href="#root">MTS Original Automotive Spring Manufacturer</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#root" className="hover:text-iron">Home</a>
                    <a href="#products" className="hover:text-iron">Products</a>
                    <a href="#about" className="hover:text-iron">About</a>
                    {/*<a href="#chat" className="hover:text-gray-300">Chatbot</a>*/}
                    {/* Add more navigation links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
