# Sneakers E-commerce

> A small web application built with MERN Stack.

## Built with:

- React
- Tailwind CSS
- Redux & Redux Toolkit
- Node & Express
- MongoDB

## Usage

### Install dependencies

`npm install`

### Adding environment variables

In the root folder, add your own `.env` file with these variables:

- NODE_ENV
- PORT (will fallback to 5000 if not defined)
- MONGO_URI
- PAYPAL_CLIENT_ID: the Client ID from your Paypal Developer Dashboard's app.
- PAYPAL_APP_SECRET: the App Secret from your Paypal Developer Dashboard's app.
- SHIPPING_FEE: I include this here for convenience. Maybe I'll create a function to calculate the fee based on geolocation in the future.

In the _frontend_ folder, add your own `.env` file with these variables:

- REACT_APP_PAYPAL_CLIENT_ID: the Paypal Client ID same as above.
- REACT_APP_PRODUCT_API_URL = /api/products
- REACT_APP_ORDER_API_URL = /api/orders

### Avalable commands

> `npm run server`

Runs the server on port 5000 or whatever you defined in your .env in the root folder.
The server will reload when you make changes.

> `npm run client`

Runs the frontend in the development mode.

> `npm run dev`

Runs the client and server concurrently.

## Acknowledgments

This project is inspired by 2 challenges on Frontend Mentor:

- [E-commerce product page](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6): For the product details page and the color palette of the app
- [Audiophile e-commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx): For the layout of the the checkout page
