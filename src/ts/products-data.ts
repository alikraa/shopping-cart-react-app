export const products = [
  {
    id: 1,
    img: './img/products/apple-macBook.svg',
    title: 'Apple MacBook Air 13',
    count: 1,
    price: 110000,
    priceTotal: 110000,
  },
  {
    id: 2,
    img: './img/products/apple-watch.svg',
    title: 'Apple Watch',
    count: 1,
    price: 29000,
    priceTotal: 29000,
  },
  {
    id: 3,
    img: './img/products/mac-pro.svg',
    title: 'Mac Pro',
    count: 1,
    price: 190000,
    priceTotal: 190000,
  },
];

export const totalElements = {
  price: products.reduce((prev, curr) => prev + curr.priceTotal, 0),
  items: products.reduce((prev, curr) => prev + curr.count, 0),
};
