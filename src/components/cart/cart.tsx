import { useState } from 'react';
import { CartFooter } from '../cart-footer/cart-footer';
import { CartHeader } from '../cart-header/cart-header';
import { Product } from '../product/product';
import { products } from '../../ts/products-data';

const Cart = () => {
  const [data, setData] = useState(products);

  return (
    <section className="cart">
      <CartHeader />
      {data.map((item) => (
        <Product
          key={item.id}
          image={item.img}
          title={item.title}
          price={item.price}
        />
      ))}
      <CartFooter />
    </section>
  );
};

export { Cart };
