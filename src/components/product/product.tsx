import { ButtonDelete } from '../button-delete/button-delete';
import { Count } from '../count/count';
import './style.scss';

const Product = () => {
  return (
    <section className="product">
      <div className="product__img">
        <img
          src="./img/products/apple-macBook.svg"
          alt="Apple MacBook Air 13"
        />
      </div>
      <div className="product__title">Apple MacBook Air 13</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">110 000 руб.</div>
      <ButtonDelete />
    </section>
  );
};

export { Product };
