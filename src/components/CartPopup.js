import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeQty, removeFromCart } from '../features/cart/cartSlice';
import { toast } from 'react-hot-toast';
import { BiTrash } from 'react-icons/bi';
import PropTypes from 'prop-types';

function CartPopup({ cartItems, setOpenCart }) {
  const dispatch = useDispatch();

  const handleSelectQty = (e, productId) => {
    const newQty = e.currentTarget.value;
    dispatch(changeQty({ productId, newQty }));
  };

  const handleRemoveCartItem = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success('Item removed from cart!', { id: 'cartRemoveItem' });
  };

  return (
    <div className='absolute top-20 left-5 right-5 sm:left-auto sm:w-[28rem] bg-white text-sneakers-blue-dark rounded-lg shadow-lg z-50'>
      {/* Header */}
      <div className='font-bold px-6 py-4 border-b'>Cart</div>

      {/* Body */}
      <div className='flex flex-col justify-center gap-6 p-6'>
        {/* Cart item */}
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className='flex justify-start items-center gap-4'
              >
                <div className='w-12 h-12 overflow-hidden rounded-lg'>
                  <img
                    src={item.images[0]}
                    alt='product'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5 className='text-sneakers-blue-dark text-base'>
                    {item.name}
                  </h5>
                  <div>
                    <span>
                      ${(item.discountedPrice ?? item.regularPrice).toFixed(2)}
                    </span>
                    <span className='px-2'>
                      x
                      <select
                        className='bg-sneakers-orange-pale text-center mx-2 px-2 py-1 rounded-md'
                        onChange={(e) => handleSelectQty(e, item._id)}
                      >
                        {[...Array(item.countInStock).keys()].map((index) => (
                          <option
                            key={index}
                            value={index + 1}
                            selected={index + 1 === item.qty}
                          >
                            {index + 1}
                          </option>
                        ))}
                      </select>
                      =
                    </span>
                    <span className='font-bold'>
                      $
                      {(
                        (item.discountedPrice ?? item.regularPrice) * item.qty
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto p-3 rounded-3xl hover:bg-sneakers-orange-pale'
                  onClick={() => dispatch(() => handleRemoveCartItem(item._id))}
                >
                  <BiTrash size={20} />
                </button>
              </div>
            ))}
            <button
              type='button'
              className='bg-sneakers-orange hover:bg-sneakers-orange/50 text-white rounded-lg transition-colors'
              onClick={() => setOpenCart(false)}
            >
              <Link to='/checkout' className='block py-3'>
                Checkout
              </Link>
            </button>
          </>
        ) : (
          <h3 className='text-center py-4'>Your cart is empty.</h3>
        )}
      </div>
    </div>
  );
}

CartPopup.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setOpenCart: PropTypes.func.isRequired,
};

export default CartPopup;
