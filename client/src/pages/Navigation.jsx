import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="bg-my-custom-bg p-4 flex items-center flex-row">
            <div className="shrink-0">
                <img
                    src="/src/assets/flames-of-philly-chili-pepper-logo-transparent-tiny.png"
                    alt="Flames of Philly Logo"
                    className="h-12"
                />
            </div>
            <ul className="flex list-none m-0 p-0 list-unstyled flex-end">
                <li className="mx-2">
                    <Link to="/" className="text-black p-2 hover:bg-red-600 hover:text-yellow-300 transition-colors duration-300">Home</Link>
                </li>
                <li className="mx-2">
                    <Link to="/asian" className="text-black p-2 hover:bg-red-600 hover:text-yellow-300 transition-colors duration-300">Asian Cuisine</Link>
                </li>
                <li className="mx-2">
                    <Link to="/halal" className="text-black p-2 hover:bg-red-600 hover:text-yellow-300 transition-colors duration-300">Halal Options</Link>
                </li>
                <li className="mx-2">
                    <Link to="/latin" className="text-black p-2 hover:bg-red-600 hover:text-yellow-300 transition-colors duration-300">Latin Delights</Link>
                </li>
                <li className="mx-2">
                    <Link to="/about" className="text-black p-2 hover:bg-red-600 hover:text-yellow-300 transition-colors duration-300">About Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
