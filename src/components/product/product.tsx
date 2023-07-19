import { ButtonDelete } from '../button-delete/button-delete';
import { Count } from '../count/count';
import { ProductProps } from '../../ts/interfaces';
import './style.scss';

const Product = ({ id, image, title, price, deleteProduct }: ProductProps) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src={image} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">{price.toLocaleString('ru')} руб.</div>
      <ButtonDelete handleClick={deleteProduct} id={id} />
    </section>
  );
};

export { Product };
