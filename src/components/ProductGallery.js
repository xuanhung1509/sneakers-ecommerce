import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import PropTypes from 'prop-types';

function ProductGallery({ images }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      className='relative w-full h-full rounded-lg'
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div className='flex justify-center items-center h-72 sm:h-96 w-full lg:h-96 lg:w-96 mx-auto rounded-xl overflow-hidden'>
            <img src={image} alt='' className='h-full w-full object-cover' />
          </div>
        </SwiperSlide>
      ))}
      <CustomNavigation />
    </Swiper>
  );
}

ProductGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductGallery;

export function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type='button'
        className='cursor-pointer hidden sm:block absolute top-1/2 left-0 sm:left-4 md:left-8 bg-sneakers-blue-grayish-light p-3 rounded-full shadow-md z-10'
        onClick={() => swiper.slidePrev()}
      >
        <MdNavigateBefore size={20} className='hover:text-sneakers-orange' />
      </button>
      <button
        type='button'
        className='cursor-pointer hidden sm:block absolute top-1/2 right-0 sm:right-4 md:right-8 bg-sneakers-blue-grayish-light p-3 rounded-full shadow-md z-10'
        onClick={() => swiper.slideNext()}
      >
        <MdNavigateNext size={20} className='hover:text-sneakers-orange' />
      </button>
    </>
  );
}
