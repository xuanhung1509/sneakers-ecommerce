import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logoWhite from '../assets/logo-white.svg';
import { navItems } from '../data';

function Footer() {
  return (
    <footer className='bg-black text-white mt-auto py-12'>
      <div className='container'>
        <div className='flex flex-col sm:flex-row  justify-between items-center gap-12'>
          <div>
            <img src={logoWhite} alt='logo' />
          </div>
          <ul className='flex flex-col sm:flex-row justify-start items-center gap-8'>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <p className='max-w-lg my-8 px-12 sm:px-0 text-center sm:text-left'>
          Sneakers is an all in one stop to fulfill your sneaker need. We're a
          small team of sneaker lovers who are devoted to bringing you high
          quality footwears.
        </p>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-8'>
          <p className='text-center sm:text-left'>
            Copyright © 2022 Sneakers. All Rights Reserved.
          </p>
          <ul className='flex justify-center items-center gap-4'>
            <li>
              <a href='http://facebook.com'>
                <FaFacebook size={28} />
              </a>
            </li>
            <li>
              <a href='http://twitter.com'>
                <FaTwitter size={28} />
              </a>
            </li>
            <li>
              <a href='http://instagram.com'>
                <FaInstagram size={28} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
