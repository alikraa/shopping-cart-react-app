import { useState } from 'react';
import { CartFooter } from '../cart-footer/cart-footer';
import { CartHeader } from '../cart-header/cart-header';
import { Product } from '../product/product';
import { products } from '../../ts/products-data';

const Cart = () => {
  const [data, setData] = useState(products);

  const deleteProduct = (id: number) =>
    setData((prev) => prev.filter((item) => item.id !== id));

  const increase = (id: number) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: (item.count += 1),
            priceTotal: item.count * item.price,
          };
        }
        return item;
      })
    );
  };

  const decrease = (id: number) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count > 1 ? (item.count -= 1) : 1,
            priceTotal: item.count > 1 ? item.count * item.price : item.price,
          };
        }
        return item;
      })
    );
  };

  const changeValue = (id: number, value: string) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: Number(value),
            priceTotal: Number(value) * item.price,
          };
        }
        return item;
      });
    });
  };

  return (
    <section className="cart">
      <CartHeader />
      {data.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          image={item.img}
          title={item.title}
          priceTotal={item.priceTotal}
          count={item.count}
          deleteProduct={deleteProduct}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />
      ))}
      <CartFooter />
    </section>
  );
};

export { Cart };
