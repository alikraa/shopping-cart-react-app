import { CountProps } from '../../ts/interfaces';
import './style.scss';

const Count = ({ id, count, handleClickUp, handleClickDown }: CountProps) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => handleClickUp(id)}
        >
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => handleClickDown(id)}
        >
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

export { Count };
