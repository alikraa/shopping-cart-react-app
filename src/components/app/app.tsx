import { Title } from '../title/title';
import { Cart } from '../cart/cart';
import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_section-cart.scss';

function App() {
  return (
    <>
      <section className="section-cart">
        <header className="section-cart__header">
          <div className="container">
            <Title />
          </div>
        </header>
        <div className="section-cart__body">
          <div className="container">
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
}

export { App };
