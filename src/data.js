import categoryMen from './assets/category-men.webp';
import categoryWomen from './assets/category-women.jpg';
import categoryKids from './assets/category-kids.webp';

export const categories = [
  {
    name: 'Men Sneakers',
    image: categoryMen,
    path: '/men',
  },
  {
    name: 'Women Sneakers',
    image: categoryWomen,
    path: '/women',
  },
  {
    name: 'Kids Sneakers',
    image: categoryKids,
    path: '/kids',
  },
];

export const navItems = [
  {
    name: 'Men',
    path: '/men',
  },
  {
    name: 'Women',
    path: '/women',
  },
  {
    name: 'Kids',
    path: '/kids',
  },
];

export const forms = [
  {
    title: 'Billing Details',
    inputs: [
      {
        label: 'Name',
        id: 'name',
        placeholder: 'Alexei Ward',
      },
      {
        label: 'Email',
        id: 'email',
        placeholder: 'alexei@gmail.com',
      },
      {
        label: 'Phone',
        id: 'phone',
        placeholder: '+1 202-555-0136',
      },
    ],
  },
  {
    title: 'Shipping Info',
    inputs: [
      {
        label: 'Address',
        id: 'address',
        placeholder: '1137 Williams Avenue',
        span: true,
      },
      {
        label: 'Zip Code',
        id: 'zipcode',
        placeholder: '10001',
      },
      {
        label: 'City',
        id: 'city',
        placeholder: 'New York',
      },
      {
        label: 'Country',
        id: 'country',
        placeholder: 'United States',
      },
    ],
  },
];
