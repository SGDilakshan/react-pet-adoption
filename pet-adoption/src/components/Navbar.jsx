import React from 'react'
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className='bg-white shadow-md px-6 py-4 lg:px-20'>
        <div>
            {/* logo */}
            <div>
                <span></span>
                <span>Scooby</span>
            </div>

            {/* Desktop menu */}
            <nav>
                <a href="/">Home</a>
                <div></div>
                <a href="/">About</a>
                <a href="/">Shop</a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </nav>

            {/* icons */}
            <div>
                {[FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon,idx) => (
                    <span>
                        <Icon/>
                    </span>

                ))
                }
            </div>
        </div>
    </header>
  );
};

export default Navbar