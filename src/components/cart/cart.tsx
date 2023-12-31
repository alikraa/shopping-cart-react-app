import { useEffect, useState } from 'react';
import { CartFooter } from '../cart-footer/cart-footer';
import { CartHeader } from '../cart-header/cart-header';
import { Product } from '../product/product';
import { products, totalElements } from '../../ts/products-data';

const Cart = () => {
  const [data, setData] = useState(products);
  const [total, setTotal] = useState(totalElements);

  useEffect(() => {
    setTotal((cart) => {
      return {
        ...cart,
        price: data.reduce((prev, curr) => prev + curr.priceTotal, 0),
        items: data.reduce((prev, curr) => prev + curr.count, 0),
      };
    });
  }, [data]);

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
      <CartFooter totalItems={total.items} totalPrice={total.price} />
    </section>
  );
};

export { Cart };
