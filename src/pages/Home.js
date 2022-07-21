import { Link } from 'react-router-dom';
import { categories } from '../data';
import HeroSlider from '../components/HeroSlider';

function Home() {
  return (
    <section>
      {/* Hero slider */}
      <div className='container mb-8'>
        <HeroSlider />

        {/* Categories */}
        <div className='h-96 lg:h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className='relative cursor-pointer overflow-hidden rounded-lg group'
            >
              <img
                src={category.image}
                alt=''
                className='w-full h-full object-cover brightness-75 group-hover:brightness-50 group-hover:scale-110 transition-all'
              />
              <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-bold uppercase tracking-wider select-none'>
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Home;
