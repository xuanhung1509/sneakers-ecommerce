import { useState } from 'react';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import PropTypes from 'prop-types';

function ProductThumbsGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperProps = {
    modules: [Thumbs],
    loop: true,
    spaceBetween: 10,
  };

  return (
    <div className='hidden flex-1 lg:flex flex-col items-center gap-4 overflow-hidden'>
      <Swiper
        {...swiperProps}
        grabCursor={true}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        className='h-full w-full rounded-lg'
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className='flex justify-center items-center h-96 w-96 mx-auto rounded-xl overflow-hidden'>
              <img src={image} alt='' className='h-full w-full object-cover' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        {...swiperProps}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
        className='hidden lg:block h-full w-96'
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className='flex justify-center items-center h-20 rounded-xl overflow-hidden'>
              <img
                src={image}
                alt=''
                className='cursor-pointer h-full w-full object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

ProductThumbsGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductThumbsGallery;
