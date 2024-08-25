import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './navbar.css'; // Assuming navbar.css is in the same directory

function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>

      <div className="profil-container">
        <a href="#" aria-label="Favorites">
          <FiHeart className="nav-icons" />
        </a>

        <a href="#" aria-label="Shopping Cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#" aria-label="User Profile">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
