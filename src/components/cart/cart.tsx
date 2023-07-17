import { CartFooter } from '../cart-footer/cart-footer';
import { CartHeader } from '../cart-header/cart-header';
import { Product } from '../product/product';

const Cart = () => {
  return (
    <section className="cart">
      <CartHeader />
      <Product />
      <CartFooter />
    </section>
  );
};

export { Cart };
