import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { navItems } from '../data';
import logo from '../assets/logo.svg';
import CartPopup from './CartPopup';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { pathname } = useLocation();
  const { cartItems } = useSelector((state) => state.cart);

  const handleClickCart = () => {
    setOpenCart((prev) => !prev);
    setOpenMenu(false);
  };

  const handleClickCartBackDrop = (e) => {
    if (e.target.classList.contains('cart-backdrop')) {
      setOpenCart(false);
    }
  };

  return (
    <header className='mt-4 md:mt-2 mb-4'>
      <div className='container border-0 lg:border-b'>
        <div className='flex justify-between items-center gap-4'>
          <button
            type='button'
            className='block md:hidden p-2 hover:bg-sneakers-orange-pale transition-colors rounded-3xl'
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {openMenu ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
          <Link to='/'>
            <img src={logo} alt='logo' className='select-none' />
          </Link>

          <ul
            className={`${
              !openMenu
                ? 'hidden'
                : 'absolute top-16 left-0 w-screen h-screen flex flex-col items-center z-40 bg-white text-sneakers-blue-dark text-center font-bold p-8'
            } md:flex justify-start items-start gap-2`}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`hover:text-sneakers-orange transition-colors ${
                  openMenu && 'w-3/4 py-2 border-b'
                } ${
                  pathname.includes(item.path)
                    ? 'text-sneakers-orange border-b-4 border-sneakers-orange'
                    : 'text-black'
                }`}
              >
                <Link
                  to={item.path}
                  className='block px-4 py-2 sm:py-6'
                  onClick={() => setOpenMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='relative p-2 hover:bg-sneakers-orange-pale transition-colors rounded-3xl'
            onClick={handleClickCart}
          >
            <AiOutlineShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className='absolute top-0 -right-1  px-2 py-[1px] bg-sneakers-orange text-white text-[.6rem] rounded-xl'>
                {cartItems.length}
              </span>
            )}
          </button>

          {openCart && (
            <div
              className='cart-backdrop absolute top-0 left-0 bottom-0 right-0 bg-black/25 z-50'
              onClick={handleClickCartBackDrop}
            >
              <div className='container relative'>
                <CartPopup cartItems={cartItems} setOpenCart={setOpenCart} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
