import { CartFooterProps } from '../../ts/interfaces';
import { priceFormatter, declension } from '../../ts/view';
import './style.scss';

const CartFooter = ({ totalItems, totalPrice }: CartFooterProps) => {
  const resultDeclension = declension(
    totalItems,
    'единица',
    'единицы',
    'единиц'
  );

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">
        {totalItems} {resultDeclension}
      </div>
      <div className="cart-footer__price">
        {priceFormatter.format(totalPrice)} руб.
      </div>
    </footer>
  );
};

export { CartFooter };
