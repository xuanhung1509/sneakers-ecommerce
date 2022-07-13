const products = [
  {
    // _id: 1,
    name: 'Nike Court Zoom Vapor Cage 4 Rafa',
    description:
      "Innovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court.",
    images: [
      '/images/Nike Court Zoom Vapor Cage 4 Rafa/Nike Court Zoom Vapor Cage 4 Rafa 1.webp',
      '/images/Nike Court Zoom Vapor Cage 4 Rafa/Nike Court Zoom Vapor Cage 4 Rafa 2.webp',
      '/images/Nike Court Zoom Vapor Cage 4 Rafa/Nike Court Zoom Vapor Cage 4 Rafa 3.webp',
      '/images/Nike Court Zoom Vapor Cage 4 Rafa/Nike Court Zoom Vapor Cage 4 Rafa 4.jpg',
    ],
    brand: 'Nike',
    category: 'men',
    regularPrice: 189.79,
    discountedPrice: 169.99,
    countInStock: 6,
  },
  {
    // _id: 2,
    name: 'Air Jordan 1 Zoom Cmft',
    description:
      'Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.',
    images: [
      '/images/Air Jordan 1 Zoom Cmft/Air Jordan 1 Zoom Cmft 1.webp',
      '/images/Air Jordan 1 Zoom Cmft/Air Jordan 1 Zoom Cmft 2.webp',
      '/images/Air Jordan 1 Zoom Cmft/Air Jordan 1 Zoom Cmft 3.webp',
      '/images/Air Jordan 1 Zoom Cmft/Air Jordan 1 Zoom Cmft 4.webp',
    ],
    brand: 'Nike',
    category: 'men',
    regularPrice: 209.79,
    discountedPrice: 199.79,
    countInStock: 12,
  },
  {
    // _id: 3,
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    images: [
      "/images/Nike Air Force 1 '07/Nike Air Force 1 '07 1.webp",
      "/images/Nike Air Force 1 '07/Nike Air Force 1 '07 2.webp",
      "/images/Nike Air Force 1 '07/Nike Air Force 1 '07 3.webp",
      "/images/Nike Air Force 1 '07/Nike Air Force 1 '07 4.webp",
    ],
    brand: 'Nike',
    category: 'men',
    regularPrice: 129.79,
    discountedPrice: 89.99,
    countInStock: 7,
  },
  {
    // _id: 4,
    name: 'Nike Air Rift',
    description:
      "Bring a new look into this summer with the Nike Air Rift. Hook-and-loop straps let you easily slide into breezy comfort while a split-toe design brings back textured details from the '96 original. Nike Air cushioning in the heel and a plush foam midsole give you a soft and light feel, keeping you ready for what's on the horizon. Speckled Nike Grind rubber outsole contains at least 5% recycled content, bringing you durable traction with a dash of colour.",
    images: [
      '/images/Nike Air Rift/Nike Air Rift 1.webp',
      '/images/Nike Air Rift/Nike Air Rift 2.webp',
      '/images/Nike Air Rift/Nike Air Rift 3.webp',
      '/images/Nike Air Rift/Nike Air Rift 4.jpg',
    ],
    brand: 'Nike',
    category: 'women',
    regularPrice: 159.99,
    countInStock: 9,
  },
  {
    // _id: 5,
    name: 'Nike Cortez SP',
    description:
      "One word: tradition. From heritage running to fashion phenom, the Nike Cortez's retro appeal, sponge-soft midsole and sawtooth detailing deliver classic comfort decade after decade. Plus, the Union branding showcased throughout seals the deal.",
    images: [
      '/images/Nike Cortez SP/Nike Cortez SP 1.jpg',
      '/images/Nike Cortez SP/Nike Cortez SP 2.webp',
      '/images/Nike Cortez SP/Nike Cortez SP 3.jpg',
      '/images/Nike Cortez SP/Nike Cortez SP 4.webp',
    ],
    brand: 'Nike',
    category: 'women',
    regularPrice: 179.99,
    countInStock: 3,
  },
  {
    // _id: 6,
    name: 'Nike Kawa',
    description:
      'The Nike Kawa Slide has a soft strap and plush cushioning for comfort that lasts all day.Hidden seams help prevent rubbing.',
    images: [
      '/images/Nike Kawa/Nike Kawa 1.webp',
      '/images/Nike Kawa/Nike Kawa 2.webp',
      '/images/Nike Kawa/Nike Kawa 3.webp',
      '/images/Nike Kawa/Nike Kawa 4.webp',
    ],
    brand: 'Nike',
    category: 'kids',
    regularPrice: 89.99,
    discountedPrice: 79.99,
    countInStock: 10,
  },
  {
    // _id: 7,
    name: 'Nike Air Max SYSTM',
    description:
      "Cassette mixtapes. Music videos on TV. Shopping centre arcades. The '80s were fun and wild! We're celebrating that wicked cool era with the Nike Air Max SYSTM. From the big and bold Air unit to design lines (inspired by our favourite throwback Air Max shoes), it's all about bringing back what's cool to a new generation.",
    images: [
      '/images/Nike Air Max SYSTM/Nike Air Max SYSTM 1.webp',
      '/images/Nike Air Max SYSTM/Nike Air Max SYSTM 2.webp',
      '/images/Nike Air Max SYSTM/Nike Air Max SYSTM 3.webp',
      '/images/Nike Air Max SYSTM/Nike Air Max SYSTM 4.webp',
    ],
    brand: 'Nike',
    category: 'kids',
    regularPrice: 149.99,
    countInStock: 5,
  },
  {
    // _id: 8,
    name: 'Air Jordan 5 Retro',
    description:
      "Put some spring in your step with the AJ5, wrapped in an all-over speckle print inspired by Easter eggs. It's got Air cushioning underfoot and lots of iconic details from the original—peep the midfoot mesh panel, lace toggle and classic bump-out collar.",
    images: [
      '/images/Air Jordan 5 Retro/Air Jordan 5 Retro 1.webp',
      '/images/Air Jordan 5 Retro/Air Jordan 5 Retro 2.webp',
      '/images/Air Jordan 5 Retro/Air Jordan 5 Retro 3.webp',
      '/images/Air Jordan 5 Retro/Air Jordan 5 Retro 4.webp',
    ],
    brand: 'Nike',
    category: 'kids',
    regularPrice: 189.99,
    discountedPrice: 169.79,
    countInStock: 11,
    featured: true,
    banner: {
      desktop:
        '/images/Air Jordan 5 Retro/Air Jordan 5 Retro Banner desktop.png',
      mobile: '/images/Air Jordan 5 Retro/Air Jordan 5 Retro Banner mobile.png',
    },
  },
  {
    // _id: 9,
    name: 'Nike Air Max Bella TR 5 Premium',
    description:
      'The Nike Air Max Bella TR 5 Premium combines the bounce and beauty of Max Air cushioning with a flat sole that lends a stabilising advantage while you tone and sculpt with weight. This updated design increases the containment and support around the sides and top of your foot to help keep you steady on your feet and secure during demanding strength workouts.',
    images: [
      '/images/Nike Air Max Bella TR 5 Premium/Nike Air Max Bella TR 5 Premium 1.webp',
      '/images/Nike Air Max Bella TR 5 Premium/Nike Air Max Bella TR 5 Premium 2.webp',
      '/images/Nike Air Max Bella TR 5 Premium/Nike Air Max Bella TR 5 Premium 3.webp',
      '/images/Nike Air Max Bella TR 5 Premium/Nike Air Max Bella TR 5 Premium 4.webp',
    ],
    brand: 'Nike',
    category: 'women',
    regularPrice: 169.79,
    countInStock: 21,
  },
  {
    // _id: 10,
    name: 'Nike Air Vortex',
    description:
      'A deep blue mesh and suede covers the toe box, heel and eyestay, leaving the neutrals to take over the quarter portion of the shoe. Brown nylon comprises the base of the side panels, while the overlaying Swoosh is made up of a light beige leather. The tan shade further seeps onto the heel tab, which is contrasted by the “NIKE AIR” logo in blue. Clean white laces, a white tongue and a gum outsole finish off the style with a streamlined aesthetic.',
    images: [
      '/images/Nike Air Vortex/Nike Air Vortex 1.jpg',
      '/images/Nike Air Vortex/Nike Air Vortex 2.jpg',
      '/images/Nike Air Vortex/Nike Air Vortex 3.jpg',
      '/images/Nike Air Vortex/Nike Air Vortex 4.jpg',
    ],
    brand: 'Nike',
    category: 'kids',
    regularPrice: 219.79,
    discountedPrice: 129.99,
    countInStock: 2,
    featured: true,
    banner: {
      desktop: '/images/Nike Air Vortex/Nike Air Vortex Banner desktop.png',
      mobile: '/images/Nike Air Vortex/Nike Air Vortex Banner mobile.png',
    },
  },
  {
    // _id: 11,
    name: 'Nike Air Max 270',
    description:
      "The Nike Air Max 270 combines the exaggerated tongue from the Air Max 180 and classic elements from the Air Max 93. It features Nike's biggest heel Air unit yet for a soft ride that feels as impossible as it looks.",
    images: [
      '/images/Nike Air Max 270/Nike Air Max 270 1.webp',
      '/images/Nike Air Max 270/Nike Air Max 270 2.webp',
      '/images/Nike Air Max 270/Nike Air Max 270 3.webp',
      '/images/Nike Air Max 270/Nike Air Max 270 4.webp',
    ],
    brand: 'Nike',
    category: 'kids',
    regularPrice: 169.79,
    discountedPrice: 129.99,
    countInStock: 11,
    featured: true,
    banner: {
      desktop: '/images/Nike Air Max 270/Nike Air Max 270 Banner desktop.png',
      mobile: '/images/Nike Air Max 270/Nike Air Max 270 Banner mobile.png',
    },
  },
];

module.exports = { products };
