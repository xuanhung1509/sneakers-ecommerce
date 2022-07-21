import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, getFeaturedProducts } from '../features/product/productSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

function HeroSlider() {
  const dispatch = useDispatch();
  const { isLoading, isError, message, products } = useSelector(
    (state) => state.product
  );

  // Get featured products
  useEffect(() => {
    if (isError) return toast.error('Error Occurred.');

    dispatch(getFeaturedProducts());

    return () => dispatch(reset());
  }, [dispatch, isError, message]);

  if (isLoading) return <Spinner />;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className='w-full h-72 sm:h-96'
    >
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <Link to={`${product.category}/${product._id}`}>
            <div className='relative h-60 sm:h-96 rounded-lg overflow-hidden'>
              <img
                src={product?.banner?.desktop}
                alt=''
                className='hidden md:block w-full h-full object-cover hover:scale-105 transition-transform'
              />
              <img
                src={product?.banner?.mobile}
                alt=''
                className='md:hidden w-full h-full object-cover hover:scale-105 transition-transform'
              />
              <button
                type='button'
                className='absolute top-3/4 right-1/2 sm:right-1/4 translate-x-1/2 bg-sneakers-orange text-white tracking-wide px-6 py-3 rounded-md shadow-2xl transition-colors'
              >
                Shop Now
              </button>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default HeroSlider;
