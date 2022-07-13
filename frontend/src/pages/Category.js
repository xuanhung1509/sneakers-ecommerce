import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, getProductsByCategory } from '../features/product/productSlice';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

function Category() {
  const { categoryName } = useParams();
  const { isLoading, isError, message, products } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  // Get products
  useEffect(() => {
    if (isError) return toast.error('Error occurred.');

    dispatch(getProductsByCategory(categoryName));

    return () => dispatch(reset());
  }, [dispatch, isError, message, categoryName]);

  if (isLoading) return <Spinner />;

  return (
    <section>
      <div className='container my-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.map((product) => (
            <Link
              key={product._id}
              to={`${product._id}`}
              className='cursor-pointer overflow-hidden group'
            >
              <div className='h-40 sm:h-64 rounded-xl overflow-hidden group-hover:brightness-75 transition-all'>
                <img
                  src={product.images[0]}
                  alt=''
                  className='w-full h-full object-cover '
                />
              </div>
              <h3 className='text-sneakers-blue-dark text-base font-bold uppercase mt-4 group-hover:text-sneakers-orange transition-all'>
                {product.name}
              </h3>
              <p className='text-sneakers-blue-grayish-dark font-bold group-hover:text-sneakers-orange transition-all'>
                ${product.discountedPrice || product.regularPrice}{' '}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Category;
