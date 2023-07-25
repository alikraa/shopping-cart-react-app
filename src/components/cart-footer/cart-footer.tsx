import { CartFooterProps } from '../../ts/interfaces';
import { priceFormatter } from '../../ts/view';
import './style.scss';

const CartFooter = ({ totalItems, totalPrice }: CartFooterProps) => {
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{totalItems} единицы</div>
      <div className="cart-footer__price">
        {priceFormatter.format(totalPrice)} руб.
      </div>
    </footer>
  );
};

export { CartFooter };
