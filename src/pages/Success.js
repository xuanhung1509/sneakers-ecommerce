import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, markOrderSuccess } from '../features/cart/cartSlice';
import { runRealisticLook } from '../utils/confetti';
import { BsBagCheckFill } from 'react-icons/bs';

function Success() {
  const dispatch = useDispatch();
  const { isOrderSuccess } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isOrderSuccess) {
      runRealisticLook();
      dispatch(clearCart());
    }

    return () => dispatch(markOrderSuccess(false));
  }, [isOrderSuccess, dispatch]);

  if (!isOrderSuccess) return <Navigate to='/' />;

  return (
    <section>
      <div className='max-w-3xl bg-sneakers-blue-grayish/50 mx-auto p-8 flex flex-col justify-between items-center gap-4 rounded-lg shadow-lg'>
        <BsBagCheckFill size={24} fill='green' />
        <h2 className='text-2xl font-bold'>Thanks for your order!</h2>
        <small className='text-sm'>
          Check your email inbox for the receipt.
        </small>
        <p className='mt-4'>
          If you have any question, please reach us at{' '}
          <span className='text-sneakers-orange brightness-90'>
            sneakers@example.com
          </span>
        </p>
        <button
          type='button'
          className=' bg-sneakers-orange text-white rounded-lg'
        >
          <Link to='/' className='block px-8 py-3'>
            Continue Shopping
          </Link>
        </button>
      </div>
    </section>
  );
}
export default Success;
