import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, getSingleProduct } from '../features/product/productSlice';
import { addToCart } from '../features/cart/cartSlice';
import useMediaQuery from '../hooks/useMediaQuery';
import toast from 'react-hot-toast';
import { FaPlus, FaMinus, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import ProductThumbsGallery from '../components/ProductThumbsGallery';
import ProductGallery from '../components/ProductGallery';
import Spinner from '../components/Spinner';

function ProductDetail() {
  const [countToShow, setCountToShow] = useState(0);
  const [qty, setQty] = useState(1);
  const { categoryName, productId } = useParams();
  const { isLoading, isError, message, product } = useSelector(
    (state) => state.product
  );
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const {
    brand,
    name,
    description,
    regularPrice,
    discountedPrice,
    countInStock,
    images,
  } = product;

  const handleSelectQty = (option) => {
    setQty((prev) => {
      if (option === 'inc') {
        if (qty === countToShow) {
          return prev;
        } else {
          return prev + 1;
        }
      } else if (option === 'dec') {
        if (qty === 1) {
          return prev;
        } else {
          return prev - 1;
        }
      }
    });
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, qty }));
    toast.success('Product added to cart!', { id: 'cartAddItem' });
    setQty(1);
  };

  // Get product
  useEffect(() => {
    if (isError) return toast.error('Error occurred.');

    dispatch(getSingleProduct({ categoryName, productId }));

    return () => dispatch(reset());
  }, [dispatch, isError, message, categoryName, productId]);

  // Calc count to show (in stock - in cart)
  useEffect(() => {
    if (cartItems && countInStock) {
      const itemInCart = cartItems.find((item) => item._id === productId);
      const countToShow = countInStock - (itemInCart?.qty || 0);
      setCountToShow(countToShow);
    }
  }, [cartItems, countInStock, productId]);

  if (isLoading) return <Spinner />;

  return (
    <section className='mt-4 mb-16'>
      <div className='container'>
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20'>
          {images && (
            <>
              {isDesktop ? (
                <ProductThumbsGallery images={images} />
              ) : (
                <ProductGallery images={images} />
              )}
            </>
          )}

          <div className='flex-1 flex flex-col items-start gap-4'>
            <p className='text-sneakers-orange font-bold uppercase'>{brand}</p>
            <h2 className='text-sneakers-blue-dark text-3xl font-bold -mt-2 mb-3'>
              {name}
            </h2>
            <p className='text-sneakers-blue-grayish-dark'>{description}</p>

            {/* Price */}
            <div className='w-full flex justify-start items-center gap-4 flex-wrap'>
              {/* Discounted price */}
              <div className='text-sneakers-blue-dark text-2xl font-bold'>
                ${discountedPrice ? discountedPrice : regularPrice}
              </div>
              {discountedPrice && (
                <>
                  {/* Percent sale off */}
                  <div className='bg-sneakers-orange-pale text-sneakers-orange text-xs font-bold px-2 py-1 rounded-lg'>
                    {Math.floor((1 - discountedPrice / regularPrice) * 100)}%
                  </div>

                  {/* Old price */}
                  <div className='text-sneakers-blue-grayish text-sm font-bold line-through md:basis-full ml-auto -mt-2'>
                    ${regularPrice}
                  </div>
                </>
              )}
            </div>

            {countToShow <= 0 && (
              <small className='w-full flex justify-center sm:justify-start items-center gap-2 text-sneakers-blue-grayish-dark text-sm mt-2 -mb-2'>
                <FaInfoCircle fill='green' />
                <span>
                  {countInStock > 0
                    ? `Woah, you've added all ${countInStock} copies of this product.`
                    : 'This product is out of stock.'}
                </span>
              </small>
            )}

            <div className='w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4'>
              {/* Select quantity */}
              <div
                className={`${
                  countToShow <= 0
                    ? 'bg-sneakers-blue-grayish/75'
                    : 'bg-sneakers-blue-grayish-light'
                } flex justify-between items-center gap-8 px-4 py-3 rounded-md shadow-md`}
              >
                <button
                  type='button'
                  disabled={countToShow <= 0}
                  className={countToShow <= 0 ? 'cursor-not-allowed' : ''}
                  onClick={() => handleSelectQty('dec')}
                >
                  <FaMinus />
                </button>
                <span>{countToShow - qty >= 0 ? qty : 0}</span>

                <button
                  type='button'
                  disabled={countToShow <= 0}
                  className={countToShow <= 0 ? 'cursor-not-allowed' : ''}
                  onClick={() => handleSelectQty('inc')}
                >
                  <FaPlus />
                </button>
              </div>

              {/* Add to cart */}
              <button
                type='button'
                className={`flex justify-center items-center gap-4 text-white px-8 py-3 rounded-md shadow-md ${
                  countToShow <= 0
                    ? 'cursor-not-allowed bg-sneakers-orange/50'
                    : 'bg-sneakers-orange hover:bg-sneakers-orange/50 transition-colors'
                }`}
                disabled={countToShow <= 0}
                onClick={handleAddToCart}
              >
                <FaShoppingCart />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
